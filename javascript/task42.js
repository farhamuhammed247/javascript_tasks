window.addEventListener('DOMContentLoaded', function() {
    var textBox = document.getElementById('textBox');

    textBox.addEventListener('keydown', function(event) {
      alert('Key code pressed: ' + event.keyCode);
    });

    textBox.addEventListener('mousedown', function(event) {
      alert('Mouse button clicked: ' + event.button);
    });
  });



  ////////////////////
  window.addEventListener('DOMContentLoaded', function() {
    var textBox = document.getElementById('textBox');
    var startClockButton = document.getElementById('startClockButton');
    var clockDiv = document.getElementById('clockDiv');

    textBox.addEventListener('keydown', function(event) {
      alert('Key code pressed: ' + event.keyCode);
    });

    textBox.addEventListener('mousedown', function(event) {
      alert('Mouse button clicked: ' + event.button);
    });

    startClockButton.addEventListener('click', function() {
      alert('Clock Started');
      startClock();
    });

    function startClock() {
      setInterval(function() {
        var currentTime = new Date().toLocaleTimeString();
        clockDiv.textContent = currentTime;
      }, 1000);
    }
  });