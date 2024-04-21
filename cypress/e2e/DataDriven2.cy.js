describe('Handle Tables', function () {

    let userdata
    before(function () {
        cy.fixture('LoginData').then((data) => {
            userdata = data;
        })
    })


    it('Test case 1', function () {
        cy.visit('https://demo.opencart.com/admin/index.php')
        cy.get('#input-username').type(userdata.username)
        cy.get('#input-password').type(userdata.password)
        cy.get("button[type='submit']").click()

        cy.get('#modal-security > div > div > div.modal-header > button').click()
        cy.get(".parent.collapsed[href='#collapse-5']").click()
        cy.get("li[id='menu-customer'] li:nth-child(1) a:nth-child(1)").click()

    })

    it('Test case 2', function () {
        cy.visit('https://demo.opencart.com/admin/index.php')
        cy.get('#input-username').type(userdata.username)
        cy.get('#input-password').type(userdata.password)
        cy.get("button[type='submit']").click()

        cy.get('#modal-security > div > div > div.modal-header > button').click()
        cy.get(".parent.collapsed[href='#collapse-5']").click()
        cy.get("li[id='menu-customer'] li:nth-child(1) a:nth-child(1)").click()

    })
})
