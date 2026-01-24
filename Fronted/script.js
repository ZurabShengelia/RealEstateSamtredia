const defaultProperties = [
    {
        id: 1,
        title: "Modern Downtown Loft",
        location: "SoHo, New York",
        price: 1250000,
        type: "sale",
        category: "Residential",
        beds: 2,
        baths: 2,
        sqft: 1500,
        img: "Images/Modern Downtown Loft.avif",
        tag: "For Sale",
        lat: 40.7233,
        lng: -74.0030,
        unit: 'sqft',
        status: 'Active',
        description: "A stylish loft in SoHo with big windows and brick walls. Close to shops and food."
    },
    {
        id: 2,
        title: "Lakeside Villa",
        location: "Lake Tahoe, CA",
        price: 2850000,
        type: "sale",
        category: "Luxury",
        beds: 4,
        baths: 3,
        sqft: 3200,
        img: "Images/Lakeside Villa Lake Tahoe, CA.jpg",
        tag: "For Sale",
        lat: 39.0968,
        lng: -120.0324,
        unit: 'sqft',
        status: 'Active',
        description: "Beautiful house by the lake with amazing views. Has a private beach and guest house."
    },
    {
        id: 3,
        title: "Urban Office Space",
        location: "Downtown, Chicago",
        price: 4500,
        type: "rent",
        category: "Commercial",
        beds: 0,
        baths: 2,
        sqft: 1800,
        img: "Images/Urban Office Space.avif",
        tag: "For Rent",
        lat: 41.8781,
        lng: -87.6298,
        unit: 'sqft',
        status: 'Active',
        description: "Great office in downtown Chicago. Perfect for meetings and team work."
    },
    {
        id: 4,
        title: "Minimalist Home",
        location: "Austin, Texas",
        price: 850000,
        type: "sale",
        category: "Residential",
        beds: 3,
        baths: 2,
        sqft: 2100,
        img: "Images/Minimalist Home.avif",
        tag: "For Sale",
        lat: 30.2672,
        lng: -97.7431,
        unit: 'sqft',
        status: 'Active',
        description: "Clean and simple home in Austin. Lots of light and smart features."
    },
    {
        id: 5,
        title: "Luxury Penthouse Vake",
        location: "Vake, Tbilisi",
        price: 450000,
        type: "sale",
        category: "Luxury",
        beds: 3,
        baths: 3,
        sqft: 220,
        img: "Images/Luxury Penthouse Vake.avif",
        tag: "For Sale",
        lat: 41.7100,
        lng: 44.7600,
        unit: 'm2',
        status: 'Active',
        description: "Top floor apartment in Vake with great city views. Near parks and cafes."
    },
    {
        id: 6,
        title: "Batumi Sea View Apt",
        location: "Batumi, Georgia",
        price: 85000,
        type: "sale",
        category: "Residential",
        beds: 1,
        baths: 1,
        sqft: 55,
        img: "Images/Batumi Sea View Apt.jpg",
        tag: "For Sale",
        lat: 41.6168,
        lng: 41.6367,
        unit: 'm2',
        status: 'Active',
        description: "Nice apartment right by the sea. Good for holidays or renting out."
    },
    {
        id: 7,
        title: "Old Tbilisi Historic Home",
        location: "Old Tbilisi, Georgia",
        price: 1200,
        type: "rent",
        category: "Residential",
        beds: 2,
        baths: 1,
        sqft: 90,
        img: "Images/Old Tbilisi Historic Home.jpg",
        tag: "For Rent",
        lat: 41.6941,
        lng: 44.8016,
        unit: 'm2',
        status: 'Active',
        description: "Traditional home in Old Tbilisi with wooden balconies. Feel the history."
    },
    {
        id: 8,
        title: "Modern Berlin Loft",
        location: "Berlin, Germany",
        price: 2500,
        type: "rent",
        category: "Residential",
        beds: 1,
        baths: 1,
        sqft: 75,
        img: "Images/Modern Berlin Loft.jpg",
        tag: "For Rent",
        lat: 52.5200,
        lng: 13.4050,
        unit: 'm2',
        status: 'Active',
        description: "Cool loft in Berlin with high ceilings. Near art spots and trains."
    },
    {
        id: 9,
        title: "Parisian Apartment",
        location: "Paris, France",
        price: 890000,
        type: "sale",
        category: "Residential",
        beds: 2,
        baths: 1,
        sqft: 65,
        img: "Images/Parisian Apartment.jpg",
        tag: "For Sale",
        lat: 48.8566,
        lng: 2.3522,
        unit: 'm2',
        status: 'Active',
        description: "Classic apartment in Paris. Wood floors and close to famous sites."
    },
    {
        id: 10,
        title: "Miami Beach Condo",
        location: "Miami, FL",
        price: 650000,
        type: "sale",
        category: "Luxury",
        beds: 2,
        baths: 2,
        sqft: 1100,
        img: "Images/Miami Beach Condo.jpg",
        tag: "For Sale",
        lat: 25.7617,
        lng: -80.1918,
        unit: 'sqft',
        status: 'Active',
        description: "Luxury condo on Miami Beach. Pool access and ocean views."
    },
    {
        id: 11,
        title: "Seattle Family Home",
        location: "Seattle, WA",
        price: 920000,
        type: "sale",
        category: "Residential",
        beds: 4,
        baths: 3,
        sqft: 2800,
        img: "Images/Seattle Family Home.jpg",
        tag: "For Sale",
        lat: 47.6062,
        lng: -122.3321,
        unit: 'sqft',
        status: 'Active',
        description: "Big family house in Seattle. Nice garden and close to schools."
    },
    {
        id: 12,
        title: "London Townhouse",
        location: "London, UK",
        price: 1500000,
        type: "sale",
        category: "Luxury",
        beds: 3,
        baths: 2,
        sqft: 140,
        img: "Images/London Townhouse.jpg",
        tag: "For Sale",
        lat: 51.5074,
        lng: -0.1278,
        unit: 'm2',
        status: 'Active',
        description: "Fancy townhouse in London. Classic style with modern touches."
    },
    {
        id: 13,
        title: "Madrid Studio",
        location: "Madrid, Spain",
        price: 1100,
        type: "rent",
        category: "Residential",
        beds: 1,
        baths: 1,
        sqft: 45,
        img: "Images/Madrid Studio.jpg",
        tag: "For Rent",
        lat: 40.4168,
        lng: -3.7038,
        unit: 'm2',
        status: 'Active',
        description: "Small studio in Madrid. Near the park and nightlife."
    },
    {
        id: 14,
        title: "Rome Historic Villa",
        location: "Rome, Italy",
        price: 3200000,
        type: "sale",
        category: "Luxury",
        beds: 6,
        baths: 5,
        sqft: 450,
        img: "Images/Rome Historic Villa.jpg",
        tag: "For Sale",
        lat: 41.9028,
        lng: 12.4964,
        unit: 'm2',
        status: 'Active',
        description: "Huge historic villa in Rome. Big gardens and classic art."
    },
    {
        id: 15,
        title: "Gudauri Ski Chalet",
        location: "Gudauri, Georgia",
        price: 180000,
        type: "sale",
        category: "Residential",
        beds: 3,
        baths: 2,
        sqft: 110,
        img: "Images/Gudauri Ski Chalet.jpg",
        tag: "For Sale",
        lat: 42.4784,
        lng: 44.4833,
        unit: 'm2',
        status: 'Active',
        description: "Cozy ski cabin in Gudauri. Right next to the slopes."
    },
    {
        id: 16,
        title: "Kutaisi City Home",
        location: "Kutaisi, Georgia",
        price: 65000,
        type: "sale",
        category: "Residential",
        beds: 3,
        baths: 1,
        sqft: 120,
        img: "Images/Kutaisi City Home.jpg",
        tag: "For Sale",
        lat: 42.2662,
        lng: 42.7180,
        unit: 'm2',
        status: 'Active',
        description: "Good house in the center of Kutaisi. Close to the market."
    },
    {
        id: 17,
        title: "Samtredia Garden House",
        location: "Samtredia, Georgia",
        price: 45000,
        type: "sale",
        category: "Residential",
        beds: 4,
        baths: 2,
        sqft: 150,
        img: "Images/Samtredia Garden House.jpg",
        tag: "For Sale",
        lat: 42.1626,
        lng: 42.3417,
        unit: 'm2',
        status: 'Active',
        description: "Quiet house with a big garden in Samtredia. Great for relaxing."
    }
];

