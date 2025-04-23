import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class SLDSContactForm extends LightningElement {
    fullName = '';
    email = '';
    preferredContact = 'email';
    subscribe = false;

    get isEmailPreferred() {
        return this.preferredContact === 'email';
    }

    get isPhonePreferred() {
        return this.preferredContact === 'phone';
    }

    handleNameChange(event) {
        this.fullName = event.target.value;
    }

    handleEmailChange(event) {
        this.email = event.target.value;
    }

    handleContactChange(event) {
        this.preferredContact = event.target.value;
    }

    handleSubscribeChange(event) {
        this.subscribe = event.target.checked;
    }
       
    handleSubmit() {
        const formData = {
            name: this.fullName,
            email: this.email,
            contactMethod: this.preferredContact,
            subscribe: this.subscribe
        };
        this.fullName  = '';
        this.email = '';
        this.preferredContact = 'email';
        this.subscribe = false;
        console.log('Form submitted with data:', JSON.stringify(formData));
        const toastEvent = new ShowToastEvent({
            title: 'Success',
            message: 'Form submitted successfully!',
            variant: 'success'
        });
        this.dispatchEvent(toastEvent);
    }
}