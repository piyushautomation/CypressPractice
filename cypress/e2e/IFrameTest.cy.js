describe('Example to demonstrate the handling of new browser windows in cypress', () => {

    it('Handling Iframe', function () {

    cy.visit('https://iframetester.com/?url=https://www.lambdatest.com/blog')
    cy.wait(5000)
    //let's test iframe
    cy.get('#iframe-window')
        .should('be.visible')
        .should('not.be.empty')
        .then((iframe) => {
            const body = iframe.contents().find('body')

            cy.wrap(body)
                .find(`input[name='s']`)
                .type('Cypress{enter}')

        })
    })

})