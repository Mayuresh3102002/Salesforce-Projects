public class CreateContactController {
    
    @AuraEnabled
    public static Id createContact(String firstName, String lastName, String email, String phone) {
        Contact con = new Contact();
        con.FirstName = firstName;
        con.LastName = lastName;
        con.Email = email;  
        con.Phone = phone;
        insert con;
        return con.Id;
    }
}