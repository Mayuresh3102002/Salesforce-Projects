import { LightningElement, track } from 'lwc';
import getFilteredAccounts from '@salesforce/apex/AccountController2.getFilteredAccounts';

export default class GetFilteredAccountComponent extends LightningElement {
    
    @track accounts = [];
    searchKey = '';
    @track error;
    
    handleAccountNameChange(event) {
        this.searchKey = event.target.value;
    }

    handleFilteredAccount() {
        getFilteredAccounts({ str: this.searchKey }).then((result) => {
            this.accounts = result;
            this.error = undefined;
        }).catch((error) => {
            this.error = error;
            this.accounts = [];
            console.error('Error fetching accounts:', error);
        });
    }

    get errorMessage() {
        return this.error ? `Error: ${this.error.body.message}` : '';
    }
}