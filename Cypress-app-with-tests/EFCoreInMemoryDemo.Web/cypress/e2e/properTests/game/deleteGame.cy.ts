import { DeleteGameId } from '../../../fixtures/game/fixtureDeleteGame'
import { testId } from '../../../support/helpers'


describe('Delete game', () => {
	before(function() {
		cy.visit('/BoardGame')

		cy.getByTestId(`table-row-${DeleteGameId}`)
            .find(testId('delete-button'))
            .click()

        cy.reload()
	})

	it('deleted game should not exist in table', () => {
        cy.getByTestId(`table-row-${DeleteGameId}`)
            .should('not.exist')
    })
})