import { api, LightningElement } from 'lwc';
import getFilteredAccounts from '@salesforce/apex/AccountController2.getFilteredAccounts';

export default class SearchBar extends LightningElement {

    @api searchKey;
    searchResults = [];

    isLoading = false;

    handleChange(event) {
        this.isLoading = true;
   
        console.log('key stroke!!');
        
        this.searchKey = event.target.value;
        setTimeout(() => {
            getFilteredAccounts({ str: this.searchKey })
            .then((result) => {
                this.isLoading = false;
                this.searchResults = result;
            })
            .catch((error) => {
                this.searchResults = 'No Account Found!!';
            })
        }, [1000])
    }

}