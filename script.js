// DOM Elements
const equipmentContainer = document.getElementById('equipmentContainer');
const totalCostElement = document.getElementById('totalCost');
const filterButtons = document.querySelectorAll('.filter-btn');

// State
let currentFilter = 'all';

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    renderEquipment();
    updateTotalCost();
    initializeFilters();
    addScrollAnimations();
});

// Render all equipment
function renderEquipment() {
    const sortedCategories = Object.values(equipmentData).sort((a, b) => a.priority - b.priority);

    equipmentContainer.innerHTML = '';

    sortedCategories.forEach((category, index) => {
        const categorySection = createCategorySection(category, index);
        equipmentContainer.appendChild(categorySection);
    });
}

// Create category section
function createCategorySection(category, index) {
    const section = document.createElement('div');
    section.className = `category-section category-${category.title.toLowerCase().replace(/\s+/g, '-')}`;
    section.style.animationDelay = `${index * 0.1}s`;

    section.innerHTML = `
        <div class="category-header">
            <span class="priority-badge">Priority ${category.priority}</span>
            <h3 class="category-title">${category.title}</h3>
        </div>
        <div class="items-grid">
            ${category.items.map(item => createEquipmentCard(item)).join('')}
        </div>
    `;

    return section;
}

// Create equipment card
function createEquipmentCard(item) {
    const features = item.features.map(feature => 
        `<span class="feature-tag">${feature}</span>`
    ).join('');

    return `
        <div class="equipment-card" data-category="${item.category.toLowerCase()}">
            <div class="card-image">
                <img src="${item.image}" 
                     alt="${item.name}" 
                     onerror="this.parentElement.innerHTML='<i class=&quot;fas fa-camera&quot;></i>'"
                     loading="lazy">
            </div>
            <div class="card-content">
                <div class="card-header">
                    <h4 class="card-name">${item.name}</h4>
                    <div class="card-price">${item.price}</div>
                </div>
                <div class="card-store">
                    <i class="fas fa-store"></i>
                    ${item.store}
                </div>
                <p class="card-description">${item.description}</p>
                <div class="card-features">
                    ${features}
                </div>
                <div class="card-actions">
                    <button class="btn-primary" onclick="visitStore('${item.url}')">
                        <i class="fas fa-external-link-alt"></i>
                        View Product
                    </button>
                    <button class="btn-secondary" onclick="addToWishlist(${item.id})">
                        <i class="fas fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Update total cost
function updateTotalCost() {
    const total = calculateTotalCost();
    totalCostElement.textContent = `${total.toLocaleString()} TND`;

    // Animate the cost update
    totalCostElement.style.transform = 'scale(1.1)';
    setTimeout(() => {
        totalCostElement.style.transform = 'scale(1)';
    }, 200);
}

// Initialize filter functionality
function initializeFilters() {
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.dataset.filter;
            setActiveFilter(this);
            filterEquipment(filter);
        });
    });
}

// Set active filter button
function setActiveFilter(activeButton) {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    activeButton.classList.add('active');
}

// Filter equipment by category
function filterEquipment(filter) {
    currentFilter = filter;
    const cards = document.querySelectorAll('.equipment-card');
    const sections = document.querySelectorAll('.category-section');

    if (filter === 'all') {
        // Show all sections and cards
        sections.forEach(section => {
            section.style.display = 'block';
            section.classList.add('fade-in');
        });
        cards.forEach(card => {
            card.style.display = 'block';
        });
    } else {
        // Hide/show sections based on filter
        sections.forEach(section => {
            const hasMatchingItems = section.querySelectorAll(`[data-category*="${filter}"]`).length > 0;
            if (hasMatchingItems) {
                section.style.display = 'block';
                section.classList.add('fade-in');

                // Hide non-matching cards within visible sections
                const sectionCards = section.querySelectorAll('.equipment-card');
                sectionCards.forEach(card => {
                    const cardCategory = card.dataset.category.toLowerCase();
                    if (cardCategory.includes(filter.toLowerCase())) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            } else {
                section.style.display = 'none';
            }
        });
    }
}

// Visit store function
function visitStore(url) {
    window.open(url, '_blank', 'noopener,noreferrer');
}

// Add to wishlist function
function addToWishlist(itemId) {
    // Get current wishlist from localStorage
    let wishlist = JSON.parse(localStorage.getItem('equipmentWishlist') || '[]');

    if (!wishlist.includes(itemId)) {
        wishlist.push(itemId);
        localStorage.setItem('equipmentWishlist', JSON.stringify(wishlist));

        // Show feedback
        showToast('Added to wishlist!', 'success');
    } else {
        showToast('Already in wishlist!', 'info');
    }
}

// Show toast notification
function showToast(message, type = 'info') {
    // Remove existing toast
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }

    // Create toast element
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        z-index: 1000;
        animation: slideInRight 0.3s ease-out;
        font-weight: 500;
    `;
    toast.textContent = message;

    // Add to body
    document.body.appendChild(toast);

    // Remove after 3 seconds
    setTimeout(() => {
        if (toast) {
            toast.style.animation = 'slideOutRight 0.3s ease-in';
            setTimeout(() => toast.remove(), 300);
        }
    }, 3000);
}

// Add scroll animations
function addScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe all equipment cards
    document.querySelectorAll('.equipment-card').forEach(card => {
        observer.observe(card);
    });
}

// Search functionality (bonus feature)
function initializeSearch() {
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search equipment...';
    searchInput.className = 'search-input';
    searchInput.style.cssText = `
        width: 100%;
        max-width: 400px;
        padding: 0.75rem 1rem;
        margin-bottom: 2rem;
        border: 2px solid var(--border-color);
        border-radius: 0.5rem;
        font-size: 1rem;
        transition: var(--transition-smooth);
    `;

    // Add to filters section
    const filtersSection = document.querySelector('.filters');
    filtersSection.parentNode.insertBefore(searchInput, filtersSection);

    // Add search functionality
    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        const cards = document.querySelectorAll('.equipment-card');

        cards.forEach(card => {
            const name = card.querySelector('.card-name').textContent.toLowerCase();
            const description = card.querySelector('.card-description').textContent.toLowerCase();
            const features = card.querySelector('.card-features').textContent.toLowerCase();

            if (name.includes(searchTerm) || description.includes(searchTerm) || features.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

// Add CSS animations for toast
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(100px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes slideOutRight {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100px);
        }
    }
`;
document.head.appendChild(style);

// Initialize search on load
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(initializeSearch, 1000); // Add search after main content loads
});