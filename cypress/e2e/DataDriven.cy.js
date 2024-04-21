describe('Handle Tables', function () {

    it('Login', function () {
        cy.visit('https://demo.opencart.com/admin/index.php')

        cy.fixture('LoginData').then((data)=> {
            cy.get('#input-username').type(data.username)
            cy.get('#input-password').type(data.password)
            cy.get("button[type='submit']").click()
        })
    })
})