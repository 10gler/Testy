
describe('Player form', () => {
	it('fill form inputs', () => {
		cy.visit('https://localhost:44330/Player')

		cy.get('a')
			.contains('Create New')
			.click()

		cy.get('#FirstName')
			.type('Tom')

		cy.get('#LastName')
			.type('Smith')

		cy.get('#Age')
			.type('15')

		cy.get('#Game')
			.select(2)

		cy.get('#MemberFrom')
			.type('2019-12-20')

		cy.get('form')
			.submit()
	})

	it('check if exist in table', () => {
		cy.visit('https://localhost:44330/Player')

		cy.get('tr')
			.last()
			.within(() => {

				cy.get('td')
					.contains('Tom')

				cy.get('td')
					.contains('Smith')

				cy.get('td')
					.contains('15')

				cy.get('td')
					.contains('Sorry!')
			})
	})

	it('check form', () => {
		cy.visit('https://localhost:44330/Player/Edit/5')

		cy.get('#FirstName')
			.should('have.value', 'Tom')

		cy.get('#LastName')
			.should('have.value', 'Smith')

		cy.get('#Age')
			.should('have.value', '15')

		cy.get('#Game')
			.should('have.value', 'Sorry!')

		cy.get('#MemberFrom')
			.should('have.value', '2019-12-20')
	})
})

describe('Player form validation', () => {
	it('validation', () => {
		cy.visit('https://localhost:44330/Player')

		cy.get('a')
			.contains('Create New')
			.click()

		cy.get('form')
			.submit()

		cy.get('.text-danger')
			.should('be.visible')
	})
})
