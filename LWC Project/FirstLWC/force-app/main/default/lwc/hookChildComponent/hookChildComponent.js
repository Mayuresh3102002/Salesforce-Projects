import { LightningElement } from 'lwc';

export default class HookChildComponent extends LightningElement {
    constructor() {
        super();
        console.log('Child constructor called!!');
    }

    connectedCallback() {
        console.log('Child connectedCallback called!!');
    }

    renderedCallback() {
        console.log('Child renderedCallback called!!');
    }
}