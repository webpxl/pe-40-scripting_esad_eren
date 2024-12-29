import { store } from './store.js';

function displayOrderSummary() {
    const orderItems = document.getElementById('order-items');
    const { subtotal, shipping, total } = store.calculateTotals();

    orderItems.innerHTML = store.cart.map(item => {
        const product = store.products.find(p => p.id === item.id);
        return `
      <div class="summary-row">
        <span>${product.name} × ${item.quantity}</span>
        <span>$${(product.price * item.quantity).toFixed(2)}</span>
      </div>
    `;
    }).join('');

    document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('shipping').textContent = shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`;
    document.getElementById('total').textContent = `$${total.toFixed(2)}`;
}

function handleSubmit(e) {
    e.preventDefault();

    const formData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        address: document.getElementById('address').value,
        city: document.getElementById('city').value,
        postalCode: document.getElementById('postalCode').value,
        country: document.getElementById('country').value,
        cardNumber: document.getElementById('cardNumber').value,
        expiryDate: document.getElementById('expiryDate').value,
        cvv: document.getElementById('cvv').value,
        cardName: document.getElementById('cardName').value
    };

    // Here you would typically send this data to your backend
    console.log('Order placed:', formData);

    store.clearCart();
    alert('Order placed successfully!');
    window.location.href = 'index.html';
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    displayOrderSummary();
    store.updateCartCount();
    document.getElementById('checkout-form').addEventListener('submit', handleSubmit);
});