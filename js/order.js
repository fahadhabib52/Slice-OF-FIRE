// --- Order Tracking Page Logic ---
document.addEventListener('DOMContentLoaded', () => {
    const trackingContent = document.getElementById('tracking-content');
    const noOrder = document.getElementById('no-order');
    if (!trackingContent) return; // Not on tracking page

    // Get order number from URL
    const urlParams = new URLSearchParams(window.location.search);
    const orderNumber = urlParams.get('order');

    // Find order
    let order = null;
    if (orderNumber) {
        order = AppState.orders.find(o => o.orderNumber === orderNumber);
    } else {
        // Get most recent order
        order = AppState.orders[AppState.orders.length - 1];
    }

    if (!order) {
        noOrder.classList.remove('d-none');
        return;
    }

    // Show tracking content
    trackingContent.classList.remove('d-none');
    noOrder.classList.add('d-none');

    // Populate order info
    document.getElementById('order-number').textContent = order.orderNumber;
    document.getElementById('order-customer').textContent = order.customer.name;
    document.getElementById('order-address').textContent = `${order.customer.address}, ${order.customer.city}`;
    
    const eta = new Date(order.estimatedDelivery);
    document.getElementById('order-eta').textContent = eta.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // Populate items
    const itemsList = document.getElementById('order-items-list');
    itemsList.innerHTML = order.items.map(item => `
        <div class="d-flex justify-content-between mb-2">
            <span>${item.quantity}x ${item.name} (${item.size || 'Medium'})</span>
            <span>$${(item.price * item.quantity).toFixed(2)}</span>
        </div>
    `).join('');

    document.getElementById('order-total').textContent = `$${order.total.toFixed(2)}`;

    // --- Animated Timeline ---
    const steps = document.querySelectorAll('.tracking-step');
    const progressBar = document.getElementById('progress-bar');
    
    // Determine current step based on order time
    const orderTime = new Date(order.orderTime).getTime();
    const now = Date.now();
    const elapsed = (now - orderTime) / 1000; // in seconds

    // Simulate progression: 0s = confirmed, 10s = preparing, 20s = baking, 30s = out for delivery, 40s = delivered
    let currentStep = 0;
    if (elapsed > 40) currentStep = 4;
    else if (elapsed > 30) currentStep = 3;
    else if (elapsed > 20) currentStep = 2;
    else if (elapsed > 10) currentStep = 1;
    else currentStep = 0;

    // Animate to current step
    function animateToStep(step) {
        steps.forEach((s, i) => {
            s.classList.remove('active', 'completed');
            if (i < step) s.classList.add('completed');
            if (i === step) s.classList.add('active');
        });
        
        const progressPercent = (step / (steps.length - 1)) * 100;
        progressBar.style.width = `${progressPercent}%`;
    }

    // Start animation from 0
    animateToStep(0);
    
    // Animate through steps
    let step = 0;
    const interval = setInterval(() => {
        if (step < currentStep) {
            step++;
            animateToStep(step);
        } else {
            clearInterval(interval);
        }
    }, 800);

    // If order is already delivered, show all completed    if (currentStep === 4) {
        setTimeout(() => {
            steps.forEach(s => s.classList.add('completed'));
            progressBar.style.width = '100%';
        }, 1000);
    }
);