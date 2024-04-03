import { IFixtureInput } from "../../support/IFixtureInput";

export const NewPlayerId = 5
export const AddPlayerInputs: IFixtureInput[] = [
    {
        InputId: 'FirstName',
        Type: 'text',
        Value: 'Tom'
    },
    {
        InputId: 'LastName',
        Type: 'text',
        Value: 'Smith'
    },
    {
        InputId: 'Age',
        Type: 'number',
        Value: '15'
    },
    {
        InputId: 'Game',
        Type: 'select',
        Value: 2
    },
    {
        InputId: 'MemberFrom',
        Type: 'datepicker',
        Value: '2019-12-20'
    }
]