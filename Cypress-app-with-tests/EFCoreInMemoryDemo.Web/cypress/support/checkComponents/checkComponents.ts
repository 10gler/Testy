import { IFixtureInput, IInputType } from "../IFixtureInput"

export const componentCheckingFunctions: {[key in IInputType]: (value: any) => void} = {
	'text': (value) => checkInput(value),
	'checbox': (value) => checkCheckbox(value),
	'datepicker': (value) => checkInput(value),
	'number': (value) => checkInput(value),
	'select': (value) => checkSelect(value),
}

export function checkComponents(inputData: IFixtureInput[]) {
	inputData.forEach((inputData: IFixtureInput) => {
		componentCheckingFunctions[inputData.Type](inputData)
	})
}

function checkInput(inputData: IFixtureInput): void {
	cy.getByTestId(inputData.InputId)
		.should('have.value', inputData.Value as string)
}

function checkCheckbox(inputData: IFixtureInput): void {
	cy.getByTestId(inputData.InputId)
		.should(inputData.Value? 'be.checked' : 'not.be.checked')
}

function checkSelect(inputData: IFixtureInput): void {
	cy.getByTestId(inputData.InputId)
		.should('have.value', inputData.Value)
}

