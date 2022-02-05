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
    pets:[
    {
        name:"Scooby",
        age:60,
        gender:"Male",
        breed:"Dane",
        service:"Grooming",
        owner:"Shaggy",
        phone:"555-555-555"

    },
    {
        name:"Nala",
        age:30,
        gender:"Female",
        breed:"German-Shepard",
        service:"Bath",
        owner:"Michael",
        phone:"555-222-555"

    },
    {
        name:"Nasus",
        age:10,
        gender:"Male",
        breed:"Pug",
        service:"Grooming",
        owner:"Manuel",
        phone:"555-555-333"

    },
    {
        name:"Ares",
        age:55,
        gender:"Female",
        breed:"Retriever",
        service:"Nail Clipping",
        owner:"Jose",
        phone:"666-555-555"

    },

]

}


function displayPetNames(){

  salon.pets.forEach((element)=> {
    console.log(element.name);
  });
    
//   alert(`They are ${salon.pets.length} on the line`)
}

// displayPetNames();





