export class Carousel {
  constructor() {
    console.log("salut")
    document.addEventListener('DOMContentLoaded', () => {
      const carouselContainer = document.querySelector('.carousel-container');
      const prevButton = document.querySelector('.carousel-prev');
      const nextButton = document.querySelector('.carousel-next');
      const cardWidth = carouselContainer.offsetWidth / 6;
      let currentPosition = 0;
      console.log(nextButton)

      prevButton.addEventListener('click', () => {
        console.log("salut")
        currentPosition -= cardWidth;
        carouselContainer.style.transform = `translateX(-${currentPosition}px)`;
      });

      nextButton.addEventListener('click', () => {
        currentPosition += cardWidth;
        carouselContainer.style.transform = `translateX(-${currentPosition}px)`;
      });
    });
  }
}
