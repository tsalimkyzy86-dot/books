// ==========================================================================
// Cozy Bookstore Logic (bukinist.kzo)
// ==========================================================================

// --- BOOK DATABASE ---
let BOOKS_DATABASE = [
    {
        id: "book-politics-1",
        title: "О тирании. Двадцать уроков двадцатого века",
        author: "Тимоти Снайдер",
        genre: "politics",
        price: 3200,
        rating: 4.8,
        ratingCount: 37,
        pages: 128,
        binding: "Мягкий переплет (Pocket)",
        year: 2020,
        condition: "Отличное (б/у)",
        coverStyle: "linear-gradient(135deg, #2b3a4a, #1a242f)",
        coverTextColor: "#e2e8f0",
        description: "Тимоти Снайдер, ведущий историк двадцатого века, предлагает двадцать кратких и содержательных уроков, извлеченных из крушения демократий в Европе. Эта книга — практическое руководство по сопротивлению авторитаризму и защите свободы в современном мире.",
        longDescription: "Как выживают демократии и почему они рушатся? Тимоти Снайдер показывает, что современное общество не защищено от тех же ошибок, которые привели к тоталитарным режимам XX века. Написанная простым языком, книга представляет собой лаконичную инструкцию для гражданского сознания: почему важно поддерживать институты, беречь язык от штампов, доверять фактам и не подчиняться заранее."
    },
    {
        id: "book-politics-2",
        title: "Государство",
        author: "Платон",
        genre: "politics",
        price: 4500,
        rating: 4.9,
        ratingCount: 54,
        pages: 448,
        binding: "Твердый переплет, суперобложка",
        year: 2022,
        condition: "Хорошее (винтажное б/у)",
        coverStyle: "linear-gradient(135deg, #5b7056, #3f503c)",
        coverTextColor: "#fdfbf7",
        description: "Фундаментальный философский диалог Платона, посвященный проблеме идеального государства, справедливости и роли философов в управлении обществом. Столп мировой политической мысли в подарочном оформлении.",
        longDescription: "В «Государстве» Платон через диалоги Сократа конструирует модель идеального полиса, где каждый класс выполняет свою функцию, а правят мудрецы-философы. Здесь же содержится знаменитый миф о пещере — аллегория человеческого познания и иллюзорности нашего восприятия. Настоящее интеллектуальное украшение вашей библиотеки в эстетичной тканевой обложке."
    },
    {
        id: "book-politics-3",
        title: "Левиафан, или Материя, форма и власть государства",
        author: "Томас Гоббс",
        genre: "politics",
        price: 5200,
        rating: 4.6,
        ratingCount: 29,
        pages: 672,
        binding: "Твердый переплет",
        year: 2021,
        condition: "Отличное (б/у)",
        coverStyle: "linear-gradient(135deg, #423b32, #29241f)",
        coverTextColor: "#eae2d5",
        description: "Классический трактат о природе человека, общества и абсолютной государственной власти. Книга, заложившая основы теории общественного договора.",
        longDescription: "Томас Гоббс описывает естественное состояние людей как «войну всех против всех» и предлагает выход через создание Левиафана — всемогущего государства, которому граждане добровольно передают часть свобод в обмен на безопасность и порядок. Труд, который до сих пор вызывает бурные дебаты в политической теории."
    },
    {
        id: "book-philosophy-1",
        title: "Наедине с собой",
        author: "Марк Аврелий",
        genre: "philosophy",
        price: 3900,
        rating: 4.9,
        ratingCount: 88,
        pages: 320,
        binding: "Твердый переплет, тиснение фольгой",
        year: 2023,
        condition: "Отличное (как новая, б/у)",
        coverStyle: "linear-gradient(135deg, #cc7852, #a65c3a)",
        coverTextColor: "#fdfbf7",
        description: "Личные дневниковые записи римского императора Марка Аврелия Антонина, ставшие памятником стоической философии. Книга о том, как сохранять мир в душе в эпицентре хаоса.",
        longDescription: "Написанная в военных походах, эта книга никогда не предназначалась для публикации. Это интимный разговор императора со своей совестью. Стоическая мудрость учит нас разделять вещи на подконтрольные нам и неподконтрольные, спокойно принимать удары судьбы и честно выполнять свой долг перед обществом. Идеальная книга для чтения прохладным уютным вечером."
    },
    {
        id: "book-philosophy-2",
        title: "Нравственные письма к Луцилию",
        author: "Луций Анней Сенека",
        genre: "philosophy",
        price: 4800,
        rating: 4.8,
        ratingCount: 65,
        pages: 512,
        binding: "Твердый переплет, ляссе",
        year: 2023,
        condition: "Отличное (б/у)",
        coverStyle: "linear-gradient(135deg, #8c6a56, #6b4d3c)",
        coverTextColor: "#fdfbf7",
        description: "Главное произведение Сенеки, написанное в форме писем к молодому другу. Практическое руководство по обретению мудрости, счастья и свободы от страхов.",
        longDescription: "Сенека обращается к темам дружбы, времени, старости, богатства и смерти с невероятной теплотой и прямотой. Это не сухая догматика, а дружеский совет мудрого наставника. Письма наполнены афоризмами и практическими техниками для повседневного самоконтроля и ментальной стойкости."
    },
    {
        id: "book-art-1",
        title: "Искусство видеть",
        author: "Джон Бёрджер",
        genre: "art",
        price: 4100,
        rating: 4.7,
        ratingCount: 45,
        pages: 184,
        binding: "Мягкий переплет (особая бумага)",
        year: 2021,
        condition: "Хорошее (есть пометки карандашом, б/у)",
        coverStyle: "linear-gradient(135deg, #e3dac9, #c2b59b)",
        coverTextColor: "#2c2520",
        description: "Книга, перевернувшая представление о визуальном восприятии. Основана на знаменитом телесериале BBC и открывает скрытые идеологические смыслы классических полотен.",
        longDescription: "Джон Бёрджер утверждает, что то, как мы смотрим на вещи, определяется нашими знаниями и убеждениями. Он разоблачает мистификацию искусства, показывает связь между живописью и современной рекламой, а также анализирует изображение женщины как объекта потребления. Книга снабжена множеством иллюстраций и читается на одном дыхании."
    },
    {
        id: "book-art-2",
        title: "О духовном в искусстве",
        author: "Василий Кандинский",
        genre: "art",
        price: 3600,
        rating: 4.5,
        ratingCount: 22,
        pages: 144,
        binding: "Твердый переплет, минимализм",
        year: 2020,
        condition: "Отличное (б/у)",
        coverStyle: "linear-gradient(135deg, #6c5c77, #4b3e54)",
        coverTextColor: "#fdfbf7",
        description: "Программный труд великого русского художника, заложивший теоретические основы абстрактного искусства. Погружение в психологию цвета и формы.",
        longDescription: "В этой книге Кандинский объясняет переход от предметного искусства к беспредметному («чистой духовности»). Он сопоставляет цвета с музыкаческими инструментами, описывает душевную вибрацию, которую они вызывают, и провозглашает наступление эпохи Великой Духовности. Полезно для художников, дизайнеров и всех, кто хочет понимать язык авангарда."
    },
    {
        id: "book-development-1",
        title: "Атомные привычки. Как получить большие результаты благодаря малым изменениям",
        author: "Джеймс Клир",
        genre: "development",
        price: 4900,
        rating: 4.9,
        ratingCount: 124,
        pages: 352,
        binding: "Твердый переплет, белая бумага",
        year: 2022,
        condition: "Отличное (как новая, б/у)",
        coverStyle: "linear-gradient(135deg, #cc9c3f, #aa7b25)",
        coverTextColor: "#fdfbf7",
        description: "Мировой бестселлер по созданию полезных привычек и избавлению от вредных. Научный и практический подход к перестройке повседневного поведения.",
        longDescription: "Джеймс Клир разрушает мифы о силе воли и мотивации. Вместо этого он предлагает четыре закона изменения поведения: сделайте привычку очевидной, привлекательной, простой и удовлетворяющей. Мелкие изменения в 1% каждый день на дистанции года дают колоссальный накопительный эффект. Книга снабжена удобными таблицами и схемами."
    },
    {
        id: "book-development-2",
        title: "Эссенциализм. Путь к простоте",
        author: "Грег МакКеон",
        genre: "development",
        price: 4300,
        rating: 4.7,
        ratingCount: 71,
        pages: 256,
        binding: "Твердый переплет",
        year: 2022,
        condition: "Хорошее (небольшой износ обложки, б/у)",
        coverStyle: "linear-gradient(135deg, #7c94a4, #576d7c)",
        coverTextColor: "#fdfbf7",
        description: "Манифест о том, как делать меньше, но лучше. Книга для тех, кто перегружен рутиной, чувствует нехватку времени, но при этом стоит на месте.",
        longDescription: "Эссенциализм — это не тайм-менеджмент. Это систематическая дисциплина, помогающая определить самое важное, отсечь все лишнее и направить энергию на достижение максимальных результатов в приоритетных сферах. Помогает вернуть контроль над своей жизнью и научиться говорить твердое «нет» второстепенным вещам."
    },
    {
        id: "book-development-3",
        title: "Думай медленно... Решай быстро",
        author: "Даниэль Канеман",
        genre: "development",
        price: 5900,
        rating: 4.8,
        ratingCount: 92,
        pages: 656,
        binding: "Твердый переплет, уплотненный форзац",
        year: 2021,
        condition: "Отличное (б/у)",
        coverStyle: "linear-gradient(135deg, #4a6b6c, #2f494a)",
        coverTextColor: "#fdfbf7",
        description: "Труд нобелевского лауреата Даниэля Канемана о ловушках нашего разума. Объясняет работу двух систем мышления: интуитивной (быстрой) и логической (медленной).",
        longDescription: "Почему мы принимаем нерациональные финансовые решения? Как работают когнитивные искажения, стереотипы и эвристики? Канеман проводит читателя через увлекательные эксперименты, показывая, как часто наш мозг ошибается, и учит использовать критическое мышление для осознанного выбора."
    }
];

// --- AUTO-DETECT BACKEND / STATIC WORKAROUND FOR VERCEL ---
const ORIGINAL_FETCH = window.fetch;
let IS_BACKEND_AVAILABLE = null;

