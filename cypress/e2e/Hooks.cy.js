//before - will execute only once before all the it blocks
//after - will execute only once after all the it blocks
//beforeEach - will always execute before all the it blocks
//afterEach - will always execute after all the it blocks


describe('Hooks  Test',function(){

    before(function(){
        cy.log('Launch the App')
    })


    beforeEach(function(){
        cy.log('Login to the App')
    })

    afterEach(function(){
        cy.log('Logout from the App')
    })

    after(function(){
        cy.log('Close the App')
    })

    it('Search',function(){
        cy.log('Search in Progress')
    })

    it('Advanced Search',function(){
        cy.log('Advanced Search in Progress')
    })

    it('Checkout',function(){
        cy.log('Checkout in Progress')
    })
})