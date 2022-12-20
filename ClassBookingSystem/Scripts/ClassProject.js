function countdown() {

    var timeleft = Math.floor(Math.random() * (60 - 30)) + 30;
    var downloadTimer = setInterval(function () {
        if (timeleft <= 0) {
            clearInterval(downloadTimer);
            document.getElementById("count").innerHTML = "Finished";
        } else {
            document.getElementById("count").innerHTML = timeleft + " seconds";
        }
        timeleft -= 1;
    }, 1000);
}

var seatsleft;
seatsleft = Math.floor(Math.random() * (15 - 4)) + 4;

function seats()
{     
    document.getElementById("seatsLeft").innerHTML = seatsleft;

}

function freeSeatsCounter(id)
{
    if (seatsleft > 0) {
       alert("Class Booked Sucessfully!");
    }
    else if (seatsleft <= 0) {
        alert("No free seats left!");
    }
    document.getElementById("seatsLeft").innerHTML = --seatsleft;
    document.getElementById(id).disabled = true;
    if (seatsleft < 1)
    {
        document.getElementById("seatsLeft").innerHTML = 0;
    }
}


var count=0;
function cartCount(id) {
        document.getElementById("counter").innerHTML = count++; 
}


function fullSeatAlert(id) {
     alert("No seats avilable.");
}



var td1Seats = 3;
var td2Seats = 3;
var td3Seats = 3;
var td4Seats = 0;
var td5Seats = 0;
var td6Seats = 0;
var td7Seats = 3;
var td8Seats = 3;
var td9Seats = 3;
var td10Seats = 3;
function numberOfSeats(id) {
    if (id == 'td1' && seatsleft > 0) {
        document.getElementById(id).innerHTML = td1Seats-- + " seats avialable";
    }
    else if (id == 'td2' && seatsleft > 0) {
        document.getElementById(id).innerHTML = td2Seats-- + " seats avialable";
    }
    else if (id == 'td3' && seatsleft > 0) {
        document.getElementById(id).innerHTML = td3Seats-- + " seats avialable";
    }
    else if (id == 'td4' || id == 'td5' || id == 'td6') {  
        document.getElementById(id).innerHTML = 0 + " seats avialable"
    }
    else if (id == 'td7' && seatsleft > 0) {
        document.getElementById(id).innerHTML = td7Seats-- + " seats avialable";
    }
    else if (id == 'td8' && seatsleft > 0) {
        document.getElementById(id).innerHTML = td8Seats-- + " seats avialable";
    }
    else if (id == 'td9' && seatsleft > 0) {
        document.getElementById(id).innerHTML = td9Seats-- + " seats avialable";
    }
    else if (id == 'td10' && seatsleft > 0) {
        document.getElementById(id).innerHTML = td10Seats-- + " seats avialable";
    }

}
