

describe('Mouse Operations Test',function(){

    it('MouseHover',function(){
        cy.visit('https://demo.opencart.com/')
        cy.get('.nav > :nth-child(1) > .nav-link.dropdown-toggle').trigger('mouseover').click()
        cy.get('li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1)').should('be.visible')
    })

    it('Right Click',function(){
        cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html')
        cy.get('.context-menu-one.btn.btn-neutral').trigger('contextmenu')
        cy.get('body > ul').should('be.visible')
    })

    it('Right Click with Right Click Method',function(){
        cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html')
        cy.get('.context-menu-one.btn.btn-neutral').rightclick()
        cy.get('body > ul').should('be.visible')
    })

    it.skip('Double Click',function(){
        cy.visit('URL')
        cy.get('.context-menu-one.btn.btn-neutral').trigger('dblclick')     //approach1
        cy.get('.context-menu-one.btn.btn-neutral').dblclick()            //approach2
        cy.get('body > ul').should('be.visible')
    })
    
    it('Drag and Drop',function(){
        cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
        cy.wait(2000)
        cy.get('#box6').drag('#box106',{ force: true })
        cy.get('#box106').click({ force: true })
    })

    it.only('Scroll till element',function(){
        cy.visit('https://www.tutorialspoint.com/index.htm')
        cy.get('.light-mode-item.h-60px').scrollIntoView({duration:2000})
    })



})