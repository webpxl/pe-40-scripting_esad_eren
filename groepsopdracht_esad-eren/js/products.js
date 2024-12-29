import { store } from './store.js';
import { PRODUCTS_PER_PAGE, createPagination } from './pagination.js';

let currentPage = 1;
let filteredProducts = [...store.products];

function displayProducts() {
    const start = (currentPage - 1) * PRODUCTS_PER_PAGE;
    const end = start + PRODUCTS_PER_PAGE;
    const paginatedProducts = filteredProducts.slice(start, end);

    const productsGrid = document.getElementById('products-grid');
    productsGrid.innerHTML = paginatedProducts.length === 0
        ? '<p class="no-results">No products found</p>'
        : paginatedProducts.map(product => `
      <div class="product-card">
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <div class="product-info">
          <h3 class="product-title">${product.name}</h3>
          <p class="product-description">${product.description}</p>
          <p class="product-price">$${product.price.toFixed(2)}</p>
          <p class="product-stock">Stock: ${product.stock} units</p>
          <div class="button-group">
            <button class="view-details" onclick="showProductDetails(${product.id})">View Details</button>
            <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
          </div>
        </div>
      </div>
    `).join('');
}

function updateProductsList() {
    displayProducts();
    createPagination(filteredProducts.length, currentPage, (page) => {
        currentPage = page;
        displayProducts();
    });
}

function handleFilterChange() {
    const filterValue = document.getElementById('filterSelect').value;
    filteredProducts = store.filterProducts(filterValue);
    currentPage = 1;
    updateProductsList();
}

// Make functions globally available
window.showProductDetails = function(productId) {
    const product = store.getProduct(productId);
    const productsPage = document.getElementById('products-page');
    const productDetails = document.getElementById('product-details');

    productsPage.classList.add('hidden');
    productDetails.classList.remove('hidden');
    productDetails.innerHTML = `
    <button class="back-button" onclick="showProductsList()">← Back to Products</button>
    <div class="product-details-header">
      <img src="${product.image}" alt="${product.name}" class="product-details-image">
      <div class="product-details-info">
        <h2 class="product-title">${product.name}</h2>
        <p class="product-price">$${product.price.toFixed(2)}</p>
        <p class="product-stock">Stock: ${product.stock} units</p>
        <p class="product-description">${product.details}</p>
        <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
      </div>
    </div>
  `;
};

window.showProductsList = function() {
    const productsPage = document.getElementById('products-page');
    const productDetails = document.getElementById('product-details');

    productDetails.classList.add('hidden');
    productsPage.classList.remove('hidden');
};

window.addToCart = function(productId) {
    store.addToCart(productId);
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateProductsList();
    document.getElementById('filterSelect').addEventListener('change', handleFilterChange);
    store.updateCartCount();
});