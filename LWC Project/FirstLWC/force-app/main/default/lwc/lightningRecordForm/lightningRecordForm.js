import { api, LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import Name from '@salesforce/schema/Account.Name';
import AccountNumber from '@salesforce/schema/Account.AccountNumber';

export default class LightningRecordForm extends LightningElement {

    @api recordId;
    objectApiName = 'Account';
    fields = [Name, AccountNumber];

    handleSubmit(event) {
        event.preventDefault();
        const eve = new ShowToastEvent({
            title: 'toast event executed',
            message: 'Record submitted successfully' + event.detail.id,
            variant: 'success'
        })
        this.dispatchEvent(eve);
    }
}