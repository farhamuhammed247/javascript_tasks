document.getElementById("startButton").addEventListener("click", function() {
    setTimeout(function() {
      alert("3 seconds have passed!");
    }, 3000);
  });

/////////////////////////////////////

// let newWindow = null;
// var newWindow;
// function openWindow() {
//     let color;
//     if (document.getElementById('greenRadio').checked) {
//         color = 'lightgreen';
//     } else if (document.getElementById('light-yellow').checked) {
//         color = 'lightyellow';
//     } else if (document.getElementById('pink').checked) {
//         color = 'pink';
//     } else {
//         alert('Please select a color to open the window.');
//         return;
//     }

//     // Open a new window
//     newWindow = window.open('', '', 'width=600,height=400');

//     // Set the background color and write text to the new window's document
//     newWindow.document.write(`
//         <html>
//         <head>
//             <title>New Window</title>
//             <style>
//                 body { background-color: ${color}; color: black; font-size: 24px; }
//             </style>
//         </head>
//         <body>
//             <p>This is the new window</p>
//         </body>
//         </html>
        
//     `);

//     newWindow.document.close();
//     // newWindow.focus();
//     document.getElementById('closeWindowButton').disabled = false;
// }

// function closeWindow() {
//     if (newWindow && !newWindow.closed) {
//       newWindow.close();
//       newWindow = null; // Set newWindow to null after closing the window
//       document.getElementById('closeWindowButton').disabled = true;
//     }
// }

// document.getElementById("startButton").addEventListener("click", function() {
//     setTimeout(function() {
//       alert("3 seconds have passed!");
//     }, 3000);
//   });

/////////////////////////////////////

// let newWindow = null;
var newWindow;
function openWindow() {
    let color;
    if (document.getElementById('greenRadio').checked) {
        color = 'lightgreen';
       

    } else if (document.getElementById('light-yellow').checked) {
        color = 'lightyellow';
        

    } else if (document.getElementById('pink').checked) {
        color = 'pink';
      


    } else {
        alert('Please select a color to open the window.');
        return;
    }

    // Open a new window
    newWindow = window.open('', '', 'width=600,height=400');

    // Set the background color and write text to the new window's document
    newWindow.document.write(`
        <html>
        <head>
            <title>New Window</title>
            <style>
                body { background-color: ${color}; color: black; font-size: 24px; }
            </style>
        </head>
        <body>
            <p>This is the new window</p>
        
        </body>
        </html>
        
    `);

    newWindow.document.close();
    document.getElementById('closeWindowButton').disabled = false;
}

function closeWindow() {
    if (newWindow && !newWindow.closed) {
      newWindow.close();
      newWindow = null; // Set newWindow to null after closing the window
      document.getElementById('closeWindowButton').disabled = true;
    }
}

function checked() {
    if (newWindow && !newWindow.closed) {
      closeWindow(); 
      alert('false'); // Close the window if it's open
    } else {
      alert('true'); // Display alert if no window is open
    }
}