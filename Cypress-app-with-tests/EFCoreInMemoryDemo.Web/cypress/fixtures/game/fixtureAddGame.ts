import { IFixtureInput } from "../../support/IFixtureInput";

export const NewGameId = 7
export const AddGameInputs: IFixtureInput[] = [
    {
        InputId: 'Title',
        Type: 'text',
        Value: 'game 1'
    },
    {
        InputId: 'PublishingCompany',
        Type: 'text',
        Value: 'game company 1'
    },
    {
        InputId: 'MinPlayers',
        Type: 'number',
        Value: '2'
    },
    {
        InputId: 'MaxPlayers',
        Type: 'number',
        Value: '6'
    },
    {
        InputId: 'DifficultyLevel',
        Type: 'select',
        Value: 2
    },
    {
        InputId: 'IsReleased',
        Type: 'checbox',
        Value: true
    },
    {
        InputId: 'ReleaseDate',
        Type: 'datepicker',
        Value: '2020-12-20'
    }
]