// Initialize local data helper
function initLocalStorageData() {
    if (!localStorage.getItem('bukinist_books')) {
        localStorage.setItem('bukinist_books', JSON.stringify(BOOKS_DATABASE));
    }
    if (!localStorage.getItem('bukinist_orders')) {
        localStorage.setItem('bukinist_orders', JSON.stringify([]));
    }
    if (!localStorage.getItem('bukinist_messages')) {
        localStorage.setItem('bukinist_messages', JSON.stringify([]));
    }
}
initLocalStorageData();

// Helper to simulate fetch response
function mockResponse(data, status = 200, statusText = 'OK') {
    return {
        ok: status >= 200 && status < 300,
        status: status,
        statusText: statusText,
        headers: new Headers({ 'Content-Type': 'application/json' }),
        json: async () => data,
        text: async () => JSON.stringify(data)
    };
}

// Override global fetch
window.fetch = async function(resource, options) {
    const url = typeof resource === 'string' ? resource : resource.url;
    
    // Only intercept requests to /api/
    if (url.startsWith('/api/')) {
        // If we know backend is not available, bypass network completely to avoid delay and console errors
        if (IS_BACKEND_AVAILABLE === false) {
            return handleMockRequest(url, options);
        }
        
        try {
            const response = await ORIGINAL_FETCH(resource, options);
            const contentType = response.headers.get('content-type') || '';
            
            // If response is HTML (Vercel rewrite redirection) or not ok
            if (response.status === 404 || contentType.includes('text/html')) {
                console.warn('Backend returned HTML or 404. Switching to local mockup mode (Vercel static).');
                IS_BACKEND_AVAILABLE = false;
                return handleMockRequest(url, options);
            }
            
            IS_BACKEND_AVAILABLE = true;
            return response;
        } catch (e) {
            console.warn('Backend network error. Switching to local mockup mode (Vercel static).', e);
            IS_BACKEND_AVAILABLE = false;
            return handleMockRequest(url, options);
        }
    }
    
    return ORIGINAL_FETCH(resource, options);
};

// Handle intercepted /api/ requests locally
function handleMockRequest(url, options) {
    const method = (options && options.method || 'GET').toUpperCase();
    
    // Parse URL relative to current location
    let parsedUrl;
    try {
        parsedUrl = new URL(url, window.location.origin);
    } catch(err) {
        parsedUrl = new URL(url);
    }
    const path = parsedUrl.pathname;
    
    // Route mapping
    if (path === '/api/books') {
        let books = JSON.parse(localStorage.getItem('bukinist_books') || '[]');
        if (method === 'GET') {
            const bookId = parsedUrl.searchParams.get('id');
            if (bookId) {
                const book = books.find(b => b.id === bookId);
                return mockResponse(book || null, book ? 200 : 404, book ? 'OK' : 'Not Found');
            }
            return mockResponse(books);
        }
        if (method === 'POST') {
            const newBook = JSON.parse(options.body);
            books.push(newBook);
            localStorage.setItem('bukinist_books', JSON.stringify(books));
            BOOKS_DATABASE = books;
            return mockResponse({ success: true, book: newBook }, 201, 'Created');
        }
        if (method === 'DELETE') {
            const bookId = parsedUrl.searchParams.get('id');
            books = books.filter(b => b.id !== bookId);
            localStorage.setItem('bukinist_books', JSON.stringify(books));
            BOOKS_DATABASE = books;
            return mockResponse({ success: true });
        }
    }
    
    if (path === '/api/orders') {
        let orders = JSON.parse(localStorage.getItem('bukinist_orders') || '[]');
        if (method === 'GET') {
            const orderId = parsedUrl.searchParams.get('id');
            if (orderId) {
                const order = orders.find(o => o.id === orderId);
                return mockResponse(order || null, order ? 200 : 404, order ? 'OK' : 'Not Found');
            }
            return mockResponse(orders);
        }
        if (method === 'POST') {
            const newOrder = JSON.parse(options.body);
            if (!newOrder.id) {
                newOrder.id = '#' + Math.floor(1000 + Math.random() * 9000);
            }
            if (!newOrder.date) {
                newOrder.date = new Date().toLocaleString('ru-RU');
            }
            orders.unshift(newOrder);
            localStorage.setItem('bukinist_orders', JSON.stringify(orders));
            return mockResponse({ success: true, order: newOrder }, 201, 'Created');
        }
        if (method === 'DELETE') {
            const orderId = parsedUrl.searchParams.get('id');
            if (orderId) {
                orders = orders.filter(o => o.id !== orderId);
            } else {
                orders = [];
            }
            localStorage.setItem('bukinist_orders', JSON.stringify(orders));
            return mockResponse({ success: true });
        }
    }
    
    if (path.startsWith('/api/orders/') && path.endsWith('/status')) {
        const parts = path.split('/');
        const orderId = parts[3];
        if (method === 'PUT') {
            const body = JSON.parse(options.body);
            let orders = JSON.parse(localStorage.getItem('bukinist_orders') || '[]');
            let found = false;
            orders = orders.map(o => {
                const cleanId = orderId.replace('#', '');
                const cleanOId = o.id.replace('#', '');
                if (cleanOId === cleanId) {
                    o.status = body.status;
                    found = true;
                }
                return o;
            });
            localStorage.setItem('bukinist_orders', JSON.stringify(orders));
            return mockResponse({ success: found }, found ? 200 : 404, found ? 'OK' : 'Not Found');
        }
    }
    
    if (path === '/api/messages') {
        let messages = JSON.parse(localStorage.getItem('bukinist_messages') || '[]');
        if (method === 'GET') {
            return mockResponse(messages);
        }
        if (method === 'POST') {
            const newMsg = JSON.parse(options.body);
            if (!newMsg.id) {
                newMsg.id = Date.now();
            }
            if (!newMsg.date) {
                newMsg.date = new Date().toLocaleString('ru-RU');
            }
            messages.unshift(newMsg);
            localStorage.setItem('bukinist_messages', JSON.stringify(messages));
            return mockResponse({ success: true, message: newMsg }, 201, 'Created');
        }
        if (method === 'DELETE') {
            const msgId = parsedUrl.searchParams.get('id');
            if (msgId) {
                messages = messages.filter(m => String(m.id) !== String(msgId));
            } else {
                messages = [];
            }
            localStorage.setItem('bukinist_messages', JSON.stringify(messages));
            return mockResponse({ success: true });
        }
    }
    
    return mockResponse({ error: 'Endpoint not simulated' }, 404, 'Not Found');
}

// Initialize books from backend database (or local fallback)
async function loadBooksDatabase() {
    try {
        const response = await fetch('/api/books');
        if (response.ok) {
            BOOKS_DATABASE = await response.json();
        } else {
            console.warn('Failed to load books from backend. Defaulting to local data.');
        }
    } catch (e) {
        console.error('Error loading books database from API', e);
    }
    
    // Always render UI views, even if API requests failed
    renderGenreTabs();
    populateGenresDatalist();
    renderFeaturedBook();
    renderCatalog();
    
    // Refresh admin dashboard if it is visible
    const dashboardWrap = document.getElementById('admin-dashboard-wrap');
    if (dashboardWrap && (dashboardWrap.style.display === 'flex' || dashboardWrap.style.display === 'block')) {
        renderAdminBooks();
        updateAdminStats();
    }
}

// Dynamic Genre Tabs rendering based on unique genres in BOOKS_DATABASE
function renderGenreTabs() {
    const genreTabsEl = document.getElementById('genre-tabs');
    if (!genreTabsEl) return;
    
    // Predefined default genres
    const baseGenres = ['politics', 'philosophy', 'art', 'development'];
    
    // Custom genres from books database
    const dbGenres = BOOKS_DATABASE.map(b => b.genre).filter(Boolean);
    
    // Combine and unique
    const allGenresSet = new Set();
    baseGenres.forEach(g => allGenresSet.add(g.toLowerCase()));
    
    const allGenres = [...baseGenres];
    dbGenres.forEach(g => {
        if (!allGenresSet.has(g.toLowerCase())) {
            allGenresSet.add(g.toLowerCase());
            allGenres.push(g);
        }
    });
    
    genreTabsEl.innerHTML = `
        <button class="genre-tab ${currentFilterGenre === 'all' ? 'active' : ''}" data-genre="all">Все книги</button>
        ` + allGenres.map(genre => {
            const isActive = currentFilterGenre === genre;
            const label = getGenreNameRu(genre);
            return `<button class="genre-tab ${isActive ? 'active' : ''}" data-genre="${genre}">${label}</button>`;
        }).join('') + `
        <button class="genre-tab ${currentFilterGenre === 'wishlist' ? 'active' : ''}" data-genre="wishlist" style="color: var(--accent-terracotta); font-weight: 700;">
            <i class="fas fa-heart"></i> Избранное
        </button>
    `;
}

// Populate the genres datalist in Admin page dynamically
function populateGenresDatalist() {
    const datalist = document.getElementById('genres-list');
    if (!datalist) return;
    
    const baseGenres = ['politics', 'philosophy', 'art', 'development'];
    const dbGenres = BOOKS_DATABASE.map(b => b.genre).filter(Boolean);
    
    const allGenresSet = new Set();
    baseGenres.forEach(g => allGenresSet.add(g.toLowerCase()));
    
    const allGenres = [...baseGenres];
    dbGenres.forEach(g => {
        if (!allGenresSet.has(g.toLowerCase())) {
            allGenresSet.add(g.toLowerCase());
            allGenres.push(g);
        }
    });
    
    datalist.innerHTML = allGenres.map(genre => {
        const label = getGenreNameRu(genre);
        return `<option value="${genre}">${label !== genre ? label : ''}</option>`;
    }).join('');
}

// --- STATE MANAGEMENT ---
let cart = [];
let wishlist = [];
let currentFilterGenre = "all";
let currentSearchQuery = "";
let currentSortOption = "default";

// --- DOM ELEMENTS ---
const sections = document.querySelectorAll('.view-section');
const navLinks = document.querySelectorAll('.nav-link');
const logoLink = document.getElementById('logo-link');
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const navMenu = document.getElementById('nav-menu');
const header = document.querySelector('.main-header');

const bookGrid = document.getElementById('book-grid');
const genreTabs = document.getElementById('genre-tabs');
const catalogSearch = document.getElementById('catalog-search');
const clearSearchBtn = document.getElementById('clear-search-btn');
const catalogSort = document.getElementById('catalog-sort');
const activeFiltersBar = document.getElementById('active-filters-bar');

