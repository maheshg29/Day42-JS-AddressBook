//UC 1 Creating addressbook
class Contact
{
    //properties
    FirstName;
    LastName;
    Address;
    City;
    State;
    Zip;
    PhoneNumber;
    Email;

    constructor(...param)
    {
        this.FirstName = param[0];
        this.LastName = param[1];
        this.Address = param[2];
        this.City = param[3];
        this.State = param[4];
        this.Zip = param[5];
        this.PhoneNumber = param[6];
        this.Email = param[7];
    }
}
