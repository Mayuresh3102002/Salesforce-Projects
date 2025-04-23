import pubsub from 'c/pubsub';
import { LightningElement } from 'lwc';

export default class SubscriberComponent extends LightningElement {
    message = {}

    updateTime() {
        this.message = {
            ...this.message,
            time: new Date().toLocaleTimeString(),
        }
    }

    connectedCallback() {
        this.register();

        this.updateTime();
        setInterval(() => {
            this.updateTime();
        }, 1000);
    }

    register() {
        pubsub.register('messageChannel', this.handleEvent.bind(this));
    }

    handleEvent(msgFromEvent) {
        // this.message = msgFromEvent ? JSON.stringify(msgFromEvent, null, '\t') : 'No message received';
        this.message = msgFromEvent ? msgFromEvent : 'No message received';
    }
}