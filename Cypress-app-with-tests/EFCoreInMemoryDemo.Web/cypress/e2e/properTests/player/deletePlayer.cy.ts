import { DeletePlayerId } from '../../../fixtures/player/fixutreDeletePlayer'
import { testId } from '../../../support/helpers'


describe('Delete player', () => {
	before(function() {
		cy.visit('/Player')

		cy.getByTestId(`table-row-${DeletePlayerId}`)
            .find(testId('delete-button'))
            .click()

        cy.reload()
	})

	it('deleted player should not exist in table', () => {
        cy.getByTestId(`table-row-${DeletePlayerId}`)
            .should('not.exist')
    })
})