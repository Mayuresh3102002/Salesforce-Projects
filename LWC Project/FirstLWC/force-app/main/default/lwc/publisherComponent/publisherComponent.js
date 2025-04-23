import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub';

export default class PublisherComponent extends LightningElement {
    handleClick() {
        let message = {
            msg: 'Hello from Publisher Component',
            time: '',
            date: new Date().toLocaleDateString(),
            user: 'Ramesh Sharma',
            location: 'San Francisco',
        }
        pubsub.fire('messageChannel', message);
    }
}


