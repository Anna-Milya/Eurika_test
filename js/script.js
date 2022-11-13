
// slider

// const output = document.getElementById("demo");
// const slider = document.getElementById("myRange");
// output.innerHTML = (slider - range).value;

// (slider - range).oninput = function () {
//    output.innerHTML = this.value;
// }



//Slider for certificate section

$(document).ready(function () {
   $('.slider').slick({
      arrows: true,
      slidesToShow: 3,
      appendArrows: $('.slider-arrows-container'),
      variableWidth: true,
      centerMode: true,
      responsive: [
         {
            breakpoint: 768,
            settings: {
               variableWidth: false,
               centerMode: false,
               slidesToShow: 2,
            }
         }
      ]

   });
});

//Slider for partners section

$(document).ready(function () {
   $('.slider-partners').slick({
      arrows: false,
      dots: true,
      slidesToShow: 3,
      adaptiveHeight: true,
      variableWidth: true,
      mobilleFirst: true,
      responsive: [
         {
            breakpoint: 768,
            settings: {
               centerMode: true,
               slidesToShow: 1,
            }
         },
         {
            breakpoint: 320,
            settings: {
               centerMode: true,
               slidesToShow: 1,
               adaptiveHeight: false,
               variableWidth: false,
            }
         },

      ]

   });
});

//Slider for reviews section

$(document).ready(function () {
   $('.review-slider').slick({
      arrows: true,
      slidesToShow: 2,
      appendArrows: $('.review-arrows-container'),
      responsive: [
         {
            breakpoint: 960,
            settings: {
               // variableWidth: true,
               // centerMode: true,
               slidesToShow: 2,
            }
         }
      ]



   });
});



//Masked input

// Код jQuery, установливающий маску для ввода телефона элементу input
// 1. После загрузки страницы, когда все элементы будут доступны выполнить...
$(document).ready(function () {
   //2. Получить элемент, к которому необходимо добавить маску
   $(".phone").mask("+7(999) 999-9999");
});

// $("#phone").mask("+7 (999) 999-99-99");




