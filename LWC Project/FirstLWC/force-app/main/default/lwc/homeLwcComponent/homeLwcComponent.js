import { LightningElement } from 'lwc';

export default class homeLwcComponent extends LightningElement {
    contacts = [
        {
            Id: 1,
            Name: 'Vivek Chavan',
            Email: 'vivekchavan5325@gmail.com'
        },
        {
            Id: 2,
            Name: 'Parikshit Bharpte',
            Email: 'parikshit@gmail.com'
        },
        {
            Id: 3,
            Name: 'Random Person',
            Email: 'randomperson123@gmail.com'
        },
        {
            Id: 4,
            Name: 'Random Person 2',
            Email: 'random123@gmail.com'
        },
        {
            Id: 5,
            Name: 'Random Person 3',
            Email: 'random321@gmail.com'
        }
    ];
}