// ===== CONFIGURAÇÃO =====
const CONFIG = {
  storageKey: 'autocar_favorites',
  apiBaseUrl: '/api',
};

// ===== INICIALIZAÇÃO =====
document.addEventListener('DOMContentLoaded', () => {
  console.log('🚗 AutoCar Marketplace carregado');
  initializeSearch();
  initializeFavorites();
  loadVehicles();
});

// ===== BUSCA =====
function initializeSearch() {
  const searchForm = document.querySelector('.search-form');
  const searchInput = document.querySelector('.search-form input');

  if (!searchForm) return;

  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = searchInput.value.trim();
    
    if (query.length < 2) {
      alert('Digite pelo menos 2 caracteres');
      return;
    }

    console.log(`🔍 Buscando: ${query}`);
    performSearch(query);
  });

  // Busca em tempo real (debounce)
  searchInput.addEventListener('input', debounce((e) => {
    const query = e.target.value.trim();
    if (query.length >= 2) {
      performSearch(query);
    }
  }, 300));
}

function performSearch(query) {
  const cards = document.querySelectorAll('.card');
  let foundCount = 0;

  cards.forEach(card => {
    const title = card.querySelector('.info h2')?.textContent.toLowerCase() || '';
    const specs = card.querySelector('.info p')?.textContent.toLowerCase() || '';
    
    const matches = title.includes(query.toLowerCase()) || 
                   specs.includes(query.toLowerCase());
    
    card.style.display = matches ? 'flex' : 'none';
    if (matches) foundCount++;
  });

  console.log(`✅ Encontrados ${foundCount} veículos`);
  
  if (foundCount === 0) {
    showNotification('Nenhum veículo encontrado', 'warning');
  }
}

// ===== FAVORITOS =====
function initializeFavorites() {
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-favorite')) {
      e.preventDefault();
      e.stopPropagation();
      toggleFavorite(e.target);
    }
  });

  loadFavoritesFromStorage();
}

function toggleFavorite(button) {
  const card = button.closest('.card');
  const vehicleId = card.dataset.vehicleId;
  const isFavorited = button.classList.contains('favorited');

  if (isFavorited) {
    button.classList.remove('favorited');
    removeFavorite(vehicleId);
    console.log(`❌ Removido dos favoritos: ${vehicleId}`);
  } else {
    button.classList.add('favorited');
    addFavorite(vehicleId);
    console.log(`❤️ Adicionado aos favoritos: ${vehicleId}`);
  }
}

function addFavorite(vehicleId) {
  const favorites = getFavorites();
  if (!favorites.includes(vehicleId)) {
    favorites.push(vehicleId);
    localStorage.setItem(CONFIG.storageKey, JSON.stringify(favorites));
  }
}

function removeFavorite(vehicleId) {
  const favorites = getFavorites();
  const index = favorites.indexOf(vehicleId);
  if (index > -1) {
    favorites.splice(index, 1);
    localStorage.setItem(CONFIG.storageKey, JSON.stringify(favorites));
  }
}

function getFavorites() {
  const stored = localStorage.getItem(CONFIG.storageKey);
  return stored ? JSON.parse(stored) : [];
}

function loadFavoritesFromStorage() {
  const favorites = getFavorites();
  favorites.forEach(vehicleId => {
    const button = document.querySelector(`[data-vehicle-id="${vehicleId}"] .btn-favorite`);
    if (button) {
      button.classList.add('favorited');
    }
  });
}

// ===== CARREGAMENTO DE VEÍCULOS =====
function loadVehicles() {
  console.log('📦 Carregando veículos...');
  
  // Simular carregamento (trocar por API real depois)
  const vehicles = getVehiclesFromDOM();
  console.log(`✅ ${vehicles.length} veículos carregados`);
}

function getVehiclesFromDOM() {
  return Array.from(document.querySelectorAll('.card')).map(card => ({
    id: card.dataset.vehicleId,
    title: card.querySelector('.info h2')?.textContent,
    price: card.querySelector('.info h1')?.textContent,
  }));
}

// ===== NOTIFICAÇÕES =====
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.classList.add('show');
  }, 10);
  
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// ===== UTILITÁRIOS =====
function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

// ===== SCROLL SUAVE =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

console.log('✅ Scripts da página principal inicializados');