const bookModal = document.getElementById('book-modal');
const bookModalBody = document.getElementById('book-modal-body');
const closeBookModalBtn = document.getElementById('close-book-modal-btn');

const cartToggleBtn = document.getElementById('cart-toggle-btn');
const cartModal = document.getElementById('cart-modal');
const closeCartModalBtn = document.getElementById('close-cart-modal-btn');
const cartItemsList = document.getElementById('cart-items-list');
const cartBadgeCount = document.getElementById('cart-badge-count');
const cartBackToCatalogBtn = document.getElementById('cart-back-to-catalog-btn');

const checkoutForm = document.getElementById('checkout-form');
const submitOrderBtn = document.getElementById('submit-order-btn');
const summaryItemsPrice = document.getElementById('summary-items-price');
const summaryDeliveryPrice = document.getElementById('summary-delivery-price');
const summaryTotalPrice = document.getElementById('summary-total-price');
const oDeliverySelect = document.getElementById('o-delivery-select');
const oAddressGroup = document.getElementById('o-address-group');
const oAddress = document.getElementById('o-address');
const oName = document.getElementById('o-name');
const oPhone = document.getElementById('o-phone');
const oSocial = document.getElementById('o-social');

const successModal = document.getElementById('success-modal');
const successOrderNum = document.getElementById('success-order-num');
const whatsappTextPreview = document.getElementById('whatsapp-text-preview');
const sendWhatsappLink = document.getElementById('send-whatsapp-link');
const closeSuccessBtn = document.getElementById('close-success-btn');
const successCloseBtn = document.getElementById('success-close-btn');

const newsletterForm = document.getElementById('newsletter-form');
const contactUsForm = document.getElementById('contact-us-form');

// --- INIT APP ---
document.addEventListener('DOMContentLoaded', () => {
    loadWishlist();
    loadBooksDatabase();
    initRouting();
    initHeaderScroll();
    loadCartFromLocalStorage();
    initEventListeners();
    initAdminPanel();
    initCozyPlayer();
});

// --- ROUTING (Single Page Application via Hash) ---
function initRouting() {
    function handleRoute() {
        let hash = window.location.hash || '#home';
        if (hash === '#') hash = '#home';
        
        const targetId = hash.substring(1);
        
        // Check if section exists
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            // Hide all sections
            sections.forEach(sec => sec.classList.remove('active'));
            // Show target
            targetSection.classList.add('active');
            
                        // Toggle main header/footer/cozy audio player for Admin panel (full-screen)
            const mainFooter = document.querySelector('.main-footer');
            const cozyPlayer = document.getElementById('cozy-audio-player');
            if (targetId === 'admin') {
                if (header) header.style.display = 'none';
                if (mainFooter) mainFooter.style.display = 'none';
                if (cozyPlayer) cozyPlayer.style.display = 'none';
                document.body.classList.add('admin-view-active');
            } else {
                if (header) header.style.display = '';
                if (mainFooter) mainFooter.style.display = '';
                if (cozyPlayer) cozyPlayer.style.display = '';
                document.body.classList.remove('admin-view-active');
            }
            
            // Update active class in menu
            navLinks.forEach(link => {
                if (link.getAttribute('href') === hash) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });

            // Close mobile menu if open
            navMenu.classList.remove('mobile-active');
            mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            
            // Scroll to top
            window.scrollTo(0, 0);
        }
    }

    window.addEventListener('hashchange', handleRoute);
    handleRoute(); // Run once on load
}

// Global function to trigger navigation programmatically
window.navigateToSection = function(sectionId) {
    window.location.hash = '#' + sectionId;
};