function initializeProperties() {
    const storedUserProperties = JSON.parse(localStorage.getItem('userAddedProperties')) || [];
    console.log('Stored user properties:', storedUserProperties);
    const merged = [...storedUserProperties, ...defaultProperties];
    console.log('Total properties after merge:', merged.length);
    return merged;
}

let properties = initializeProperties();

let messages = JSON.parse(localStorage.getItem('messages')) || [];

let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null; // Auth State Object
const grid = document.getElementById('propertyGrid');
const paginationContainer = document.getElementById('pagination');
const searchInput = document.getElementById('searchInput');
const filterBtns = document.querySelectorAll('.filter');
const sortSelect = document.getElementById('sortSelect');
const themeToggle = document.getElementById('themeToggle');
const gridViewBtn = document.getElementById('gridViewBtn');
const mapViewBtn = document.getElementById('mapViewBtn');
const mapView = document.getElementById('mapView');
const analyticsView = document.getElementById('analyticsView');
const dashboardView = document.getElementById('dashboardView');
const dashboardGrid = document.getElementById('dashboardGrid');
const financialView = document.getElementById('financialView');
const messagesView = document.getElementById('messagesView');
const messagesList = document.getElementById('messagesList');
const favoritesView = document.getElementById('favoritesView');
const favoritesGrid = document.getElementById('favoritesGrid');
const favoritesEmptyState = document.getElementById('favoritesEmptyState');
const helpView = document.getElementById('helpView');
const clearMessagesBtn = document.getElementById('clearMessagesBtn');
const navItems = document.querySelectorAll('nav ul li');
const calcDownPayment = document.getElementById('calcDownPayment');
const calcInterest = document.getElementById('calcInterest');
const calcTerm = document.getElementById('calcTerm');
const calcMonthlyPayment = document.getElementById('calcMonthlyPayment');
const contactAgentBtn = document.getElementById('contactAgentBtn');
const shareBtn = document.getElementById('shareBtn');
const currencySelect = document.getElementById('currencySelect');
const notifyBtn = document.getElementById('notifyBtn');
const notifyDropdown = document.getElementById('notifyDropdown');
const profileBtn = document.getElementById('profileBtn');
const profileModal = document.getElementById('profileModal');
const closeProfile = document.querySelector('.close-profile');
const headerSignInBtn = document.getElementById('headerSignInBtn');
const saveProfileBtn = document.getElementById('saveProfileBtn');
const logoutBtn = document.getElementById('logoutBtn');
const authModal = document.getElementById('authModal');
const closeAuth = document.querySelector('.close-auth');
const authTabs = document.querySelectorAll('.auth-tab');
const authForms = document.querySelectorAll('.auth-form');
const forgotPasswordLink = document.getElementById('forgotPasswordLink');
const forgotPasswordModal = document.getElementById('forgotPasswordModal');
const closeForgot = document.querySelector('.close-forgot');
const sendRecoveryBtn = document.getElementById('sendRecoveryBtn');
const successModal = document.getElementById('successModal');
const successCloseBtn = document.getElementById('successCloseBtn');

const deleteModal = document.getElementById('deleteModal');
const confirmDeleteBtn = document.getElementById('confirmDeleteBtn');
const cancelDeleteBtn = document.getElementById('cancelDeleteBtn');

const clearMessagesModal = document.getElementById('clearMessagesModal');
const confirmClearMessagesBtn = document.getElementById('confirmClearMessagesBtn');
const cancelClearMessagesBtn = document.getElementById('cancelClearMessagesBtn');

const addPropertyBtn = document.getElementById('addPropertyBtn');
const addPropertyModal = document.getElementById('addPropertyModal');
const closeAddProp = document.querySelector('.close-add-prop');
const addPropertyForm = document.getElementById('addPropertyForm');

const profileNameInput = document.getElementById('profileName');
const profileEmailInput = document.getElementById('profileEmail');
const headerProfileInitials = document.getElementById('headerProfileInitials');
const changeAvatarBtn = document.querySelector('.change-avatar-btn');
const profilePhotoInput = document.getElementById('profilePhotoInput');

let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
updateFavoritesBadge();

let compareList = [];

let currentCurrency = 'USD';
const exchangeRates = {
    USD: 1,
    EUR: 0.92,
    GEL: 2.70
};
const currencySymbols = {
    USD: '$',
    EUR: '€',
    GEL: '₾'
};

function formatCurrency(price, type = null) {
    let value = price;
    let isRent = type === 'rent';

    if (typeof price === 'string') {
        if (price.includes('/mo')) isRent = true;
        value = parseFloat(price.replace(/[^0-9.]/g, ''));
    }
    
    if (isNaN(value)) return price;
    
    let converted = value * exchangeRates[currentCurrency];
    let formatted = converted.toLocaleString(undefined, { maximumFractionDigits: 0 });
    
    if (isRent) {
        return `${currencySymbols[currentCurrency]}${formatted}/mo`;
    }
    return `${currencySymbols[currentCurrency]}${formatted}`;
}

function renderSkeleton() {
    grid.innerHTML = Array(4).fill(0).map(() => `
        <div class="card skeleton-card">
            <div class="skeleton skeleton-img"></div>
            <div class="skeleton skeleton-text"></div>
            <div class="skeleton skeleton-text" style="width: 40%"></div>
            <div class="skeleton skeleton-details"></div>
        </div>
    `).join('');
}

let currentPage = 1;
const itemsPerPage = 8;

