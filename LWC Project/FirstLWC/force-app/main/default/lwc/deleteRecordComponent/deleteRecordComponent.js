import { api, LightningElement } from 'lwc';
import deleteHR from '@salesforce/apex/HiringMangerController.deleteHR';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class DeleteRecordComponent extends LightningElement {
    @api recordId;
    errorMessage = '';

    handleRecordIdChange(event) {
        this.recordId = event.target.value; 
    }

    handleDeleteRecord() {
        deleteHR({ recID : this.recordId })
        .then((res) => {
            const eve = new ShowToastEvent({
                title: 'Success',
                message: 'Record Deleted Successfully with Id: ' + res,
                variant: 'success'
            })
            this.dispatchEvent(eve);
            this.recordId = '';
        })
        .catch((error) => {
            this.errorMessage = 'Record not deleted: ' + error.body.message;
            this.isDeleted = false;
        })
    }
}