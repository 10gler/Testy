describe('Delete game', () => {
	it('Delete game should be not visible', () => {
		cy.visit('https://localhost:44330/')

		cy.get('input')
			.eq(2)
			.click()

		cy.get('td')
			.contains('Candy Land')
			.should('not.exist')
	})
})
