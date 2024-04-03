export interface IFixtureInput {
    InputId: string
    Type: IInputType
    Value: String | Boolean | Number
}

export type IInputType = 'text' | 'number' | 'checbox'| 'select' | 'datepicker'

export const inputTypes = [
	'text',
	'number',
	'checbox',
	'select',
	'datepicker',
] as const
