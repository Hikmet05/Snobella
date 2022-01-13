var url = 'https://sheet2api.com/v1/qT6duVtCTT2n/snobella/Sayfa1';

let basket = document.querySelector('.basketBody')
fetch(url)
    .then(response => response.json())
    .then(data => {
        data.map(e => {
            basket.innerHTML += `
            <div class="cart me-3">
            <div class="cart-img text-center" style="height:250px;">
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
                <a href="#" class="btn btn-danger d-block" onclick="removeThis(${e.id})">Delete</a>
            </div>
            </div>
             `
        })
    })
    .catch((error) => {
        console.error('Error:', error);
    });


function empty() {
    if(basket.innerHTML == "" && basket.innerText == "") {
        basket.innerHTML = '<h1 class="text-center me-5" style="font-weight:700;color:grey;">Basket is Empty...</h1> <a href="index.html" class="text-center d-block" style="color:#000;text-decoration:underline !important;">Back Home</a>'
    }
}
empty()

function removeThis(id) {


    var query_params = new URLSearchParams({
        'id': id
    });
    var url = 'https://sheet2api.com/v1/qT6duVtCTT2n/snobella/Sayfa1?' + query_params;

    fetch(url, {
        method: 'DELETE'
    })
        .then(response => response.text())
        .then(data => {
            window.location.reload()
        })
        .catch((error) => {
            console.error('Error:', error);
        });

        empty()
}