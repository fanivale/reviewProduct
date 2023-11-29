describe('[TC-01] Verify valid Review submission', () => {

  it('review product submission should be run properly', () => {

    //visit the review product page
    cy.visit('https://forms.office.com/pages/responsepage.aspx?id=is2XW8LLaEmfFhLKD9VwE9lpKmxdveNGmMWKETZvAWNUMzhBV1lYTlc1SDNRS00xRVg4OFhPODlQTS4u')

    //input valid review details
    cy.get('input[data-automation-id="textInput"]').eq(0).type('testting account')
    cy.get('input[data-automation-id="textInput"]').eq(1).type('081122334455')
    cy.get('div[data-automation-id="choiceItem"]').eq(0).click()
    cy.get('span[aria-label="4 Star"]').click()
    cy.get('input[id="DatePicker0-label"]').click()
    cy.get('button[aria-label="15, November, 2023"]').click()

    //submit review
    cy.get('button[data-automation-id="submitButton"]').click({ force: true })

    //assertion
    //cy.get('div[data-automation-id="thankYouMessage"]', { timeout: 10000 })
    //cy.get('div[data-automation-id="thankYouMessage"]').should('be.visible')
  })
})

describe('[TC-03] Verify review submission will be failed if mandatory field is empty', () => {
  it('Case 1: All mandatory field is empty', () => {
    //visit the review product page
    cy.visit('https://forms.office.com/pages/responsepage.aspx?id=is2XW8LLaEmfFhLKD9VwE9lpKmxdveNGmMWKETZvAWNUMzhBV1lYTlc1SDNRS00xRVg4OFhPODlQTS4u')

    //submit review
    cy.get('button[data-automation-id="submitButton"]').click()

    //assertion
    cy.get('div[data-automation-id="validationError"]').eq(0).should('contain','This question is required.')
    cy.get('div[data-automation-id="validationError"]').eq(1).should('contain','This question is required.')
    cy.get('div[data-automation-id="validationError"]').eq(2).should('contain','This question is required.')
    cy.get('div[data-automation-id="validationError"]').eq(3).should('contain','This question is required.')
    cy.get('div[data-automation-id="validationError"]').eq(4).should('contain','This question is required.')
    cy.get('div[data-automation-id="submitError"]').should('contain','5 question(s) need to be completed before submitting: Question 1,Question 2,Question 3,Question 4,Question 5.')
  })

  it('Case 2: Full name field is empty', () => {
    //visit the review product page
    cy.visit('https://forms.office.com/pages/responsepage.aspx?id=is2XW8LLaEmfFhLKD9VwE9lpKmxdveNGmMWKETZvAWNUMzhBV1lYTlc1SDNRS00xRVg4OFhPODlQTS4u')

    //input valid review details excepty full name
    cy.get('input[data-automation-id="textInput"]').eq(1).type('081122334455')
    cy.get('div[data-automation-id="choiceItem"]').eq(1).click()
    cy.get('span[aria-label="2 Star"]').click()
    cy.get('input[id="DatePicker0-label"]').click()
    cy.get('button[aria-label="20, November, 2023"]').click()

    //submit review
    cy.get('button[data-automation-id="submitButton"]').click({ force: true })

    //assertion
    cy.get('div[data-automation-id="validationError"]').eq(0).should('contain','This question is required.')
    cy.get('div[data-automation-id="submitError"]').should('contain','1 question(s) need to be completed before submitting: Question 1.')
  })

  it('Case 3: Phone Number field is empty', () => {
    //visit the review product page
    cy.visit('https://forms.office.com/pages/responsepage.aspx?id=is2XW8LLaEmfFhLKD9VwE9lpKmxdveNGmMWKETZvAWNUMzhBV1lYTlc1SDNRS00xRVg4OFhPODlQTS4u')

    //input valid review details excepty full name
    cy.get('input[data-automation-id="textInput"]').eq(0).type('testting account')
    cy.get('input[data-automation-id="textInput"]').eq(2).type('bad')
    cy.get('span[aria-label="3 Star"]').click()
    cy.get('input[id="DatePicker0-label"]').click()
    cy.get('button[aria-label="10, November, 2023"]').click()

    //submit review
    cy.get('button[data-automation-id="submitButton"]').click({ force: true })

    //assertion
    cy.get('div[data-automation-id="validationError"]').eq(0).should('contain','This question is required.')
    cy.get('div[data-automation-id="submitError"]').should('contain','1 question(s) need to be completed before submitting: Question 2.')
  })

  it('Case 4 : value of product or services is not selected', () => {
    //visit the review product page
    cy.visit('https://forms.office.com/pages/responsepage.aspx?id=is2XW8LLaEmfFhLKD9VwE9lpKmxdveNGmMWKETZvAWNUMzhBV1lYTlc1SDNRS00xRVg4OFhPODlQTS4u')

    //input valid review details excepty full name
    cy.get('input[data-automation-id="textInput"]').eq(0).type('testting account')
    cy.get('input[data-automation-id="textInput"]').eq(1).type('081122334455')
    cy.get('span[aria-label="5 Star"]').click()
    cy.get('input[id="DatePicker0-label"]').click()
    cy.get('button[aria-label="23, November, 2023"]').click()

    //submit review
    cy.get('button[data-automation-id="submitButton"]').click({ force: true })

    //assertion
    cy.get('div[data-automation-id="validationError"]').eq(0).should('contain','This question is required.')
    cy.get('div[data-automation-id="submitError"]').should('contain','1 question(s) need to be completed before submitting: Question 3.')
  })

  it('Case 5 : rating is empty', () => {
    //visit the review product page
    cy.visit('https://forms.office.com/pages/responsepage.aspx?id=is2XW8LLaEmfFhLKD9VwE9lpKmxdveNGmMWKETZvAWNUMzhBV1lYTlc1SDNRS00xRVg4OFhPODlQTS4u')

    //input valid review details excepty full name
    cy.get('input[data-automation-id="textInput"]').eq(0).type('testting account')
    cy.get('input[data-automation-id="textInput"]').eq(1).type('081122334455')
    cy.get('div[data-automation-id="choiceItem"]').eq(1).click()
    cy.get('input[id="DatePicker0-label"]').click()
    cy.get('button[aria-label="14, November, 2023"]').click()

    //submit review
    cy.get('button[data-automation-id="submitButton"]').click({ force: true })

    //assertion
    cy.get('div[data-automation-id="validationError"]').eq(0).should('contain','This question is required.')
    cy.get('div[data-automation-id="submitError"]').should('contain','1 question(s) need to be completed before submitting: Question 4.')
  })

  it('Case 6 : review date is empty', () => {
    //visit the review product page
    cy.visit('https://forms.office.com/pages/responsepage.aspx?id=is2XW8LLaEmfFhLKD9VwE9lpKmxdveNGmMWKETZvAWNUMzhBV1lYTlc1SDNRS00xRVg4OFhPODlQTS4u')

    //input valid review details excepty full name
    cy.get('input[data-automation-id="textInput"]').eq(0).type('testting account')
    cy.get('input[data-automation-id="textInput"]').eq(1).type('081122334455')
    cy.get('div[data-automation-id="choiceItem"]').eq(1).click()
    cy.get('span[aria-label="5 Star"]').click()

    //submit review
    cy.get('button[data-automation-id="submitButton"]').click({ force: true })

    //assertion
    cy.get('div[data-automation-id="validationError"]').eq(0).should('contain','This question is required.')
    cy.get('div[data-automation-id="submitError"]').should('contain','1 question(s) need to be completed before submitting: Question 5.')
  })

})

