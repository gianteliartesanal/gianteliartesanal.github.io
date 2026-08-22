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
    filter_ron: "Ron",
    filter_vinos: "Vinos",
    details_button: "Ver detalles",
    detail_back: "← Volver al catálogo",
    detail_code_label: "Código:",
    detail_units: "Unidades",
    detail_total: "Total",
    detail_add: "Agregar",
    detail_added: "Agregado ✓",
    detail_description: "Descripción",
    detail_not_found: "Producto no encontrado.",
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
    filter_ron: "Rum",
    filter_vinos: "Wines",
    details_button: "View details",
    detail_back: "← Back to catalog",
    detail_code_label: "Code:",
    detail_units: "Units",
    detail_total: "Total",
    detail_add: "Add",
    detail_added: "Added ✓",
    detail_description: "Description",
    detail_not_found: "Product not found.",
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
const slides = Array.from(document.querySelectorAll(".slide"));
const productGrid = document.getElementById("productGrid");
const productDetail = document.getElementById("productDetail");
let currentLang = "es";
let currentSlide = 0;
let slideInterval;
let currentFilter = "all";
let productsData = null;

function categoryLabel(category, lang) {
  const map = {
    Licores: "filter_licores",
    Whisky: "filter_whisky",
    Ron: "filter_ron",
    Vinos: "filter_vinos"
  };
  const key = map[category];
  return key ? translations[lang][key] : category;
}

function renderCatalog() {
  if (!productGrid || !productsData) return;
  productGrid.innerHTML = "";
  productsData.forEach((product) => {
    const card = document.createElement("article");
    card.className = "product-card";
    card.dataset.category = product.category;
    card.tabIndex = 0;
    card.setAttribute("role", "link");

    const photo = document.createElement("div");
    photo.className = product.image ? "product-photo has-photo" : "product-photo";
    if (product.image) {
      const img = document.createElement("img");
      img.src = product.image;
      img.alt = product[currentLang].name;
      img.loading = "lazy";
      photo.appendChild(img);
    }

    const copy = document.createElement("div");
    copy.className = "product-copy";

    const label = document.createElement("span");
    label.className = "category-label";
    label.textContent = categoryLabel(product.category, currentLang);

    const name = document.createElement("h3");
    name.textContent = product[currentLang].name;

    const desc = document.createElement("p");
    desc.textContent = product[currentLang].shortDesc;

    const link = document.createElement("a");
    link.className = "detail-btn";
    link.href = `product.html?id=${product.id}`;
    link.textContent = translations[currentLang].details_button;

    copy.append(label, name, desc, link);
    card.append(photo, copy);

    card.addEventListener("click", () => {
      window.location.href = link.href;
    });
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        window.location.href = link.href;
      }
    });

    productGrid.appendChild(card);
  });
  applyFilterVisibility();
}

function applyFilterVisibility() {
  if (!productGrid) return;
  productGrid.querySelectorAll(".product-card").forEach((card) => {
    const isVisible = currentFilter === "all" || card.dataset.category === currentFilter;
    card.style.display = isVisible ? "grid" : "none";
  });
}

function setActiveFilter(filter) {
  currentFilter = filter;
  filterButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.filter === filter);
  });
  applyFilterVisibility();
}

function getProductIdFromUrl() {
  return Number(new URLSearchParams(window.location.search).get("id"));
}

function updateTotal() {
  const unitsSelect = document.getElementById("detailUnits");
  const totalEl = document.getElementById("detailTotal");
  if (!productDetail || !unitsSelect || !totalEl || !productDetail.dataset.productId) return;
  const product = productsData.find((p) => p.id === Number(productDetail.dataset.productId));
  if (!product) return;
  const units = Number(unitsSelect.value);
  totalEl.textContent = `US$ ${(product.price * units).toFixed(2)}`;
}

function renderProductDetail() {
  if (!productDetail || !productsData) return;
  const id = getProductIdFromUrl();
  const product = productsData.find((p) => p.id === id);
  const content = document.getElementById("detailContent");
  const notFound = document.getElementById("detailNotFound");

  if (!product) {
    if (content) content.style.display = "none";
    if (notFound) notFound.style.display = "block";
    return;
  }

  if (content) content.style.display = "";
  if (notFound) notFound.style.display = "none";
  productDetail.dataset.productId = product.id;

  const photo = document.getElementById("detailPhoto");
  const image = document.getElementById("detailImage");
  if (product.image) {
    photo.classList.add("has-photo");
    image.src = product.image;
    image.alt = product[currentLang].name;
    image.style.display = "";
  } else {
    photo.classList.remove("has-photo");
    image.removeAttribute("src");
    image.style.display = "none";
  }

  document.getElementById("detailCategory").textContent = categoryLabel(product.category, currentLang);
  document.getElementById("detailName").textContent = product[currentLang].name;
  document.getElementById("detailCode").textContent = product.code;
  document.getElementById("detailVolume").textContent = `${product.volume} · ${product.abv} Vol.`;
  document.getElementById("detailPrice").textContent = product.price.toFixed(2);
  document.getElementById("detailDesc").textContent = product[currentLang].desc;
  document.title = `Gianteli | ${product[currentLang].name}`;

  updateTotal();
}

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
  if (productsData) {
    renderCatalog();
    renderProductDetail();
  }
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

  if (!nextButton || !prevButton || slides.length === 0) return;

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

const unitsSelect = document.getElementById("detailUnits");
if (unitsSelect) {
  unitsSelect.addEventListener("change", updateTotal);
}

const addToCartBtn = document.getElementById("addToCartBtn");
if (addToCartBtn) {
  addToCartBtn.addEventListener("click", () => {
    addToCartBtn.textContent = translations[currentLang].detail_added;
    addToCartBtn.disabled = true;
    setTimeout(() => {
      addToCartBtn.textContent = translations[currentLang].detail_add;
      addToCartBtn.disabled = false;
    }, 1500);
  });
}

updateLanguage(currentLang);
setActiveFilter("all");
initSlider();

if (productGrid || productDetail) {
  fetch("js/products.json")
    .then((response) => response.json())
    .then((data) => {
      productsData = data;
      renderCatalog();
      renderProductDetail();
    })
    .catch((error) => {
      console.error("No se pudieron cargar los productos:", error);
    });
}
