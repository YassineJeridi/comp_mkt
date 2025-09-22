// DOM Elements
const equipmentContainer = document.getElementById('equipmentContainer');
const selectedTotalElement = document.getElementById('selectedTotal');
const selectedCountElement = document.getElementById('selectedCount');
const summaryItemCount = document.getElementById('summaryItemCount');
const summaryTotal = document.getElementById('summaryTotal');
const selectedItemsList = document.getElementById('selectedItemsList');
const summaryToggle = document.getElementById('summaryToggle');
const summaryContent = document.getElementById('summaryContent');
const filterButtons = document.querySelectorAll('.filter-btn');

// Selection control buttons
const selectAllBtn = document.getElementById('selectAllBtn');
const selectNoneBtn = document.getElementById('selectNoneBtn');
const essentialPreset = document.getElementById('essentialPreset');
const proPreset = document.getElementById('proPreset');

// State
let currentFilter = 'all';
let selectedItems = new Set();

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    renderEquipment();
    initializeFilters();
    initializeSelectionControls();
    addScrollAnimations();
    updateSelectionSummary();
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
            <div class="category-info">
                <span class="priority-badge">Priority ${category.priority}</span>
                <h3 class="category-title">${category.title}</h3>
                <span class="category-total">(${category.total})</span>
            </div>
            <div class="category-actions">
                <button class="category-select-all" data-category="${Object.keys(equipmentData).find(key => equipmentData[key] === category)}">
                    <i class="fas fa-check"></i> Select All
                </button>
                <button class="category-select-none" data-category="${Object.keys(equipmentData).find(key => equipmentData[key] === category)}">
                    <i class="fas fa-times"></i> Clear
                </button>
            </div>
        </div>
        <div class="items-grid">
            ${category.items.map(item => createEquipmentCard(item)).join('')}
        </div>
    `;
    
    // Add event listeners for category selection buttons
    const selectAllCategoryBtn = section.querySelector('.category-select-all');
    const selectNoneCategoryBtn = section.querySelector('.category-select-none');
    
    selectAllCategoryBtn.addEventListener('click', () => selectCategoryItems(category.items, true));
    selectNoneCategoryBtn.addEventListener('click', () => selectCategoryItems(category.items, false));
    
    return section;
}

// Create equipment card
function createEquipmentCard(item) {
    const features = item.features.map(feature => 
        `<span class="feature-tag">${feature}</span>`
    ).join('');
    
    const isSelected = selectedItems.has(item.id);
    
    return `
        <div class="equipment-card ${isSelected ? 'selected' : ''}" data-category="${item.category.toLowerCase()}" data-item-id="${item.id}">
            <div class="card-selection">
                <input type="checkbox" class="item-checkbox" id="item-${item.id}" ${isSelected ? 'checked' : ''}>
                <label class="checkbox-label" for="item-${item.id}">
                    <i class="fas fa-check"></i>
                </label>
            </div>
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

// Initialize selection controls
function initializeSelectionControls() {
    // Add click listeners to cards for selection
    document.addEventListener('click', function(e) {
        if (e.target.closest('.equipment-card') && !e.target.closest('.card-actions')) {
            const card = e.target.closest('.equipment-card');
            const itemId = parseInt(card.dataset.itemId);
            const checkbox = card.querySelector('.item-checkbox');
            
            toggleItemSelection(itemId, !checkbox.checked);
        }
    });
    
    // Checkbox change listeners
    document.addEventListener('change', function(e) {
        if (e.target.classList.contains('item-checkbox')) {
            const itemId = parseInt(e.target.id.replace('item-', ''));
            toggleItemSelection(itemId, e.target.checked);
        }
    });
    
    // Bulk action buttons
    selectAllBtn.addEventListener('click', selectAllItems);
    selectNoneBtn.addEventListener('click', clearAllSelections);
    essentialPreset.addEventListener('click', selectEssentialKit);
    proPreset.addEventListener('click', selectProfessionalKit);
    
    // Summary toggle
    summaryToggle.addEventListener('click', toggleSummaryPanel);
}

// Toggle item selection
function toggleItemSelection(itemId, isSelected) {
    const card = document.querySelector(`[data-item-id="${itemId}"]`);
    const checkbox = card.querySelector('.item-checkbox');
    
    if (isSelected) {
        selectedItems.add(itemId);
        card.classList.add('selected');
        checkbox.checked = true;
    } else {
        selectedItems.delete(itemId);
        card.classList.remove('selected');
        checkbox.checked = false;
    }
    
    updateSelectionSummary();
}

// Select all items
function selectAllItems() {
    const allItems = getAllItems();
    allItems.forEach(item => {
        selectedItems.add(item.id);
        const card = document.querySelector(`[data-item-id="${item.id}"]`);
        const checkbox = card.querySelector('.item-checkbox');
        card.classList.add('selected');
        checkbox.checked = true;
    });
    updateSelectionSummary();
}