// --- HEADER SCROLL ACTION ---
function initHeaderScroll() {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// --- BOOK COVER CUSTOM RENDER (HTML/CSS Based for aesthetic look) ---
function getBookCoverHTML(book, type = 'grid') {
    const isFeatured = type === 'featured';
    const isModal = type === 'modal';
    
    let fontSizeTitle = '1rem';
    let fontSizeAuthor = '0.75rem';
    let padding = '16px';
    
    if (isFeatured) {
        fontSizeTitle = '1.6rem';
        fontSizeAuthor = '1.05rem';
        padding = '30px';
    } else if (isModal) {
        fontSizeTitle = '1.8rem';
        fontSizeAuthor = '1.15rem';
        padding = '35px';
    }

    if (book.coverUrl && book.coverUrl.trim() !== '') {
        return `
            <div class="aesthetic-book-cover image-cover" style="
                width: 100%;
                height: 100%;
                position: relative;
                box-shadow: inset -10px 0 20px rgba(0,0,0,0.2), 5px 5px 15px rgba(0,0,0,0.15);
                border-radius: 4px 12px 12px 4px;
                overflow: hidden;
            ">
                <!-- Book Spine Simulator Gradient Overlay -->
                <div style="
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 18px;
                    height: 100%;
                    background: linear-gradient(to right, rgba(0,0,0,0.3) 0%, rgba(255,255,255,0.15) 30%, rgba(0,0,0,0.05) 50%, rgba(255,255,255,0.1) 85%, rgba(0,0,0,0.2) 100%);
                    z-index: 2;
                    border-right: 1px solid rgba(0,0,0,0.15);
                "></div>
                <img src="${book.coverUrl.trim()}" alt="${book.title}" style="
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    display: block;
                ">
            </div>
        `;
    }
    
    return `
        <div class="aesthetic-book-cover" style="
            background: ${book.coverStyle}; 
            color: ${book.coverTextColor};
            width: 100%;
            height: 100%;
            padding: ${padding};
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            position: relative;
            box-shadow: inset -10px 0 20px rgba(0,0,0,0.2), inset 0 2px 5px rgba(255,255,255,0.1), 5px 5px 15px rgba(0,0,0,0.15);
            border-radius: 4px 12px 12px 4px;
            overflow: hidden;
            font-family: var(--font-serif);
        ">
            <!-- Book Spine Simulator Gradient Overlay -->
            <div style="
                position: absolute;
                left: 0;
                top: 0;
                width: 18px;
                height: 100%;
                background: linear-gradient(to right, rgba(0,0,0,0.3) 0%, rgba(255,255,255,0.15) 30%, rgba(0,0,0,0.05) 50%, rgba(255,255,255,0.1) 85%, rgba(0,0,0,0.2) 100%);
                z-index: 2;
                border-right: 1px solid rgba(0,0,0,0.15);
            "></div>

            <div style="border-bottom: 1px solid rgba(255,255,255,0.15); padding-bottom: 8px; margin-left: 10px;">
                <span style="font-size: 0.65rem; text-transform: uppercase; letter-spacing: 1.5px; opacity: 0.8;">
                    ${getGenreNameRu(book.genre)}
                </span>
            </div>

            <div style="margin-left: 10px; display: flex; flex-direction: column; gap: 8px;">
                <h3 style="
                    font-size: ${fontSizeTitle}; 
                    font-weight: 700; 
                    line-height: 1.25; 
                    font-family: var(--font-serif);
                    margin: 0;
                    text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
                ">${book.title}</h3>
                <span style="
                    font-size: ${fontSizeAuthor}; 
                    font-style: italic; 
                    opacity: 0.9;
                    font-family: var(--font-sans);
                ">${book.author}</span>
            </div>

            <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-left: 10px; border-top: 1px solid rgba(255,255,255,0.15); padding-top: 8px;">
                <span style="font-size: 0.65rem; opacity: 0.7;">bukinist.kzo</span>
                <span style="font-size: 0.65rem; opacity: 0.7;">${book.year}</span>
            </div>
        </div>
    `;
}

function getGenreNameRu(genre) {
    if (!genre) return 'Книга';
    switch (genre.toLowerCase()) {
        case 'politics': return 'Политика';
        case 'philosophy': return 'Рассуждения и Философия';
        case 'art': return 'Искусство';
        case 'development': return 'Саморазвитие';
        default: return genre;
    }
}

// --- RENDER HOME FEATURED BOOK ---
function renderFeaturedBook() {
    const featuredContainer = document.getElementById('featured-book-container');
    if (!featuredContainer) return;
    
    // Choose Seneca as Book of the Week (id: book-philosophy-2)
    const featuredBook = BOOKS_DATABASE.find(b => b.id === 'book-philosophy-2') || BOOKS_DATABASE[3] || BOOKS_DATABASE[0];
    if (!featuredBook) {
        featuredContainer.innerHTML = `<div class="featured-skeleton">Каталог пуст. Добавьте книги в панели управления.</div>`;
        return;
    }
    
    featuredContainer.innerHTML = `
        <div class="f-book-cover-wrap">
            <div style="width: 240px; height: 350px;">
                ${getBookCoverHTML(featuredBook, 'featured')}
            </div>
        </div>
        <div class="f-book-info">
            <span class="f-book-tag">Выбор недели</span>
            <h3 class="f-book-title">${featuredBook.title}</h3>
            <span class="f-book-author">${featuredBook.author}</span>
            <div style="font-size: 0.95rem; font-weight: 700; color: var(--accent-terracotta); margin-bottom: 8px;">Состояние б/у: ${featuredBook.condition}</div>
            <div class="rating-stars">
                ${getRatingStarsHTML(featuredBook.rating)}
                <span>(${featuredBook.ratingCount} отзывов)</span>
            </div>
            <p class="f-book-desc">${featuredBook.longDescription || featuredBook.description}</p>
            <div class="f-book-price-buy">
                <span class="f-book-price">${formatPrice(featuredBook.price)}</span>
                <div class="f-book-actions">
                    <button class="btn btn-primary" onclick="addToCart('${featuredBook.id}')">В корзину <i class="fas fa-shopping-basket"></i></button>
                    <button class="btn btn-secondary" onclick="openBookDetails('${featuredBook.id}')">Подробнее <i class="fas fa-eye"></i></button>
                </div>
            </div>
        </div>
    `;
}

// --- RENDER CATALOG SYSTEM ---
function renderCatalog() {
    if (!bookGrid) return;
    
    // Filter books
    let filteredBooks = BOOKS_DATABASE.filter(book => {
        const matchesGenre = currentFilterGenre === 'all' || 
                             (currentFilterGenre === 'wishlist' ? wishlist.includes(book.id) : book.genre === currentFilterGenre);
        const matchesSearch = book.title.toLowerCase().includes(currentSearchQuery.toLowerCase()) || 
                              book.author.toLowerCase().includes(currentSearchQuery.toLowerCase()) ||
                              getGenreNameRu(book.genre).toLowerCase().includes(currentSearchQuery.toLowerCase());
        return matchesGenre && matchesSearch;
    });

    // Sort books
    if (currentSortOption === 'price-asc') {
        filteredBooks.sort((a, b) => a.price - b.price);
    } else if (currentSortOption === 'price-desc') {
        filteredBooks.sort((a, b) => b.price - a.price);
    } else if (currentSortOption === 'title-asc') {
        filteredBooks.sort((a, b) => a.title.localeCompare(b.title));
    }

    // Render active chips
    renderActiveFiltersBar();

    if (filteredBooks.length === 0) {
        bookGrid.innerHTML = `
            <div class="grid-placeholder">
                <i class="fas fa-search-minus" style="font-size: 3rem; color: var(--border-cozy-dark); margin-bottom: 16px;"></i>
                <p>Книг с такими параметрами не найдено.</p>
                <button class="btn btn-secondary btn-sm" style="margin-top: 12px;" onclick="resetCatalogFilters()">Сбросить фильтры</button>
            </div>
        `;
        return;
    }

    bookGrid.innerHTML = filteredBooks.map(book => {
        const isWish = wishlist.includes(book.id);
        const heartClass = isWish ? 'active' : '';
        const heartIcon = isWish ? 'fas' : 'far';
        return `
            <article class="book-card" id="card-${book.id}">
                <div class="book-cover-container" onclick="openBookDetails('${book.id}')" style="cursor: pointer; position: relative;">
                    ${getBookCoverHTML(book, 'grid')}
                    <span class="book-category-tag">${getGenreNameRu(book.genre)}</span>
                    <button class="wishlist-heart-btn ${heartClass}" onclick="toggleWishlist(event, '${book.id}')" title="В избранное">
                        <i class="${heartIcon} fa-heart"></i>
                    </button>
                </div>
                <div class="book-card-info">
                    <span class="book-author">${book.author}</span>
                    <h3 class="book-title" onclick="openBookDetails('${book.id}')" style="cursor: pointer;">${book.title}</h3>
                    <div style="font-size: 0.8rem; font-weight: 700; color: var(--accent-terracotta); margin-bottom: 6px;">Состояние: ${book.condition}</div>
                    <div class="book-rating">
                        ${getRatingStarsHTML(book.rating)}
                        <span>(${book.ratingCount})</span>
                    </div>
                    <div class="book-price-row">
                        <span class="book-price">${formatPrice(book.price)}</span>
                        <div style="display: flex; gap: 8px;">
                            <button class="book-quick-btn" title="Быстрый просмотр" onclick="openBookDetails('${book.id}')"><i class="fas fa-eye"></i></button>
                            <button class="book-quick-btn" title="В корзину" onclick="addToCart('${book.id}')" style="background-color: var(--accent-terracotta); color: white;"><i class="fas fa-cart-plus"></i></button>
                        </div>
                    </div>
                </div>
            </article>
        `;
    }).join('');
}

function renderActiveFiltersBar() {
    if (!activeFiltersBar) return;
    
    let chipsHTML = '';
    
    if (currentFilterGenre !== 'all') {
        chipsHTML += `
            <span class="filter-chip">
                Категория: ${getGenreNameRu(currentFilterGenre)}
                <button onclick="selectGenreFilter('all')"><i class="fas fa-times"></i></button>
            </span>
        `;
    }
    
    if (currentSearchQuery !== '') {
        chipsHTML += `
            <span class="filter-chip">
                Поиск: "${currentSearchQuery}"
                <button onclick="clearSearchInput()"><i class="fas fa-times"></i></button>
            </span>
        `;
    }
    
    if (currentSortOption !== 'default') {
        let sortLabel = '';
        if (currentSortOption === 'price-asc') sortLabel = 'Дешевые сначала';
        else if (currentSortOption === 'price-desc') sortLabel = 'Дорогие сначала';
        else if (currentSortOption === 'title-asc') sortLabel = 'По алфавиту';
        
        chipsHTML += `
            <span class="filter-chip">
                Сортировка: ${sortLabel}
                <button onclick="resetSort()"><i class="fas fa-times"></i></button>
            </span>
        `;
    }
    
    activeFiltersBar.innerHTML = chipsHTML;
}

// Global functions for catalog callbacks
window.selectGenreFilter = function(genre) {
    currentFilterGenre = genre;
    
    // Update genre tab buttons active state
    if (genreTabs) {
        const tabs = genreTabs.querySelectorAll('.genre-tab');
        tabs.forEach(tab => {
            if (tab.getAttribute('data-genre') === genre) {
                tab.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
        });
    }
    
    renderCatalog();
    
    // If we're not on catalog page, route there
    if (window.location.hash !== '#catalog') {
        window.location.hash = '#catalog';
    }
};

window.resetCatalogFilters = function() {
    currentFilterGenre = 'all';
    currentSearchQuery = '';
    currentSortOption = 'default';
    if (catalogSearch) catalogSearch.value = '';
    if (catalogSort) catalogSort.value = 'default';
    
    if (genreTabs) {
        genreTabs.querySelectorAll('.genre-tab').forEach(tab => {
            if (tab.getAttribute('data-genre') === 'all') tab.classList.add('active');
            else tab.classList.remove('active');
        });
    }
    
    renderCatalog();
};

window.clearSearchInput = function() {
    currentSearchQuery = '';
    if (catalogSearch) catalogSearch.value = '';
    if (clearSearchBtn) clearSearchBtn.style.display = 'none';
    renderCatalog();
};

window.resetSort = function() {
    currentSortOption = 'default';
    if (catalogSort) catalogSort.value = 'default';
    renderCatalog();
};

// --- BOOK DETAIL MODAL WORK ---
window.openBookDetails = function(bookId) {
    const book = BOOKS_DATABASE.find(b => b.id === bookId);
    if (!book) return;
    
    bookModalBody.innerHTML = `
        <div class="m-book-cover-wrap">
            <div style="width: 280px; height: 400px;">
                ${getBookCoverHTML(book, 'modal')}
            </div>
        </div>
        <div class="m-book-info">
            <div class="m-book-meta">
                <span>Категория: <strong>${getGenreNameRu(book.genre)}</strong></span>
                <span>•</span>
                <span>Издание: <strong>${book.year} г.</strong></span>
            </div>
            <h2 class="m-book-title">${book.title}</h2>
            <div class="m-book-author">${book.author}</div>
            <div class="m-book-rating">
                ${getRatingStarsHTML(book.rating)}
                <span>(${book.ratingCount} отзывов)</span>
            </div>
            
            <p class="m-book-desc">${book.longDescription || book.description}</p>
            
            <div class="m-book-details-list">
                <div><i class="fas fa-heartbeat"></i> Состояние б/у: <strong style="color: var(--accent-terracotta);">${book.condition}</strong></div>
                <div><i class="far fa-file-alt"></i> Количество страниц: <strong>${book.pages}</strong></div>
                <div><i class="fas fa-book-open"></i> Переплет: <strong>${book.binding}</strong></div>
            </div>

            <div class="m-book-price-row">
                <span class="m-book-price">${formatPrice(book.price)}</span>
                <div class="m-book-actions">
                    <button class="btn btn-primary" onclick="addBookFromModal('${book.id}')">В корзину <i class="fas fa-shopping-basket"></i></button>
                    <a href="https://wa.me/77057242157?text=${encodeURIComponent('Привет! Я хочу заказать книгу: ' + book.title + ' (' + book.author + ')')}" target="_blank" class="btn btn-secondary"><i class="fab fa-whatsapp"></i> В 1 клик</a>
                </div>
            </div>
        </div>
    `;
    
    bookModal.classList.add('active');
    document.body.style.overflow = 'hidden';
};

window.addBookFromModal = function(bookId) {
    addToCart(bookId);
    closeBookModal();
};

function closeBookModal() {
    bookModal.classList.remove('active');
    document.body.style.overflow = '';
}

// --- CART STATE MANAGEMENT ---
window.addToCart = function(bookId) {
    const book = BOOKS_DATABASE.find(b => b.id === bookId);
    if (!book) return;
    
    const existingItem = cart.find(item => item.id === bookId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: book.id,
            title: book.title,
            author: book.author,
            price: book.price,
            genre: book.genre,
            coverStyle: book.coverStyle,
            coverTextColor: book.coverTextColor,
            year: book.year,
            condition: book.condition,
            quantity: 1
        });
    }
    
    saveCartToLocalStorage();
    updateCartUI();
    showToast(`Книга «${book.title}» добавлена в корзину!`);
};

window.removeFromCart = function(bookId) {
    cart = cart.filter(item => item.id !== bookId);
    saveCartToLocalStorage();
    updateCartUI();
};

window.changeCartQuantity = function(bookId, delta) {
    const item = cart.find(i => i.id === bookId);
    if (!item) return;
    
    item.quantity += delta;
    if (item.quantity <= 0) {
        removeFromCart(bookId);
    } else {
        saveCartToLocalStorage();
        updateCartUI();
    }
};

