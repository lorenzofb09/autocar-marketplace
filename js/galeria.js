// ===== GALERIA DE IMAGENS =====

class ImageGallery {
  constructor(containerSelector) {
    this.container = document.querySelector(containerSelector);
    this.currentIndex = 0;
    this.images = [];
    
    if (this.container) {
      this.init();
    }
  }

  init() {
    console.log('🖼️ Galeria inicializada');
    this.setupGallery();
    this.setupEventListeners();
  }

  setupGallery() {
    const mainImage = this.container.querySelector('img');
    
    if (!mainImage) return;

    // Criar estrutura de galeria
    const gallery = document.createElement('div');
    gallery.className = 'gallery-container';
    
    const mainImageContainer = document.createElement('div');
    mainImageContainer.className = 'gallery-main';
    mainImageContainer.innerHTML = `
      <img id="main-image" src="${mainImage.src}" alt="${mainImage.alt}" loading="lazy">
      <button class="gallery-btn gallery-prev" aria-label="Imagem anterior">❮</button>
      <button class="gallery-btn gallery-next" aria-label="Próxima imagem">❯</button>
      <span class="gallery-counter"><span id="current">1</span>/<span id="total">1</span></span>
    `;

    const thumbnailContainer = document.createElement('div');
    thumbnailContainer.className = 'gallery-thumbnails';

    // Adicionar imagens de exemplo
    this.images = this.getImages();
    
    this.images.forEach((image, index) => {
      const thumb = document.createElement('img');
      thumb.src = image.thumb;
      thumb.alt = `Imagem ${index + 1}`;
      thumb.className = `thumbnail ${index === 0 ? 'active' : ''}`;
      thumb.dataset.index = index;
      thumb.addEventListener('click', () => this.showImage(index));
      thumbnailContainer.appendChild(thumb);
    });

    gallery.appendChild(mainImageContainer);
    gallery.appendChild(thumbnailContainer);

    // Substituir imagem original
    const parent = mainImage.parentElement;
    parent.innerHTML = '';
    parent.appendChild(gallery);

    // Atualizar contador
    document.getElementById('total').textContent = this.images.length;
  }

  getImages() {
    // Imagens do veículo (com a URL fornecida como principal)
    return [
      {
        main: 'https://image1.mobiauto.com.br/images/api/images/v1.0/49870207/transform/fl_progressive,f_webp,q_85,w_959',
        thumb: 'https://image1.mobiauto.com.br/images/api/images/v1.0/49870207/transform/fl_progressive,f_webp,q_85,w_150'
      },
      {
        main: 'assets/imagens/carro2.jpg',
        thumb: 'assets/imagens/carro2_thumb.jpg'
      },
      {
        main: 'assets/imagens/carro3.jpg',
        thumb: 'assets/imagens/carro3_thumb.jpg'
      },
      {
        main: 'assets/imagens/carro4.jpg',
        thumb: 'assets/imagens/carro4_thumb.jpg'
      },
      {
        main: 'assets/imagens/carro5.jpg',
        thumb: 'assets/imagens/carro5_thumb.jpg'
      }
    ];
  }

  setupEventListeners() {
    const prevBtn = this.container.querySelector('.gallery-prev');
    const nextBtn = this.container.querySelector('.gallery-next');

    if (prevBtn) {
      prevBtn.addEventListener('click', () => this.previousImage());
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => this.nextImage());
    }

    // Navegação por teclado
    document.addEventListener('keydown', (e) => {
      if (document.querySelector('.gallery-container')) {
        if (e.key === 'ArrowLeft') this.previousImage();
        if (e.key === 'ArrowRight') this.nextImage();
      }
    });
  }

  showImage(index) {
    if (index < 0) index = this.images.length - 1;
    if (index >= this.images.length) index = 0;

    this.currentIndex = index;
    const image = this.images[index];

    const mainImage = this.container.querySelector('#main-image');
    mainImage.src = image.main;

    // Atualizar thumbnails
    this.container.querySelectorAll('.thumbnail').forEach((thumb, i) => {
      thumb.classList.toggle('active', i === index);
    });

    // Atualizar contador
    document.getElementById('current').textContent = index + 1;

    console.log(`📸 Mostrando imagem ${index + 1}/${this.images.length}`);
  }

  nextImage() {
    this.showImage(this.currentIndex + 1);
  }

  previousImage() {
    this.showImage(this.currentIndex - 1);
  }

  addImage(imageUrl, thumbUrl) {
    this.images.push({
      main: imageUrl,
      thumb: thumbUrl
    });
    console.log(`✅ Imagem adicionada. Total: ${this.images.length}`);
  }
}

// Inicializar quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
  const gallery = new ImageGallery('.vehicle-image');
});

console.log('✅ Galeria de imagens carregada');
