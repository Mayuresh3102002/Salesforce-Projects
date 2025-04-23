import { LightningElement, track } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';

export default class GetDataComponent extends LightningElement {
    @track accounts = [];
    @track error;

    // handleLoadAccounts() {
    //     getAccounts().then((result) => {
    //         this.accounts = result;
    //     }).catch((error) => {
    //         this.error = error;
    //     })
    // }

    handleLoadAccounts() {
        const fetchAccounts = async () => {
            try {
                const result = await getAccounts();
                this.accounts = result;
            } catch (error) {
                this.error = error;
            }
        }
        fetchAccounts();
    }
}