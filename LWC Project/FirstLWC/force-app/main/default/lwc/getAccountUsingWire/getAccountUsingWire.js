import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';

export default class GetAccountUsingWire extends LightningElement {

    @wire(getAccounts)
    accounts;
    hasData = false;

    handleGetAccount() {
        
        if(this.hasData == true) {
            this.hasData = false;
        } else {
            this.hasData = true;
        }
        console.log('Account data:', this.accounts.data);
    }

}