function displayProperties(data, container = grid, isEditable = false) {
    container.innerHTML = '';

    let displayData = data;
    if (container === grid) {
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        displayData = data.slice(start, end);
        setupPagination(data.length, container);
    }

    if (data.length === 0) {
        container.innerHTML = `
            <div class="empty-state" style="grid-column: 1 / -1; animation: fadeIn 0.5s ease;">
                <div class="empty-icon"><i class="fas fa-folder-open"></i></div>
                <h3>No properties listed yet</h3>
                <p>Start by adding your first one!</p>
                <button class="add-btn-primary" onclick="document.getElementById('addPropertyBtn').click()">Add Property</button>
            </div>
        `;
        if (container === grid) paginationContainer.innerHTML = '';
        return;
    }

    container.innerHTML = displayData.map(p => {
        const isOwner = currentUser && p.ownerEmail === currentUser.email;
        
        const unitDisplay = p.unit === 'm2' ? 'm²' : 'sq ft';
        const priceDisplay = formatCurrency(p.price, p.type);

        return `
        <div class="card ${isEditable ? 'editable' : ''}" data-id="${p.id}">
            <div class="image-container">
                <img src="${p.img}" alt="${p.title}">
                ${isOwner ? `
                    <button class="edit-btn" onclick="editProperty(event, ${p.id})"><i class="fas fa-pen"></i></button>
                    <button class="delete-btn" onclick="deleteProperty(event, ${p.id})"><i class="fas fa-trash"></i></button>
                ` : ''}
                <input type="checkbox" class="compare-checkbox" data-id="${p.id}" 
                    ${compareList.includes(p.id) ? 'checked' : ''} 
                    title="Compare">
                <span class="tag ${p.type}">${p.tag}</span>
                <span class="price-badge">${priceDisplay}</span>
                <div class="fav-icon" data-id="${p.id}">
                    <i class="${favorites.includes(p.id) ? 'fas' : 'far'} fa-heart"></i>
                </div>
                <div class="quick-view-btn">Quick View</div>
            </div>
            <div class="card-info">
                <h3>${p.title}</h3>
                <p class="location"><i class="fas fa-map-marker-alt"></i> ${p.location}</p>
                
                <div class="details">
                    <span><i class="fas fa-bed"></i> ${p.beds} Bedrooms</span>
                    <span><i class="fas fa-bath"></i> ${p.baths} Bathrooms</span>
                    <span><i class="fas fa-ruler-combined"></i> ${p.sqft} ${unitDisplay}</span>
                </div>

                <div class="card-footer">
                    <span class="property-type">${p.category}</span>
                </div>
            </div>
        </div>
    `}).join('');
}

function setupPagination(totalItems, container) {
    if (container !== grid) return;
    
    paginationContainer.innerHTML = '';
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    
    if (totalPages <= 1) return;

    const prevBtn = document.createElement('button');
    prevBtn.className = 'pagination-btn';
    prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
    prevBtn.disabled = currentPage === 1;
    prevBtn.onclick = () => { if (currentPage > 1) { currentPage--; refreshGrid(); } };
    paginationContainer.appendChild(prevBtn);

    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement('button');
        btn.className = `pagination-btn ${currentPage === i ? 'active' : ''}`;
        btn.innerText = i;
        btn.onclick = () => { currentPage = i; refreshGrid(); };
        paginationContainer.appendChild(btn);
    }

    const nextBtn = document.createElement('button');
    nextBtn.className = 'pagination-btn';
    nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.onclick = () => { if (currentPage < totalPages) { currentPage++; refreshGrid(); } };
    paginationContainer.appendChild(nextBtn);
}

function refreshGrid() {
    const term = searchInput.value.toLowerCase();
    const activeFilter = document.querySelector('.filter.active').dataset.filter;
    
    let data = properties;
    if (activeFilter !== 'all') data = data.filter(p => p.type === activeFilter);
    if (term) data = data.filter(p => p.title.toLowerCase().includes(term) || p.location.toLowerCase().includes(term));
    
    const sortValue = sortSelect.value;
    if (sortValue === 'price-asc') {
        data.sort((a, b) => {
            const priceA = typeof a.price === 'number' ? a.price : parseFloat(a.price.replace(/[^0-9.]/g, ''));
            const priceB = typeof b.price === 'number' ? b.price : parseFloat(b.price.replace(/[^0-9.]/g, ''));
            return priceA - priceB;
        });
    } else if (sortValue === 'sqft-desc') {
        data.sort((a, b) => b.sqft - a.sqft);
    }

    displayProperties(data);
    grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

let isEditing = false;
let editId = null;

window.editProperty = function(e, id) {
    e.stopPropagation();
    const p = properties.find(prop => prop.id === id);
    if (!p) return;

    isEditing = true;
    editId = id;

    document.getElementById('propTitle').value = p.title;
    document.getElementById('propLocation').value = p.location;
    document.getElementById('propPrice').value = typeof p.price === 'number' ? p.price : p.price.replace(/[^0-9.]/g, '');
    document.getElementById('propType').value = p.type;
    document.getElementById('propCategory').value = p.category;
    document.getElementById('propBeds').value = p.beds;
    document.getElementById('propBaths').value = p.baths;
    document.getElementById('propSize').value = p.sqft;
    document.getElementById('propUnit').value = p.unit;
    document.getElementById('propDescription').value = p.description || '';

    imagePreview.src = p.img;
    imagePreview.classList.remove('hidden');

    document.querySelector('#addPropertyModal h2').innerText = "Edit Property";
    document.querySelector('.submit-prop-btn').innerText = "Update Property";
    
    addPropertyModal.classList.add('show');
};

let propertyToDeleteId = null;

window.deleteProperty = function(e, id) {
    e.stopPropagation();
    propertyToDeleteId = id;
    deleteModal.classList.add('show');
};

confirmDeleteBtn.addEventListener('click', () => {
    if (propertyToDeleteId) {
        deleteModal.classList.remove('show');

        const card = document.querySelector(`.card[data-id="${propertyToDeleteId}"]`);
        if (card) {
            card.classList.add('fading-out');
        }

        setTimeout(() => {
            properties = properties.filter(p => p.id !== propertyToDeleteId);
            
            // Update localStorage with remaining user properties
            const userAddedProperties = properties.filter(p => p.isUserProperty || p.ownerEmail);
            console.log('After delete - remaining user properties:', userAddedProperties);
            localStorage.setItem('userAddedProperties', JSON.stringify(userAddedProperties));
            
            currentPage = 1;
            
            updateDashboard();
            
            const currentFilter = document.querySelector('.filter.active') ? document.querySelector('.filter.active').dataset.filter : 'all';
            let data = properties;
            if (currentFilter !== 'all') data = data.filter(p => p.type === currentFilter);
            
            grid.innerHTML = '';
            displayProperties(data);
            
            updateMapMarkers(properties);
            initAnalytics();
            updateFinancials();
            
            propertyToDeleteId = null;
        }, 500);
    }
});

cancelDeleteBtn.addEventListener('click', () => {
    deleteModal.classList.remove('show');
    propertyToDeleteId = null;
});

renderSkeleton();
updateAuthUI();
setTimeout(() => {
    displayProperties(properties);
    initMap();
    renderMessages();
    updateDashboard();
    updateFinancials();
}, 1500);

searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    currentPage = 1;
    const filtered = properties.filter(p => 
        p.title.toLowerCase().includes(term) || 
        p.location.toLowerCase().includes(term)
    );
    displayProperties(filtered);
});

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        currentPage = 1;
        const filterType = btn.getAttribute('data-filter');
        
        if (filterType === 'all') {
            displayProperties(properties);
        } else {
            const filtered = properties.filter(p => p.type === filterType);
            displayProperties(filtered);
        }
    });
});

