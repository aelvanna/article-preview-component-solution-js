/* ============================================================================*/
/* Function
/* When the share-button is clicked, open the popup overlay with sharing options.
/* The author-info is replaced by the overlay. Clicking the button again will
/* close the popup.
/*=============================================================================*/

/* Select the share button and the popup element. */
const shareButton = document.querySelector(".author-info__button");
const sharePopup = document.querySelector(".share-popup");

/* Toggle the popup visibility via an EventListener. */
shareButton.addEventListener("click", () => {
  /* Toggle the .active class on both the button and the popup. */
  shareButton.classList.toggle("active");
  sharePopup.classList.toggle("active");
});
