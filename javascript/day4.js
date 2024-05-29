document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("div1").addEventListener("mousedown", (event) => {
      event.target.style.backgroundColor = "pink";
    });

    document.getElementById("div2").addEventListener("mousedown", (event) => {
      event.target.style.backgroundColor = "lightblue";
    });
  });



function myeven(event){
let x= event.screenX;
let y= event.screenY;
document.write(x + " "+ y);
}

function checkAltShift(event) {
    if (event.altKey && event.shiftKey) {
      alert("Alt + Shift keys pressed!");
    } else if (event.altKey) {
      alert("Alt key pressed!");
    } else if (event.ctrlKey) {
      alert("Shift key pressed!");
    } else {
      alert("Neither Alt nor Shift or ctrlKey keys pressed.");
    }
  }
  document.addEventListener("keydown", checkAltShift);


  function checkFarhaKey(event) {
    // Check if the key pressed is the letter "f"
    if (event.key.toLowerCase() === 'f') {
      document.write("Farha key");
    }
    else{
      document.write("f");

    }
  }