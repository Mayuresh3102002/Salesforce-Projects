import { LightningElement, track } from 'lwc';
import createContact from '@salesforce/apex/CreateContactController.createContact';

export default class ContactCreationComponent extends LightningElement {
    firstName = ''; 
    lastName = '';
    email = '';
    phone = '';

    handleInputChange(event) {
        const field = event.target.name;
        this[field] = event.target.value;
    }

    handleContactCreation() {
        createContact({ firstName: this.firstName, lastName: this.lastName, email: this.email, phone: this.phone })
        .then((result) => {
            alert('Contact created successfully for ' + this.firstName + ' ' + this.lastName + ' with ID: ' + result);
        })
        .catch((error) => {
            alert('Error creating contact: ' + error.body.message);
        });
    }
}