describe('[TC-04] Verify number and list of the blank field should be shown correctly on the error message', () => {
  it('Case1 : 2 mandatory fields is empty', () => {
    //visit the review product page
    cy.visit('https://forms.office.com/pages/responsepage.aspx?id=is2XW8LLaEmfFhLKD9VwE9lpKmxdveNGmMWKETZvAWNUMzhBV1lYTlc1SDNRS00xRVg4OFhPODlQTS4u')

    //input valid review details excepty full name
    cy.get('input[data-automation-id="textInput"]').eq(1).type('081122334455')
    cy.get('div[data-automation-id="choiceItem"]').eq(1).click()
    cy.get('span[aria-label="3 Star"]').click()

    //submit review
    cy.get('button[data-automation-id="submitButton"]').click()

    //assertion
    cy.get('div[data-automation-id="validationError"]').eq(0).should('contain','This question is required.')
    cy.get('div[data-automation-id="validationError"]').eq(1).should('contain','This question is required.')
    cy.get('div[data-automation-id="submitError"]').should('contain','2 question(s) need to be completed before submitting: Question 1,Question 5.')
  })

  it('Case2 : 3 mandatory fields is empty', () => {
    //visit the review product page
    cy.visit('https://forms.office.com/pages/responsepage.aspx?id=is2XW8LLaEmfFhLKD9VwE9lpKmxdveNGmMWKETZvAWNUMzhBV1lYTlc1SDNRS00xRVg4OFhPODlQTS4u')

    //input valid review details excepty full name
    cy.get('input[data-automation-id="textInput"]').eq(0).type('testing account')
    cy.get('input[id="DatePicker0-label"]').click()
    cy.get('button[aria-label="20, November, 2023"]').click()

    //submit review
    cy.get('button[data-automation-id="submitButton"]').click({ force: true })

    //assertion
    cy.get('div[data-automation-id="validationError"]').eq(0).should('contain','This question is required.')
    cy.get('div[data-automation-id="validationError"]').eq(1).should('contain','This question is required.')
    cy.get('div[data-automation-id="validationError"]').eq(2).should('contain','This question is required.')
    cy.get('div[data-automation-id="submitError"]').should('contain','3 question(s) need to be completed before submitting: Question 2,Question 3,Question 4.')
  })

})

