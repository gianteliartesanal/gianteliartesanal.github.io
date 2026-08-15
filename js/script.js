const translations = {
  es: {
    nav_home: "Inicio",
    nav_catalog: "Catálogo",
    nav_services: "Servicios",
    nav_mission: "Misión",
    nav_about: "Acerca",
    hero_tagline: "Selecciona calidad, sabor y experiencia.",
    hero_title: "Catálogo de bebidas alcohólicas premium",
    hero_text: "Licores, whisky, vinos y selecciones exclusivas para tu evento o tienda.",
    catalog_label: "Catálogo de productos",
    catalog_title: "Nuestros favoritos seleccionados",
    filter_all: "Todos",
    filter_licores: "Licores",
    filter_whisky: "Whisky",
    filter_vinos: "Vinos",
    filter_otros: "Otros",
    product_1_category: "Licores",
    product_1_name: "Maracuyá",
    product_1_desc: "Licor artesanal con el toque tropical y ácido del maracuyá.",
    product_2_category: "Licores",
    product_2_name: "Chocolate",
    product_2_desc: "Licor artesanal con notas suaves de cacao y chocolate.",
    product_3_category: "Licores",
    product_3_name: "Anís",
    product_3_desc: "Licor artesanal con el aroma clásico y herbal del anís.",
    product_4_category: "Licores",
    product_4_name: "Almendras",
    product_4_desc: "Licor de almendras artesanal, suave y aromático.",
    product_5_category: "Licores",
    product_5_name: "Jengibre",
    product_5_desc: "Licor artesanal con el picante fresco del jengibre.",
    product_6_category: "Whisky",
    product_6_name: "Single Malt Clásico",
    product_6_desc: "Cálido y sofisticado para paladares exigentes.",
    product_7_category: "Vinos",
    product_7_name: "Tinto Reserva",
    product_7_desc: "Elegante y complejo, ideal para cenas formales.",
    product_8_category: "Otros",
    product_8_name: "Vermut Artesanal",
    product_8_desc: "Aromático y sofisticado, ideal para coctelería.",
    details_button: "Ver detalles",
    services_title: "Servicios ofrecidos",
    services_text: "Apoyamos la planificación de tus eventos con barras móviles y experiencias personalizadas.",
    service_1: "Barra de cocteles",
    service_2: "Obsequios y combos de producto",
    service_3: "Stand en eventos privados",
    service_highlight: "Atención profesional y entrega segura",
    service_highlight_text: "Trabajamos con selección premium, asesoría a medida y presentación elegante para cada cliente.",
    mission_title: "Nuestra misión",
    mission_text: "Elevar el servicio de bebidas con una propuesta clara, responsable y enfocada en la calidad.",
    about_title: "Acerca de Gianteli",
    about_text: "Con experiencia en eventos y comercio selecto, ofrecemos un catálogo cuidado y una experiencia de compra sencilla.",
    footer_hours_title: "Horario",
    footer_hours_1: "Lun-Vie: 9am - 6pm",
    footer_hours_2: "Sáb: 10am - 4pm",
    footer_hours_3: "Dom: Cerrado",
    footer_social_title: "Síguenos",
    footer_instagram: "Instagram",
    footer_text: "Catálogo de bebidas alcohólicas, distribuido con estilo y confiabilidad."
  },
  en: {
    nav_home: "Home",
    nav_catalog: "Catalog",
    nav_services: "Services",
    nav_mission: "Mission",
    nav_about: "About",
    hero_tagline: "Choose quality, flavor and experience.",
    hero_title: "Premium alcoholic beverage catalog",
    hero_text: "Spirits, whisky, wines and exclusive selections for your event or store.",
    catalog_label: "Product catalog",
    catalog_title: "Our selected favorites",
    filter_all: "All",
    filter_licores: "Spirits",
    filter_whisky: "Whisky",
    filter_vinos: "Wines",
    filter_otros: "Others",
    product_1_category: "Spirits",
    product_1_name: "Passion Fruit",
    product_1_desc: "Artisanal liqueur with the tropical, tangy touch of passion fruit.",
    product_2_category: "Spirits",
    product_2_name: "Chocolate",
    product_2_desc: "Artisanal liqueur with smooth cacao and chocolate notes.",
    product_3_category: "Spirits",
    product_3_name: "Anise",
    product_3_desc: "Artisanal liqueur with the classic, herbal aroma of anise.",
    product_4_category: "Spirits",
    product_4_name: "Almond",
    product_4_desc: "Artisanal almond liqueur, smooth and aromatic.",
    product_5_category: "Spirits",
    product_5_name: "Ginger",
    product_5_desc: "Artisanal liqueur with the fresh, spicy kick of ginger.",
    product_6_category: "Whisky",
    product_6_name: "Classic Single Malt",
    product_6_desc: "Warm and sophisticated for discerning palates.",
    product_7_category: "Wines",
    product_7_name: "Reserva Red",
    product_7_desc: "Elegant and complex, ideal for formal dinners.",
    product_8_category: "Others",
    product_8_name: "Artisan Vermouth",
    product_8_desc: "Aromatic and sophisticated, ideal for cocktails.",
    details_button: "View details",
    services_title: "Offered services",
    services_text: "We support your event planning with mobile bars and personalized experiences.",
    service_1: "Cocktail bar",
    service_2: "Gifts and product bundles",
    service_3: "Private event stand",
    service_highlight: "Professional service and secure delivery",
    service_highlight_text: "We work with premium selection, tailored advice and elegant presentation for every client.",
    mission_title: "Our mission",
    mission_text: "Elevate beverage service with a clear, responsible approach focused on quality.",
    about_title: "About Gianteli",
    about_text: "With experience in events and select retail, we offer a curated catalog and a smooth purchase experience.",
    footer_hours_title: "Hours",
    footer_hours_1: "Mon-Fri: 9am - 6pm",
    footer_hours_2: "Sat: 10am - 4pm",
    footer_hours_3: "Sun: Closed",
    footer_social_title: "Follow us",
    footer_instagram: "Instagram",
    footer_text: "Alcoholic beverage catalog delivered with style and reliability."
  }
};

