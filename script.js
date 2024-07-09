let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function toggleDropdown(id) {
    let dropdownContent = document.getElementById(id);
    dropdownContent.classList.toggle("show");
}

function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}
document.addEventListener('DOMContentLoaded', () => {
    const products = [
        {
            name: 'Product 1',
            description: 'This is the description for product 1.',
            price: '$10.00',
            imageUrl: 'https://via.placeholder.com/150'
        },
        {
            name: 'Product 2',
            description: 'This is the description for product 2.',
            price: '$20.00',
            imageUrl: 'https://via.placeholder.com/150'
        },
        {
            name: 'Product 3',
            description: 'This is the description for product 3.',
            price: '$30.00',
            imageUrl: 'https://via.placeholder.com/150'
        }
    ];

    const productList = document.getElementById('product-list');
    const productForm = document.getElementById('product-form');

    function renderProducts() {
        productList.innerHTML = '';
        products.forEach(product => {
            const productItem = document.createElement('div');
            productItem.className = 'product-item';

            productItem.innerHTML = `
                <img src="${product.imageUrl}" alt="${product.name}">
                <h2>${product.name}</h2>
                <p>${product.description}</p>
                <div class="price">${product.price}</div>
                <button class="add-to-cart">Add to Cart</button>
            `;

            productList.appendChild(productItem);

            productItem.querySelector('.add-to-cart').addEventListener('click', () => {
                addToCart(product);
            });
        });
    }

    productForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('product-name').value;
        const description = document.getElementById('product-description').value;
        const price = document.getElementById('product-price').value;
        const imageUrl = document.getElementById('product-image').value;

        const newProduct = {
            name,
            description,
            price,
            imageUrl
        };

        products.push(newProduct);
        renderProducts();

        productForm.reset();
    });

    function addToCart(product) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert('Product added to cart!');
    }

    renderProducts();
});
let cart = [];

function addToCart(productName, price) {
    cart.push({ productName, price });
    alert(productName + ' has been added to your cart.');
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCartItems() {
    cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsDiv = document.getElementById('cart-items');
    cartItemsDiv.innerHTML = '';
    let totalAmount = 0;

    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = `<p>${item.productName} - #${item.price}</p>`;
        cartItemsDiv.appendChild(itemDiv);
        totalAmount += item.price;
    });

    const totalDiv = document.createElement('div');
    totalDiv.innerHTML = `<p>Total: #${totalAmount}</p>`;
    cartItemsDiv.appendChild(totalDiv);
}

function checkout() {
    window.location.href = 'checkout.html';
}

function loadCheckoutAmount() {
    cart = JSON.parse(localStorage.getItem('cart')) || [];
    let totalAmount = 0;
    cart.forEach(item => {
        totalAmount += item.price;
    });

    document.getElementById('total-amount').innerText = '#' + totalAmount;
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('cart-items')) {
        loadCartItems();
    }

    if (document.getElementById('total-amount')) {
        loadCheckoutAmount();
    }

    if (document.getElementById('checkout-form')) {
        document.getElementById('checkout-form').addEventListener('submit', (event) => {
            event.preventDefault();
            alert('Order submitted successfully!');
            localStorage.removeItem('cart');
            window.location.href = 'index.html';
        });
    }
});
