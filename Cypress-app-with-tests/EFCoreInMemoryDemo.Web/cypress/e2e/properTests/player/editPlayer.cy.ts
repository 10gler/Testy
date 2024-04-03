import { EditPlayerInputs, EditPlayerId } from '../../../fixtures/player/fixutreEditPlayer'
import { DesktopForm } from '../../../support/form'

const form = new DesktopForm(EditPlayerInputs)

describe('Editing Player', () => {
	before(function() {
		cy.visit(`/Player/Edit/${EditPlayerId}`)

		form.fill()

		cy.getByTestId('save-button')
			.click()

        cy.visit(`/Player/Edit/${EditPlayerId}`)
	})

	form.formTest()
})