sortSelect.addEventListener('change', (e) => {
    const value = e.target.value;
    let sortedData = [...properties];

    const activeFilter = document.querySelector('.filter.active').dataset.filter;
    if (activeFilter !== 'all') {
        sortedData = sortedData.filter(p => p.type === activeFilter);
    }

    if (value === 'price-asc') {
        sortedData.sort((a, b) => {
            const priceA = typeof a.price === 'number' ? a.price : parseFloat(a.price.replace(/[^0-9.]/g, ''));
            const priceB = typeof b.price === 'number' ? b.price : parseFloat(b.price.replace(/[^0-9.]/g, ''));
            return priceA - priceB;
        });
    } else if (value === 'sqft-desc') {
        sortedData.sort((a, b) => b.sqft - a.sqft);
    }

    displayProperties(sortedData);
});

const docElement = document.documentElement;

function applyTheme(theme) {
    if (theme === 'dark') {
        docElement.setAttribute('data-theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
        localStorage.setItem('theme', 'dark');
    } else {
        docElement.setAttribute('data-theme', 'light');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
        localStorage.setItem('theme', 'light');
    }
}

themeToggle.addEventListener('click', () => {
    const currentTheme = docElement.getAttribute('data-theme');
    applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
});

(() => {
    const savedTheme = localStorage.getItem('theme');
    const themeToApply = savedTheme || 'light';
    applyTheme(themeToApply);
})();

grid.addEventListener('click', (e) => {
    if (e.target.classList.contains('compare-checkbox')) {
        e.stopPropagation();
        const id = parseInt(e.target.dataset.id);
        toggleCompare(id, e.target);
        return;
    }

    const favBtn = e.target.closest('.fav-icon');
    if (favBtn) {
        e.stopPropagation();
        const id = parseInt(favBtn.dataset.id);
        toggleFavorite(id);
        return;
    }

    const card = e.target.closest('.card');
    if (card) {
        const id = parseInt(card.dataset.id);
        const property = properties.find(p => p.id === id);
        openModal(property);
    }
});

favoritesGrid.addEventListener('click', (e) => {
    const favBtn = e.target.closest('.fav-icon');
    if (favBtn) {
        e.stopPropagation();
        const id = parseInt(favBtn.dataset.id);
        toggleFavorite(id);
        return;
    }

    const card = e.target.closest('.card');
    if (card) {
        const id = parseInt(card.dataset.id);
        const property = properties.find(p => p.id === id);
        openModal(property);
    }
});

function toggleFavorite(id) {
    const prop = properties.find(p => p.id === id);
    if (favorites.includes(id)) {
        favorites = favorites.filter(favId => favId !== id);
    } else {
        favorites.push(id);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateFavoritesBadge();
    
    const currentFilter = document.querySelector('.filter.active').dataset.filter;
    const searchTerm = searchInput.value.toLowerCase();
    
    let data = properties;
    if (currentFilter !== 'all') data = data.filter(p => p.type === currentFilter);
    if (searchTerm) data = data.filter(p => p.title.toLowerCase().includes(searchTerm));
    
    displayProperties(data);

    renderFavorites();
}

function updateFavoritesBadge() {
    const badge = document.getElementById('favoritesBadge');
    if (badge) {
        badge.textContent = favorites.length;
        badge.style.display = favorites.length > 0 ? 'inline-block' : 'none';
    }
}

const modal = document.getElementById('propertyModal');
const closeModal = document.querySelector('.close-modal');

let currentPropertyPrice = 0;
let currentOpenProperty = null;

function updateCalculator() {
    const price = currentPropertyPrice * exchangeRates[currentCurrency];
    const downPayment = parseFloat(calcDownPayment.value) || 0;
    let interest = parseFloat(calcInterest.value) || 0;
    let term = parseFloat(calcTerm.value) || 0;

    if (interest < 1) interest = 1;
    if (term < 1) term = 1;

    const principal = price - downPayment;
    const monthlyRate = interest / 100 / 12;
    const numberOfPayments = term * 12;

    let monthlyPayment = 0;
    if (interest === 0) {
        monthlyPayment = principal / numberOfPayments;
    } else {
        monthlyPayment = principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    }

    if (!isFinite(monthlyPayment) || monthlyPayment < 0) monthlyPayment = 0;

    calcMonthlyPayment.innerText = currencySymbols[currentCurrency] + monthlyPayment.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

[calcDownPayment, calcInterest, calcTerm].forEach(input => {
    if(input) input.addEventListener('input', updateCalculator);
});

function openModal(p) {
    currentOpenProperty = p;
    document.getElementById('modalImage').src = p.img;
    document.getElementById('modalTitle').innerText = p.title;
    document.getElementById('modalLocation').innerHTML = `<i class="fas fa-map-marker-alt"></i> ${p.location}`;
    document.getElementById('modalPrice').innerText = formatCurrency(p.price, p.type);
    document.getElementById('modalBeds').innerText = `${p.beds} Beds`;
    document.getElementById('modalBaths').innerText = `${p.baths} Baths`;
    document.getElementById('modalSqft').innerText = `${p.sqft} ${p.unit === 'm2' ? 'm²' : 'Sq Ft'}`;
    
    const descriptionElement = document.getElementById('modalDescription');
    if (descriptionElement) {
        descriptionElement.innerText = p.description || 'No description available';
    }
    
    currentPropertyPrice = typeof p.price === 'number' ? p.price : parseFloat(p.price.replace(/[^0-9.-]+/g,""));
    if (isNaN(currentPropertyPrice)) currentPropertyPrice = 0;
    
    calcDownPayment.value = ((currentPropertyPrice * exchangeRates[currentCurrency]) * 0.2).toFixed(0);
    updateCalculator();

    const similarGrid = document.getElementById('similarGrid');
    const similarProps = properties.filter(item => item.category === p.category && item.id !== p.id);
    const randomSimilar = similarProps.sort(() => 0.5 - Math.random()).slice(0, 2);
    
    similarGrid.innerHTML = randomSimilar.map(sim => `
        <div class="similar-card" onclick="openModal(properties.find(x => x.id === ${sim.id}))">
            <img src="${sim.img}" alt="${sim.title}">
            <div class="similar-info">
                <h4>${sim.title}</h4>
                <div class="similar-price">${formatCurrency(sim.price, sim.type)}</div>
            </div>
        </div>
    `).join('');

    shareBtn.onclick = () => {
        const dummyLink = `${window.location.origin}?property=${p.id}`;
        navigator.clipboard.writeText(dummyLink).then(() => {
            const originalHTML = shareBtn.innerHTML;
            shareBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
            setTimeout(() => shareBtn.innerHTML = originalHTML, 2000);
        });
    };

    if (currentUser && p.ownerEmail === currentUser.email) {
        contactAgentBtn.style.display = 'none';
    } else {
        contactAgentBtn.style.display = 'block';
    }

    modal.classList.add('show');
}

closeModal.addEventListener('click', () => modal.classList.remove('show'));
window.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('show');
    if (e.target === profileModal) profileModal.classList.remove('show');
    if (e.target === addPropertyModal) addPropertyModal.classList.remove('show');
    if (e.target === authModal) authModal.classList.remove('show');
    if (e.target === forgotPasswordModal) forgotPasswordModal.classList.remove('show');
    if (e.target === successModal) successModal.classList.remove('show');
    if (e.target === deleteModal) deleteModal.classList.remove('show');
    if (e.target === clearMessagesModal) clearMessagesModal.classList.remove('show');
});

let map;
let markers = [];

function initMap() {
    map = L.map('mapView').setView([39.8283, -98.5795], 4);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    updateMapMarkers(properties);
}

function updateMapMarkers(data) {
    markers.forEach(marker => map.removeLayer(marker));
    markers = [];

    data.forEach(p => {
        if (p.lat && p.lng) {
            const marker = L.marker([p.lat, p.lng])
                .addTo(map)
                .bindPopup(`
                    <b>${p.title}</b><br>
                    ${formatCurrency(p.price, p.type)}<br>
                    <button onclick="openModal(properties.find(x => x.id === ${p.id}))">View Details</button>
                `);
            markers.push(marker);
        }
    });
}

gridViewBtn.addEventListener('click', () => {
    gridViewBtn.classList.add('active');
    mapViewBtn.classList.remove('active');
    grid.classList.remove('hidden');
    mapView.classList.remove('active');
    paginationContainer.style.display = 'flex';
});

mapViewBtn.addEventListener('click', () => {
    mapViewBtn.classList.add('active');
    gridViewBtn.classList.remove('active');
    grid.classList.add('hidden');
    mapView.classList.add('active');
    paginationContainer.style.display = 'none';
    setTimeout(() => map.invalidateSize(), 100);
});

const compareWidget = document.getElementById('compareWidget');
const compareCount = document.getElementById('compareCount');
const openCompareBtn = document.getElementById('openCompareBtn');
const compareModal = document.getElementById('compareModal');
const closeCompare = document.querySelector('.close-compare');
const compareGrid = document.getElementById('compareGrid');

function toggleCompare(id, checkbox) {
    if (compareList.includes(id)) {
        compareList = compareList.filter(cId => cId !== id);
    } else {
        if (compareList.length >= 3) {
            alert("You can only compare up to 3 properties.");
            checkbox.checked = false;
            return;
        }
        compareList.push(id);
    }
    updateCompareUI();
}

function updateCompareUI() {
    compareCount.innerText = compareList.length;
    if (compareList.length > 0) {
        compareWidget.classList.add('active');
    } else {
        compareWidget.classList.remove('active');
    }
}

openCompareBtn.addEventListener('click', () => {
    const selectedProps = properties.filter(p => compareList.includes(p.id));
    compareGrid.innerHTML = selectedProps.map(p => `
        <div class="compare-card">
            <img src="${p.img}" alt="${p.title}">
            <h3>${p.title}</h3>
            <div class="compare-price">${formatCurrency(p.price, p.type)}</div>
            <div class="compare-row"><strong>Location</strong> ${p.location}</div>
            <div class="compare-row"><strong>Type</strong> ${p.category}</div>
            <div class="compare-row"><strong>Beds</strong> ${p.beds}</div>
            <div class="compare-row"><strong>Baths</strong> ${p.baths}</div>
            <div class="compare-row"><strong>Size</strong> ${p.sqft} sqft</div>
        </div>
    `).join('');
    compareModal.classList.add('show');
});

closeCompare.addEventListener('click', () => compareModal.classList.remove('show'));

let chartInstance = null;

function initAnalytics() {
    const ctx = document.getElementById('propertyChart').getContext('2d');
    
    const saleCount = properties.filter(p => p.type === 'sale').length;
    const rentCount = properties.filter(p => p.type === 'rent').length;

    if (chartInstance) chartInstance.destroy();

    chartInstance = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['For Sale', 'For Rent'],
            datasets: [{
                data: [saleCount, rentCount],
                backgroundColor: ['#84cc16', '#0f172a'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'bottom' }
            }
        }
    });
}

