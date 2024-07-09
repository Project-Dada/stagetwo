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

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';

        productItem.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <div class="price">${product.price}</div>
            <button>Add to Cart</button>
        `;

        productList.appendChild(productItem);
    });
});
