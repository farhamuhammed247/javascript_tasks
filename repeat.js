document.addEventListener('DOMContentLoaded', () => {
    const imageContainer = document.getElementById('imageContainer'); // Correct ID
    
    const ss = [
        "vintage-old-books-on-wooden-deck-table-background-free-photo.jpg",
        "download (2).jfif",
        "download (3).jfif",
        "download (10).jfif",
        "download.jfif",
        "images (5).jfif",
        "images (6).jfif",
        "images (7).jfif"
    ];

    let currentIndex = 0;
    let intervalId;
    let lastDisplayedIndex = 0; // Track the last displayed image index

    function startImageSwap(startIndex) {
        let i = startIndex; // Start from the specified index
        intervalId = setInterval(() => {
            imageContainer.src = imageSources[i];
          lastDisplayedIndex = i; // Update the last displayed index
          i = (i + 1) % imageSources.length;
        }, 500); // Change image every 500ms (0.5 seconds)
      }
  
      function stopImageSwap() {
        clearInterval(intervalId); // Stop looping
        imageContainer.src = imageSources[lastDisplayedIndex]; // Display the last displayed image
      }
  
      imageContainer.addEventListener('mouseover', () => {
        startImageSwap(lastDisplayedIndex); // Start swapping from the last displayed image
      });
  
      imageContainer.addEventListener('mouseout', () => {
        stopImageSwap(); // Stop swapping images
      });})