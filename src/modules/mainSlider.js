const mainSlider = () => {
   const slider = document.querySelector('.main-slider'), 
   slide = slider.querySelectorAll('.slide');
      
   let currentSlide = 0,
      interval;
      
   const prevSlide = (elem, index) => {
      elem[index].style.cssText= `
      opacity: 0;
      transition: opacity 1s;
      `;
   };

   const nextSlide = (elem, index) => {
      elem[index].style.cssText= `
      opacity: 1;
      transition: opacity 1s;
      `;
   };

   const autoPlaySlide = () => {
      prevSlide(slide, currentSlide);
      currentSlide++;
      if (currentSlide >= slide.length) {
         currentSlide = 0;
      }
      nextSlide(slide, currentSlide);
   };

   const startSlide = (time = 1000) => {
      interval = setInterval(autoPlaySlide, time);
   };

   const stopSlide = () => {
      clearInterval(interval);
   };
   startSlide(3000);
};

export default mainSlider;