function displayInformation(){
    document.getElementById("salonInformation").innerHTML=`<p> Welcome ${salon.name}</p>   <p>You find us in ${salon.address.steet}, ${salon.address.numer}</p>
    <p>Open from ${salon.hours.open} to ${salon.hours.close}</p>
 `;

}

displayInformation();