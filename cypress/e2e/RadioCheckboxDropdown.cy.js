describe('Radio CheckBox and Dropdown Test', () => {

    it('CSS Selectors Test', () => {
        cy.visit('https://demo.nopcommerce.com')

        cy.get(".ico-register").click()
        cy.get("#gender-male").check().should('be.checked')         //radio
        cy.get("#gender-female").should('not.be.checked')
        cy.get("#FirstName").type("Piyush")
        cy.get("#LastName").type("Agrawal")
        cy.get("select[name='DateOfBirthDay']").select("23")       // dropdown
        cy.get("select[name='DateOfBirthMonth']").select("12")
        cy.get("select[name='DateOfBirthYear']").select("1995")
        cy.get("#Email").type("piyush23456agr@gmail.com")
        cy.get("#Company").type("Demo Company")
        cy.get("#Newsletter").uncheck().should('not.be.checked')      // checkbox
        cy.get("#Password").type("Test1234")
        cy.get("#ConfirmPassword").type("Test1234")
        cy.get("#register-button").click()
        cy.get(".result").should('have.text',"Your registration completed")
    })

})