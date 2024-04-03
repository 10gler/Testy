describe('Game form', () => {
	it('fill form inputs', () => {
		cy.visit('https://localhost:44330/')

		cy.get('a')
			.contains('Create New')
			.click()

		cy.get('#Title')
			.type('game 1')

		cy.get('#PublishingCompany')
			.type('game company 1')

		cy.get('#MinPlayers')
			.type('2')

		cy.get('#MaxPlayers')
			.type('6')

		cy.get('#DifficultyLevel')
			.select(2)

		cy.get('#IsReleased')
			.check()

		cy.get('#ReleaseDate')
			.type('2020-12-20')

		cy.get('form')
			.submit()
	})

	it('check if exist in table', () => {
		cy.visit('https://localhost:44330')

		cy.get('tr')
			.last()
			.within(() => {
				cy.get('td')
					.contains('game 1')

				cy.get('td')
					.contains('game company 1')

				cy.get('td')
					.contains('2')

				cy.get('td')
					.contains('6')

				cy.get('input')
					.should('be.disabled')
			})
	})

	it('check form', () => {
		cy.visit('https://localhost:44330/BoardGame/Edit/7')

		cy.get('#Title')
			.should('have.value', 'game 1')

		cy.get('#PublishingCompany')
			.should('have.value', 'game company 1')

		cy.get('#MinPlayers')
			.should('have.value', '2')

		cy.get('#MaxPlayers')
			.should('have.value', '6')

		cy.get('#DifficultyLevel')
			.should('have.value', 'Junior')

		cy.get('#IsReleased')
			.should('be.checked')

		cy.get('#ReleaseDate')
			.should('have.value', '2020-12-20')
	})
})

describe('Game form validation', () => {
	it('validation', () => {
		cy.visit('https://localhost:44330/')

		cy.get('a')
			.contains('Create New')
			.click()

		cy.get('input')
			.contains('Create')
			.click()

		cy.get('.text-danger')
			.should('be.visible')
	})
})