public class ManageBookStatusForReturningHandler {
    public static void changeStatus(List<Returned_Book__c> returnedBooks) {
        Set<Id> borrowingRecordIDs = new Set<Id>();
        for (Returned_Book__c rc : returnedBooks) {
            if (rc.Borrowing_Record__c != null) {
                borrowingRecordIDs.add(rc.Borrowing_Record__c); 
            }
        }

        List<Borrowing_Record__c> borrowingRecords = [SELECT Id, Book__c FROM Borrowing_Record__c WHERE Id IN :borrowingRecordIDs];
        Set<Id> bookIds = new Set<Id>();

        for(Borrowing_Record__c borrowingRecord: borrowingRecords) {
            if(borrowingRecord.Book__c != null) {
                bookIds.add(borrowingRecord.Book__c);
            }
        }

        List<Book__c> booksToUpdate = [SELECT Id, Main_Status__c, Sub_Status__c FROM Book__c WHERE Id IN :bookIds];
        for(Book__c bks: booksToUpdate) {
            bks.Main_Status__c = 'Available';
            bks.Sub_Status__c = 'Not Taken';
        }
        update booksToUpdate;
    }
}