describe('First attempt of Hellotars webpage', function(){

    it('Visit the URL', function(){


        cy.visit(Cypress.env('url3'))
        // cy.visit('https://hellotars.com/');

        cy.get('a[href="https://admin.hellotars.com/login"]').should('have.attr', 'target', '_blank').invoke('removeAttr', 'target');
        cy.get('#menu-item-2656 > a').click();
        

    });

    

});