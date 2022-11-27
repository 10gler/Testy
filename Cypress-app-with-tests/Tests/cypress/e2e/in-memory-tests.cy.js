describe("in-memory-tests", () => {
  beforeEach(() => {
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
      '[data-testing="table"] tbody tr:nth-last-child(2) td:first-child'
    ).then(($last) => {
      cy.get(
        '[data-testing="table"] tbody tr:last-child [data-testing="delete-game"] > input[type="submit"]'
      ).click();

      cy.get(
        '[data-testing="table"] tbody tr:last-child td:first-child'
      ).should("contain.text", $last.text());
    });
  });
});