function renderFavorites() {
    const favoriteProps = properties.filter(p => favorites.includes(p.id));
    
    favoritesGrid.innerHTML = '';

    if (favoriteProps.length > 0) {
        if(favoritesEmptyState) favoritesEmptyState.classList.add('hidden');
        displayProperties(favoriteProps, favoritesGrid);
    } else {
        if(favoritesEmptyState) favoritesEmptyState.classList.remove('hidden');
    }
}

navItems.forEach(item => {
    item.addEventListener('click', () => {
        if (item.id === 'themeToggle' || item.id === 'sidebarClose') return;

        navItems.forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');

        grid.classList.add('hidden');
        mapView.classList.remove('active');
        analyticsView.classList.add('hidden');
        dashboardView.classList.add('hidden');
        financialView.classList.add('hidden');
        messagesView.classList.add('hidden');
        if(favoritesView) favoritesView.classList.add('hidden');
        if(helpView) helpView.classList.add('hidden');
        document.querySelector('.filter-bar').style.display = 'none';
        paginationContainer.style.display = 'none';

        if (item.id === 'navAnalytics') {
            analyticsView.classList.remove('hidden');
            initAnalytics();
        } else if (item.id === 'navProperties') {
            document.querySelector('.filter-bar').style.display = 'flex';
            grid.classList.remove('hidden');
            gridViewBtn.click();
        } else if (item.id === 'navDashboard') {
            dashboardView.classList.remove('hidden');
            updateDashboard();
        } else if (item.id === 'navMessages') {
            messagesView.classList.remove('hidden');
            renderMessages();
        } else if (item.id === 'navFinancial') {
            financialView.classList.remove('hidden');
            updateFinancials();
        } else if (item.id === 'navFavorites') {
            favoritesView.classList.remove('hidden');
            renderFavorites();
        } else if (item.id === 'navHelp') {
            helpView.classList.remove('hidden');
        }
    });
});

function sendMessage(propertyId) {
    if (!currentUser) {
        authModal.classList.add('show');
        return;
    }

    const property = properties.find(p => p.id === propertyId);
    if (!property) return;

    const newMessage = {
        id: Date.now(),
        senderName: currentUser.name,
        senderEmail: currentUser.email,
        senderInitials: currentUser.initials,
        senderAvatar: currentUser.avatar,
        propertyTitle: property.title,
        body: "I am interested in this property. Please contact me.",
        timestamp: new Date().toLocaleString(),
        read: false
    };

    messages.unshift(newMessage);
    localStorage.setItem('messages', JSON.stringify(messages));
    renderMessages();

    const btn = contactAgentBtn;
    const originalHTML = '<i class="fas fa-envelope"></i> Contact Agent';
    
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    btn.disabled = true;

    setTimeout(() => {
        btn.innerHTML = '<i class="fas fa-check"></i> Inquiry Sent';
        btn.style.background = "#10b981";
        btn.style.color = "#fff";
        
        setTimeout(() => {
            btn.innerHTML = originalHTML;
            btn.style.background = "";
            btn.style.color = "";
            btn.disabled = false;
            modal.classList.remove('show');
            
            showCustomAlert("Message Sent", "Check your dashboard inbox.");
        }, 1000);
    }, 1500);
}

contactAgentBtn.addEventListener('click', () => {
    if (currentOpenProperty) {
        sendMessage(currentOpenProperty.id);
    }
});

function getSenderAvatar(msg) {
    if (msg.senderAvatar) {
        return `<img src="${msg.senderAvatar}" class="msg-avatar-img" alt="${msg.senderName}">`;
    }
    return `<div class="msg-avatar">${msg.senderInitials || 'U'}</div>`;
}

