describe('Edit Game form', () => {
	it('fill form inputs', () => {
		cy.visit('https://localhost:44330/')

		cy.get('a')
			.contains('Open')
			.first()
			.click()

		cy.get('#Title')
			.clear()
			.type('game 2')

		cy.get('#PublishingCompany')
			.clear()

			.type('game company 2')

		cy.get('#MinPlayers')
			.clear()

			.type('3')

		cy.get('#MaxPlayers')
			.clear()

			.type('7')

		cy.get('#DifficultyLevel')
			.select(3)

		cy.get('#IsReleased')
			.check()

		cy.get('#ReleaseDate')
			.type('2020-12-21')

		cy.get('form')
			.submit()
	})

	it('check if exist in table', () => {
		cy.visit('https://localhost:44330')

		cy.get('tr')
			.eq(1)
			.within(() => {
				cy.get('td')
					.contains('game 2')

				cy.get('td')
					.contains('game company 2')

				cy.get('td')
					.contains('3')

				cy.get('td')
					.contains('7')

				cy.get('input')
					.should('be.enabled')
			})
	})

	it('check form', () => {
		cy.visit('https://localhost:44330/')

		cy.get('a')
			.contains('Open')
			.first()
			.click()

		cy.get('#Title')
			.should('have.value', 'game 2')

		cy.get('#PublishingCompany')
			.should('have.value', 'game company 2')

		cy.get('#MinPlayers')
			.should('have.value', '3')

		cy.get('#MaxPlayers')
			.should('have.value', '7')

		cy.get('#DifficultyLevel')
			.should('have.value', 'Mid')

		cy.get('#IsReleased')
			.should('be.checked')

		cy.get('#ReleaseDate')
			.should('have.value', '2020-12-21')
	})
})