function updateCartUI() {
    if (!cartItemsList) return;
    
    const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);
    cartBadgeCount.innerText = totalCount;
    
    // Enable/disable form inputs
    const formInputs = checkoutForm.querySelectorAll('input, select, button');
    if (cart.length === 0) {
        formInputs.forEach(el => el.setAttribute('disabled', 'true'));
        cartItemsList.innerHTML = `
            <div class="cart-empty-message">
                <i class="fas fa-shopping-basket"></i>
                <p>В корзине пока пусто. Загляните в каталог!</p>
                <button class="btn btn-primary btn-sm" onclick="closeCartModal(); navigateToSection('catalog');">В каталог</button>
            </div>
        `;
        
        summaryItemsPrice.innerText = '0 ₸';
        summaryDeliveryPrice.innerText = '0 ₸';
        summaryTotalPrice.innerText = '0 ₸';
        return;
    }
    
    // Enable inputs
    formInputs.forEach(el => {
        if (el.id !== 'submit-order-btn') {
            el.removeAttribute('disabled');
        }
    });
    submitOrderBtn.removeAttribute('disabled');
    
    // Render list
    cartItemsList.innerHTML = cart.map(item => {
        return `
            <div class="cart-item-row">
                <!-- Mini Cover -->
                <div style="width: 70px; height: 100px;">
                    ${getBookCoverHTML(item, 'grid')}
                </div>
                <div class="cart-item-meta">
                    <h4>${item.title}</h4>
                    <p>${item.author}</p>
                </div>
                <div class="cart-quantity-controls">
                    <button class="qty-btn" onclick="changeCartQuantity('${item.id}', -1)"><i class="fas fa-minus"></i></button>
                    <span class="qty-val">${item.quantity}</span>
                    <button class="qty-btn" onclick="changeCartQuantity('${item.id}', 1)"><i class="fas fa-plus"></i></button>
                </div>
                <div class="cart-item-price-remove">
                    <span class="cart-item-price">${formatPrice(item.price * item.quantity)}</span>
                    <button class="cart-item-remove-btn" onclick="removeFromCart('${item.id}')" title="Удалить"><i class="far fa-trash-alt"></i></button>
                </div>
            </div>
        `;
    }).join('');
    
    // Calculate values
    const itemsTotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    summaryItemsPrice.innerText = formatPrice(itemsTotal);
    
    let deliveryCost = 0;
    const deliveryType = oDeliverySelect.value;
    let isCourierKzo = false;
    
    if (deliveryType === 'courier') {
        deliveryCost = 0;
        isCourierKzo = true;
        oAddressGroup.style.display = 'block';
        oAddress.setAttribute('required', 'true');
    } else if (deliveryType === 'post') {
        deliveryCost = 1200;
        oAddressGroup.style.display = 'block';
        oAddress.setAttribute('required', 'true');
    } else {
        // Pickup
        deliveryCost = 0;
        oAddressGroup.style.display = 'none';
        oAddress.removeAttribute('required');
    }
    
    if (isCourierKzo) {
        summaryDeliveryPrice.innerText = 'Согласуем при звонке';
        summaryTotalPrice.innerText = formatPrice(itemsTotal) + ' + доставка';
    } else {
        summaryDeliveryPrice.innerText = deliveryCost === 0 ? 'Бесплатно' : formatPrice(deliveryCost);
        const grandTotal = itemsTotal + deliveryCost;
        summaryTotalPrice.innerText = formatPrice(grandTotal);
    }
}

function openCartModal() {
    cartModal.classList.add('active');
    updateCartUI();
    document.body.style.overflow = 'hidden';
}

function closeCartModal() {
    cartModal.classList.remove('active');
    document.body.style.overflow = '';
}

function saveCartToLocalStorage() {
    localStorage.setItem('bukinist_cart', JSON.stringify(cart));
}

function loadCartFromLocalStorage() {
    const saved = localStorage.getItem('bukinist_cart');
    if (saved) {
        try {
            cart = JSON.parse(saved);
        } catch (e) {
            cart = [];
        }
    }
}

// --- CHECKOUT FORM SUBMISSION & WHATSAPP TEXT GENERATION ---
function handleOrderCheckout(e) {
    e.preventDefault();
    if (cart.length === 0) return;
    
    const clientName = oName.value;
    const clientPhone = oPhone.value;
    const clientInstagram = oSocial.value || 'Не указан';
    const deliveryMethodVal = oDeliverySelect.value;
    const clientAddress = oAddress.value || 'Самовывоз';
    
    // Calculate details
    const itemsTotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    let deliveryCost = 0;
    let deliveryLabel = '';
    let isCourierKzo = false;
    
    if (deliveryMethodVal === 'courier') {
        deliveryCost = 0;
        isCourierKzo = true;
        deliveryLabel = 'Курьер до двери (Кызылорда) — цена зависит от района';
    } else if (deliveryMethodVal === 'post') {
        deliveryCost = 1200;
        deliveryLabel = 'Казпочта / CDEK (по Казахстану)';
    } else {
        deliveryCost = 0;
        deliveryLabel = 'Самовывоз (Кызылорда, ул. Айтеке би, 42, частный дом)';
    }
    
    const totalPay = itemsTotal + deliveryCost;
    
    // Generate order ID
    const orderNum = Math.floor(1000 + Math.random() * 9000);
    
    // Generate Order Text
    let orderText = `Здравствуйте, bukinist.kzo! 👋\n`;
    orderText += `Хочу оформить заказ книг на сайте:\n\n`;
    orderText += `📦 Заказ №${orderNum}\n`;
    orderText += `---------------------------\n`;
    
    cart.forEach((item, index) => {
        orderText += `${index + 1}. ${item.title} (${item.author}) [${item.condition || 'б/у'}] — ${item.quantity} шт. x ${formatPrice(item.price)}\n`;
    });
    
    orderText += `---------------------------\n`;
    orderText += `Книги: ${formatPrice(itemsTotal)}\n`;
    if (isCourierKzo) {
        orderText += `Доставка: ${deliveryLabel} (согласуем цену лично)\n`;
        orderText += `Итого к оплате: ${formatPrice(itemsTotal)} + доставка\n\n`;
    } else {
        orderText += `Доставка: ${deliveryLabel} (${deliveryCost === 0 ? 'Бесплатно' : formatPrice(deliveryCost)})\n`;
        orderText += `Итого к оплате: ${formatPrice(totalPay)}\n\n`;
    }
    orderText += `👤 Клиент: ${clientName}\n`;
    orderText += `📞 Телефон: ${clientPhone}\n`;
    orderText += `📸 Instagram: ${clientInstagram}\n`;
    orderText += `📍 Адрес: ${clientAddress}\n\n`;
    orderText += `Спасибо! Жду вашего подтверждения.`;
    
    // Set WhatsApp link
    const whatsappUrl = `https://wa.me/77057242157?text=${encodeURIComponent(orderText)}`;
    
    // Set up success modal content
    successOrderNum.innerText = `#${orderNum}`;
    whatsappTextPreview.innerText = orderText;
    sendWhatsappLink.setAttribute('href', whatsappUrl);
    
    // Save order to Python SQLite backend
    saveOrderToBackend({
        id: `#${orderNum}`,
        date: new Date().toLocaleString('ru-RU', { timeZone: 'Asia/Almaty' }),
        clientName,
        clientPhone,
        clientInstagram,
        deliveryMethod: deliveryMethodVal,
        clientAddress,
        items: cart.map(item => ({
            title: item.title,
            author: item.author,
            price: item.price,
            quantity: item.quantity,
            condition: item.condition
        })),
        totalPay: isCourierKzo ? (formatPrice(itemsTotal) + ' + доставка') : formatPrice(totalPay),
        totalPayVal: isCourierKzo ? itemsTotal : totalPay,
        status: 'new'
    });
    
    // Open Success Modal
    closeCartModal();
    successModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Clear cart
    cart = [];
    saveCartToLocalStorage();
    updateCartUI();
}

async function saveOrderToBackend(order) {
    try {
        const response = await fetch('/api/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        });
        if (!response.ok) {
            console.error('Failed to save order to backend');
        }
    } catch (e) {
        console.error('Error saving order to backend', e);
    }
}

async function saveMessageToBackend(msg) {
    try {
        const response = await fetch('/api/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(msg)
        });
        if (!response.ok) {
            console.error('Failed to save message to backend');
        }
    } catch (e) {
        console.error('Error saving message to backend', e);
    }
}

// --- HELPER UTILS ---
function formatPrice(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " ₸";
}

function getRatingStarsHTML(rating) {
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 !== 0;
    let starsHTML = '';
    
    for (let i = 0; i < 5; i++) {
        if (i < fullStars) {
            starsHTML += '<i class="fas fa-star"></i>';
        } else if (i === fullStars && hasHalf) {
            starsHTML += '<i class="fas fa-star-half-alt"></i>';
        } else {
            starsHTML += '<i class="far fa-star"></i>';
        }
    }
    return starsHTML;
}

