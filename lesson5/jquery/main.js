// const jQuery = {
//   hide: function(selector) {
//     const el = document.querySelector(selector);
//     el.style.display = "none";
//   },
//   show: function(selector) {
//     const el = document.querySelector(selector);
//     el.style.display = "block";
//   }
// };

// function $(selector) {
//   return {
//     el: document.querySelector(selector),
//     hide: function() {
//       this.el.style.display = "none";
//       return this;
//     },
//     show: function() {
//       this.el.style.display = "block";
//       return this;
//     }
//   };
// }

// $(".box").hide();

// const images = ["1.jpg", "2.jpg", "3.jpg"];
// const initialSlide = 1;

// images.forEach((img, index) => {
//   $(".slider__controls").append(
//     `<div data-slide="${index}" class="slider__control">`
//   );
// });

// function setSlide(slideNum) {
//   $(".slider__container").css(
//     "background-image",
//     `url("../../img/${images[slideNum]}")`
//   );

//   $(`.slider__control`).removeClass("slider__control--isActive");
//   $(`.slider__control[data-slide="${slideNum}"]`).addClass(
//     "slider__control--isActive"
//   );
// }

// $(".slider__control").click(e => {
//   const newSLide = +$(e.target).attr("data-slide");
//   setSlide(newSLide);
// });

// setSlide(initialSlide);
