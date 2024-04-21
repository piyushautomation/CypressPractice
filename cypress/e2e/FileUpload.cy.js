

describe('File Upload Test',function(){

    it('Single File Upload',function(){
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile('Test1.txt')
        cy.get('#file-submit').click()
        cy.get("div[class='example'] h3").should('have.text','File Uploaded!')
    })

    it('Single File Upload - Rename',function(){
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile({filePath:'Test1.txt',fileName:'my txt file'})
        cy.get('#file-submit').click()
        cy.get("div[class='example'] h3").should('have.text','File Uploaded!')
    })

    it('File Upload - Drag and Drop',function(){
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#drag-drop-upload').attachFile('Test1.txt',{subjectType:'drag-n-drop'})
        cy.get('#file-submit').click()
    })

    it.only('Multiple File Upload',function(){
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('#filesToUpload').attachFile(['Test1.txt','Test2.txt'])
    })
    
})