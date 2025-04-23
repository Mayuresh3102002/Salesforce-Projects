import { getRecord } from 'lightning/uiRecordApi';
import { LightningElement, track, wire } from 'lwc';
import OppName from '@salesforce/schema/Opportunity.Name';
import OppStage from '@salesforce/schema/Opportunity.StageName';
import OppAmount from '@salesforce/schema/Opportunity.Amount';
import { NavigationMixin } from 'lightning/navigation';

const FIELDS = [OppName, OppStage, OppAmount]

export default class OpportunitySummary extends NavigationMixin(LightningElement) {

    @track recordId = '';

    handleRecordIdChange(event) {
        this.recordId = event.target.value; 
    }

    @wire(getRecord, { recordId: '$recordId', fields: FIELDS })
    opportunity;

    get opportunityName() {
        return this.opportunity.data ? this.opportunity.data.fields.Name.value : ''
    }

    get opportunityAmount() {
        return this.opportunity.data ? this.opportunity.data.fields.Amount.value : ''
    }

    get opportunityStage() {
        return this.opportunity.data ? this.opportunity.data.fields.StageName.value : ''
    }

    handleNavigateButton() {
        if(this.recordId) {
            this[NavigationMixin.Navigate]({
                type: 'standard__recordPage',
                attributes: {
                    recordId: this.recordId,
                    objectApiName: 'Opportunity',
                    actionName: 'view'
                }
            });
        } else {
            console.log('No record ID provided');
        }
    }
    
}