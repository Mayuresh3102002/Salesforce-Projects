import { api, LightningElement } from 'lwc';
import contactName from '@salesforce/schema/Contact.Name';
import contactPhone from '@salesforce/schema/Contact.Phone';

export default class LightningViewForm extends LightningElement {
    @api recordId;
    @api objectApiName;
    
    nameField = contactName;
    phoneField = contactPhone;
}