const userTestimonials = [
  {
    userName: "Angelina Simple",
    userImage: "./media/testimonial1.png",
    userDescription:
      "I had the most amazing experience with TravelPlanner! From the breathtaking destinations to the seamless arrangements, every moment was a dream come true. I can't wait to embark on my next adventure with them.",
  },
  {
    userName: "Viola Natalie",
    userImage: "./media/testimonial2.png",
    userDescription:
      "TravelPlanner truly understands the essence of wanderlust. Their attention to detail and personalized itineraries made my trip unforgettable. I'm grateful for the memories that will last a lifetime.",
  },
  {
    userName: "Robert John K.",
    userImage: "./media/testimonial3.png",
    userDescription:
      "From the moment I booked my trip, TravelPlanner's team was there to assist me. Their knowledgeable guides and top-notch service made me feel like a VIP. I can't recommend them enough!",
  },
  {
    userName: "Anggi Nani",
    userImage: "./media/testimonial4.png",
    userDescription:
      "Traveling with TravelPlanner was a game-changer. They took care of everything, allowing me to focus on enjoying my journey. Their selection of destinations is unparalleled, and I can't wait to explore more with them..",
  },
  {
    userName: "Graham Suryo J",
    userImage: "./media/testimonial5.png",
    userDescription:
      "I've always been hesitant about group tours, but TravelPlanner changed my perspective. The group dynamics were fantastic, and I made lifelong friends. Their commitment to responsible travel and cultural immersion is commendable.",
  },
  {
    userName: "Bagas G Nafti",
    userImage: "./media/testimonial6.png",
    userDescription:
      "TravelPlanner turned my solo trip into a masterpiece. The attention they paid to my preferences and interests was incredible. It's the little touches that made me feel valued and cared for throughout my journey.",
  },
];

function generateTestimonialHTML(testimonial) {
  return `
        <div class="d-flex flex-column justify-start align-start w-33 mb-20 p-20">
          <div class="d-flex justify-start align-start margin-0">
              <div class="person-image">
                  <img src="${testimonial.userImage}" alt="${testimonial.userName}  class="image1"" />
              </div>
              <div class="ml-10 color-white">
                  <h3>${testimonial.userName}</h3>
              </div>
          </div>
          <div>
            <p class="color-white">${testimonial.userDescription}</p>
          </div>
        </div>
      `;
}
const testimonialsContainer = document.querySelector(
  ".d-flex.align-center.flex-wrap.w-full"
);
userTestimonials.forEach((testimonial) => {
  const testimonialHTML = generateTestimonialHTML(testimonial);
  testimonialsContainer.insertAdjacentHTML("beforeend", testimonialHTML);
});
