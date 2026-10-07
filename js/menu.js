// --- Complete Menu Data ---
const menuItems = [
    // Vegetarian Pizzas
    { id: 1, name: "Margherita Supreme", desc: "San Marzano tomatoes, fresh mozzarella, basil, olive oil", price: 14.99, img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&q=80", rating: 5, category: "vegetarian" },
    { id: 2, name: "Truffle Mushroom", desc: "Wild mushrooms, truffle oil, fontina cheese, thyme", price: 19.99, img: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=500&q=80", rating: 5, category: "vegetarian" },
    { id: 3, name: "Mediterranean Veggie", desc: "Artichokes, olives, sun-dried tomatoes, feta, spinach", price: 16.99, img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=80", rating: 4.5, category: "vegetarian" },
    { id: 4, name: "Four Cheese Fondue", desc: "Mozzarella, gorgonzola, parmesan, fontina, honey drizzle", price: 18.99, img: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?w=500&q=80", rating: 5, category: "vegetarian" },
    
    // Chicken Pizzas
    { id: 5, name: "BBQ Chicken Ranch", desc: "Grilled chicken, BBQ sauce, red onions, ranch drizzle", price: 17.99, img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=80", rating: 4.5, category: "chicken" },
    { id: 6, name: "Buffalo Chicken", desc: "Spicy buffalo sauce, grilled chicken, blue cheese, celery", price: 17.99, img: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=500&q=80", rating: 4.5, category: "chicken" },
    { id: 7, name: "Chicken Pesto", desc: "Grilled chicken, basil pesto, cherry tomatoes, mozzarella", price: 18.99, img: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=500&q=80", rating: 5, category: "chicken" },
    { id: 8, name: "Chicken Alfredo", desc: "Creamy alfredo sauce, grilled chicken, mushrooms, parmesan", price: 18.99, img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500&q=80", rating: 4.5, category: "chicken" },
    
    // Beef Pizzas
    { id: 9, name: "Pepperoni Inferno", desc: "Double pepperoni, spicy tomato sauce, mozzarella", price: 16.99, img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500&q=80", rating: 4.5, category: "beef" },
    { id: 10, name: "Meat Lovers Supreme", desc: "Pepperoni, sausage, bacon, ham, mozzarella", price: 21.99, img: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=500&q=80", rating: 5, category: "beef" },
    { id: 11, name: "BBQ Brisket", desc: "Smoked brisket, BBQ sauce, caramelized onions, cheddar", price: 22.99, img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=80", rating: 5, category: "beef" },
    { id: 12, name: "Italian Sausage", desc: "Spicy Italian sausage, peppers, onions, mozzarella", price: 18.99, img: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=500&q=80", rating: 4.5, category: "beef" },
    
    // Special Pizzas
    { id: 13, name: "Fire & Smoke", desc: "Spicy chorizo, smoked gouda, jalapeños, chipotle sauce", price: 21.99, img: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=500&q=80", rating: 5, category: "special" },
    { id: 14, name: "Truffle Lobster", desc: "Lobster, truffle cream, chives, mozzarella (premium)", price: 34.99, img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=80", rating: 5, category: "special" },
    { id: 15, name: "Fig & Prosciutto", desc: "Prosciutto, figs, goat cheese, arugula, balsamic glaze", price: 23.99, img: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?w=500&q=80", rating: 5, category: "special" },
    
    // Sides
    { id: 16, name: "Garlic Knots", desc: "Freshly baked knots with garlic butter and parmesan", price: 6.99, img: "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?w=500&q=80", rating: 5, category: "sides" },
    { id: 17, name: "Loaded Fries", desc: "Crispy fries with cheese, bacon, and green onions", price: 8.99, img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500&q=80", rating: 4.5, category: "sides" },
    { id: 18, name: "Caesar Salad", desc: "Romaine, parmesan, croutons, caesar dressing", price: 9.99, img: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=500&q=80", rating: 4.5, category: "sides" },
    { id: 19, name: "Mozzarella Sticks", desc: "Golden fried mozzarella with marinara sauce", price: 7.99, img: "https://images.unsplash.com/photo-1531749668029-2db88e4276c7?w=500&q=80", rating: 4.5, category: "sides" },
    
    // Drinks
    { id: 20, name: "Craft Root Beer", desc: "House-made root beer with vanilla notes", price: 3.99, img: "https://images.unsplash.com/photo-1581006852262-e4307cf6283a?w=500&q=80", rating: 5, category: "drinks" },
    { id: 21, name: "Italian Soda", desc: "Sparkling water with your choice of fruit syrup", price: 4.49, img: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=500&q=80", rating: 4.5, category: "drinks" },
    { id: 22, name: "Fresh Lemonade", desc: "Freshly squeezed lemons with mint", price: 3.99, img: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=500&q=80", rating: 5, category: "drinks" },
    { id: 23, name: "Craft Iced Tea", desc: "Cold-brewed tea with peach or raspberry", price: 3.49, img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500&q=80", rating: 4.5, category: "drinks" },
    
    // Desserts
    { id: 24, name: "Tiramisu", desc: "Classic Italian dessert with espresso and mascarpone", price: 7.99, img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500&q=80", rating: 5, category: "desserts" },
    { id: 25, name: "Nutella Pizza", desc: "Dessert pizza with Nutella, strawberries, and powdered sugar", price: 12.99, img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=80", rating: 5, category: "desserts" },
    { id: 26, name: "Cannoli", desc: "Crispy shells filled with sweet ricotta and chocolate chips", price: 6.99, img: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500&q=80", rating: 4.5, category: "desserts" },
    { id: 27, name: "Gelato Trio", desc: "Three scoops of artisan gelato: vanilla, chocolate, pistachio", price: 8.99, img: "https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?w=500&q=80", rating: 5, category: "desserts" }
];

// --- Render Menu ---
function renderMenu(items) {
    const grid = document.getElementById('menu-grid');
    const noResults = document.getElementById('no-results');
    if (!grid) return;

    if (items.length === 0) {
        grid.innerHTML = '';
        noResults.classList.remove('d-none');
        return;
    }
    noResults.classList.add('d-none');

    grid.innerHTML = items.map(p => {
        const stars = '★'.repeat(Math.floor(p.rating)) + (p.rating % 1 ? '☆' : '');
        return `
            <div class="col-md-6 col-lg-3 reveal">
                <div class="product-card">
                    <div class="card-img-wrapper">
                        <img src="${p.img}" alt="${p.name}" loading="lazy">
                        <button class="quick-view-btn" data-id="${p.id}">Quick View</button>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${p.name}</h5>
                        <p class="card-text">${p.desc}</p>
                        <div class="d-flex justify-content-between align-items-center mt-2">
                            <span class="price">$${p.price.toFixed(2)}</span>
                            <span class="rating">${stars}</span>
                        </div>
                        <div class="mt-2">
                            <select class="form-select form-select-sm size-select" data-id="${p.id}">
                                <option value="Small">Small (-$2)</option>
                                <option value="Medium" selected>Medium</option>
                                <option value="Large">Large (+$4)</option>
                            </select>
                        </div>
                        <button class="btn btn-primary w-100 mt-2 add-to-cart-btn" data-id="${p.id}">Add to Cart</button>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    // Re-trigger reveal
    setTimeout(revealElements, 50);

    // Attach event listeners to Quick View
    document.querySelectorAll('.quick-view-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            openQuickView(parseInt(btn.dataset.id));
        });
    });

    // Attach event listeners to Add to Cart
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.dataset.id);
            const select = document.querySelector(`.size-select[data-id="${id}"]`);
            const size = select ? select.value : 'Medium';
            addToCart(id, size);
        });
    });
}

// --- Add to Cart ---
function addToCart(id, size = 'Medium') {
    const item = menuItems.find(p => p.id === id);
    if (!item) return;

    let priceMultiplier = 1;
    if (size === 'Small') priceMultiplier = 0.85;
    if (size === 'Large') priceMultiplier = 1.25;

    const existing = AppState.cart.find(c => c.id === id && c.size === size);
    if (existing) {
        existing.quantity++;
    } else {
        AppState.cart.push({
            ...item,
            price: item.price * priceMultiplier,
            size,
            quantity: 1
        });
    }
    AppState.saveCart();

    // Micro-interaction on button
    const btn = document.querySelector(`.add-to-cart-btn[data-id="${id}"]`);
    if (btn) {
        const originalText = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-check"></i> Added!';
        btn.classList.add('btn-success');
        btn.classList.remove('btn-primary');
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.classList.add('btn-primary');
            btn.classList.remove('btn-success');
        }, 1000);
    }
}

// --- Quick View Modal ---
const quickViewModal = new bootstrap.Modal(document.getElementById('quickViewModal'));
let currentQuickViewId = null;

function openQuickView(id) {
    const item = menuItems.find(p => p.id === id);
    if (!item) return;
    currentQuickViewId = id;

    document.getElementById('modal-img').src = item.img;
    document.getElementById('modal-title').textContent = item.name;
    document.getElementById('modal-desc').textContent = item.desc;
    document.getElementById('modal-price').textContent = `$${item.price.toFixed(2)}`;
    document.getElementById('modal-rating').innerHTML = '★'.repeat(Math.floor(item.rating)) + (item.rating % 1 ? '☆' : '');

    quickViewModal.show();
}

document.getElementById('modal-add-btn')?.addEventListener('click', () => {
    if (currentQuickViewId) {
        addToCart(currentQuickViewId);
        quickViewModal.hide();
    }
});

// --- Filtering & Searching ---
let activeCategory = 'all';
let searchTerm = '';

function filterAndRender() {
    let filtered = menuItems;

    if (activeCategory !== 'all') {
        filtered = filtered.filter(item => item.category === activeCategory);
    }

    if (searchTerm) {
        const term = searchTerm.toLowerCase();
        filtered = filtered.filter(item =>
            item.name.toLowerCase().includes(term) ||
            item.desc.toLowerCase().includes(term) ||
            item.category.toLowerCase().includes(term)
        );
    }

    renderMenu(filtered);
}

// --- Event Listeners ---
document.addEventListener('DOMContentLoaded', () => {
    if (!document.getElementById('menu-grid')) return;

    // Initial render
    filterAndRender();

    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeCategory = btn.dataset.category;
            filterAndRender();
        });
    });

    // Search input with debounce
    let debounceTimer;
    document.getElementById('searchInput')?.addEventListener('input', (e) => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            searchTerm = e.target.value.trim();
            filterAndRender();
        }, 300);
    });
});