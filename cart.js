document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');

    function loadCart() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        let total = 0;

        cartItemsContainer.innerHTML = '';
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'product-item';

            cartItem.innerHTML = `
                <img src="${item.imageUrl}" alt="${item.name}">
                <h2>${item.name}</h2>
                <p>${item.description}</p>
                <div class="price">${item.price}</div>
            `;

            cartItemsContainer.appendChild(cartItem);

            total += parseFloat(item.price.replace('$', ''));
        });

        cartTotalElement.textContent = total.toFixed(2);
    }

    loadCart();
});
