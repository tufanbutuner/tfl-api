describe('Initial tests', () => {
    it('Local server successfully loads', () => {
        cy.visit('/');
    })

    it('Great Portland Street station is displayed on load', () => {
        cy.contains('940GZZLUGPS')
    })

    it('Testing the API - GET data from station', () => {
        cy.request('https://api.tfl.gov.uk/StopPoint/940GZZLUGPS/arrivals?mode=tube').then((response) => {
        expect(response.status).to.eq(200)
        expect(response).to.have.property('headers')
        expect(response).to.have.property('body')
        })
    })

    it('Search for a station and display arrivals', () => {
        cy.findByRole('searchbox').type("Oxford Circus Underground Station")
        cy.findByText(/oxford circus underground station/i).click()
    })
})