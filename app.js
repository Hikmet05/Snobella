const gap = 16;

const carousel = document.querySelector(".carousel"),
  content = document.querySelector(".content"),
  next = document.querySelector(".next"),
  prev = document.querySelector(".prev");

next.addEventListener("click", () => {
  console.log('true');
  carousel.scrollBy(width + gap, 0);
  if (carousel.scrollWidth !== 0) {
    prev.style.display = "flex";
  }
  if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "none";
  }
});
prev.addEventListener("click", e => {
  carousel.scrollBy(-(width + gap), 0);
  if (carousel.scrollLeft - width - gap <= 0) {
    prev.style.display = "none";
  }
  if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "flex";
  }
});

let width = carousel.offsetWidth;
window.addEventListener("resize", e => (width = carousel.offsetWidth));



let carousello1 = document.querySelector('.test1');
let carousello2 = document.querySelector('.test2');
let carousello3 = document.querySelector('.test3');
async function karusel() {
  await fetch('products.json')
    .then(res => res.json())
    .then(data => data.map(e => {
      carousello1.innerHTML += `
<div class="cart">
<div class="cart-img text-center">
    <img src="./img/${e.img}" alt="">
</div>
<span class="new">New</span>
<span class="favorite">
    <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M10.9997 18.25L9.67051 17.0631C4.94967 12.8639 1.83301 10.0944 1.83301 6.6955C1.83301 3.92602 4.05134 1.75 6.87467 1.75C8.46967 1.75 10.0005 2.47834 10.9997 3.62929C11.9988 2.47834 13.5297 1.75 15.1247 1.75C17.948 1.75 20.1663 3.92602 20.1663 6.6955C20.1663 10.0944 17.0497 12.8639 12.3288 17.0721L10.9997 18.25Z"
            stroke="#DF4244" stroke-width="2" stroke-linecap="square" />
    </svg>
</span>
<div class="cart-body">
    <span class="rate">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
    </span>
    <p class="cart-text">${e.description}</p>
    <span class="price d-block mb-3">$${e.price} <span class="mute d-inline-block ms-3">From
            $340.00</span></span>
    <a href="products_page.html" class="btn btn-success d-block mb-2">Details</a>
    <a href="#" class="btn btn-danger d-block" onclick="addToBasket(${e.id})">Add to card</a>
</div>
</div>
  `
      carousello2.innerHTML += `
<div class="cart">
<div class="cart-img text-center">
    <img src="./img/${e.img}" alt="">
</div>
<span class="new">New</span>
<span class="favorite">
    <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M10.9997 18.25L9.67051 17.0631C4.94967 12.8639 1.83301 10.0944 1.83301 6.6955C1.83301 3.92602 4.05134 1.75 6.87467 1.75C8.46967 1.75 10.0005 2.47834 10.9997 3.62929C11.9988 2.47834 13.5297 1.75 15.1247 1.75C17.948 1.75 20.1663 3.92602 20.1663 6.6955C20.1663 10.0944 17.0497 12.8639 12.3288 17.0721L10.9997 18.25Z"
            stroke="#DF4244" stroke-width="2" stroke-linecap="square" />
    </svg>
</span>
<div class="cart-body">
    <span class="rate">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
    </span>
    <p class="cart-text">${e.description}</p>
    <span class="price d-block mb-3">$${e.price} <span class="mute d-inline-block ms-3">From
            $340.00</span></span>
    <a href="products_page.html" class="btn btn-success d-block mb-2">Details</a>
    <a href="#" class="btn btn-danger d-block" onclick="addToBasket(${e.id})">Add to card</a>
</div>
</div>
  `
      carousello3.innerHTML += `
<div class="cart">
<div class="cart-img text-center">
    <img src="./img/${e.img}" alt="">
</div>
<span class="new">New</span>
<span class="favorite">
    <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M10.9997 18.25L9.67051 17.0631C4.94967 12.8639 1.83301 10.0944 1.83301 6.6955C1.83301 3.92602 4.05134 1.75 6.87467 1.75C8.46967 1.75 10.0005 2.47834 10.9997 3.62929C11.9988 2.47834 13.5297 1.75 15.1247 1.75C17.948 1.75 20.1663 3.92602 20.1663 6.6955C20.1663 10.0944 17.0497 12.8639 12.3288 17.0721L10.9997 18.25Z"
            stroke="#DF4244" stroke-width="2" stroke-linecap="square" />
    </svg>
</span>
<div class="cart-body">
    <span class="rate">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
    </span>
    <p class="cart-text">${e.description}</p>
    <span class="price d-block mb-3">$${e.price} <span class="mute d-inline-block ms-3">From
            $340.00</span></span>
    <a href="products_page.html" class="btn btn-success d-block mb-2">Details</a>
    <a href="#" class="btn btn-danger d-block" onclick="addToBasket(${e.id})">Add to card</a>
</div>
</div>
 `
    }))

  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    autoplay: 2000,
    nav: true,
    dots: false,
    responsiveClass: true,
    smartSpeed: 1050,
    touchDrag: false,
    mouseDrag: false,
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

}

function addToBasket(id) {
  let filtered;
  
  fetch('products.json').then(res => res.json())
    .then(data => {
      filtered = data.filter(e => e.id == id)[0]

      var url = 'https://sheet2api.com/v1/qT6duVtCTT2n/snobella/Sayfa1';

      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(filtered),
      })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    })



}

karusel()





//>>>>>>>>>>>>>>>>>>>>>> LOGIN >>>>>>>>>>>>>>>>
