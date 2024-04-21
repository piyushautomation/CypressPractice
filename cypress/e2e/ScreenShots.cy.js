describe('Navigation Test', () => {

    it('Screenshots test 1', () => {
      cy.visit('https://demo.nopcommerce.com')
      cy.get("img[title='Show products in category Electronics']").click()
      cy.get("h2[class='title'] a[title='Show products in category Camera & photo']").should('be.visible')
      cy.go(-1)
      cy.get("img[title='Show products in category Electronics']").should('not.be.visible')
      cy.go(1)
      cy.get("h2[class='title'] a[title='Show products in category Camera & photo']").should('be.visible')
      cy.reload()
    })
    

    // execute using below command to see screenshot in IDE
    // npx cypress run --spec cypress/e2e/ScreenShots.cy.js
  })