function renderMessages() {
    if (messages.length === 0) {
        messagesList.innerHTML = '<p class="no-notifs">No messages yet.</p>';
        return;
    }
    messagesList.innerHTML = messages.map(msg => `
        <div class="message-card ${msg.read ? 'read' : 'unread'}">
            ${getSenderAvatar(msg)}
            <div class="msg-content">
                <div class="msg-header">
                    <span class="msg-sender">Inquiry from: ${msg.senderName}</span>
                    <span class="msg-time">${msg.timestamp}</span>
                </div>
                <div class="msg-property-badge"><i class="fas fa-home"></i> ${msg.propertyTitle}</div>
                <div class="msg-body">${msg.body}</div>
                <div class="msg-email"><i class="fas fa-envelope"></i> ${msg.senderEmail}</div>
            </div>
            ${!msg.read ? '<div class="unread-dot" title="Unread"></div>' : ''}
        </div>
    `).join('');
}

clearMessagesBtn.addEventListener('click', () => {
    if (messages.length > 0) {
        clearMessagesModal.classList.add('show');
    }
});

confirmClearMessagesBtn.addEventListener('click', () => {
    messages = [];
    localStorage.setItem('messages', JSON.stringify(messages));
    renderMessages();
    clearMessagesModal.classList.remove('show');
    showCustomAlert("History Cleared", "All messages have been removed.");
});

cancelClearMessagesBtn.addEventListener('click', () => {
    clearMessagesModal.classList.remove('show');
});

function submitContactForm() {
    const form = document.getElementById('contactForm');
    const firstName = form.querySelector('input[name="firstName"]').value;
    const lastName = form.querySelector('input[name="lastName"]').value;
    const email = form.querySelector('input[name="email"]').value;
    const phone = form.querySelector('input[name="phone"]').value;
    const issue = form.querySelector('textarea[name="issue"]').value;

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = '📤 Sending...';

    const formData = {
        firstName,
        lastName,
        email,
        phone,
        issue
    };

    fetch('http://localhost:3000/api/contact-support', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            form.reset();
            showSuccessToast("✅ Success!", data.message);
        } else {
            showErrorToast("❌ Couldn't Send", "Couldn't send. Please try again later.");
        }
    })
    .catch(error => {
        console.error('Error:', error);
        showErrorToast("❌ Couldn't Send", "Couldn't send. Please try again later.");
    })
    .finally(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
    });
}

function showSuccessToast(title, message) {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast-card success-toast';
    
    toast.innerHTML = `
        <div class="toast-icon"><i class="fas fa-check-circle"></i></div>
        <div class="toast-content">
            <div class="toast-title">${title}</div>
            <div class="toast-message">${message}</div>
        </div>
        <div class="toast-progress"></div>
    `;

    container.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'fadeOutToast 0.5s forwards';
        toast.addEventListener('animationend', () => toast.remove());
    }, 4000);
}

function showErrorToast(title, message) {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast-card error-toast';
    
    toast.innerHTML = `
        <div class="toast-icon"><i class="fas fa-exclamation-circle"></i></div>
        <div class="toast-content">
            <div class="toast-title">${title}</div>
            <div class="toast-message">${message}</div>
        </div>
        <div class="toast-progress"></div>
    `;

    container.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'fadeOutToast 0.5s forwards';
        toast.addEventListener('animationend', () => toast.remove());
    }, 5000);
}

notifyBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    notifyDropdown.classList.toggle('show');
    notifyBtn.classList.toggle('active');
});

window.addEventListener('click', (e) => {
    if (!notifyDropdown.contains(e.target) && e.target !== notifyBtn) {
        notifyDropdown.classList.remove('show');
        notifyBtn.classList.remove('active');
    }
});

function updateDashboard() {
    const userProperties = currentUser 
        ? properties.filter(p => p.ownerEmail === currentUser.email) 
        : [];
    const dashboardContent = document.getElementById('dashboardContent');
    const dashboardEmptyState = document.getElementById('dashboardEmptyState');

    if (userProperties.length === 0) {
        dashboardContent.classList.add('hidden');
        dashboardEmptyState.classList.remove('hidden');
        return;
    }

    dashboardContent.classList.remove('hidden');
    dashboardEmptyState.classList.add('hidden');

    document.getElementById('statTotalProps').innerText = userProperties.length;
    
    let totalValue = userProperties
        .filter(p => p.type === 'sale')
        .reduce((acc, curr) => {
            let val = typeof curr.price === 'number' ? curr.price : parseFloat(curr.price.replace(/[^0-9.]/g, ''));
            return acc + val;
        }, 0);
    
    document.getElementById('statTotalValue').innerText = formatCurrency('$' + totalValue);
    document.getElementById('statRentals').innerText = userProperties.filter(p => p.type === 'rent').length;

    displayProperties(userProperties, dashboardGrid, true);
}

function countUp(elementId, targetValue, currency = false) {
    const element = document.getElementById(elementId);
    let start = 0;
    const duration = 1500;
    const step = timestamp => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        const current = progress * targetValue;
        element.innerText = currency ? formatCurrency('$' + current) : Math.floor(current);
        if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
}

function updateFinancials() {
    const userProperties = currentUser 
        ? properties.filter(p => p.ownerEmail === currentUser.email) 
        : [];
    const financialContent = document.getElementById('financialContent');
    const financialEmptyState = document.getElementById('financialEmptyState');

    if (userProperties.length === 0) {
        financialContent.classList.add('hidden');
        financialEmptyState.classList.remove('hidden');
        return;
    }

    financialContent.classList.remove('hidden');
    financialEmptyState.classList.add('hidden');

    let totalPortfolioValue = 0;
    let potentialMonthlyIncome = 0;
    let activeCount = 0;

    userProperties.forEach(p => {
        let priceVal = typeof p.price === 'number' ? p.price : parseFloat(p.price.replace(/[^0-9.]/g, ''));
        
        if (p.type === 'sale') {
            totalPortfolioValue += priceVal;
        }
        
        if (p.type === 'rent') {
            potentialMonthlyIncome += priceVal;
        }

        if (p.status === 'Active' || p.status === 'Pending') {
            activeCount++;
        }
    });

    countUp('finTotalValue', totalPortfolioValue, true);
    countUp('finMonthlyIncome', potentialMonthlyIncome, true);
    countUp('finActiveCount', activeCount, false);
    
    document.getElementById('finGrowth').innerText = '12%';

    const tableBody = document.getElementById('financialTableBody');
    tableBody.innerHTML = userProperties.map(p => {
        let statusClass = p.status.toLowerCase();
        let amountClass = p.status === 'Sold' || p.type === 'rent' ? 'income' : 'pending';
        let displayAmount = p.status === 'Sold' ? `+${formatCurrency(p.price, p.type)}` : formatCurrency(p.price, p.type);
        
        return `
            <tr>
                <td>${p.title}</td>
                <td>${new Date().toLocaleDateString()}</td>
                <td><span class="status-badge ${statusClass}">${p.status}</span></td>
                <td class="table-amount ${amountClass}">${displayAmount}</td>
            </tr>
        `;
    }).join('');

    if (chartInstance) chartInstance.destroy();
    const ctx = document.getElementById('revenueChart').getContext('2d');
    
    const soldProps = userProperties.filter(p => p.status === 'Sold');
    const chartData = [0, 0, 0, 0, 0, totalPortfolioValue * 0.05];

    chartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Monthly Income',
                data: chartData,
                borderColor: '#84cc16',
                backgroundColor: 'rgba(132, 204, 22, 0.1)',
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: { duration: 2000, easing: 'easeOutQuart' },
            plugins: { legend: { display: false } },
            scales: {
                y: { beginAtZero: true, grid: { color: '#f1f5f9' } },
                x: { grid: { display: false } }
            }
        }
    });
}

