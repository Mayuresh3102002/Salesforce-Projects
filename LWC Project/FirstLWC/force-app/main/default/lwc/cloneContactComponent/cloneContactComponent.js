import { createRecord, getRecord } from 'lightning/uiRecordApi';
import { api, LightningElement, wire } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import CONTACT_OBJ from '@salesforce/schema/Contact';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class CloneContactComponent extends NavigationMixin(LightningElement) {

    @api recordId;
    successMessage;
    objectApiName = 'Contact';

    async handleSuccess(event) {
        event.preventDefault();
        const recordInput = {
            apiName: CONTACT_OBJ.objectApiName,
            fields : event.detail.fields
        }

        try {
            const contact = await createRecord(recordInput);
            this.successMessage = 'CONTACT CLONED SUCCESSFULLY';
            this[NavigationMixin.Navigate]({
                type: 'standard__recordPage',
                attributes: {
                    recordId: contact.id,
                    objectApiName: this.objectApiName,
                    actionName: 'view'
                }
            });
            const successEvent = new ShowToastEvent({
                title: 'Success',
                message: this.successMessage,
                variant: 'success'
            })
            this.dispatchEvent(successEvent);
        } catch (error) {
            console.log('Error creating contact: ', error);
            const eve = new ShowToastEvent({
                title: 'Error',
                message: 'Contact could not be cloned',
                variant: 'error'
            })

            this.dispatchEvent(eve);
        }
        
    }

}