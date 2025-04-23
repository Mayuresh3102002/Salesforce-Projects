import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    contacts = [
        {
            Id: 1,
            Title: 'Developer',
            FirstName: 'Mayuresh',
            LastName: 'Choudhari'
        },
        {
            Id: 2,
            Title: 'Manager',
            FirstName: 'Suresh',
            LastName: 'Kumar'
        },
        {
            Id: 3,
            Title: 'Developer',
            FirstName: 'Anand',
            LastName:  'Kumar'
        }
    ]
}