trigger ManageBookStatusForReturning on Returned_Book__c (after insert) {
    if(Trigger.isInsert) {
        ManageBookStatusForReturningHandler.changeStatus(Trigger.New);
    }
}