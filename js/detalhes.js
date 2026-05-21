// ===== CONFIGURAÇÃO =====
const SHARE_CONFIG = {
  whatsapp: 'https://wa.me/?text=',
  facebook: 'https://www.facebook.com/sharer/sharer.php?u=',
  twitter: 'https://twitter.com/intent/tweet?text=',
  email: 'mailto:?subject=',
};

// ===== INICIALIZAÇÃO =====
document.addEventListener('DOMContentLoaded', () => {
  console.log('🚗 Página de detalhes carregada');
  initializeButtons();
  initializeGallery();
});

// ===== BOTÕES DE AÇÃO =====
function initializeButtons() {
  const purchaseBtn = document.querySelector('.btn-primary');
  const shareBtn = document.querySelector('.btn-secondary');

  if (purchaseBtn) {
    purchaseBtn.addEventListener('click', handlePurchase);
  }

  if (shareBtn) {
    shareBtn.addEventListener('click', handleShare);
  }
}

function handlePurchase() {
  const vehicleTitle = document.querySelector('.header-info h1')?.textContent || 'Veículo';
  const vehiclePrice = document.querySelector('.price')?.textContent || 'Preço não disponível';
  
  console.log(`🛒 Compra iniciada: ${vehicleTitle} - ${vehiclePrice}`);
  
  // Simular processamento
  showModal(
    'Confirmar Compra',
    `Você deseja comprar ${vehicleTitle} por ${vehiclePrice}?`,
    () => {
      processPurchase(vehicleTitle);
    }
  );
}

function processPurchase(vehicleTitle) {
  console.log(`✅ Processando compra de: ${vehicleTitle}`);
  
  // Simular envio ao servidor
  setTimeout(() => {
    showNotification(`Compra de ${vehicleTitle} enviada com sucesso!`, 'success');
    console.log('📧 Email de confirmação será enviado');
  }, 1000);
}

function handleShare() {
  console.log('📤 Compartilhamento iniciado');
  showShareMenu();
}

function showShareMenu() {
  const vehicleTitle = document.querySelector('.header-info h1')?.textContent || 'Veículo AutoCar';
  const vehiclePrice = document.querySelector('.price')?.textContent || '';
  const shareText = `Confira este ${vehicleTitle} por ${vehiclePrice} no AutoCar Marketplace!`;
  const shareUrl = window.location.href;

  const menu = document.createElement('div');
  menu.className = 'share-menu';
  menu.innerHTML = `
    <div class="share-menu-content">
      <h3>Compartilhar</h3>
      <button class="share-option" data-share="whatsapp">
        <span>💬</span> WhatsApp
      </button>
      <button class="share-option" data-share="facebook">
        <span>👥</span> Facebook
      </button>
      <button class="share-option" data-share="twitter">
        <span>🐦</span> Twitter
      </button>
      <button class="share-option" data-share="email">
        <span>📧</span> Email
      </button>
      <button class="share-option" data-share="copy">
        <span>📋</span> Copiar Link
      </button>
      <button class="share-close">✕ Fechar</button>
    </div>
  `;

  document.body.appendChild(menu);

  menu.querySelectorAll('.share-option').forEach(btn => {
    btn.addEventListener('click', () => {
      const platform = btn.dataset.share;
      shareVehicle(platform, shareText, shareUrl);
      menu.remove();
    });
  });

  menu.querySelector('.share-close').addEventListener('click', () => {
    menu.remove();
  });

  setTimeout(() => menu.classList.add('show'), 10);
}

function shareVehicle(platform, text, url) {
  let shareUrl = '';

  switch (platform) {
    case 'whatsapp':
      shareUrl = `${SHARE_CONFIG.whatsapp}${encodeURIComponent(text + ' ' + url)}`;
      break;
    case 'facebook':
      shareUrl = `${SHARE_CONFIG.facebook}${encodeURIComponent(url)}`;
      break;
    case 'twitter':
      shareUrl = `${SHARE_CONFIG.twitter}${encodeURIComponent(text)}`;
      break;
    case 'email':
      shareUrl = `${SHARE_CONFIG.email}${encodeURIComponent(text)}&body=${encodeURIComponent(url)}`;
      break;
    case 'copy':
      navigator.clipboard.writeText(url).then(() => {
        showNotification('Link copiado para a área de transferência!', 'success');
        console.log('📋 Link copiado');
      });
      return;
  }

  if (shareUrl) {
    window.open(shareUrl, '_blank', 'width=600,height=400');
    console.log(`✅ Compartilhado via ${platform}`);
  }
}

// ===== GALERIA DE IMAGENS =====
function initializeGallery() {
  // Implementar galeria futura
  console.log('📸 Galeria inicializada');
}

// ===== MODAL =====
function showModal(title, message, callback) {
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.innerHTML = `
    <div class="modal-content">
      <h2>${title}</h2>
      <p>${message}</p>
      <div class="modal-buttons">
        <button class="modal-confirm">Confirmar</button>
        <button class="modal-cancel">Cancelar</button>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  modal.querySelector('.modal-confirm').addEventListener('click', () => {
    callback();
    modal.remove();
  });

  modal.querySelector('.modal-cancel').addEventListener('click', () => {
    modal.remove();
  });

  setTimeout(() => modal.classList.add('show'), 10);
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

console.log('✅ Scripts de detalhes inicializados');