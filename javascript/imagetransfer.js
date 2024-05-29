document.addEventListener('DOMContentLoaded', () => {
    const imageContainer = document.getElementById('imageContainer'); // Correct ID
    const ss = [
        "imagesss/download (1).jfif",
        "imagesss/download (2).jfif",
        "imagesss/download (3).jfif",
        "imagesss/download (10).jfif",
        "imagesss/download.jfif",
        "imagesss/images (5).jfif",
        "imagesss/images (6).jfif",
        "imagesss/images (7).jfif"
    ];

    let currentIndex = 0;
    let intervalId;
    let lastDisplayedIndex = 0; // Track the last displayed image index

    function startImageSwap(startIndex) {
        intervalId = setInterval(() => {
            const img = document.createElement("img");
            img.src = ss[startIndex]; // Set the image source to the current index
            imageContainer.innerHTML = ""; // Clear the container
            imageContainer.appendChild(img); // Append the new image
            lastDisplayedIndex = startIndex; // Update the last displayed index
            startIndex = (startIndex + 1) % ss.length; // Increment the index, wrapping around the array if necessary
        }, 500); // Change image every 500ms (0.5 seconds)
    }

    function stopImageSwap() {
        clearInterval(intervalId); // Stop looping
        const img = document.createElement("img");
        img.src = ss[lastDisplayedIndex]; // Display the last displayed image
        imageContainer.innerHTML = ""; // Clear the container
        imageContainer.appendChild(img); // Append the last displayed image
    }

    imageContainer.addEventListener('mouseover', () => {
        startImageSwap(lastDisplayedIndex); // Start swapping from the last displayed image
    });

    imageContainer.addEventListener('mouseout', () => {
        stopImageSwap(); // Stop swapping images
    });

    // Start image swapping as soon as the DOM is loaded
    startImageSwap(0);
});
