import { LightningElement, track } from 'lwc';
import createTicket from '@salesforce/apex/TicketController.createTicket';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class CreateTicket extends LightningElement {
    @track description = '';
    @track priority = 'Medium';
    @track department = '';
    @track slaDeadline = '';

    priorityOptions = [
        { label: 'Low', value: 'Low' },
        { label: 'Medium', value: 'Medium' },
        { label: 'High', value: 'High' },
        { label: 'Critical', value: 'Critical' }
    ];

    handleChange(event) {
        this[event.target.name] = event.target.value;
    }

    handleSubmit() {
        if (!this.description || !this.department || !this.slaDeadline) {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error',
                    message: 'Please fill all required fields',
                    variant: 'error'
                })
            );
            return;
        }

        createTicket({
            description: this.description,
            priority: this.priority,
            department: this.department,
            slaDeadline: this.slaDeadline
        })
        .then(() => {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Success',
                    message: 'Ticket created successfully!',
                    variant: 'success'
                })
            );

            // Reset fields
            this.description = '';
            this.priority = 'Medium';
            this.department = '';
            this.slaDeadline = '';
        })
        .catch(error => {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error creating ticket',
                    message: error.body.message,
                    variant: 'error'
                })
            );
        });
    }
}