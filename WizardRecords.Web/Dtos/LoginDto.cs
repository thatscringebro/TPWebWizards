namespace WizardRecords.Dtos {
    public record LoginDto(
        string UserName, 
        string Password, 
        bool RememberMe
    );
}