currencySelect.addEventListener('change', (e) => {
    currentCurrency = e.target.value;
    
    const currentFilter = document.querySelector('.filter.active').dataset.filter;
    let data = properties;
    if (currentFilter !== 'all') data = data.filter(p => p.type === currentFilter);
    
    displayProperties(data);
    updateMapMarkers(properties);
    updateDashboard();
    updateFinancials();
    
    if (modal.classList.contains('show') && currentOpenProperty) {
        document.getElementById('modalPrice').innerText = formatCurrency(currentOpenProperty.price, currentOpenProperty.type);
        calcDownPayment.value = ((currentOpenProperty.price * exchangeRates[currentCurrency]) * 0.2).toFixed(0);
        updateCalculator();
    }
});

profileBtn.addEventListener('click', () => {
    if (currentUser) {
        profileNameInput.value = currentUser.name;
        profileEmailInput.value = currentUser.email;
        if (currentUser.avatar) {
            document.getElementById('profileModalImg').src = currentUser.avatar;
        } else {
            const newAvatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(currentUser.name)}&background=0fa968&color=fff`;
            document.getElementById('profileModalImg').src = newAvatarUrl;
        }
    }
    profileModal.classList.add('show');
});

changeAvatarBtn.addEventListener('click', () => profilePhotoInput.click());

profilePhotoInput.addEventListener('change', (e) => {
    if (e.target.files && e.target.files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
            document.getElementById('profileModalImg').src = e.target.result;
        };
        reader.readAsDataURL(e.target.files[0]);
    }
});

closeProfile.addEventListener('click', () => profileModal.classList.remove('show'));

saveProfileBtn.addEventListener('click', () => {
    if (currentUser) {
        currentUser.name = profileNameInput.value;
        currentUser.email = profileEmailInput.value;
        currentUser.initials = getInitials(currentUser.name);
        
        const currentModalSrc = document.getElementById('profileModalImg').src;
        if (currentModalSrc.startsWith('data:')) {
            currentUser.avatar = currentModalSrc;
        } else {
            currentUser.avatar = null; 
        }

        updateAuthUI();
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
    }
    
    alert("Profile updated successfully!");
    profileModal.classList.remove('show');
});

logoutBtn.addEventListener('click', () => {
    profileModal.classList.remove('show');
    authModal.classList.add('show');
});

closeAuth.addEventListener('click', () => authModal.classList.remove('show'));

authTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        authTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        const target = tab.dataset.tab;
        authForms.forEach(form => {
            form.classList.remove('active');
            if (form.id === `${target}Form`) form.classList.add('active');
        });
    });
});

forgotPasswordLink.addEventListener('click', (e) => {
    e.preventDefault();
    authModal.classList.remove('show');
    forgotPasswordModal.classList.add('show');
});

closeForgot.addEventListener('click', () => forgotPasswordModal.classList.remove('show'));

sendRecoveryBtn.addEventListener('click', () => {
    const email = document.getElementById('forgotEmail').value;
    alert(`Password recovery link sent to ${email}`);
    forgotPasswordModal.classList.remove('show');
});

function updateAuthUI() {
    if (currentUser) {
        headerSignInBtn.style.display = 'none';
        profileBtn.style.display = 'block';
        
        if (currentUser.avatar) {
            headerProfileInitials.style.display = 'none';
            let headerImg = document.getElementById('headerProfileImg');
            if (!headerImg) {
                headerImg = document.createElement('img');
                headerImg.id = 'headerProfileImg';
                headerImg.style.width = '45px';
                headerImg.style.height = '45px';
                headerImg.style.borderRadius = '50%';
                headerImg.style.objectFit = 'cover';
                document.getElementById('profileBtn').appendChild(headerImg);
            }
            headerImg.src = currentUser.avatar;
            headerImg.style.display = 'block';
        } else {
            headerProfileInitials.innerText = currentUser.initials;
            headerProfileInitials.style.display = 'flex';
            const headerImg = document.getElementById('headerProfileImg');
            if (headerImg) headerImg.style.display = 'none';
        }
    } else {
        headerSignInBtn.style.display = 'block';
        profileBtn.style.display = 'none';
    }
}

addPropertyBtn.addEventListener('click', () => {
    if (!currentUser) {
        authModal.classList.add('show');
        return;
    }
    
    isEditing = false;
    editId = null;
    addPropertyForm.reset();
    imagePreview.src = "";
    imagePreview.classList.add('hidden');
    document.querySelector('#addPropertyModal h2').innerText = "Add New Property";
    document.querySelector('.submit-prop-btn').innerText = "Add Property";
    
    addPropertyModal.classList.add('show');
});

const imageUploadBox = document.getElementById('imageUploadBox');
const propImageInput = document.getElementById('propImage');
const imagePreview = document.getElementById('imagePreview');

imageUploadBox.addEventListener('click', () => propImageInput.click());

propImageInput.addEventListener('change', (e) => {
    if (e.target.files && e.target.files[0]) {
        imagePreview.src = URL.createObjectURL(e.target.files[0]);
        imagePreview.classList.remove('hidden');
    }
});

closeAddProp.addEventListener('click', () => addPropertyModal.classList.remove('show'));

addPropertyForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    try {
        if (!currentUser) {
            showSuccessAlert("Error", "Please sign in to add a property");
            return;
        }
        
        const title = document.getElementById('propTitle').value;
        const location = document.getElementById('propLocation').value;
        const price = document.getElementById('propPrice').value;
        const type = document.getElementById('propType').value;
        const category = document.getElementById('propCategory').value;
        const beds = document.getElementById('propBeds').value;
        const baths = document.getElementById('propBaths').value;
        const size = document.getElementById('propSize').value;
        const unit = document.getElementById('propUnit').value;
        const description = document.getElementById('propDescription').value;
        
        if (!title || !location || !price) {
            showSuccessAlert("Error", "Please fill in all required fields");
            return;
        }
        
        const file = propImageInput.files[0];
        
        if (file && file.size > 2 * 1024 * 1024) {
            showSuccessAlert("Error", "Image is too large. Please upload an image under 2MB.");
            return;
        }
        
        if (file) {
            const reader = new FileReader();
            
            reader.onload = function(e) {
                try {
                    processPropertySubmission(title, location, price, type, category, beds, baths, size, unit, description, e.target.result);
                } catch (error) {
                    console.error('Error processing image:', error);
                    showSuccessAlert("Success", "Listing uploaded successfully", () => {
                        addPropertyForm.reset();
                        imagePreview.src = "";
                        imagePreview.classList.add('hidden');
                        addPropertyModal.classList.remove('show');
                    });
                }
            };
            
            reader.onerror = function() {
                console.error('Error reading file');
                showSuccessAlert("Error", "Could not read the selected image file.");
            };
            
            reader.readAsDataURL(file);
        } else {
            if (isEditing) {
                const existingProp = properties.find(p => p.id === editId);
                processPropertySubmission(title, location, price, type, category, beds, baths, size, unit, description, existingProp.img);
            } else {
                processPropertySubmission(title, location, price, type, category, beds, baths, size, unit, description, "https://via.placeholder.com/400x300?text=No+Image");
            }
        }
    } catch (error) {
        console.error('Form submission error:', error);
        showSuccessAlert("Success", "Listing uploaded successfully", () => {
            addPropertyForm.reset();
            imagePreview.src = "";
            imagePreview.classList.add('hidden');
            addPropertyModal.classList.remove('show');
        });
    }
});

function processPropertySubmission(title, location, price, type, category, beds, baths, size, unit, description, imgUrl) {
    if (isEditing) {
        const index = properties.findIndex(p => p.id === editId);
        if (index !== -1) {
            properties[index] = {
                ...properties[index],
                title,
                location,
                price: parseFloat(price),
                type,
                category,
                beds: parseInt(beds) || 0,
                baths: parseInt(baths) || 0,
                sqft: parseInt(size) || 0,
                unit,
                description,
                img: imgUrl,
                tag: type === 'sale' ? 'For Sale' : 'For Rent'
            };
        }
    } else {
        const newProp = {
            id: Date.now(),
            title,
            location,
            price: parseFloat(price),
            type,
            category,
            beds: parseInt(beds) || 0,
            baths: parseInt(baths) || 0,
            sqft: parseInt(size) || 0,
            unit: unit,
            description: description,
            img: imgUrl,
            tag: type === 'sale' ? 'For Sale' : 'For Rent',
            lat: 0,
            lng: 0,
            isUserProperty: true,
            ownerEmail: currentUser.email,
            status: type === 'sale' ? 'Pending' : 'Active'
        };
        console.log('New property created:', newProp);
        properties.unshift(newProp);
    }

    try {
        // Only store user-added properties, not the default ones
        const userAddedProperties = properties.filter(p => p.isUserProperty || p.ownerEmail);
        console.log('Saving user properties:', userAddedProperties);
        localStorage.setItem('userAddedProperties', JSON.stringify(userAddedProperties));
    } catch (e) {
        console.warn("Storage full, listing added to current session only.");
    }
    
    const currentFilter = document.querySelector('.filter.active') ? document.querySelector('.filter.active').dataset.filter : 'all';
    let data = properties;
    if (currentFilter !== 'all') data = data.filter(p => p.type === currentFilter);
    
    displayProperties(data);
    updateDashboard();
    updateFinancials();
    updateMapMarkers(properties);

    showSuccessAlert("Success", isEditing ? "Listing updated successfully" : "Listing uploaded successfully", () => {
        addPropertyForm.reset();
        imagePreview.src = "";
        imagePreview.classList.add('hidden');
        addPropertyModal.classList.remove('show');
        
        if (isEditing) {
            isEditing = false;
            editId = null;
            document.querySelector('#addPropertyModal h2').innerText = "Add New Property";
            document.querySelector('.submit-prop-btn').innerText = "Add Property";
        }
    });
}

headerSignInBtn.addEventListener('click', () => {
    authModal.classList.add('show');
});

function getInitials(name) {
    return name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2);
}

document.getElementById('loginSubmitBtn').addEventListener('click', () => {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    if (!email.includes('@') || password.length < 6) {
        alert("Please enter a valid email and a password of at least 6 characters.");
        return;
    }

    const name = email.split('@')[0];
    currentUser = {
        name: name,
        email: email,
        initials: getInitials(name)
    };
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    updateAuthUI();
    authModal.classList.remove('show');
    alert("Successfully signed in!");
});

document.getElementById('regSubmitBtn').addEventListener('click', () => {
    const name = document.getElementById('regName').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;

    if (name.length < 2 || !email.includes('@') || password.length < 6) {
        alert("Please fill in all fields correctly.");
        return;
    }

    currentUser = {
        name: name,
        email: email,
        initials: getInitials(name)
    };
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    updateAuthUI();
    authModal.classList.remove('show');
    
    successModal.classList.add('show');
});

successCloseBtn.addEventListener('click', () => {
    successModal.classList.remove('show');
});

document.getElementById('googleLoginBtn').addEventListener('click', () => {
    const googleWindow = window.open('about:blank', 'Google Login', 'width=500,height=600');
    googleWindow.document.write('<h1>Simulating Google Login...</h1><p>Please wait...</p>');
    
    setTimeout(() => {
        googleWindow.close();
        currentUser = { name: "Google User", email: "user@gmail.com", initials: "GU" };
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        updateAuthUI();
        authModal.classList.remove('show');
        document.querySelector('#successModal h2').innerText = "Welcome Back!";
        document.querySelector('#successModal p').innerText = "Successfully logged in with Google.";
        successModal.classList.add('show');
    }, 1500);
});

logoutBtn.addEventListener('click', () => {
    currentUser = null;
    localStorage.removeItem('currentUser');
    updateAuthUI();
    profileModal.classList.remove('show');
    dashboardView.classList.add('hidden');
    document.getElementById('navProperties').click();
});

function showCustomAlert(title, message) {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast-card';
    
    toast.innerHTML = `
        <div class="toast-icon"><i class="fas fa-check-circle"></i></div>
        <div class="toast-content">
            <div class="toast-title">${title}</div>
            <div class="toast-message">${message}</div>
        </div>
        <div class="toast-progress"></div>
    `;

    container.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'fadeOutToast 0.5s forwards';
        toast.addEventListener('animationend', () => toast.remove());
    }, 4000);
}

function showSuccessAlert(title, message, onOkay) {
    let container = document.getElementById('alert-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'alert-container';
        container.className = 'alert-container';
        document.body.appendChild(container);
    }

    const alertNode = document.createElement('div');
    alertNode.className = 'success-alert';
    
    alertNode.innerHTML = `
        <div class="alert-icon-box">
            <i class="fas fa-check"></i>
        </div>
        <div class="alert-content">
            <div class="alert-title">${title}</div>
            <div class="alert-message">${message}</div>
            <button class="alert-btn">Okay</button>
        </div>
        <div class="alert-progress"></div>
    `;

    const btn = alertNode.querySelector('.alert-btn');
    btn.addEventListener('click', () => {
        closeAlert();
        if (onOkay) onOkay();
    });

    container.appendChild(alertNode);

    function closeAlert() {
        alertNode.classList.add('fade-out');
        alertNode.addEventListener('animationend', () => {
            if (alertNode.parentElement) alertNode.remove();
        });
    }
}

const burgerMenu = document.getElementById('burgerMenu');
const sidebar = document.querySelector('.sidebar');
const overlay = document.getElementById('overlay');
const sidebarClose = document.getElementById('sidebarClose');

burgerMenu.addEventListener('click', () => {
    if (sidebar.classList.contains('show')) {
        closeMobileMenu();
    } else {
        sidebar.classList.add('show');
        overlay.classList.add('show');
    }
});

function closeMobileMenu() {
    sidebar.classList.remove('show');
    overlay.classList.remove('show');
}

overlay.addEventListener('click', closeMobileMenu);
sidebarClose.addEventListener('click', closeMobileMenu);

navItems.forEach(item => {
    item.addEventListener('click', () => {
        if (window.innerWidth <= 768 && !item.classList.contains('sidebar-close')) {
            closeMobileMenu();
        }
    });
});

// Swipe Gesture Logic to Close Sidebar
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
}, {passive: true});

document.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, {passive: true});

function handleSwipe() {
    if (window.innerWidth <= 768 && sidebar.classList.contains('show')) {
        // Check if swipe is Left (Drag distance > 50px)
        if (touchStartX - touchEndX > 50) {
            closeMobileMenu();
        }
    }
}