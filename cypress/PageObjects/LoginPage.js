export class Login{


    locate_username = "#input-username"
    locate_password = "#input-password"
    locate_submitBtn = "button[type='submit']"

    setUserName(username_text)
    {
        cy.get(this.locate_username).type(username_text)
    }

    setPassword(password_text)
    {
        cy.get(this.locate_password).type(password_text)
    }

    clickSubmitButton()
    {
        cy.get(this.locate_submitBtn).click()
    }

}