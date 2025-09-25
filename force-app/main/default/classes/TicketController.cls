public with sharing class TicketController {
    @AuraEnabled
    public static void createTicket(String description, String priority, String department, Datetime slaDeadline) {
        Ticket__c newTicket = new Ticket__c();
        newTicket.Description__c = description;
        newTicket.Priority__c = priority;
        newTicket.Department__c = department;
        newTicket.SLA_Deadline__c = slaDeadline;
        newTicket.Status__c = 'Open';
        insert newTicket;
    }
}