import { IFixtureInput } from "../../support/IFixtureInput";

export const EditGameId = 2
export const EditGameInputs: IFixtureInput[] = [
    {
        InputId: 'Title',
        Type: 'text',
        Value: 'game 2'
    },
    {
        InputId: 'PublishingCompany',
        Type: 'text',
        Value: 'game company 2'
    },
    {
        InputId: 'MinPlayers',
        Type: 'number',
        Value: '3'
    },
    {
        InputId: 'MaxPlayers',
        Type: 'number',
        Value: '7'
    },
    {
        InputId: 'DifficultyLevel',
        Type: 'select',
        Value: 3
    },
    {
        InputId: 'IsReleased',
        Type: 'checbox',
        Value: true
    },
    {
        InputId: 'ReleaseDate',
        Type: 'datepicker',
        Value: '2020-12-21'
    }
]