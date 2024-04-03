describe('Delete player', () => {
	it('Delete player should be not visible', () => {
		cy.visit('https://localhost:44330/Player')

		cy.get('input')
			.eq(1)
			.click()

		cy.get('td')
			.contains('Jonny')
			.should('not.exist')
	})
})
