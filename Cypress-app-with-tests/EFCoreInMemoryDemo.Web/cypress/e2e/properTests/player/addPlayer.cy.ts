import { AddPlayerInputs, NewPlayerId } from '../../../fixtures/player/fixtureAddPlayer'
import { DesktopForm } from '../../../support/form'

const form = new DesktopForm(AddPlayerInputs)

describe('Creating player', () => {
	before(function() {
		cy.visit('/Player/Add')

		form.fill()

		cy.getByTestId('save-button')
			.click()

        cy.visit(`/Player/Edit/${NewPlayerId}`)
	})

	form.formTest()
})