describe('Alerts Test', () => {

  it('Alert Box Test', () => {
    cy.visit('https://bootboxjs.com/examples.html')
    cy.get("button[data-bb-example-key='alert-default']").click({ force: true })
    cy.on('window:alert',(t)=>{
        expect(t).to.contains("This is the default alert!")
    }
    )
    cy.wait(500)
    cy.get("button[class='btn btn-primary bootbox-accept']").click()
  })

  it('Confirm Box Test', () => {
    cy.visit('https://bootboxjs.com/examples.html')
    cy.get("button[data-bb-example-key='confirm-default']").click({ force: true })
    cy.on('window:confirm',(t)=>{
        expect(t).to.contains("This is the default confirm.")
    }
    )
    cy.wait(500)
    cy.get("button[class='btn btn-primary bootbox-accept']").click()
  })

  it.only('Prmopt Box Test', () => {
    cy.visit('https://bootboxjs.com/examples.html')
    cy.get("button[data-bb-example-key='prompt-default']").click({ force: true })
    cy.on('window:confirm',(t)=>{
        expect(t).to.contains("This is the default prompt!")
    }
    )
    cy.wait(2000)
    cy.get("input[class='bootbox-input bootbox-input-text form-control']").type("Test")
    cy.get("button[class='btn btn-primary bootbox-accept']").click()
  })

})