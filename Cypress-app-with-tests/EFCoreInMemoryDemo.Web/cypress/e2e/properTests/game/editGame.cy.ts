import { EditGameInputs, EditGameId } from '../../../fixtures/game/fixtureEditGame'
import { DesktopForm } from '../../../support/form'

const form = new DesktopForm(EditGameInputs)

describe('Editing game', () => {
	before(function() {
		cy.visit(`/BoardGame/Edit/${EditGameId}`)

		form.fill()

		cy.getByTestId('save-button')
			.click()

        cy.visit(`/BoardGame/Edit/${EditGameId}`)
	})

	form.formTest()
})