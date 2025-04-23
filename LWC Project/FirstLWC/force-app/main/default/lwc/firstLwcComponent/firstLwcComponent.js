import { LightningElement } from 'lwc';

export default class FirstLwcComponent extends LightningElement {
    firstName = '';
    lastName = '';
    fullName = '';

    onChangeFirstName(event) {
        this.firstName = event.target.value;
    }

    onChangeLastName(event) {
        this.lastName = event.target.value;
    }

    handleClick() {
        this.fullName = this.firstName + ' ' + this.lastName;
        console.log('Clicked');
    }
}