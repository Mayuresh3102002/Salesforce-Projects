import { LightningElement } from 'lwc';

export default class ChildCustomEvent extends LightningElement {
    handleChange(event) {
        event.preventDefault();
        const selectedVal = event.target.value;
        const customEvent = new CustomEvent('childcustomevent', {
            detail: selectedVal,
            bubbles: true,
        });
        this.dispatchEvent(customEvent);
    }
}