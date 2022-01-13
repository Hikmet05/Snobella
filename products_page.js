$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    autoplay: 2000,
    nav: true,
    dots: false,
    responsiveClass: true,
    smartSpeed: 1050,
    navText: ["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-right'></i>"],
    responsive: {
      0: {
        items: 1.5
      },
      600: {
        items: 2
      },
      1000: {
        items: 2.6
      },
      1200: {
        items: 3
      }
    }
  })

  //>>>>>>>>>>>>>>> PRODUCTS_PAGE >>>>>>>>>>>>>>>

let descriptionBtn = document.getElementById('description');
let reviewBtn = document.getElementById('review');
let descriptionText = document.querySelector('.description');
let reviewText = document.querySelector('.review');

reviewBtn.addEventListener('click', () => {
  reviewText.classList.remove('on_off');
  descriptionText.classList.add('on_off');
  descriptionBtn.classList.remove('description_reviewBtnColor');
  reviewBtn.classList.add('description_reviewBtnColor')
});
descriptionBtn.addEventListener('click', () => {
  reviewText.classList.add('on_off');
  descriptionText.classList.remove('on_off');
  reviewBtn.classList.remove('description_reviewBtnColor');
  descriptionBtn.classList.add('description_reviewBtnColor')
})