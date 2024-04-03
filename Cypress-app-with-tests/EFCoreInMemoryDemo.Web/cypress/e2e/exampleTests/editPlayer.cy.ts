describe('Edit Player form', () => {
	it('fill form inputs', () => {
		cy.visit('https://localhost:44330/Player')

		cy.get('a')
			.contains('Open')
			.first()
			.click()

		cy.get('#FirstName')
			.clear()
			.type('Jan')

		cy.get('#LastName')
			.clear()
			.type('Kowalski')

		cy.get('#Age')
			.clear()
			.type('16')

		cy.get('#Game')
			.select(3)

		cy.get('#MemberFrom')
			.type('2019-12-19')

		cy.get('form')
			.submit()
	})

	it('check if exist in table', () => {
		cy.visit('https://localhost:44330/Player')

		cy.get('tr')
			.eq(1)
			.within(() => {

				cy.get('td')
					.contains('Jan')

				cy.get('td')
					.contains('Kowalski')

				cy.get('td')
					.contains('16')

				cy.get('td')
					.contains('The Settlers of Catan (Expanded)')
			})
	})

	it('check form', () => {
		cy.get('a')
			.contains('Open')
			.first()
			.click()

		cy.get('#FirstName')
			.should('have.value', 'Jan')

		cy.get('#LastName')
			.should('have.value', 'Kowalski')

		cy.get('#Age')
			.should('have.value', '16')

		cy.get('#Game')
			.should('have.value', 'The Settlers of Catan (Expanded)')

		cy.get('#MemberFrom')
			.should('have.value', '2019-12-19')
	})
})
