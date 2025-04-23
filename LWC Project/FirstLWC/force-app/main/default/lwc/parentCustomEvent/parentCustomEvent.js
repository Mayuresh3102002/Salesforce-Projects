import { LightningElement, track } from 'lwc';

export default class ParentCustomEvent extends LightningElement {
    @track msg;

    constructor() {
        super();
        this.template.addEventListener('childcustomevent', this.handleCustomEvent.bind(this));
    }
    
    handleCustomEvent(event) {
        const val = event.detail;
        this.msg = val;
    }
}