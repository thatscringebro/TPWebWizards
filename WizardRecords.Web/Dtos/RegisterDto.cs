using static WizardRecords.Core.Data.Constants;

namespace WizardRecords.Dtos {
    public record RegisterDto(
        string UserName,
        string FirstName,
        string LastName,
        string Email,
        string Password,
        string PhoneNumber,
        int AddressNum,
        string StreetName,
        string City,
        Province Province,
        string PostalCode
    );
}
