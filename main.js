//WEEK 4 ASSIGNMENT 1

// PARENT CLASS
class School{
    constructor(name, email, department, gender, cgpa){
        this.name = name;
        this.email = email;
        this.department = department;
        this.gender = gender;
        this.cgpa = cgpa;
    }

    getInfo(){};

    login(){};

    changePassword(){};
}


//CHILD CLASS
class Person extends School{
    constructor(name, email, department, gender, cgpa, reason){
        super();
        this.name = name;
        this.email = email;
        this.department = department;
        this.gender = gender;
        this.cgpa = cgpa;
        this.reason = reason;
}
getInfo(){
    console.log(`Student info: Name: ${this.name} 
    Email: ${this.email} 
    Department: ${this.department} 
    Gender: ${this.gender}
    Cgpa: ${this.cgpa}`);
}

login(){
    console.log(`${this.name} is logged in`);
}

changePassword(){
    console.log(`${this.name} changed portal password`);
}

exeat(){
    console.log(`Enter reason for requesting exeat: ${this.reason}`);
}
}


let person1 = new Person("Adam", "adam@gmail.com", "Industrial Physics", "male", "4.7");
let person2 = new Person("Nicole", "nicole@gmail.com", "Computer science", "female", "5.0");
let person3 = new Person("Monita", "monita@gmail.com", "Computer engineering", "female", "3.8", " Malaria and Typhoid");
let person4 = new Person("Segun", "segun@gmail.com", "Building technology ", "male", "4.0");
let person5 = new Person("Godwin", "godwin@gmail.com", "Economics", "male", "4.1");

//GETTING STUDENTS INFORMATION
person1.getInfo();
person2.getInfo();
person3.getInfo();
person4.getInfo();
person5.getInfo();


//LOGGED IN STUDENTS 
person1.login();
person2.login();


//CHANGE PASSWORD FUNCTION TEST
person4.changePassword();
person5.changePassword();


//REQUEST FOR EXEAT FUNCTION 
person3.exeat();




