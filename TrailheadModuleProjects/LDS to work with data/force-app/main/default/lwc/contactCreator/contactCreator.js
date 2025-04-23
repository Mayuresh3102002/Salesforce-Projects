import { api, LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import FirstName from '@salesforce/schema/Contact.FirstName';
import LastName from '@salesforce/schema/Contact.LastName';
import Email from '@salesforce/schema/Contact.Email';

export default class ContactCreator extends LightningElement {

    @api recordId;
    objectApiName = 'Contact';

    fields = [FirstName, LastName, Email];

    errorCallback(error, stack) {
        const eve = new ShowToastEvent({
            title: 'Error',
            message: error.body.message,
            variant: 'error'
        })
        this.dispatchEvent(eve);
    }

    handleSuccess(event) {
        event.preventDefault();
        const eve = new ShowToastEvent({
            title: 'Success',
            message: event.detail.id,
            variant: 'success'
        })
        this.dispatchEvent(eve);
    }
}