import { IFixtureInput, IInputType } from "../IFixtureInput"

export const componentFillingFunctions: {[key in IInputType]: (value: any) => void} = {
	'text': (value) => fillInput(value),
	'checbox': (value) => fillCheckbox(value),
	'datepicker': (value) => fillInput(value),
	'number': (value) => fillInput(value),
	'select': (value) => fillSelect(value),
}

export function fillComponent(inputData: IFixtureInput) {
	componentFillingFunctions[inputData.Type](inputData)
}

function fillInput(inputData: IFixtureInput): void {
	cy.getByTestId(inputData.InputId)
		.clear()
		.type(inputData.Value as string)
}

function fillCheckbox(inputData: IFixtureInput): void {
	if(inputData.Value){
		cy.getByTestId(inputData.InputId)
			.check()
	} else {
		cy.getByTestId(inputData.InputId)
			.uncheck()
	}
}

function fillSelect(inputData: IFixtureInput): void {
	cy.getByTestId(inputData.InputId)
		.select(inputData.Value as number)
}