describe('[TC-05] Verify selected date is run properly', () => {

  it('Case 1 : select date on calendar pop-up', () => {

    //visit the review product page
    cy.visit('https://forms.office.com/pages/responsepage.aspx?id=is2XW8LLaEmfFhLKD9VwE9lpKmxdveNGmMWKETZvAWNUMzhBV1lYTlc1SDNRS00xRVg4OFhPODlQTS4u')

    //input valid review details
    cy.get('input[id="DatePicker0-label"]').click()
    cy.get('button[aria-label="15, November, 2023"]').click()

  })

  it('Case 2 : input incorrect date manually', () => {

    //visit the review product page
    cy.visit('https://forms.office.com/pages/responsepage.aspx?id=is2XW8LLaEmfFhLKD9VwE9lpKmxdveNGmMWKETZvAWNUMzhBV1lYTlc1SDNRS00xRVg4OFhPODlQTS4u')

    //input valid review details
    cy.get('input[id="DatePicker0-label"]').click()
    cy.get('input[id="DatePicker0-label"]').type('12.13.23')

    //assertion
    cy.get('div[data-automation-id="validationError"]').eq(0).should('contain','Error')

  })

  it('Case 3 : input correct date manually', () => {

    //visit the review product page
    cy.visit('https://forms.office.com/pages/responsepage.aspx?id=is2XW8LLaEmfFhLKD9VwE9lpKmxdveNGmMWKETZvAWNUMzhBV1lYTlc1SDNRS00xRVg4OFhPODlQTS4u')

    //input valid review details
    cy.get('input[id="DatePicker0-label"]').click()
    cy.get('input[id="DatePicker0-label"]').type('12/12/2023')

    //assertion
    //cy.get('div[data-automation-id="validationError"]').eq(0).should('not.exist')

  })
})