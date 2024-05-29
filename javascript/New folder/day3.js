
var one=window.innerHeight;
var two=window.innerWidth;
var three=window.outerHeight;
var four=window.outerWidth;

// document.write("inner height"+ " " + one +"<br> " + "inner weidth"+ " " + two + "<br> " + "outer height" + " "+ three +"<br> " + "outer width" +" "+four);
// console.log("inner height"+ " " + one +" " + "inner weidth"+ " " + two + " " + "outer height" + three +" " + "outer width" +" "+four);
// console.log(window.history);
// console.log(window.history.length);
// console.log(window.history.go(0));

// console.log(window.history.forward());
// console.log(window.history.back());


// console.log(window.navigator);
// console.log(screen.width);


let myTimeout;

function printTextAndSetAlert() {
   
    // Write text to the document
   

    // Set up a timeout to display an alert after 5 seconds
    myTimeout = setTimeout(function() {
        alert("Alert appeared after 5 seconds");
        document.getElementById("html").textContent="Alart is display after 5 sec";
    }, 5000);
   
}

function stopAlert() {
    // Clear the timeout if the user clicks the "Stop Alert" button
    if (myTimeout) {
        clearTimeout(myTimeout);
        document.getElementById("html").textContent="Alart is cancelled after 5 sec";
    }
}
