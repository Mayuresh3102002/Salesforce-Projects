public class HiringMangerController {
    @AuraEnabled
    public static Id deleteHR(Id recID) {
        Hiring_Manager__c hr = [SELECT Id FROM Hiring_Manager__c WHERE Id = :recID LIMIT 1];

        if(hr!=null) {
            delete hr;
            return hr.Id;
        }
        return null;
    }
}