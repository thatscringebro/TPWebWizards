namespace WizardRecords.Dtos {
    public record RegisterDto(
        string UserName, 
        string FirstName, 
        string LastName, 
        string Email,
        string Password
    );
}
