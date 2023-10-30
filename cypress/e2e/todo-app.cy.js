/// <reference types="cypress" />

describe("template spec", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should have input field", () => {
    cy.getByDataSel("todo-input").should("exist");
  });
});