// Clear all selections
function clearAllSelections() {
    selectedItems.clear();
    document.querySelectorAll('.equipment-card').forEach(card => {
        card.classList.remove('selected');
        card.querySelector('.item-checkbox').checked = false;
    });
    updateSelectionSummary();
}

// Select category items
function selectCategoryItems(items, select) {
    items.forEach(item => {
        const card = document.querySelector(`[data-item-id="${item.id}"]`);
        const checkbox = card.querySelector('.item-checkbox');
        
        if (select) {
            selectedItems.add(item.id);
            card.classList.add('selected');
            checkbox.checked = true;
        } else {
            selectedItems.delete(item.id);
            card.classList.remove('selected');
            checkbox.checked = false;
        }
    });
    updateSelectionSummary();
}

// Select essential kit (minimum viable setup)
function selectEssentialKit() {
    clearAllSelections();
    
    // Essential items: one light, one battery setup, memory card
    const essentialIds = [1, 2, 3, 4, 9, 14]; // GODOX LED, Stand, Softbox, Mic, basic battery, memory card
    
    essentialIds.forEach(id => {
        const item = findItemById(id);
        if (item) {
            toggleItemSelection(id, true);
        }
    });
    
    showToast('Essential kit selected! Basic professional setup.', 'success');
}

// Select professional kit (comprehensive setup)
function selectProfessionalKit() {
    clearAllSelections();
    
    // Professional items: complete lighting, audio, power, essential accessories
    const proIds = [1, 2, 3, 4, 5, 11, 12, 14, 16, 22]; // Complete lighting, mic, bag, Sony battery, USB-C power, memory, phone mount, tripod
    
    proIds.forEach(id => {
        const item = findItemById(id);
        if (item) {
            toggleItemSelection(id, true);
        }
    });
    
    showToast('Professional kit selected! Complete production setup.', 'success');
}

// Update selection summary
function updateSelectionSummary() {
    const selectedItemsArray = Array.from(selectedItems).map(id => findItemById(id)).filter(Boolean);
    const totalCost = selectedItemsArray.reduce((sum, item) => {
        return sum + parseFloat(item.price.replace(' TND', '').replace(',', ''));
    }, 0);
    
    // Update header
    selectedTotalElement.textContent = `${totalCost.toLocaleString()} TND`;
    selectedCountElement.querySelector('.count-value').textContent = `${selectedItems.size} items`;
    
    // Update summary panel
    summaryItemCount.textContent = selectedItems.size;
    summaryTotal.textContent = `${totalCost.toLocaleString()} TND`;
    
    // Update selected items list
    if (selectedItemsArray.length === 0) {
        selectedItemsList.innerHTML = '<p class="no-selection">No items selected. Click on product cards to add them to your selection.</p>';
    } else {
        selectedItemsList.innerHTML = `
            <div class="selected-items-grid">
                ${selectedItemsArray.map(item => `
                    <div class="selected-item">
                        <img src="${item.image}" alt="${item.name}" class="selected-item-image">
                        <div class="selected-item-info">
                            <h5 class="selected-item-name">${item.name}</h5>
                            <span class="selected-item-price">${item.price}</span>
                        </div>
                        <button class="remove-item" onclick="toggleItemSelection(${item.id}, false)">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                `).join('')}
            </div>
        `;
    }
    
    // Animate changes
    selectedTotalElement.style.transform = 'scale(1.1)';
    setTimeout(() => {
        selectedTotalElement.style.transform = 'scale(1)';
    }, 200);
}

// Toggle summary panel
function toggleSummaryPanel() {
    const isCollapsed = summaryContent.classList.contains('collapsed');
    summaryContent.classList.toggle('collapsed');
    summaryToggle.querySelector('i').classList.toggle('fa-chevron-up');
    summaryToggle.querySelector('i').classList.toggle('fa-chevron-down');
}

// Helper functions
function getAllItems() {
    const allItems = [];
    Object.values(equipmentData).forEach(category => {
        allItems.push(...category.items);
    });
    return allItems;
}

function findItemById(id) {
    const allItems = getAllItems();
    return allItems.find(item => item.id === id);
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
        sections.forEach(section => {
            section.style.display = 'block';
            section.classList.add('fade-in');
        });
        cards.forEach(card => {
            card.style.display = 'block';
        });
    } else {
        sections.forEach(section => {
            const hasMatchingItems = section.querySelectorAll(`[data-category*="${filter}"]`).length > 0;
            if (hasMatchingItems) {
                section.style.display = 'block';
                section.classList.add('fade-in');
                
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
    let wishlist = JSON.parse(localStorage.getItem('equipmentWishlist') || '[]');
    
    if (!wishlist.includes(itemId)) {
        wishlist.push(itemId);
        localStorage.setItem('equipmentWishlist', JSON.stringify(wishlist));
        showToast('Added to wishlist!', 'success');
    } else {
        showToast('Already in wishlist!', 'info');
    }
}

// Show toast notification
function showToast(message, type = 'info') {
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }
    
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
    
    document.body.appendChild(toast);
    
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
    
    document.querySelectorAll('.equipment-card').forEach(card => {
        observer.observe(card);
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
