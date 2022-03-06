class User {
    constructor(name,email){
        this.name = name;
        this.email = email;
    }

    getInfo() {
        return { name: this.name, email: this.email}
    }

    static getPersonalInfo(){
        return "Confidential"
    }
}

class Dhanush extends User{
    constructor(name,email){
        super(name,email)
    }

    getChildInfo(){
        return "I am Dhanush"
    }
}


let test = new Dhanush("Dhanush","dhanushkumarsivaji@gmail.com");

console.log(test.getChildInfo())