public class ManageBookStatusForBorrowingHandler {
    public static void changeStatus(List<Borrowing_Record__c> borrowingRecords) {
        Set<Id> bookIds = new Set<Id>();
        for (Borrowing_Record__c rc : borrowingRecords) {
            if (rc.Book__c != null) {
                bookIds.add(rc.Book__c);
            }
        }

        List<Book__c> booksToUpdate = [SELECT Id, Main_Status__c, Sub_Status__c FROM Book__c WHERE Id IN :bookIds];

        for (Book__c book : booksToUpdate) {
            book.Main_Status__c = 'Available';
            book.Sub_Status__c = 'Borrowed';
        }

        if (!booksToUpdate.isEmpty()) {
            update booksToUpdate;
        }
    }
}