// --- TOAST NOTIFICATIONS ---
function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    if (!container) return;
    
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <i class="${type === 'success' ? 'fas fa-check-circle' : 'fas fa-info-circle'}"></i>
        <span>${message}</span>
    `;
    
    container.appendChild(toast);
    
    // Remove toast after animation finishes
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// --- EVENT LISTENERS INITIALIZATION ---
function initEventListeners() {
    // Nav Links navigation clicks
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.getAttribute('data-target');
            navigateToSection(target);
        });
    });
    
    // Logo navigation click
    if (logoLink) {
        logoLink.addEventListener('click', (e) => {
            e.preventDefault();
            navigateToSection('home');
        });
    }

    // Toggle Mobile Menu
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('mobile-active');
            if (navMenu.classList.contains('mobile-active')) {
                mobileMenuToggle.innerHTML = '<i class="fas fa-times"></i>';
            } else {
                mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    }

    // Catalog filtering genre tabs clicks
    if (genreTabs) {
        genreTabs.addEventListener('click', (e) => {
            const tab = e.target.closest('.genre-tab');
            if (!tab) return;
            
            const genre = tab.getAttribute('data-genre');
            selectGenreFilter(genre);
        });
    }

    // Search bar search changes
    if (catalogSearch) {
        catalogSearch.addEventListener('input', () => {
            currentSearchQuery = catalogSearch.value.trim();
            if (clearSearchBtn) {
                clearSearchBtn.style.display = currentSearchQuery.length > 0 ? 'block' : 'none';
            }
            renderCatalog();
        });
    }

    // Clear search input button click
    if (clearSearchBtn) {
        clearSearchBtn.addEventListener('click', clearSearchInput);
    }

    // Sorting selection change
    if (catalogSort) {
        catalogSort.addEventListener('change', () => {
            currentSortOption = catalogSort.value;
            renderCatalog();
        });
    }

    // Book Modal close events
    if (closeBookModalBtn) closeBookModalBtn.addEventListener('click', closeBookModal);
    if (bookModal) {
        bookModal.addEventListener('click', (e) => {
            if (e.target === bookModal) closeBookModal();
        });
    }

    // Cart Modal open/close events
    if (cartToggleBtn) cartToggleBtn.addEventListener('click', openCartModal);
    if (closeCartModalBtn) closeCartModalBtn.addEventListener('click', closeCartModal);
    if (cartModal) {
        cartModal.addEventListener('click', (e) => {
            if (e.target === cartModal) closeCartModal();
        });
    }
    
    // Back to catalog button inside empty cart drawer
    if (cartBackToCatalogBtn) {
        cartBackToCatalogBtn.addEventListener('click', (e) => {
            e.preventDefault();
            closeCartModal();
            navigateToSection('catalog');
        });
    }

    // Delivery Select on checkout form change
    if (oDeliverySelect) {
        oDeliverySelect.addEventListener('change', updateCartUI);
    }

    // Checkout form submission
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', handleOrderCheckout);
    }

    // Success Modal Close
    if (closeSuccessBtn) {
        closeSuccessBtn.addEventListener('click', () => {
            successModal.classList.remove('active');
            document.body.style.overflow = '';
            navigateToSection('home');
        });
    }
    
    if (successCloseBtn) {
        successCloseBtn.addEventListener('click', () => {
            successModal.classList.remove('active');
            document.body.style.overflow = '';
            navigateToSection('home');
        });
    }
    
    if (successModal) {
        successModal.addEventListener('click', (e) => {
            if (e.target === successModal) {
                successModal.classList.remove('active');
                document.body.style.overflow = '';
                navigateToSection('home');
            }
        });
    }

    if (contactUsForm) {
        contactUsForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const nameVal = document.getElementById('c-name').value.trim();
            const contactVal = document.getElementById('c-contact').value.trim();
            const messageVal = document.getElementById('c-message').value.trim();
            
            // Save message to Python SQLite backend
            saveMessageToBackend({
                date: new Date().toLocaleString('ru-RU', { timeZone: 'Asia/Almaty' }),
                name: nameVal,
                contact: contactVal,
                message: messageVal
            });
            
            const subject = encodeURIComponent(`Сообщение с сайта bukinist.kzo от ${nameVal}`);
            const body = encodeURIComponent(`Имя: ${nameVal}\nКонтакты: ${contactVal}\n\nСообщение:\n${messageVal}`);
            
            window.location.href = `mailto:bukinistkzo@gmail.com?subject=${subject}&body=${body}`;
            
            showToast(`Спасибо, ${nameVal}! Подготавливаем письмо для отправки...`, 'success');
            contactUsForm.reset();
        });
    }
}

// --- ADMIN PANEL MANAGEMENT ---

function initAdminPanel() {
    const loginForm = document.getElementById('admin-login-form');
    const passwordInput = document.getElementById('admin-password-input');
    const logoutBtn = document.getElementById('admin-logout-btn');
    const clearOrdersBtn = document.getElementById('admin-clear-orders-btn');
    const clearMessagesBtn = document.getElementById('admin-clear-messages-btn');
    const addBookForm = document.getElementById('admin-add-book-form');
    
    // Auth Check
    let isLogged = false;
    try {
        isLogged = sessionStorage.getItem('bukinist_admin_logged') === 'true';
    } catch (e) {
        console.error('sessionStorage check failed', e);
    }
    
    if (isLogged) {
        showAdminDashboard();
    } else {
        showAdminLogin();
    }
    
    // Login Submit
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const password = passwordInput.value;
            if (password === '1986') {
                try {
                    sessionStorage.setItem('bukinist_admin_logged', 'true');
                } catch (err) {
                    console.error('sessionStorage save failed', err);
                }
                showAdminDashboard();
                showToast('Вход успешно выполнен!', 'success');
                passwordInput.value = '';
            } else {
                showToast('Неверный пароль администратора!', 'error');
                passwordInput.select();
            }
        });
    }
    
    // Logout Click
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            try {
                sessionStorage.removeItem('bukinist_admin_logged');
            } catch (err) {
                console.error('sessionStorage remove failed', err);
            }
            showAdminLogin();
            showToast('Вы вышли из панели управления.');
        });
    }
    
    // Clear Orders Click
    if (clearOrdersBtn) {
        clearOrdersBtn.addEventListener('click', async () => {
            if (confirm('Вы уверены, что хотите удалить всю историю заказов?')) {
                try {
                    const response = await fetch('/api/orders', { method: 'DELETE' });
                    if (response.ok) {
                        renderAdminOrders();
                        updateAdminStats();
                        showToast('История заказов очищена.');
                    } else {
                        showToast('Ошибка при очистке заказов', 'error');
                    }
                } catch (e) {
                    console.error(e);
                    showToast('Ошибка сети при очистке заказов', 'error');
                }
            }
        });
    }
    
    // Clear Messages Click
    if (clearMessagesBtn) {
        clearMessagesBtn.addEventListener('click', async () => {
            if (confirm('Вы уверены, что хотите удалить все сообщения обратной связи?')) {
                try {
                    const response = await fetch('/api/messages', { method: 'DELETE' });
                    if (response.ok) {
                        renderAdminMessages();
                        showToast('История сообщений очищена.');
                    } else {
                        showToast('Ошибка при очистке сообщений', 'error');
                    }
                } catch (e) {
                    console.error(e);
                    showToast('Ошибка сети при очистке сообщений', 'error');
                }
            }
        });
    }
    
    // Tab Switching
    const tabButtons = document.querySelectorAll('.admin-tab-btn');
    const tabContents = document.querySelectorAll('.admin-tab-content');
    
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.getAttribute('data-tab');
            
            // Toggle buttons
            tabButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Toggle contents
            tabContents.forEach(content => {
                if (content.id === `tab-${targetTab}`) {
                    content.classList.add('active');
                } else {
                    content.classList.remove('active');
                }
            });
            
            // Refresh content if needed
            if (targetTab === 'orders') renderAdminOrders();
            if (targetTab === 'books') renderAdminBooks();
            if (targetTab === 'stats') updateAdminStats();
            if (targetTab === 'messages') renderAdminMessages();
        });
    });
    
    // Add Book Form
    if (addBookForm) {
        addBookForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const title = document.getElementById('a-title').value.trim();
            const author = document.getElementById('a-author').value.trim();
            const genre = document.getElementById('a-genre').value;
            const price = parseInt(document.getElementById('a-price').value);
            const condition = document.getElementById('a-condition').value;
            const year = parseInt(document.getElementById('a-year').value);
            const pages = parseInt(document.getElementById('a-pages').value);
            const binding = document.getElementById('a-binding').value.trim();
            const coverStyle = document.getElementById('a-cover-style').value;
            const coverTextColor = document.getElementById('a-cover-text-color').value;
            const coverUrl = document.getElementById('a-cover-url').value.trim();
            const description = document.getElementById('a-description').value.trim();
            
            const newBook = {
                id: `book-${genre}-${Date.now()}`,
                title,
                author,
                genre,
                price,
                rating: 5.0,
                ratingCount: 0,
                pages,
                binding,
                year,
                condition,
                coverStyle,
                coverTextColor,
                coverUrl,
                description,
                longDescription: description
            };
            
            try {
                const response = await fetch('/api/books', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newBook)
                });
                
                if (response.ok) {
                    await loadBooksDatabase(); // Reload catalog
                    renderAdminBooks();
                    updateAdminStats();
                    addBookForm.reset();
                    showToast(`Книга «${title}» добавлена в каталог!`);
                } else {
                    showToast('Ошибка при добавлении книги', 'error');
                }
            } catch (err) {
                console.error(err);
                showToast('Ошибка сети при добавлении книги', 'error');
            }
        });
    }
}

function showAdminLogin() {
    const loginWrap = document.getElementById('admin-login-wrap');
    const dashboardWrap = document.getElementById('admin-dashboard-wrap');
    if (loginWrap) loginWrap.style.display = 'flex';
    if (dashboardWrap) dashboardWrap.style.display = 'none';
}

function showAdminDashboard() {
    const loginWrap = document.getElementById('admin-login-wrap');
    const dashboardWrap = document.getElementById('admin-dashboard-wrap');
        if (loginWrap) loginWrap.style.display = 'none';
    if (dashboardWrap) dashboardWrap.style.display = 'flex';
    
    // Load initial tab data
    renderAdminOrders();
    renderAdminBooks();
    updateAdminStats();
    renderAdminMessages();
}

async function renderAdminOrders() {
    const container = document.getElementById('admin-orders-list');
    if (!container) return;
    
    let orders = [];
    try {
        const response = await fetch('/api/orders');
        if (response.ok) {
            orders = await response.json();
        }
    } catch(e) {
        console.error('Error fetching orders from backend', e);
    }
    
    if (orders.length === 0) {
        container.innerHTML = `
            <div class="grid-placeholder">
                <i class="fas fa-inbox" style="font-size: 3rem; color: var(--border-cozy-dark); margin-bottom: 16px;"></i>
                <p>Заказов пока не поступало.</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = orders.map((order) => {
        if (!order) return '';
        
        let statusClass = 'status-new';
        let statusLabel = 'Новый';
        const orderStatus = order.status || 'new';
        if (orderStatus === 'processing') {
            statusClass = 'status-processing';
            statusLabel = 'В обработке';
        } else if (orderStatus === 'completed') {
            statusClass = 'status-completed';
            statusLabel = 'Выполнен';
        }
        
        const booksHTML = (order.items || []).map(item => `
            <li class="order-book-item">
                <span><strong>${item.title || 'Книга'}</strong> (${item.author || 'Автор'}) [${item.condition || 'б/у'}] x ${item.quantity || 1}</span>
                <span>${formatPrice((item.price || 0) * (item.quantity || 1))}</span>
            </li>
        `).join('');
        
        const deliveryLabels = {
            pickup: 'Самовывоз',
            courier: 'Курьер (Кызылорда)',
            post: 'Казпочта / CDEK'
        };
        
        const clientPhone = order.clientPhone || '';
        const phoneClean = clientPhone.replace(/\D/g, '');
        const phoneHTML = phoneClean 
            ? `<a href="https://wa.me/${phoneClean}" target="_blank">${clientPhone}</a>` 
            : (clientPhone || 'Не указан');
        
        return `
            <div class="admin-order-card ${statusClass}">
                <div class="order-card-header">
                    <h3>Заказ ${order.id || '#0000'}</h3>
                    <div style="display: flex; align-items: center; gap: 12px;">
                        <span class="order-date">${order.date || ''}</span>
                        <span class="order-status-badge ${statusClass}">${statusLabel}</span>
                    </div>
                </div>
                <div class="order-card-body">
                    <div>
                        <ul class="order-books-list">
                            ${booksHTML}
                        </ul>
                    </div>
                    <div class="order-client-details">
                        <div>
                            <span>Имя клиента:</span>
                            <strong>${order.clientName || 'Не указано'}</strong>
                        </div>
                        <div>
                            <span>Телефон/WA:</span>
                            <strong>${phoneHTML}</strong>
                        </div>
                        <div>
                            <span>Instagram:</span>
                            <strong>${order.clientInstagram || 'Не указан'}</strong>
                        </div>
                        <div>
                            <span>Доставка:</span>
                            <strong>${deliveryLabels[order.deliveryMethod] || order.deliveryMethod || 'Самовывоз'}</strong>
                        </div>
                        <div>
                            <span>Адрес:</span>
                            <strong style="text-align: right; max-width: 60%;">${order.clientAddress || 'Не указан'}</strong>
                        </div>
                        <div style="border-top: 1px solid var(--border-cozy-dark); padding-top: 8px; margin-top: 4px; font-weight: 700;">
                            <span style="color: var(--text-dark);">Итого:</span>
                            <span style="color: var(--accent-terracotta);">${order.totalPay || '0 ₸'}</span>
                        </div>
                    </div>
                </div>
                <div class="order-card-footer">
                    <div class="order-status-actions">
                        <label for="status-select-${order.id}">Статус заказа:</label>
                        <select id="status-select-${order.id}" onchange="changeOrderStatus('${order.id}', this.value)">
                            <option value="new" ${orderStatus === 'new' ? 'selected' : ''}>Новый</option>
                            <option value="processing" ${orderStatus === 'processing' ? 'selected' : ''}>В обработке</option>
                            <option value="completed" ${orderStatus === 'completed' ? 'selected' : ''}>Выполнен</option>
                        </select>
                    </div>
                    <button class="btn btn-secondary btn-sm" onclick="deleteAdminOrder('${order.id}')" style="color: var(--accent-terracotta);"><i class="far fa-trash-alt"></i> Delete</button>
                </div>
            </div>
        `;
    }).join('');
}

