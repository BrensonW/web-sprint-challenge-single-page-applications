describe('My Third Test', function(){
    it('Sees if I can write text', function () {
        cy.visit("http://localhost:3000/Pizza")
        cy.get('input[name="name"]').type('Hello World')
    })


})