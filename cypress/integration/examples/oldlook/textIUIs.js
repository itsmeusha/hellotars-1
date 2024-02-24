/// <reference types="Cypress" />
import '../../../support/oldlookcmds/commands';
import "cypress-xpath";

describe("ChatBot REGRESSION - ONE", function () {

    before(function () {

        cy.fixture('textIUIdata').then(function (data) {
            this.data = data
        })

        // <--- LANDING PAGE - CHATBOT --->
        cy.visit(Cypress.env('url1textIUI'));
    })


    it("All Input UIs", function () {

        // cy.visit("https://chatbot.hellotars.com/conv/PtWInW/#");

        cy.placeHolder().type(this.data.Name);
        cy.clickSendButton();
        cy.wait(100);

        // <--- TEXT INPUT UI --->
        // Name
        cy.placeHolder().type(this.data.Name);
        cy.clickSendButton();
        // Full Name
        cy.placeHolder().type(this.data.FullName);
        cy.clickSendButton();
        // Email
        cy.placeHolder().type(this.data.Email);
        cy.clickSendButton();
        // Mobile Number
        cy.placeHolder().type(this.data.MblNo6Digit);
        cy.clickSendButton();
        // 10-digits
        cy.placeHolder().type(this.data.MblNo10Digit);
        cy.clickSendButton();
        // Address
        cy.placeHolder().type(this.data.Address);
        cy.clickSendButton();
        // Password
        cy.placeHolder().type(this.data.Password);
        cy.clickSendButton();
        // Custom text
        cy.placeHolder().type(this.data.CustomText);
        cy.clickSendButton();

        // <--- STAR RATING IUI --->
        // star rating 1:
        cy.get(".rating-container");
        // Set the width of the star rating element to 50%
        cy.displayStars().invoke("attr", "style", "width: 50%").click();
        cy.wait(100);
        cy.clickSendButton();

        // star rating 2:
        cy.displayStars().invoke("attr", "style", "width: 80%").click();
        cy.wait(100);
        cy.clickSendButton();

        // star rating 3:
        cy.displayStars().invoke("attr", "style", "width: 30%").click();
        cy.wait(100);
        cy.clickSendButton();

        // star rating 4:
        cy.displayStars().invoke("attr", "style", "width: 100%").click();
        cy.wait(100);
        cy.clickSendButton();

        // <--- AUTO-SUGGESTION IUI --->
        // week
        cy.week().click();
        cy.clickSendButton();

        //month
        cy.month().click();
        cy.clickSendButton();

        // TimeZone
        cy.timeZone().click();
        cy.clickSendButton();

        // Continents
        cy.continents().click();
        cy.clickSendButton();

        // US States
        cy.usStates().click();
        cy.clickSendButton();

        // Indian states
        cy.indianStates().click();
        cy.clickSendButton();

        // Indian cities
        cy.indianCities().click();
        cy.clickSendButton();

        // Custom list
        cy.customList().click();
        cy.clickSendButton();

        // <--- CALENDAR IUI --->
        cy.clickCalendar();
        cy.wait(100);
        cy.selectToday();
        cy.clickTime();
        cy.wait(100);
        cy.selectFirstTimeSlot();
        cy.clickSendButton();

        // <--- DATE SCROLLER IUI --->
        cy.xpath("(//div[contains(@role,'option')])[140]").click();
        cy.clickSendButton();

        // <--- TIME SCROLLER IUI --->
        cy.get("div[aria-label=' '] div:nth-child(41)").click();
        cy.clickSendButton();

        // <--- BUTTONS IUI --->
        cy.xpath("//div[@id='snackbar-container']").should('be.visible');
        cy.xpath("(//div[@class='media-body va_basline'])[2]").click();

        // <--- MEDIA UPLOAD IUI --->
        cy.get('input[type="file"]').attachFile('images/dummy.png');
        cy.clickSendButton();

        // <--- CARD IUI --->
        cy.wait(200);
        cy.xpath("(//div[@class='card-main'])[2]").click();

        // <--- MAP IUI --->
        cy.wait(9000);
        cy.get('.inputMessage').invoke('removeAttr', 'disabled');
        cy.wait(1000);
        cy.get('.inputMessage').type('{enter}');

        // <--- AUTOSUGGEST LOCATION IUI --->
        cy.autosuggestLocation('Jai');

        cy.get('input[placeholder="Type here…"]', { timeout: 40000 }).should('be.enabled');
        cy.placeHolder().type(this.data.Name);
        cy.clickSendButton();

    });

    after(function () {
        cy.log("Test suite completed. Closing the test suite.");
    })
      
});
