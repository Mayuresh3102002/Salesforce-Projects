import { api, LightningElement, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';

const FIELDS = [
    'Contact.Name', 
    'Contact.Email', 
    'Contact.Phone', 
    'Contact.AccountId', // Account lookup field on Contact
    'Contact.Account.Name' // Account Name related to the Contact
];

export default class GetAccountWireSecondWay extends LightningElement {
    
    @api recordId;

    @wire(getRecord, { recordId: '003dM00000ND4q9QAD', fields: FIELDS })
    contactRecord;

    get Name() {
        return this.contactRecord.data ? this.contactRecord.data.fields.Name.value : '';
    }
    get email() {
        return this.contactRecord.data ? this.contactRecord.data.fields.Email.value : '';
    }
    get phone() {
        return this.contactRecord.data ? this.contactRecord.data.fields.Phone.value : '';
    }

    get accName() {
        return this.contactRecord.data ? this.contactRecord.data.fields.Account.value.fields.Name.value : '';
    }
}