window.changeOrderStatus = async function(orderId, newStatus) {
    try {
        const response = await fetch(`/api/orders/${orderId}/status`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ status: newStatus })
        });
        if (response.ok) {
            renderAdminOrders();
            updateAdminStats();
            showToast('Статус заказа успешно обновлен!');
        } else {
            showToast('Ошибка при обновлении статуса заказа', 'error');
        }
    } catch (e) {
        console.error(e);
        showToast('Ошибка сети при обновлении статуса', 'error');
    }
};

window.deleteAdminOrder = async function(orderId) {
    if (confirm(`Удалить заказ ${orderId} из логов?`)) {
        try {
            const response = await fetch(`/api/orders?id=${encodeURIComponent(orderId)}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                renderAdminOrders();
                updateAdminStats();
                showToast('Заказ успешно удален.');
            } else {
                showToast('Ошибка при удалении заказа', 'error');
            }
        } catch (e) {
            console.error(e);
            showToast('Ошибка сети при удалении заказа', 'error');
        }
    }
};

function renderAdminBooks() {
    const tableBody = document.getElementById('admin-books-table-body');
    if (!tableBody) return;
    
    tableBody.innerHTML = BOOKS_DATABASE.map((book) => {
        return `
            <tr>
                <td>
                    <div class="admin-book-title-meta">
                        <strong>${book.title}</strong>
                        <span>${book.author}</span>
                    </div>
                </td>
                <td>${getGenreNameRu(book.genre)}</td>
                <td><strong>${formatPrice(book.price)}</strong></td>
                <td><span style="color: var(--accent-terracotta); font-weight: 700; font-size: 0.85rem;">${book.condition}</span></td>
                <td>
                    <button class="admin-action-btn delete" onclick="deleteAdminBook('${book.id}', '${book.title.replace(/'/g, "\\'")}')" title="Удалить книгу из каталога">
                        <i class="far fa-trash-alt"></i> Удалить
                    </button>
                </td>
            </tr>
        `;
    }).join('');
}

window.deleteAdminBook = async function(bookId, bookTitle) {
    if (confirm(`Вы уверены, что хотите полностью удалить книгу «${bookTitle}» из каталога?`)) {
        try {
            const response = await fetch(`/api/books?id=${encodeURIComponent(bookId)}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                await loadBooksDatabase(); // Reload database
                renderAdminBooks();
                updateAdminStats();
                showToast(`Книга «${bookTitle}» удалена из каталога.`);
            } else {
                showToast('Ошибка при удалении книги', 'error');
            }
        } catch (e) {
            console.error(e);
            showToast('Ошибка сети при удалении книги', 'error');
        }
    }
};

async function updateAdminStats() {
    const statsTotalBooks = document.getElementById('stats-total-books');
    const statsTotalOrders = document.getElementById('stats-total-orders');
    const statsTotalSales = document.getElementById('stats-total-sales');
    
    if (statsTotalBooks) statsTotalBooks.innerText = BOOKS_DATABASE.length;
    
    let orders = [];
    try {
        const response = await fetch('/api/orders');
        if (response.ok) {
            orders = await response.json();
        }
    } catch(e) {
        console.error('Error fetching orders for stats', e);
    }
    
    if (statsTotalOrders) statsTotalOrders.innerText = orders.length;
    
    const totalSales = orders.reduce((acc, order) => {
        return acc + (order.totalPayVal || 0);
    }, 0);
    
    if (statsTotalSales) statsTotalSales.innerText = formatPrice(totalSales);
}

async function renderAdminMessages() {
    const container = document.getElementById('admin-messages-list');
    if (!container) return;
    
    let msgs = [];
    try {
        const response = await fetch('/api/messages');
        if (response.ok) {
            msgs = await response.json();
        }
    } catch (e) {
        console.error('Error fetching messages from backend', e);
    }
    
    if (msgs.length === 0) {
        container.innerHTML = `
            <div class="grid-placeholder">
                <i class="far fa-comments" style="font-size: 3rem; color: var(--border-cozy-dark); margin-bottom: 16px;"></i>
                <p>Сообщений пока не поступало.</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = msgs.map(msg => {
        return `
            <div class="admin-order-card">
                <div class="order-card-header">
                    <h3>Сообщение от ${msg.name}</h3>
                    <span class="order-date">${msg.date}</span>
                </div>
                <div style="font-size: 0.95rem; margin-top: 10px; color: var(--text-dark); background-color: var(--bg-accent); padding: 16px; border-radius: var(--radius-md);">
                    ${msg.message}
                </div>
                <div class="order-card-footer" style="margin-top: 12px; border-top: none; padding-top: 0; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap;">
                    <div style="font-size: 0.85rem; color: var(--text-muted);">
                        Контакты для связи: <strong>${msg.contact}</strong>
                    </div>
                    <button class="btn btn-secondary btn-sm" onclick="deleteAdminMessage(${msg.id})" style="color: var(--accent-terracotta); margin-top: 8px;"><i class="far fa-trash-alt"></i> Удалить</button>
                </div>
            </div>
        `;
    }).join('');
}

window.deleteAdminMessage = async function(msgId) {
    if (confirm('Удалить это сообщение из логов?')) {
        try {
            const response = await fetch(`/api/messages?id=${msgId}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                renderAdminMessages();
                showToast('Сообщение успешно удалено.');
            } else {
                showToast('Ошибка при удалении сообщения', 'error');
            }
        } catch(e) {
            console.error(e);
            showToast('Ошибка сети при удалении сообщения', 'error');
        }
    }
};

// --- WISHLIST MANAGEMENT ---
function loadWishlist() {
    const saved = localStorage.getItem('bukinist_wishlist');
    if (saved) {
        try {
            wishlist = JSON.parse(saved);
        } catch (e) {
            wishlist = [];
        }
    }
}

function saveWishlist() {
    localStorage.setItem('bukinist_wishlist', JSON.stringify(wishlist));
}

window.toggleWishlist = function(event, bookId) {
    event.stopPropagation();
    const index = wishlist.indexOf(bookId);
    if (index === -1) {
        wishlist.push(bookId);
        showToast('Книга добавлена в Избранное!', 'success');
    } else {
        wishlist.splice(index, 1);
        showToast('Книга удалена из Избранного.', 'success');
    }
    saveWishlist();
    renderCatalog();
};

// --- COZY AUDIO PLAYER LOGIC (WEB AUDIO API SYNTHESIZER) ---
let audioCtx = null;
let isCozyPlaying = false;
let cozyCurrentSound = 'rain'; // 'rain', 'fireplace', 'lofi'
let cozyVolume = 0.5;

let cozyVolumeNode = null;
let rainSourceNode = null;
let fireplaceIntervalId = null;
let lofiIntervalId = null;
let lofiOscs = [];

function initAudio() {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    cozyVolumeNode = audioCtx.createGain();
    cozyVolumeNode.gain.setValueAtTime(cozyVolume, audioCtx.currentTime);
    cozyVolumeNode.connect(audioCtx.destination);
}

function createNoiseBuffer() {
    const bufferSize = 2 * audioCtx.sampleRate;
    const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
    }
    return buffer;
}

function startRain() {
    stopActiveSound();
    if (!audioCtx) initAudio();
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }

    const noiseBuffer = createNoiseBuffer();

    // Deep distant rain rumble
    const rumbleSource = audioCtx.createBufferSource();
    rumbleSource.buffer = noiseBuffer;
    rumbleSource.loop = true;

    const rumbleFilter = audioCtx.createBiquadFilter();
    rumbleFilter.type = 'lowpass';
    rumbleFilter.frequency.value = 350;

    const rumbleGain = audioCtx.createGain();
    rumbleGain.gain.value = 0.7;

    rumbleSource.connect(rumbleFilter);
    rumbleFilter.connect(rumbleGain);
    rumbleGain.connect(cozyVolumeNode);

    // Dynamic water droplets
    const patterSource = audioCtx.createBufferSource();
    patterSource.buffer = noiseBuffer;
    patterSource.loop = true;

    const patterFilter = audioCtx.createBiquadFilter();
    patterFilter.type = 'bandpass';
    patterFilter.frequency.value = 1600;
    patterFilter.Q.value = 1.2;

    const patterGain = audioCtx.createGain();
    patterGain.gain.value = 0.12;

    patterSource.connect(patterFilter);
    patterFilter.connect(patterGain);
    patterGain.connect(cozyVolumeNode);

    rumbleSource.start(0);
    patterSource.start(0);

    rainSourceNode = {
        sources: [rumbleSource, patterSource],
        gains: [rumbleGain, patterGain]
    };

    let modTime = 0;
    fireplaceIntervalId = setInterval(() => {
        if (!audioCtx || !rainSourceNode) return;
        modTime += 0.15;
        const mod = 0.12 + Math.sin(modTime) * 0.06 + Math.cos(modTime * 0.45) * 0.02;
        try {
            patterGain.gain.setValueAtTime(mod, audioCtx.currentTime);
        } catch (e) {}
    }, 150);
}

