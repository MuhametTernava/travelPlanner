
const popup = document.getElementById("popup");
const popupImage = document.getElementById("popup-image");
const popupImageSecond = document.getElementById("secondImage");
const popupImageThird = document.getElementById("thirdImage");
const popupImageFourth = document.getElementById("fourthImage");
const popupDescription = document.getElementById("popup-description");
const popupName = document.getElementById("popup-name");
const popupPrice = document.getElementById("popup-price");
const closeButton = document.getElementById("close-button");

function openPopup(destination) {
  popupImage.src = destination.image;
  popupImageSecond.src = destination.secondImage;
  popupImageThird.src = destination.thirdImage;
  popupImageFourth.src = destination.fourthImage;
  popupDescription.textContent = destination.description;
  popupName.textContent = "Destination: " + destination.name;
  popupPrice.textContent = "Price: " + destination.price + " €";

  popup.style.display = "block";
}

const destinationElements =
  destinationsContainer.querySelectorAll(".places-item");
destinationElements.forEach((element, index) => {
  element.addEventListener("click", () => {
    openPopup(destinations[index]);
  });
});

closeButton.addEventListener("click", () => {
  popup.style.display = "none";
});
