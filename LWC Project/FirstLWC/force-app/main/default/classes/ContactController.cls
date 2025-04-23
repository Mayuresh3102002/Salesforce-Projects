public class ContactController {
    
    @AuraEnabled(Cacheable=true)
    public static List<Contact> getContacts() {
        return [SELECT Id, FirstName, LastName, Email, LeadSource, MobilePhone FROM Contact LIMIT 50];
    }
}