import { checkComponents } from "./checkComponents/checkComponents"
import { fillComponent } from "./fillComponents/fillComponents"
import { IFixtureInput, IInputType, inputTypes } from "./IFixtureInput"

export abstract class Form {

	constructor(protected readonly inputsData) {}

	protected abstract getFillableInputs()

	fill() {
		this.getFillableInputs().forEach(x => {
			x.fill()
		})
	}

	abstract checkComponentInputs(componentType): void

	private hasComponentInputs(componentType) {
		return !!getInputsByType(this.inputsData, componentType).length
	}

	formTest() {
		inputTypes.forEach(type => {
			if (this.hasComponentInputs(type)) {
				it(`should have correct data in ${type} components`, () => {
						this.checkComponentInputs(type)
				})
			}
		})
	}

	protected abstract createForm(inputsData: IFixtureInput[]): Form
}

export class DesktopForm extends Form {
	protected getFillableInputs(): { fill: () => void, key: string }[] {
		return setInputFillingAction(this.inputsData)
	}
	protected createForm(inputsData: IFixtureInput[]): Form {
		return new DesktopForm(inputsData)
	}
	checkComponentInputs(componentType: IInputType) {
		checkComponents(getInputsByType(this.inputsData, componentType))
	}
}

function getInputsByType(inputs: IFixtureInput[], inputType: IInputType): IFixtureInput[] {
	return inputs.filter(x => x.Type === inputType)
}

function setInputFillingAction(inputs: IFixtureInput[]) {
	return inputs.map(inputData =>
		({
			fill: () => fillComponent(inputData),
			key: inputData.InputId,
		}),
	)
}
