// SKIP FUNCTIONALITY
it("Skip functionality for all IUI", function () {

    //cy.get('@textField').then(() => {
        // Perform actions using the stored state or element
        cy.clickSendButton();
     // });










// <--- TEXT INPUT UI --->
// Name
cy.clickSendButton();
// Full Name
cy.clickSendButton();
// Email
cy.clickSendButton();
// Mobile Number
cy.clickSendButton();
// 10-digits
cy.clickSendButton();
// Address
cy.clickSendButton();
// Password
cy.clickSendButton();
// Custom text
cy.clickSendButton();


// <--- STAR RATING IUI --->
// star rating 1:

// star rating 2:

// star rating 3:

// star rating 4:

// <--- AUTO-SUGGESTION IUI --->
// week

//month

// TimeZone

// Continents

// US States

// Indian states

// Indian cities

// Custom list

// <--- CALENDAR IUI --->

// <--- DATE SCROLLER IUI --->

// <--- TIME SCROLLER IUI --->

// <--- BUTTONS IUI --->

// <--- MEDIA UPLOAD IUI --->
cy.get('input[type="file"]').attachFile('images/dummy.png');
cy.clickSendButton();

// <--- CARD IUI --->

// <--- MAP IUI --->
cy.wait(9000);
cy.get('.inputMessage').invoke('removeAttr', 'disabled');
cy.wait(1000);
cy.get('.inputMessage').type('{enter}');

// <--- AUTOSUGGEST LOCATION IUI --->
cy.placeHolder().type('Banga');
cy.wait(100);
cy.get('.pac-container').should('be.visible');
cy.get('.pac-item').first().click({ force: true });
cy.get('i#send_button_icon').click();





})

