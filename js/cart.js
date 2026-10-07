// --- Cart Page Logic ---
function renderCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const emptyCart = document.getElementById('empty-cart');
    const cartSummary = document.getElementById('cart-summary');
    const checkoutBtn = document.getElementById('checkout-btn');
    
    if (!cartItemsContainer) return; // Not on cart page

    const cart = AppState.cart;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '';
        emptyCart.classList.remove('d-none');
        cartSummary.style.display = 'none';
        return;
    }

    emptyCart.classList.add('d-none');
    cartSummary.style.display = 'block';

    cartItemsContainer.innerHTML = cart.map((item, index) => `
        <div class="bg-white p-3 rounded-4 shadow-sm mb-3 d-flex align-items-center gap-3 cart-item">
            <img src="${item.img}" alt="${item.name}" style="width: 100px; height: 100px; object-fit: cover; border-radius: 12px;">
            <div class="flex-grow-1">
                <h5 class="mb-1">${item.name}</h5>
                <p class="text-muted small mb-1">${item.size || 'Medium'} ${item.crust ? '| ' + item.crust : ''} ${item.toppings && item.toppings.length ? '| ' + item.toppings.join(', ') : ''}</p>
                <span class="price fw-bold">$${(item.price * item.quantity).toFixed(2)}</span>
            </div>
            <div class="d-flex align-items-center gap-2">
                <button class="btn btn-sm btn-outline-secondary qty-btn" data-index="${index}" data-action="decrease">−</button>
                <span class="fw-bold quantity-display">${item.quantity}</span>
                <button class="btn btn-sm btn-outline-secondary qty-btn" data-index="${index}" data-action="increase">+</button>
                <button class="btn btn-sm btn-outline-danger remove-btn ms-2" data-index="${index}"><i class="fas fa-trash"></i></button>
            </div>
        </div>
    `).join('');

    // Attach event listeners
    document.querySelectorAll('.qty-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const index = parseInt(btn.dataset.index);
            const action = btn.dataset.action;
            if (action === 'increase') AppState.cart[index].quantity++;
            if (action === 'decrease' && AppState.cart[index].quantity > 1) AppState.cart[index].quantity--;
            AppState.saveCart();
            renderCart();
            updateSummary();
        });
    });

    document.querySelectorAll('.remove-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const index = parseInt(btn.dataset.index);
            AppState.cart.splice(index, 1);
            AppState.saveCart();
            renderCart();
            updateSummary();
        });
    });

    updateSummary();
}

function updateSummary() {
    const subtotalEl = document.getElementById('subtotal');
    const deliveryFeeEl = document.getElementById('delivery-fee');
    const grandTotalEl = document.getElementById('grand-total');
    const discountRow = document.getElementById('discount-row');
    const discountEl = document.getElementById('discount');

    if (!subtotalEl) return;

    const cart = AppState.cart;
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const deliveryFee = subtotal > 0 ? 4.99 : 0;

    // Apply coupon
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
            discountRow.style.setProperty('display', 'flex', 'important');
            discountEl.textContent = `-$${discount.toFixed(2)}`;
        }
    } else {
        discountRow.style.setProperty('display', 'none', 'important');
    }

    const grandTotal = subtotal + deliveryFee - discount;

    subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
    deliveryFeeEl.textContent = `$${deliveryFee.toFixed(2)}`;
    grandTotalEl.textContent = `$${grandTotal.toFixed(2)}`;
}

// --- Coupon Logic ---
document.addEventListener('DOMContentLoaded', () => {
    const applyBtn = document.getElementById('apply-coupon');
    if (applyBtn) {
        applyBtn.addEventListener('click', () => {
            const code = document.getElementById('coupon-input').value.trim().toUpperCase();
            const validCoupons = ['FIRE10', 'SLICE20', 'WELCOME15'];
            if (validCoupons.includes(code)) {
                localStorage.setItem('sliceOfFireCoupon', code);
                updateSummary();
                alert(`Coupon "${code}" applied successfully!`);
            } else {
                alert('Invalid coupon code. Try FIRE10, SLICE20, or WELCOME15.');
            }
        });
    }

    // Render cart on page load
    renderCart();
});