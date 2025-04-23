import { LightningElement, track, wire } from 'lwc';
import getContacts from '@salesforce/apex/ContactController.getContacts';

export default class SLDSDatatableComponent extends LightningElement {    
    @track columns = [
        {
            label: 'First Name',
            fieldName: 'FirstName',
            type: 'text',
            sortable: true,
        },
        {
            label: 'Last Name',
            fieldName: 'LastName',
            type: 'text',
            sortable: true,
        },
        {
            label: 'Email',
            fieldName: 'Email',
            type: 'email',
            sortable: true,
        },
        {
            label: 'Lead Source',
            fieldName: 'LeadSource',
            type: 'picklist',
            sortable: true,
        },
        {
            label: 'Mobile',
            fieldName: 'MobilePhone',
            type: 'phone',
            sortable: true,
        }
    ];
    
    @track contactList;
    @track errorMessage;
    
    @wire(getContacts)
    wiredContacts({ error, data }) {
        if(data) {
            this.contactList = data;
        }
        else if(error) {
            this.errorMessage = error;
        }
    }
}