/* Function
 * When the share-button is clicked, the popup overlay with links to share
 * the article to social media opens. The author-info is replaced by the
 * overlay. Clicking the button again will close the popup.
 */

const shareButton = document.querySelector(".author-info__button");
const sharePopup = document.getElementById("share-popup");

shareButton.addEventListener("click", () => {
  // Toggle the .active class on both the button and the popup.
  shareButton.classList.toggle("active");
  sharePopup.classList.toggle("active");
});
