// its-only-rock.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

// import cypress = require("cypress");

describe("Given the its-only-rock-n-roll app", () => {
  describe("When a test user visits the homepage", () => {
    it("Then the should see the loginPage", () => {
      cy.visit("");

      cy.get("input:first")
        .should("have.attr", "placeholder", "username")
        .type("Bilbo");
      cy.get("input:last")
        .should("have.attr", "placeholder", "password")
        .type("Bilbo");
      cy.get("button").click();
    });
  });
});
