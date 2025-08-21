const cartIcon = document.querySelector("#cart-icon")
const cart = document.querySelector(".cart")
const cartClose = document.querySelector("#cart-close");
cartIcon.addEventListener('click', () => cart.classList.add('active'));
cartClose.addEventListener('click', () => cart.classList.remove('active'));
let cartItemCount = 0;

const addCartButtons = document.querySelectorAll('.add-cart');

addCartButtons.forEach(button => {
    button.addEventListener("click", event => {
        const productBox = event.target.closest(".product-box");
        addToCart(productBox)
    })
})
const shopItems = grabItems();
const cartContent = document.querySelector(".cart-content");
shopItems.map((item) => {
    const cartBoxFromStorage = document.createElement('div');
    cartBoxFromStorage.classList.add('cart-box')
    cartBoxFromStorage.innerHTML = `
<img src="${item.img}" alt="cart-img">
            <div class="cart-detail">
                <h2 class="cart-product-title">${item.title}</h2>
                <span class="cart-price">${item.price}</span>
                <div class="cart-quantity">
                    <button class="${item.title.split(' ').join('-')}" id="decrement">-</button>
                    <span class="number">${item.qty}</span>
                    <button class="${item.title.split(' ').join('-')}" id="increment">+</button>
                </div>
            </div>
            <i class="cart-remove">🗑</i>
`;
    cartContent.appendChild(cartBoxFromStorage)
    // location.reload()
});



function addToCart (productBox){
    const productImgSrc = productBox.querySelector("img").src;
    const productTitle = productBox.querySelector(".product-title").textContent;
    const productPrice = productBox.querySelector(".price").textContent;

    const cartItems = cartContent.querySelectorAll(".cart-product-title");

    for (let item of cartItems) {

        if (item.textContent === productTitle) {
            alert("This item is already in the cart.");
            return;
        }
    }
    const cartBox = document.createElement('div');

    cartBox.classList.add("cart-box");

    const shopItem = {
        img: productImgSrc,
        title: productTitle,
        price: +(productPrice.slice(1)),
        qty: 1
    }

    saveCart(shopItem);

    // Grab from local storage to display it the cart
    const shopItems = grabItems();
    shopItems.map((item) => {
        cartBox.innerHTML = `
    <img src="${item.img}" alt="cart-img">
                <div class="cart-detail">
                    <h2 class="cart-product-title">${item.title}</h2>
                    <span class="cart-price">${item.price}</span>
                    <div class="cart-quantity">
                        <button class="${item.title.split(' ').join('-')}" id="decrement">-</button>
                        <span class="number">${item.qty}</span>
                        <button class="${item.title.split(' ').join('-')}" id="increment">+</button>
                    </div>
                </div>
                <i class="cart-remove">🗑</i>
    `;
    })
    cartContent.appendChild(cartBox);

    cartBox.querySelector(".cart-remove").addEventListener("click", () => {
        cartBox.remove();

        updateCartCount(-1);

        updateTotalPrice();
    });
    location.reload()
};

document.querySelectorAll(".cart-quantity").forEach(el => {

    el.addEventListener("click", event => {
        console.log(event.target)
        const numberElement = el.querySelector(".number");
        const decrementButton = el.querySelector("#decrement");
        let quantity = numberElement.textContent;

        if (event.target.id === "decrement" && quantity > 1) {
            quantity--;
            if (quantity === 1) {
                decrementButton.style.color = "#999";
            }
        } else if (event.target.id === "increment") {
            quantity++;
            decrementButton.style.color = "#333";
        }
        const shopItems = grabItems();

        for (let item of shopItems) {
            if (item.title === event.target.classList[0].split('-').join(' ')) {
                item.qty = quantity;
                saveCart(item)
                break;
            }
        }
        numberElement.textContent = quantity;
        updateTotalPrice();
        
    });
    updateCartCount(1);
    updateTotalPrice();
})

// addToCart()
function updateTotalPrice (){
    const totalPriceElement = document.querySelector(".total-price");
    const cartBoxes = cartContent.querySelectorAll(".cart-box");
    let total = 0;
    cartBoxes.forEach(cartBox => {
        const pricElement = cartBox.querySelector(".cart-price");
        const quantityElement = cartBox.querySelector(".number");
        const price = pricElement.textContent.replace("$", "");
        const quantity = quantityElement.textContent;
        total += price * quantity;
    });
    totalPriceElement.textContent = `$${total.toFixed(2)}`;
};


function updateCartCount(change) {
    const cartItemCountBadge = document.querySelector(".cart-item-count");
    cartItemCount += change;
    if (cartItemCount > 0) {
        cartItemCountBadge.style.visibility = "visible";
        cartItemCountBadge.textContent = cartItemCount;
    } else {
        cartItemCountBadge.style.visibility = "hidden";
        cartItemCountBadge.textContent = "";
    }
};

function saveCart(obj) {
    const shopItems = grabItems();
    for (let i = 0; i < shopItems.length; i++) {
        if (shopItems[i].title === obj.title) {
            shopItems.splice(i, 1);
            break;
        }
    }
    shopItems.push(obj);
    localStorage.setItem('shopItems', JSON.stringify(shopItems))
}

function grabItems() {
    // get all the comments info from the localStorage
    const shopItems = localStorage.getItem('shopItems');
    //  if there is some users questions parse the data, or set it to an empty array
    return shopItems ? JSON.parse(shopItems) : [];
}



// GREEN CONFIRMATION PROGRESS BAR
const buyNowButton = document.querySelector(".btn-buy");
buyNowButton.addEventListener("click", () => {

    let progressGrowth = 0;
    const cartBoxes = cartContent.querySelectorAll(".cart-box");

    if (cartBoxes.length === 0) {
        alert("Your cart is empty. Please add items to your cart before buying.");
        return;
    }
    const progressContainer = document.querySelector('.progress');
    progressContainer.toggleAttribute('hidden');
    const progressBar = document.querySelector('.progress-bar');

    let growth = setInterval(() => {
        progressGrowth += 1
        progressBar.style.width = `${progressGrowth}%`
    }, 25);

    setTimeout(() => {
        if (progressBar.style.width === '100%') {
            clearInterval(growth)
            progressBar.textContent = 'Purchase Confirmed';
        }
    }, 2500);

    setTimeout(() => {
        cartBoxes.forEach(cartBox => cartBox.remove());
        cartItemCount = 0;
        updateCartCount(0);
        updateTotalPrice();
        alert("Thank you for your purchase!");
        progressBar.style.width = '0%'
        progressContainer.toggleAttribute('hidden');
        progressBar.textContent = 'Confirming';

    }, 3000)

    localStorage.setItem('shopItems', JSON.stringify([]))
});

const navToggler = document.querySelector('.navbar-toggler');
const header = document.querySelector('header');
header.style.zIndex = 99
navToggler.addEventListener('click',(e)=>{
    if(header.style.zIndex == '99'){
        header.style.zIndex = 0;
    }else{
        header.style.zIndex = 99
    }
})