import { store } from './store.js';

function renderCart() {
    const cartItems = document.getElementById('cart-items');

    if (store.cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        return;
    }

    cartItems.innerHTML = store.cart.map(item => {
        const product = store.products.find(p => p.id === item.id);
        return `
      <div class="cart-item">
        <img src="${product.image}" alt="${product.name}">
        <div class="item-details">
          <h3>${product.name}</h3>
          <p class="item-price">$${product.price.toFixed(2)}</p>
          <div class="item-quantity">
            <button class="quantity-button" onclick="updateQuantity(${product.id}, ${item.quantity - 1})">-</button>
            <span>${item.quantity}</span>
            <button class="quantity-button" onclick="updateQuantity(${product.id}, ${item.quantity + 1})">+</button>
          </div>
        </div>
        <button class="remove-button" onclick="removeFromCart(${product.id})">×</button>
      </div>
    `;
    }).join('');

    const { subtotal, shipping, total } = store.calculateTotals();
    document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('shipping').textContent = shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`;
    document.getElementById('total').textContent = `$${total.toFixed(2)}`;
}

window.updateQuantity = function(productId, newQuantity) {
    store.updateCartQuantity(productId, newQuantity);
    renderCart();
};

window.removeFromCart = function(productId) {
    store.removeFromCart(productId);
    renderCart();
};

window.checkout = function() {
    if (store.cart.length === 0) {
        alert('Your cart is empty');
        return;
    }
    window.location.href = 'checkout.html';
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderCart();
    store.updateCartCount();
});