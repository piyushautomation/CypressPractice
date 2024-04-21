describe('Navigation Test', () => {

    it('Naviation command test 1', () => {
      cy.visit('https://demo.nopcommerce.com')
      cy.get("img[title='Show products in category Electronics']").click()
      cy.get("h2[class='title'] a[title='Show products in category Camera & photo']").should('be.visible')
      cy.go(-1)
      cy.get("img[title='Show products in category Electronics']").should('be.visible')
      cy.go(1)
      cy.get("h2[class='title'] a[title='Show products in category Camera & photo']").should('be.visible')
      cy.reload()
    })
  
  
    it('Naviation command test 2', () => {
        cy.visit('https://demo.nopcommerce.com')
        cy.get("img[title='Show products in category Electronics']").click()
        cy.get("h2[class='title'] a[title='Show products in category Camera & photo']").should('be.visible')
        cy.go('back')
        cy.get("img[title='Show products in category Electronics']").should('be.visible')
        cy.go('forward')
        cy.get("h2[class='title'] a[title='Show products in category Camera & photo']").should('be.visible')
        cy.reload()
      })
    
  
  })