/* Function
 * When the share-button is clicked, open the popup overlay with sharing options.
 * The author-info is replaced by the overlay. Clicking the button again will close the popup. */

// Find the share button and the popup element.
const shareButton = document.querySelector(".author-info__button");
const sharePopup = document.getElementById("share-popup");

// Add an event listener to the button to toggle the popup visibility.
shareButton.addEventListener("click", () => {
  // Toggle the .active class on both the button and the popup.
  shareButton.classList.toggle("active");
  sharePopup.classList.toggle("active");
});
