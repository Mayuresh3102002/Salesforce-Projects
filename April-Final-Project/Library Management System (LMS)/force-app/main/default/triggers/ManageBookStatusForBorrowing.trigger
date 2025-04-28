trigger ManageBookStatusForBorrowing on Borrowing_Record__c (after insert) {
    if(Trigger.isInsert) {
        ManageBookStatusForBorrowingHandler.changeStatus(Trigger.New);
    }
}