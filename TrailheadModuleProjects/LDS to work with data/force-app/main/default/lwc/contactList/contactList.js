import { api, LightningElement, wire } from 'lwc';
import FIRST_NAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LAST_NAME_FIELD from '@salesforce/schema/Contact.LastName';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import getContacts from '@salesforce/apex/ContactController.getContacts';
import { reduceErrors } from 'c/ldsUtils';

const COLUMNS = [
    {
        label: 'First Name',
        fieldName: FIRST_NAME_FIELD,
        type: 'text',
        sortable: true
    },
    {
        label: 'Last Name',
        fieldName: LAST_NAME_FIELD,
        type: 'text',
        sortable: true
    },
    {
        label: 'Email',
        fieldName: EMAIL_FIELD,
        type: 'email',
        sortable: true
    }
];

export default class ContactList extends LightningElement {
    
    @wire(getContacts)
    contacts;

    columns = COLUMNS;

    get errors() {
        return (this.contacts.error) ? reduceErrors(this.contacts.error) : [];
    }


}