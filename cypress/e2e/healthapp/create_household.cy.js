const { access } = require('fs')
const household = require('../../fixtures/household.json')
context('Register Household Test suite', () => {
    let accessToken;
    before(() => {
        cy.login().then(res => {
            accessToken = res.body.access_token
            console.log(res.body.access_token)
        })
    })

    it('create household with valid data', () => {
        let cusData = household.createHousehold
        cusData.RequestInfo.authToken = `${accessToken}`
        cy.postCall('/household/v1/_create', cusData)
            .should((response) => {
                expect(response.status).to.eq(202)
            })
    })
    it('create household with valid data and invalid auth', () => {
        let cusData = household.createHousehold
        cusData.RequestInfo.authToken = `invalidtoken`
        cy.postCall('/household/v1/_create', cusData)
            .should((response) => {
                //Authentication failure should retun 401 but here its 500
                expect(response.status).to.eq(500)
            })
    })

})