const selectDestinations = [
  {
    name: "Machu Picchu, Peru",
    image: "../media/machu-picchu1.png",
    secondImage: "../media/machu-picchu2.png",
    thirdImage: "../media/machu-picchu3.png",
    fourthImage: "../media/machu-picchu4.png",
    description:
      "It's no wonder Machu Picchu is Peru's most-visited site. Dating to the mid-1400s, it's a marvel of mortar-free limestone architecture perched on a high plateau deep in the Amazonian jungle. Get there via train from Cusco or, if you're not faint-hearted, make the trip on foot via a multi-day hiking trail—you'll travel through deep Andean gullies and enjoy stunning views.",
    price: 1500,
    duration: "7 days for trips",
  },
  {
    name: "Na Pali Coast, Hawaii",
    image: "../media/NaPali1.png",
    secondImage: "../media/NaPali2.png",
    thirdImage: "../media/NaPali3.png",
    fourthImage: "../media/NaPali4.png",
    description:
      "Napali Coast State Wilderness Park lies in the northwest of Kauai Island, Hawaii. It is known for its towering pali, or sea cliffs, punctuated by narrow valleys, streams and cascading waterfalls. The Kalalau Trail is a steep footpath running through the park, between nearby Kee Beach and sandy Kalalau Beach.",
    price: 2000,
    duration: "9 days for trips",
  },
  {
    name: "Reynisfjara, Iceland",
    image: "../media/place3.png",
    secondImage: "../media/place2.png",
    thirdImage: "../media/place4.png",
    fourthImage: "../media/place1.png",
    description:
      "Reynisdrangar are basalt sea stacks situated under the mountain Reynisfjall near the village Vík í Mýrdal in southern Iceland. It is framed by a black sand beach that was ranked in 1991 as one of the ten most beautiful non-tropical beaches in the world",
    price: 3000,
    duration: "9 days for trips",
  },
  {
    name: "Cliffs of Moher, Ireland",
    image: "../media/place4.png",
    secondImage: "../media/place3.png",
    thirdImage: "../media/place5.png",
    fourthImage: "../media/place1.png",
    description:
      "Spectacular cliffs stretching 700 feet over the rugged Atlantic coast is part of the Burren and Cliffs of Moher UNESCO Geopark and is a Special Protected Area for Birds and Wildlife, home to 35 species of birds. The Cliffs of Moher Visitor Experience operates under an ethos of sustainability, environmental protection and conservation. ",
    price: 3000,
    duration: "9 days for trips",
  },
  {
    name: "Mount Fuji, Japan",
    image: "../media/place1.png",
    secondImage: "../media/NaPali1.png",
    thirdImage: "../media/grandcanyon1.png",
    fourthImage: "../media/place4.png",
    description:
      "Four routes, each divided into ten sections by stopping and refueling stations, lead up to Mt. Fuji's snow-covered tip. You don't have to be a die-hard mountaineer to climb Mt. Fuji; the slopes are full of children and adults of all ages, shapes, and sizes.",
    price: 3000,
    duration: "9 days for trips",
  },
  {
    name: "The Grand Canyon, Arizona",
    image: "../media/grandcanyon1.png",
    secondImage: "../media/grandcanyon2.png",
    thirdImage: "../media/grandcanyon3.png",
    fourthImage: "../media/grandcanyon4.png",
    description:
      "The most developed area of Grand Canyon National Park, the South Rim offers amenities such as bus service, hotels and water stations, but is also more crowded than the North Rim. Scenic highlights include Pipe Creek Vista and Yavapai Point.",
    price: 3000,
    duration: "9 days for trips",
  },
];

function generateDestinationHTML(destination) {
  return `
        <article class="d-flex flex-column justify-between align-start p-20 bg-white">
          <div class="api-container w-full text-center color-white font-20">
          <div class="popup-images">
            <img class="d-image" src="${destination.image}" alt="city" />
            <img class="d-image" src="${destination.secondImage}" alt="city" />
            <img class="d-image" src="${destination.thirdImage}" alt="city" />
            </div>
            <span class="color-grey popup-name">${destination.name}</span>
            <p class="popup-description">
              ${destination.description}
            </p>
            <p class="color-grey">
              <span class="popup-price">Price: ${destination.price}€</span>
            </p>
          </div>
        </article>
      `;
}

document
  .getElementById("search-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const destinationName = document.getElementById("city").value.trim();
    const selectedDestination = selectDestinations.find(
      (dest) =>
        dest.name.toLowerCase().includes(destinationName.toLowerCase()) ||
        dest.name.split(",")[0].toLowerCase() === destinationName.toLowerCase()
    );

    const mainContentElement = document.querySelector(".main-content");

    if (selectedDestination && destinationName.length > 5) {
      const destinationHTML = generateDestinationHTML(selectedDestination);
      mainContentElement.innerHTML = destinationHTML;
    } else if (destinationName.length <= 5) {
      mainContentElement.innerHTML = `
        <div class="d-flex flex-column justify-between align-start p-20 bg-white">
          <p class="color-red">Please enter a longer search term.</p>
        </div>`;
    } else {
      mainContentElement.innerHTML = `
        <div class="d-flex flex-column justify-between align-start p-20 bg-white">
          <p class="color-red">Destination "${destinationName}" is not available in our database.</p>
        </div>`;
    }
  });
