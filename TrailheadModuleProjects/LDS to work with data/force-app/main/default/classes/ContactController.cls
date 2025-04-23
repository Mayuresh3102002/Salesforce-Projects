public class ContactController {

    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts() {
        return [SELECT Id, FirstName, LastName, Email FROM Contact];
        // throw new AuraHandledException('Forced error');
    }
}