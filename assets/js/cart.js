// Cart system using localStorage
const CART_KEY = 'potopia_cart';

function getCart() {
    const cart = localStorage.getItem(CART_KEY);
    return cart ? JSON.parse(cart) : [];
}

function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    updateCartBadge();
}

function addToCart(product) {
    const cart = getCart();
    const existingItemIndex = cart.findIndex(item => item.id === product.id && item.size === product.size);

    if (existingItemIndex > -1) {
        cart[existingItemIndex].quantity += product.quantity;
    } else {
        cart.push(product);
    }

    saveCart(cart);
    showToast(`${product.name} added to cart!`);

    if (typeof window.plausible === 'function') {
        window.plausible('Add to Cart', { props: { product: product.name } });
    }
}

function removeFromCart(id, size) {
    let cart = getCart();
    cart = cart.filter(item => !(item.id === id && item.size === size));
    saveCart(cart);
    if (typeof renderCart === 'function') renderCart();
}

function updateQuantity(id, size, quantity) {
    const cart = getCart();
    const item = cart.find(item => item.id === id && item.size === size);
    if (item) {
        item.quantity = parseInt(quantity);
        if (item.quantity <= 0) {
            removeFromCart(id, size);
            return;
        }
        saveCart(cart);
        if (typeof renderCart === 'function') renderCart();
    }
}

function updateCartBadge() {
    const cart = getCart();
    const badges = document.querySelectorAll('.cart-badge');
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

    badges.forEach(badge => {
        badge.textContent = totalItems;
        badge.style.display = totalItems > 0 ? 'flex' : 'none';
    });
}

function showToast(message) {
    // Simple toast notification
    let toast = document.createElement('div');
    toast.textContent = message;
    toast.style.position = 'fixed';
    toast.style.bottom = '20px';
    toast.style.right = '20px';
    toast.style.backgroundColor = 'var(--primary-green)';
    toast.style.color = 'white';
    toast.style.padding = '15px 25px';
    toast.style.borderRadius = 'var(--radius-sm)';
    toast.style.zIndex = '9999';
    toast.style.boxShadow = 'var(--shadow-md)';
    toast.style.transition = 'opacity 0.3s';
    toast.style.fontFamily = 'var(--font-heading)';
    toast.style.fontWeight = '500';

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
}