const languageButton = document.getElementById("langToggle");
const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");
const translatableElements = Array.from(document.querySelectorAll("[data-key]"));
const filterButtons = Array.from(document.querySelectorAll(".filter-btn"));
const productCards = Array.from(document.querySelectorAll(".product-card"));
const slides = Array.from(document.querySelectorAll(".slide"));
let currentLang = "es";
let currentSlide = 0;
let slideInterval;

function updateLanguage(lang) {
  currentLang = lang;
  translatableElements.forEach((element) => {
    const key = element.dataset.key;
    if (translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });
  document.documentElement.lang = lang;
  languageButton.textContent = lang === "es" ? "ENG" : "ESP";
}

function setActiveFilter(filter) {
  filterButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.filter === filter);
  });
  productCards.forEach((card) => {
    const isVisible = filter === "all" || card.dataset.category === filter;
    card.style.display = isVisible ? "grid" : "none";
  });
}

function showSlide(index) {
  slides.forEach((slide, slideIndex) => {
    slide.classList.toggle("active", slideIndex === index);
  });
  currentSlide = index;
}

function nextSlide() {
  const nextIndex = (currentSlide + 1) % slides.length;
  showSlide(nextIndex);
}

function prevSlide() {
  const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(prevIndex);
}

function startSlideShow() {
  slideInterval = setInterval(nextSlide, 6000);
}

function initSlider() {
  const nextButton = document.getElementById("nextSlide");
  const prevButton = document.getElementById("prevSlide");

  nextButton.addEventListener("click", () => {
    nextSlide();
    resetSlideShow();
  });

  prevButton.addEventListener("click", () => {
    prevSlide();
    resetSlideShow();
  });

  startSlideShow();
}

function resetSlideShow() {
  clearInterval(slideInterval);
  startSlideShow();
}

function closeNav() {
  mainNav.classList.remove("open");
  navToggle.setAttribute("aria-expanded", "false");
}

navToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeNav);
});

languageButton.addEventListener("click", () => {
  updateLanguage(currentLang === "es" ? "en" : "es");
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setActiveFilter(button.dataset.filter);
  });
});

updateLanguage(currentLang);
setActiveFilter("all");
initSlider();
