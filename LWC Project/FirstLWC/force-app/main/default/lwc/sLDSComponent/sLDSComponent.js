import { LightningElement } from 'lwc';

export default class SLDSComponent extends LightningElement {
    fName = '';

    handleFullNameChange(event) {
        this.fName = event.target.value;
    }
}