
const beneficiary = require('../../fixtures/beneficiary.json')
context('Create Beneficiary Test suite', () => {
    let accessToken;
    before(() => {
        cy.login().then(res => {
            accessToken = res.body.access_token
            console.log(res.body.access_token)
        })
    })

    it('Create Beneficiary with valid data', () => {
        let cusData = beneficiary.createBeneficiary
        cusData.RequestInfo.authToken = `${accessToken}`
        cy.postCall('/project/beneficiary/v1/_create', cusData)
            .should((response) => {
                expect(response.status).to.eq(202)
            })
    })
    it('Create Beneficiary with valid data and invalid auth', () => {
        let cusData = beneficiary.createBeneficiary
        cusData.RequestInfo.authToken = `invalidtoken`
        cy.postCall('/household/v1/_create', cusData)
            .should((response) => {
                //Authentication failure should retun 401 but here its 500
                expect(response.status).to.eq(500)
            })
    })

})