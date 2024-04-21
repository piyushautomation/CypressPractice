describe('Handle Tables', function () {
    
    beforeEach('Login', function(){
    cy.visit('https://demo.opencart.com/admin/index.php')
    cy.get('#input-username').type('demo')
    cy.get('#input-password').type('demo')
    cy.get("button[type='submit']").click()

    cy.get('#modal-security > div > div > div.modal-header > button').click()

    cy.get(".parent.collapsed[href='#collapse-5']").click()
    cy.get("li[id='menu-customer'] li:nth-child(1) a:nth-child(1)").click()
    })


    it('Check No of Rows and Columns', function () {
        cy.get('#form-customer > div.table-responsive > table > tbody >tr').should('have.length','10')
        cy.get('#form-customer > div.table-responsive > table > thead>tr > td').should('have.length','7')
    })


    it('Check status of xvrt@test.com', function () {

            cy.get('tbody tr td:nth-child(3)').each(($elm, index, $list)=> {
                // text captured from column1
                const t = $elm.text();
                // matching criteria
                if (t.includes('xvrt@test.com')){
                   // next sibling captured
                   cy.get('tbody tr td:nth-child(4)')
                   .eq(index).next().then(function(d) {
                      // text of following sibling
                      const r = d.text()
                      //assertion
                      expect(r).to.contains('Enabled');
                   })
                }
             })        

   
    })




 });

