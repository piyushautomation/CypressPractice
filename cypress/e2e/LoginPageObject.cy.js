import {Login} from '../PageObjects/LoginPage.js'

describe('POM Demo', function () {

    let userdata
    before(function () {
        cy.fixture('LoginData').then((data) => {
            userdata = data;
        })
    })


    it('Test case 1', function () {
        cy.visit('https://demo.opencart.com/admin/index.php')
        
        const ln = new Login();
        ln.setUserName(userdata.username)
        ln.setPassword(userdata.password)
        ln.clickSubmitButton()
    })
})