function startFireplace() {
    stopActiveSound();
    if (!audioCtx) initAudio();
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }

    const noiseBuffer = createNoiseBuffer();

    // Warm deep rumble of fire
    const baseSource = audioCtx.createBufferSource();
    baseSource.buffer = noiseBuffer;
    baseSource.loop = true;

    const baseFilter = audioCtx.createBiquadFilter();
    baseFilter.type = 'lowpass';
    baseFilter.frequency.value = 200;

    const baseGain = audioCtx.createGain();
    baseGain.gain.value = 0.6;

    baseSource.connect(baseFilter);
    baseFilter.connect(baseGain);
    baseGain.connect(cozyVolumeNode);

    // High frequency hot coal hissing
    const hissSource = audioCtx.createBufferSource();
    hissSource.buffer = noiseBuffer;
    hissSource.loop = true;

    const hissFilter = audioCtx.createBiquadFilter();
    hissFilter.type = 'bandpass';
    hissFilter.frequency.value = 2200;
    hissFilter.Q.value = 0.6;

    const hissGain = audioCtx.createGain();
    hissGain.gain.value = 0.03;

    hissSource.connect(hissFilter);
    hissFilter.connect(hissGain);
    hissGain.connect(cozyVolumeNode);

    baseSource.start(0);
    hissSource.start(0);

    rainSourceNode = {
        sources: [baseSource, hissSource],
        gains: [baseGain, hissGain]
    };

    const scheduleCrackle = () => {
        if (!audioCtx || cozyCurrentSound !== 'fireplace' || !isCozyPlaying) return;

        try {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();

            osc.connect(gain);
            gain.connect(cozyVolumeNode);

            osc.type = Math.random() > 0.4 ? 'sine' : 'triangle';
            osc.frequency.setValueAtTime(250 + Math.random() * 1800, audioCtx.currentTime);

            const duration = 0.006 + Math.random() * 0.012;
            const vol = 0.09 * Math.random();

            gain.gain.setValueAtTime(vol, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.00001, audioCtx.currentTime + duration);

            osc.start(audioCtx.currentTime);
            osc.stop(audioCtx.currentTime + duration + 0.01);

            lofiOscs.push(osc);
        } catch (e) {}

        lofiOscs = lofiOscs.filter(o => {
            try { return o.playbackState !== 3; } catch (err) { return true; }
        });

        const nextVal = 80 + Math.random() * 600;
        fireplaceIntervalId = setTimeout(scheduleCrackle, nextVal);
    };

    scheduleCrackle();
}

function startLofi() {
    stopActiveSound();
    if (!audioCtx) initAudio();
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }

    // Vinyl record background hiss
    const noiseBuffer = createNoiseBuffer();
    const hissSource = audioCtx.createBufferSource();
    hissSource.buffer = noiseBuffer;
    hissSource.loop = true;

    const hissFilter = audioCtx.createBiquadFilter();
    hissFilter.type = 'bandpass';
    hissFilter.frequency.value = 1100;
    hissFilter.Q.value = 0.6;

    const hissGain = audioCtx.createGain();
    hissGain.gain.value = 0.015;

    hissSource.connect(hissFilter);
    hissFilter.connect(hissGain);
    hissGain.connect(cozyVolumeNode);

    hissSource.start(0);

    rainSourceNode = {
        sources: [hissSource],
        gains: [hissGain]
    };

    // Soft vinyl dust crackle pops
    const scheduleVinylCrackle = () => {
        if (!audioCtx || cozyCurrentSound !== 'lofi' || !isCozyPlaying) return;

        try {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();

            osc.connect(gain);
            gain.connect(cozyVolumeNode);

            osc.type = 'sine';
            osc.frequency.setValueAtTime(700 + Math.random() * 1100, audioCtx.currentTime);

            const duration = 0.003 + Math.random() * 0.003;
            const vol = 0.006 * Math.random();

            gain.gain.setValueAtTime(vol, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.00001, audioCtx.currentTime + duration);

            osc.start(audioCtx.currentTime);
            osc.stop(audioCtx.currentTime + duration + 0.01);

            lofiOscs.push(osc);
        } catch (e) {}

        const nextVal = 150 + Math.random() * 1800;
        fireplaceIntervalId = setTimeout(scheduleVinylCrackle, nextVal);
    };
    scheduleVinylCrackle();

    // Procedural warm cozy lofi chords sequence (Cmaj7 - Am7 - Dm7 - G7 progression)
    const lofiChords = [
        [130.81, 164.81, 196.00, 246.94], // Cmaj7
        [110.00, 130.81, 164.81, 196.00], // Am7
        [146.83, 174.61, 220.00, 261.63], // Dm7
        [98.00, 146.83, 196.00, 246.94]   // G7
    ];
    let chordIdx = 0;

    const playLofiProgression = () => {
        if (!audioCtx || cozyCurrentSound !== 'lofi' || !isCozyPlaying) return;

        const chord = lofiChords[chordIdx];
        const now = audioCtx.currentTime;

        chord.forEach((freq, i) => {
            try {
                const osc = audioCtx.createOscillator();
                osc.type = 'triangle'; // Soft tone
                osc.frequency.setValueAtTime(freq, now);

                const filter = audioCtx.createBiquadFilter();
                filter.type = 'lowpass';
                filter.frequency.setValueAtTime(400, now);

                const gain = audioCtx.createGain();
                const strumDelay = i * 0.045; // Strum effect

                gain.gain.setValueAtTime(0, now + strumDelay);
                gain.gain.linearRampToValueAtTime(0.035, now + 1.2 + strumDelay);
                gain.gain.setValueAtTime(0.035, now + 2.8);
                gain.gain.exponentialRampToValueAtTime(0.00001, now + 4.3);

                osc.connect(filter);
                filter.connect(gain);
                gain.connect(cozyVolumeNode);

                osc.start(now + strumDelay);
                osc.stop(now + 4.4);

                lofiOscs.push(osc);
            } catch (e) {}
        });

        chordIdx = (chordIdx + 1) % lofiChords.length;
        lofiIntervalId = setTimeout(playLofiProgression, 4500);
    };

    playLofiProgression();
}

function stopActiveSound() {
    if (fireplaceIntervalId) {
        clearTimeout(fireplaceIntervalId);
        fireplaceIntervalId = null;
    }
    if (lofiIntervalId) {
        clearTimeout(lofiIntervalId);
        lofiIntervalId = null;
    }

    if (rainSourceNode) {
        if (rainSourceNode.sources) {
            rainSourceNode.sources.forEach(src => {
                try { src.stop(); src.disconnect(); } catch (e) {}
            });
        }
        if (rainSourceNode.gains) {
            rainSourceNode.gains.forEach(g => {
                try { g.disconnect(); } catch (e) {}
            });
        }
        rainSourceNode = null;
    }

    lofiOscs.forEach(o => {
        try { o.stop(); o.disconnect(); } catch (e) {}
    });
    lofiOscs = [];
}

function playActiveCozySound() {
    if (cozyCurrentSound === 'rain') {
        startRain();
    } else if (cozyCurrentSound === 'fireplace') {
        startFireplace();
    } else if (cozyCurrentSound === 'lofi') {
        startLofi();
    }
}

function toggleCozyPlay() {
    const playBtn = document.getElementById('cozy-play-btn');
    const playerWidget = document.getElementById('cozy-audio-player');

    if (isCozyPlaying) {
        stopActiveSound();
        isCozyPlaying = false;
        if (playBtn) {
            playBtn.innerHTML = '<i class="fas fa-play"></i> Слушать';
            playBtn.classList.remove('playing');
        }
        if (playerWidget) {
            playerWidget.classList.remove('playing');
        }
    } else {
        isCozyPlaying = true;
        if (playBtn) {
            playBtn.innerHTML = '<i class="fas fa-pause"></i> Пауза';
            playBtn.classList.add('playing');
        }
        if (playerWidget) {
            playerWidget.classList.add('playing');
        }
        playActiveCozySound();
    }
}

function initCozyPlayer() {
    const player = document.getElementById('cozy-audio-player');
    const toggleBtn = document.getElementById('cozy-player-toggle');
    const closeBtn = document.getElementById('cozy-player-close');
    const playBtn = document.getElementById('cozy-play-btn');
    const volumeSlider = document.getElementById('cozy-volume-slider');
    const volumeIcon = document.getElementById('cozy-volume-icon');
    const soundBtns = document.querySelectorAll('.cozy-sound-btn');

    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            player.classList.toggle('open');
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            player.classList.remove('open');
        });
    }

    document.addEventListener('click', (e) => {
        if (player && !player.contains(e.target) && player.classList.contains('open')) {
            player.classList.remove('open');
        }
    });

    if (playBtn) {
        playBtn.addEventListener('click', toggleCozyPlay);
    }

    if (volumeSlider) {
        volumeSlider.addEventListener('input', () => {
            cozyVolume = parseFloat(volumeSlider.value) / 100;
            if (cozyVolumeNode && audioCtx) {
                cozyVolumeNode.gain.setValueAtTime(cozyVolume, audioCtx.currentTime);
            }
            if (volumeIcon) {
                if (cozyVolume === 0) {
                    volumeIcon.className = 'fas fa-volume-mute';
                } else if (cozyVolume < 0.4) {
                    volumeIcon.className = 'fas fa-volume-down';
                } else {
                    volumeIcon.className = 'fas fa-volume-up';
                }
            }
        });
    }

    soundBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const soundType = btn.getAttribute('data-sound');
            if (soundType === cozyCurrentSound) return;

            soundBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            cozyCurrentSound = soundType;

            if (isCozyPlaying) {
                playActiveCozySound();
            }
        });
    });
}
