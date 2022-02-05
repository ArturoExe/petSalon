// //object literal
// let lion={
//     name:"simba",
//     kingOf:true,
//     food:"carnivore"
// }

// //Object constructor
// function Animal(name,kingOf,food) {
    
//     this.name=name;
//     this.kingOf=kingOf;
//     this.food=food;
//     this.displayFood=function(){
//        return `This animal is   ${food}`
// }

//     Animal.prototype.displayAnimal=function(){
//         return this.name;
//     }
// };

// //create object
// let lion2=new Animal("Hermes",false,"carnivore");

// console.log(lion2.displayAnimal());
// console.log(lion2.displayFood());


//create a constructor
//School,student,instructor,assigment,courses,exam

class School{
    
    constructor(name,location,carrer,hours){
        this.name=name;
        this.location=location;
        this.carrer=carrer;
        this.hours=hours;
    }

    displayUniveristy(){
        return `${this.name} is a university from ${this.location} and the carrer is ${this.carrer
        }`
    }
}


let Obj1=new School("SDGKU","San Diego","Fullstack Developer","10am to 10pm");
console.log(Obj1.displayUniveristy(),Obj1.hours);