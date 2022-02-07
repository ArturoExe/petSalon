let salon={
    name:"Pet Salon",
    address:{
        steet:"Av.University",
        ZipCode:"22664",
        numer:"262-W",
    },
    hours:{
        open:"9:00 am",
        close:"8:00 pm"
    },
    pets:[]

}

//ASSIGNMENT 1
function displayPetNames(){

  salon.pets.forEach((element)=> {
    console.log(element.name);
  });
    
   alert(`They are ${salon.pets.length} on the line`)
}

displayPetNames();


//Create the constructor
class Pets{

    constructor(name,age,gender){

        this.name=name;
        // this.breed.breed;
        this.age=age;
        this.gender=gender
        // this.service=service;
        // this.owner=onwer;
    }


}




let register = () => {

    let name=document.getElementById("txtpetName").value;
    let age=document.getElementById("txtAge").value;
    let gender=document.getElementById("rdbMale").checked;
   //check if the gender
    if(gender==true){
        gender="Male"
    }else
    {
        gender="Female"
    }
  
    //Create new pet
    let newPet=new Pets(name,age,gender)

    //Push the pet to the pets array
    salon.pets.push(newPet);

    //log the pet info
    console.log(newPet);
    console.log(salon.pets);
    alert("Pet Registered")
    displayPetNames();
};





