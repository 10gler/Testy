import { IFixtureInput } from "../../support/IFixtureInput";

export const EditPlayerId = 2
export const EditPlayerInputs: IFixtureInput[] = [
    {
        InputId: 'FirstName',
        Type: 'text',
        Value: 'Jan'
    },
    {
        InputId: 'LastName',
        Type: 'text',
        Value: 'Kowalski'
    },
    {
        InputId: 'Age',
        Type: 'number',
        Value: '16'
    },
    {
        InputId: 'Game',
        Type: 'select',
        Value: 3
    },
    {
        InputId: 'MemberFrom',
        Type: 'datepicker',
        Value: '2019-12-19'
    }
]