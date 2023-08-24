
const individual = require('../../fixtures/individual.json')
context('Create Individual Test suite', () => {
    let accessToken;
    before(() => {
        cy.login().then(res => {
            accessToken = res.body.access_token
            console.log(res.body.access_token)
        })
    })

    it('Create Individual with valid data', () => {
        let cusData = individual.createIndividual
        cusData.RequestInfo.authToken = `${accessToken}`
        cy.postCall('/individual/v1/_create', cusData)
            .should((response) => {
                expect(response.status).to.eq(202)
                expect(response.body.Individual.individualId).contain("IND-2023")
            })
    })
    it('Create Individual with valid data and invalid auth', () => {
        let cusData = individual.createIndividual
        cusData.RequestInfo.authToken = `invalidtoken`
        cy.postCall('/household/v1/_create', cusData)
            .should((response) => {
                //Authentication failure should retun 401 but here its 500
                expect(response.status).to.eq(500)
            })
    })


})