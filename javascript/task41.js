function validateForm() {
    var name = document.getElementById("name").value;
    var agreeCheckbox = document.getElementById("agree").checked;
    
    if (name === "") {
      alert("Please enter your name.");
      return false;
    }
    
    if (!agreeCheckbox) {
      alert("Please agree to the terms and conditions.");
      return false;
    }
    
    // If all validation passes, submit the form and display the data in the URL
    var formData = new URLSearchParams(new FormData(document.getElementById("regForm")));
    window.location.href = "?" + formData.toString();
    return true;
  }