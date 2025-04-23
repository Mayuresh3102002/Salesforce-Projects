public class AccountController2 {
    
    @AuraEnabled
    public static List<Account> getFilteredAccounts(String str) {
        try {
            if(str == null || str.trim() == '') {
                return new List<Account>();
            }                    
            return [SELECT Id, Name FROM Account WHERE Name LIKE :(str + '%')];
        } catch(Exception e) {
            throw new AuraHandledException('Error retrieving accounts: ' + e.getMessage());
        }
    }
}