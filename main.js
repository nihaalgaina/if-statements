let vehicleSpeed = Math.floor(Math.random() * 100);
let speeding1 = "You're speeding! You will recieve a small ticket.";
let speeding2 = "Step on the brakes! You're going too fast. You will recieve a BIG ticket.";
let notspeeding = "Congrats! You're following the rules of the road.";
let notspeeding2 = "";

if (vehicleSpeed > 60) {
    document.getElementById("sentence").innerHTML = speeding1;
    document.getElementById("speed").innerHTML = vehicleSpeed;
    let uSpeeding = true;
}

if (vehicleSpeed <= 60) {
    document.getElementById("sentence").innerHTML = notspeeding;
    document.getElementById("speed").innerHTML = vehicleSpeed;
    let uSpeeding = false;
    document.getElementById("speedingsentence").innerHTML = notspeeding2;
}

if (vehicleSpeed >= 81) {
    document.getElementById("sentence").innerHTML = speeding2;
    document.getElementById("speed").innerHTML = vehicleSpeed;
    let uSpeeding2 = true;
    let uSpeeding = false;
}


if (uSpeeding = true) {
    
    let pTicket = Math.floor(vehicleSpeed * 1.66 + 30);

    document.getElementById("fine").innerHTML = pTicket;
    
}

if (uSpeeding2 = true) {
    
    let pTicket = Math.floor(vehicleSpeed * 1.96 + 60);

    document.getElementById("fine").innerHTML = pTicket;
    
}
