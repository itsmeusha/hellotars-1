/// <reference types="Cypress" />

import "cypress-xpath";

describe("ChatBot REGRESSION - ONE", function () {
    it("Text Input UI", function () {

        // <--- LANDING PAGE - CHATBOT --->
        cy.visit(Cypress.env('url1')+"/angularpractice/")
       // cy.visit("https://chatbot.hellotars.com/conv/PtWInW/#");

        cy.xpath("//input[@placeholder='Type here…']").type("Name");
        cy.xpath("(//i[@id='send_button_icon'])[1]").click();
        cy.wait(100);

        // <--- TEXT INPUT UI --->
        // Name
        cy.xpath("//input[@placeholder='Type here…']").type("Name");
        cy.xpath("(//i[@id='send_button_icon'])[1]").click();
        // Full Name
        cy.xpath("//input[@placeholder='Type here…']").type("Full Name");
        cy.xpath("(//i[@id='send_button_icon'])[1]").click();
        // Email
        cy.xpath("//input[@placeholder='Type here…']").type("name@gmail.com");
        cy.xpath("(//i[@id='send_button_icon'])[1]").click();
        // Mobile Number
        cy.xpath("//input[@placeholder='Type here…']").type("123456");
        cy.xpath("(//i[@id='send_button_icon'])[1]").click();
        // 10-digits
        cy.xpath("//input[@placeholder='Type here…']").type("1234567890");
        cy.xpath("(//i[@id='send_button_icon'])[1]").click();
        // Address
        cy.xpath("//input[@placeholder='Type here…']").type("Address here");
        cy.xpath("(//i[@id='send_button_icon'])[1]").click();
        // Password
        cy.xpath("//input[@placeholder='Type here…']").type("password123");
        cy.xpath("(//i[@id='send_button_icon'])[1]").click();
        // Custom text
        cy.xpath("//input[@placeholder='Type here…']").type("Custom Text");
        cy.xpath("(//i[@id='send_button_icon'])[1]").click();


        // <--- STAR RATING IUI --->
        // star rating 1:
        cy.get(".rating-container");
        // Set the width of the star rating element to 50%
        cy.xpath("//div[@class='rating-stars']").invoke("attr", "style", "width: 50%").click();
        cy.wait(100);
        cy.xpath("//i[@id='send_button_icon']").click();

        // star rating 2:
        cy.xpath("//div[@class='rating-stars']").invoke("attr", "style", "width: 80%").click();
        cy.wait(100);
        cy.xpath("//i[@id='send_button_icon']").click();

        // star rating 3:
        cy.xpath("//div[@class='rating-stars']").invoke("attr", "style", "width: 30%").click();
        cy.wait(100);
        cy.xpath("//i[@id='send_button_icon']").click();

        // star rating 4:
        cy.xpath("//div[@class='rating-stars']").invoke("attr", "style", "width: 100%").click();
        cy.wait(100);
        cy.xpath("//i[@id='send_button_icon']").click();

        // <--- AUTO-SUGGESTION IUI --->
        // week
        cy.xpath("//li[@value='{\"name\":\"Thursday\"}']").click();
        cy.xpath("//i[@id='send_button_icon']").click();

        //month
        cy.xpath("//li[@value='{\"name\":\"April\"}']").click();
        cy.xpath("//i[@id='send_button_icon']").click();

        // TimeZone
        cy.xpath("//li[@value='{\"name\":\"(-11:00) Midway Island, Samoa(-10:00) Hawaii\"}']").click();
        cy.xpath("//i[@id='send_button_icon']").click();

        // Continents
        cy.xpath("//li[@value='{\"name\":\"Australia\"}']").click();
        cy.xpath("//i[@id='send_button_icon']").click();

        // US States
        cy.xpath("//li[@value='{\"name\":\"Alaska\"}']").click();
        cy.xpath("//i[@id='send_button_icon']").click();

        // Indian states
        cy.xpath("//li[@value='{\"name\":\"Haryana\"}']").click();
        cy.xpath("//i[@id='send_button_icon']").click();

        // Indian cities
        cy.xpath("//li[@value='{\"name\":\"Chittoor\"}']").click();
        cy.xpath("//i[@id='send_button_icon']").click();

        // Custom list
        cy.xpath("//li[@value='{\"name\":\"Suggestion Option Text\"}']").click();
        cy.xpath("//i[@id='send_button_icon']").click();

        // <--- CALENDAR IUI --->
        cy.xpath("//a[normalize-space()='Calendar']").click();
        cy.xpath("//div[contains(@aria-label, 'Today')]").click({ multiple: true, force: true });
        cy.xpath("//a[normalize-space()='Time']").click();
        cy.xpath("//div[@class='time_slot_wrap']/span[1]").click();
        cy.xpath("//i[@id='send_button_icon']").click();

        // <--- DATE SCROLLER IUI --->
        cy.xpath("(//div[contains(@role,'option')])[140]").click();
        cy.xpath("//i[@id='send_button_icon']").click();

        // <--- TIME SCROLLER IUI --->
        cy.get("div[aria-label=' '] div:nth-child(41)").click();
        cy.xpath("//i[@id='send_button_icon']").click();

        // <--- BUTTONS IUI --->
        cy.xpath("//div[@id='snackbar-container']").should('be.visible');
        cy.xpath("(//div[@class='media-body va_basline'])[2]").click();

        // <--- MEDIA UPLOAD IUI --->
        cy.get('input[type="file"]').attachFile('images/dummy.png');
        cy.xpath("//i[@id='send_button_icon']").click();

        // <--- CARD IUI --->
        cy.wait(200);
        cy.xpath("(//div[@class='card-main'])[2]").click();

        // <--- MAP IUI --->
        cy.wait(9000);
        cy.get('.inputMessage').invoke('removeAttr', 'disabled');
        cy.wait(500);
        cy.get('.inputMessage').type('{enter}');

        // <--- AUTOSUGGEST LOCATION IUI --->
        cy.get('input[placeholder="Type here…"]').type('Banga');
        cy.get('.pac-container').should('exist');
        cy.get('input[placeholder="Type here…"]').click();
        cy.wait(200);
        cy.get('.pac-container').should('be.visible');
        cy.get('.pac-item').first().click({ force: true });
        cy.get('i#send_button_icon').click();


        // SKIP FUNCTIONALITY
        it("Skip functionality for all IUI", function () {
            
            


            

        })









    });
});
