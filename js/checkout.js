// --- Checkout Page Logic ---
document.addEventListener('DOMContentLoaded', () => {
    const checkoutSummary = document.getElementById('checkout-summary-items');
    if (!checkoutSummary) return; // Not on checkout page

    // Render order summary
    function renderCheckoutSummary() {
        const cart = AppState.cart;
        checkoutSummary.innerHTML = cart.map(item => `
            <div class="d-flex justify-content-between align-items-center mb-2 small">
                <span>${item.quantity}x ${item.name}</span>
                <span>$${(item.price * item.quantity).toFixed(2)}</span>
            </div>
        `).join('');

        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const deliveryFee = subtotal > 0 ? 4.99 : 0;

        let discount = 0;
        const appliedCoupon = localStorage.getItem('sliceOfFireCoupon');
        if (appliedCoupon) {
            const coupons = {
                'FIRE10': { type: 'percent', value: 10 },
                'SLICE20': { type: 'percent', value: 20 },
                'WELCOME15': { type: 'fixed', value: 15 }
            };
            if (coupons[appliedCoupon]) {
                if (coupons[appliedCoupon].type === 'percent') {
                    discount = subtotal * (coupons[appliedCoupon].value / 100);
                } else {
                    discount = coupons[appliedCoupon].value;
                }
                discount = Math.min(discount, subtotal);
                document.getElementById('checkout-discount-row').style.setProperty('display', 'flex', 'important');
                document.getElementById('checkout-discount').textContent = `-$${discount.toFixed(2)}`;
            }
        }

        const total = subtotal + deliveryFee - discount;
        document.getElementById('checkout-subtotal').textContent = `$${subtotal.toFixed(2)}`;
        document.getElementById('checkout-delivery').textContent = `$${deliveryFee.toFixed(2)}`;
        document.getElementById('checkout-total').textContent = `$${total.toFixed(2)}`;
    }

    renderCheckoutSummary();

    // Handle form submission
    document.getElementById('checkout-form').addEventListener('submit', (e) => {
        e.preventDefault();

        if (AppState.cart.length === 0) {
            alert('Your cart is empty. Please add items before checking out.');
            return;
        }

        // Generate fake order number
        const orderNumber = 'SOF-' + Date.now().toString().slice(-6) + Math.floor(Math.random() * 100).toString().padStart(2, '0');

        // Get form data
        const orderData = {
            orderNumber,
            customer: {
                name: document.getElementById('fullName').value,
                phone: document.getElementById('phone').value,
                email: document.getElementById('email').value,
                address: document.getElementById('address').value,
                city: document.getElementById('city').value,
                zip: document.getElementById('zip').value,
                instructions: document.getElementById('instructions').value
            },
            items: [...AppState.cart],
            subtotal: AppState.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
            deliveryFee: 4.99,
            total: 0,
            paymentMethod: document.querySelector('input[name="payment"]:checked').value,
            status: 'confirmed',
            orderTime: new Date().toISOString(),
            estimatedDelivery: new Date(Date.now() + 35 * 60 * 1000).toISOString()
        };

        // Calculate total
        let discount = 0;
        const appliedCoupon = localStorage.getItem('sliceOfFireCoupon');
        if (appliedCoupon) {
            const coupons = {
                'FIRE10': { type: 'percent', value: 10 },
                'SLICE20': { type: 'percent', value: 20 },
                'WELCOME15': { type: 'fixed', value: 15 }
            };
            if (coupons[appliedCoupon]) {
                if (coupons[appliedCoupon].type === 'percent') {
                    discount = orderData.subtotal * (coupons[appliedCoupon].value / 100);
                } else {
                    discount = coupons[appliedCoupon].value;
                }
            }
        }
        orderData.discount = discount;
        orderData.total = orderData.subtotal + orderData.deliveryFee - discount;

        // Save order
        AppState.addOrder(orderData);

        // Clear cart and coupon
        AppState.cart = [];
        AppState.saveCart();
        localStorage.removeItem('sliceOfFireCoupon');

        // Redirect to order tracking
        window.location.href = `order-tracking.html?order=${orderNumber}`;
    });
});