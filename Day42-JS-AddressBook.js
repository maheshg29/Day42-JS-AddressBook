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
 //UC 2
    get firstName(){ return this.FirstName;}
    set firstName(fname){
        let nameRegex = new RegExp("^[A-Z]{1}[a-z]{2,}$");
        if( nameRegex.test(fname)){
            this.FirstName = fname;
        }
        else{
            throw "First Name is incorrect format";
        }
    }

    get lastName(){ return this.LastName;}
    set lastName(lname){
        let lastnameRegex = new RegExp("^[A-Z]{1}[a-z]{2,}$");
        if( lastnameRegex.test(lname)){
            this.LastName = lname;
        }
        else{
            throw "Last Name is incorrect format";
        }
    }
   
    get address() { return this.Address;}
    set address(add) {
        let addRegex = new RegExp("^[A-Za-z]{4,}$");
        if( addRegex.test(add)){
            this.Address = add;
        }
        else{
            throw "Address is incorrect format";
        }
    }

    get city() { return this.City;}
    set city(cityName) {
        let cityRegex = new RegExp("^[A-Za-z]{4,}$");
        if( cityRegex.test(cityName)){
            this.City = cityName;
        }
        else{
            throw "City is incorrect format";
        }
    }
    get state() { return this.State;}
    set state(stateName) {
        let stateRegex = new RegExp("^[A-Za-z]{4,}$");
        if( stateRegex.test(stateName)){
            this.State = stateName;
        }
        else{
            throw "State is incorrect format";
        }
    }

    get zip(){return this.Zip;}
    set zip(zipNo){
        let zipRegex = new RegExp("^[1-9]{1}[0-9]{5}$");
        if(zipRegex.test(zipNo)){
            this.Zip = zipNo;
        }else{
            throw "zip code is incorrect format";
        }
    }

    get phoneNumber(){ return this.PhoneNumber;}
    set phoneNumber(phoneNo){
        let phoneRegex = new RegExp("^[9]{1}[1]{1}[ ]{1}[6-9]{1}[0-9]{9}$"); //91 9812345678
        if(phoneRegex.test(phoneNo)){
            this.PhoneNumber = phoneNo;
        }else{
            throw "PhoneNumber is incorrect format";
        }
    }
    get emailValidation(){ return this.Email;}
    set emailValidation(email){
        let emailRegex = new RegExp("[a-zA-Z0-9_-.]+[@][a-z]+[.][a-z]{2,3}");
        if(emailRegex.test(email)){
            this.Email = email;
        }else{
            console.log("Email is incorrect format");
        }
    }
}
