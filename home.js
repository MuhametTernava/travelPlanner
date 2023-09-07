const destinations = [
  {
    name: "Machu Picchu, Peru",
    image: "./media/machu-picchu1.png",
    secondImage: "./media/machu-picchu2.png",
    thirdImage: "./media/machu-picchu3.png",
    fourthImage: "./media/machu-picchu4.png",
    description:
      "It's no wonder Machu Picchu is Peru's most-visited site. Dating to the mid-1400s, it's a marvel of mortar-free limestone architecture perched on a high plateau deep in the Amazonian jungle. Get there via train from Cusco or, if you're not faint-hearted, make the trip on foot via a multi-day hiking trail—you'll travel through deep Andean gullies and enjoy stunning views.",
    price: 1500,
    duration: "7 days for trips",
  },
  {
    name: "Na Pali Coast, Hawaii",
    image: "./media/NaPali1.png",
    secondImage: "./media/NaPali2.png",
    thirdImage: "./media/NaPali3.png",
    fourthImage: "./media/NaPali4.png",
    description:
      "Napali Coast State Wilderness Park lies in the northwest of Kauai Island, Hawaii. It is known for its towering pali, or sea cliffs, punctuated by narrow valleys, streams and cascading waterfalls. The Kalalau Trail is a steep footpath running through the park, between nearby Kee Beach and sandy Kalalau Beach.",
    price: 2000,
    duration: "9 days for trips",
  },
  {
    name: "Reynisfjara, Iceland",
    image: "./media/place3.png",
    secondImage: "./media/place2.png",
    thirdImage: "./media/place4.png",
    fourthImage: "./media/place1.png",
    description:
      "Reynisdrangar are basalt sea stacks situated under the mountain Reynisfjall near the village Vík í Mýrdal in southern Iceland. It is framed by a black sand beach that was ranked in 1991 as one of the ten most beautiful non-tropical beaches in the world",
    price: 3000,
    duration: "9 days for trips",
  },
  {
    name: "Cliffs of Moher, Ireland",
    image: "./media/place4.png",
    secondImage: "./media/place3.png",
    thirdImage: "./media/place5.png",
    fourthImage: "./media/place1.png",
    description:
      "Spectacular cliffs stretching 700 feet over the rugged Atlantic coast is part of the Burren and Cliffs of Moher UNESCO Geopark and is a Special Protected Area for Birds and Wildlife, home to 35 species of birds. The Cliffs of Moher Visitor Experience operates under an ethos of sustainability, environmental protection and conservation. ",
    price: 3000,
    duration: "9 days for trips",
  },
  {
    name: "Mount Fuji, Japan",
    image: "./media/place1.png",
    secondImage: "./media/NaPali1.png",
    thirdImage: "./media/grandcanyon1.png",
    fourthImage: "./media/place4.png",
    description:
      "Four routes, each divided into ten sections by stopping and refueling stations, lead up to Mt. Fuji's snow-covered tip. You don't have to be a die-hard mountaineer to climb Mt. Fuji; the slopes are full of children and adults of all ages, shapes, and sizes.",
    price: 3000,
    duration: "9 days for trips",
  },
  {
    name: "The Grand Canyon, Arizona",
    image: "./media/grandcanyon1.png",
    secondImage: "./media/grandcanyon2.png",
    thirdImage: "./media/grandcanyon3.png",
    fourthImage: "./media/grandcanyon4.png",
    description:
      "The most developed area of Grand Canyon National Park, the South Rim offers amenities such as bus service, hotels and water stations, but is also more crowded than the North Rim. Scenic highlights include Pipe Creek Vista and Yavapai Point.",
    price: 3000,
    duration: "9 days for trips",
  },
];
function generateDestinationHTML(destination) {
  return `
    <div class="d-flex justify-between align-center flex-wrap">
     
        <div class="places-item">
        <a href="#">
          <div>
            <img class="destinationImage" src="${destination.image}" />
          </div>
          <div>
            <h4>${destination.name}</h4>
          </div>
          <div class="place-info">
            <h5>${destination.price} €</h5>
            <div class="d-flex justify-center align-center h-20">
              <img
                class="mt-10 mr-10 h-20"
                src="./media/location.png"
                alt="location"
              />
              <p>${destination.duration}</p>
            </div>
          </div>
          </a>
        </div>
    
      </div>
    `;
}

const destinationsContainer = document.querySelector(
  ".d-flex.justify-between.align-center.flex-wrap"
);

destinations.forEach((destination) => {
  const destinationHTML = generateDestinationHTML(destination);
  destinationsContainer.insertAdjacentHTML("beforeend", destinationHTML);
});
