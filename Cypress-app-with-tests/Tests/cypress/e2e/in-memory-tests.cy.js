describe("in-memory-tests", () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit("https://localhost:5001/");
  });

  it("create-game", () => {
    cy.get('[data-test="create-game"]').click();
    cy.get('input[name="Title"]').type("ATH Game");
    cy.get('input[name="PublishingCompany"]').type("ATH Entertainment");
    cy.get('input[name="MinPlayers"]').type("2");
    cy.get('input[name="MaxPlayers"]').type("10");
    cy.get('select[name="DifficultyLevel"]').select("Mid");
    cy.get('input[type="submit"]').click();

    cy.get('[data-testing="table"] tbody tr:last-child td:first-child').should(
      "contain.text",
      "ATH Game"
    );
  });

  it("edit-game", () => {
    cy.get(
      '[data-testing="table"] tbody tr:last-child [data-testing="open-game"]'
    ).click();

    cy.get('input[name="Title"]').clear().type("ATH Game Edited");
    cy.get('input[type="submit"]').click();

    cy.get('[data-testing="table"] tbody tr:last-child td:first-child').should(
      "contain.text",
      "ATH Game Edited"
    );
  });

  it("remove-game", () => {
    cy.get(
      '[data-testing="table"] tbody tr:last-child [data-testing="delete-game"] > input[type="submit"]'
    ).click();

    cy.get('[data-testing="table"] tbody tr:last-child td:first-child').should(
      "contain.text",
      "Sequence"
    );
  });
});
