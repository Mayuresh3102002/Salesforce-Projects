import { api, LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import ACC_NAME from '@salesforce/schema/Account.Name';
import ACC_NUMBER from '@salesforce/schema/Account.AccountNumber';
import ACC_TYPE from '@salesforce/schema/Account.Type';

export default class LightningRecordEditForm extends LightningElement {
    @api recordId;
    @api objectApiName;

    accountName = ACC_NAME;
    accountNumber = ACC_NUMBER;
    accountType = ACC_TYPE;

    handleSuccess(event) {
        const e = new ShowToastEvent({
            title: 'Success',
            message: 'Record updated successfully with Record-ID = ' + event.detail.id,
            variant: 'success',
        })
        this.dispatchEvent(e);
    }

    handleResetForm(event) {
        event.preventDefault();
        this.template.querySelector('lightning-record-edit-form').reset();
    }
}