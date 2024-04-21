describe('Custom Commands Test', function () {

    it('Normal way', function () {
        cy.visit('https://demo.nopcommerce.com')
        cy.get("div[class='item-grid'] div:nth-child(2) div:nth-child(1) div:nth-child(2) h2:nth-child(1) a:nth-child(1)").click()
        cy.get("div[class='product-name'] h1").should('have.text','Apple MacBook Pro 13-inch')
        
    })

    it('Using Custom Commands way', function () {
        cy.visit('https://demo.nopcommerce.com')
        cy.clickLink('Apple MacBook Pro 13-inch')
        cy.get("div[class='product-name'] h1").should('have.text','Apple MacBook Pro 13-inch')
        
    })

})

