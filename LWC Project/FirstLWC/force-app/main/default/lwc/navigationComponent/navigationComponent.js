import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class NavigationComponent extends NavigationMixin(LightningElement) {
    handleRecordClick() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId : '001dM00002QwxHTQAZ',    
                objectApiName: 'Hiring_Manager__c',
                actionName: 'view'           
            },
            state: {
                filterName: 'All'
            }
        });
    }

    navigateToNewAccountPage() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'new'
            }
        });
    }

    handleEdit() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId : 'a0HdM000000OVp3UAG',    
                objectApiName: 'Hiring_Manager__c',
                actionName: 'edit'           
            }
        });
    }

    handleRelationAccount() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordRelationshipPage',
            attributes: {
                recordId: '001dM00002L4TDKQA3',
                objectApiName: 'Account',
                relationshipApiName: 'Contacts',
                actionName: 'view'
            }
        });
    }
}