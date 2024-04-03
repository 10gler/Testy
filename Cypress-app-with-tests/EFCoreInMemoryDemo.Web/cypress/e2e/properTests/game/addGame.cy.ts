import { AddGameInputs, NewGameId } from '../../../fixtures/game/fixtureAddGame'
import { DesktopForm } from '../../../support/form'

const form = new DesktopForm(AddGameInputs)

describe('Creating game', () => {
	before(function() {
		cy.visit('/BoardGame/Add')

		form.fill()

		cy.getByTestId('save-button')
			.click()

		//There is posibility to not use NewGameId but by using cy.intercept to catch ID of new element.
        cy.visit(`/BoardGame/Edit/${NewGameId}`)
	})

	form.formTest()
})