class user{
    constructor(){
        this.Name;
        this.Email;
        this.Password;
        this.PhoneNumber;
        this.isAdmin;
    }

    registro(){
    }
}

class user extends student{
    constructor(){
        this.belongsto=[];
    }
}
