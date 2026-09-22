document.addEventListener("DOMContentLoaded", () => {
  // Product catalogue is kept separately in assets/products.js for easy editing.


  const toggle = document.querySelector(".mobile-toggle");
  const nav = document.querySelector(".main-nav");
  if (toggle && nav) toggle.addEventListener("click", () => {
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
    nav.style.position = "absolute"; nav.style.top = "68px"; nav.style.left = "0"; nav.style.right = "0";
    nav.style.background = "#fff"; nav.style.padding = "20px"; nav.style.flexDirection = "column"; nav.style.boxShadow = "0 10px 25px #0001";
  });

  // Browse cards are generated from the productData above, so adding/editing a listing only requires one product entry.
  const grid = document.getElementById("listingGrid");
  if (grid) {
    grid.innerHTML = Object.entries(productData).map(([id, p]) => `
      <article class="product-card listing" data-title="${p.title}" data-category="${p.category}">
        <a href="product.html?id=${id}"><div class="product-image ${p.className}"><img src="${p.images[0]}" alt="${p.title}" loading="lazy"><span>${p.brand}</span><b>${p.visual}</b></div></a>
        <div class="product-body"><div class="row"><span class="condition">${p.condition.replace(" condition","")}</span><span class="location">${p.location}</span></div><h3><a href="product.html?id=${id}">${p.title}</a></h3><div class="price">${p.price}</div><p>${p.summary}</p></div>
      </article>`).join("");
  }

  const search = document.getElementById("searchInput");
  const cat = document.getElementById("categoryFilter");
  const count = document.getElementById("resultCount");
  const empty = document.getElementById("emptyState");
  const categoryParam = new URLSearchParams(location.search).get("category");
  const queryParam = new URLSearchParams(location.search).get("q");
  const categoryMap = {electronics:"Electronics", furniture:"Furniture", vehicles:"Vehicles", fashion:"Fashion", home:"Home", collectibles:"Collectibles"};
  if (cat && categoryParam) { const requested = categoryMap[categoryParam.toLowerCase()]; if (requested) cat.value = requested; }
  if (search && queryParam) search.value = queryParam;

  function filter() {
    if (!grid) return;
    const q = (search?.value || "").trim().toLowerCase();
    const c = (cat?.value || "").trim().toLowerCase();
    let n = 0;
    grid.querySelectorAll(".listing").forEach(card => {
      const title = (card.dataset.title || "").toLowerCase();
      const category = (card.dataset.category || "").toLowerCase();
      const ok = (!q || title.includes(q) || category.includes(q)) && (!c || category === c);
      card.style.display = ok ? "" : "none";
      if (ok) n++;
    });
    if (count) count.textContent = n;
    if (empty) empty.hidden = n !== 0;
  }
  if (search) search.addEventListener("input", filter);
  if (cat) cat.addEventListener("change", filter);
  document.getElementById("applyFilters")?.addEventListener("click", filter);
  document.getElementById("clearFilters")?.addEventListener("click", () => {
    if (search) search.value = ""; if (cat) cat.value = ""; history.replaceState(null, "", location.pathname); filter();
  });
  filter();

  // Product details page
  const productId = new URLSearchParams(location.search).get("id") || "1";
  const product = productData[productId] || productData[1];
  function setText(id, value) { const el = document.getElementById(id); if (el) el.textContent = value; }
  setText("detailCategory", product.category); setText("detailCondition", product.condition); setText("detailLocation", product.location); setText("detailTitle", product.title); setText("detailPrice", product.price); setText("detailLead", product.lead); setText("detailBrand", product.brand); setText("detailVisualName", product.visual); setText("sellerAvatar", product.avatar); setText("sellerName", product.seller); setText("sellerMeta", product.meta); setText("detailDescription", product.description); setText("inquiryProduct", product.title);
  if (document.title.includes("Product Details") || location.pathname.endsWith("product.html")) document.title = product.title + " — ReList";
  const visual = document.getElementById("detailVisual"); if (visual) visual.className = "detail-main-image " + product.className;
  const detailImage = document.getElementById("detailImage");
  const thumbs = ["thumb1", "thumb2", "thumb3"].map(id => document.getElementById(id));
  function showProductImage(index) {
    if (!product.images?.[index]) return;
    if (detailImage) { detailImage.src = product.images[index]; detailImage.alt = product.title + " photo " + (index + 1); }
    thumbs.forEach((el, i) => { if (el) el.className = "thumb " + product.className + (i === index ? " active" : ""); });
  }
  thumbs.forEach((el, i) => { if (el) { const img = el.querySelector("img"); if (img) { img.src = product.images[i]; img.alt = product.title + " photo " + (i + 1); } el.addEventListener("click", () => { selectedPhoto = i + 1; showProductImage(i); }); } });
  showProductImage(0);
  const specGrid = document.getElementById("specGrid"); if (specGrid) specGrid.innerHTML = product.specs.map(x => `<div><small>${x[0]}</small><strong>${x[1]}</strong></div>`).join("");
  const bullets = document.getElementById("detailBullets"); if (bullets) bullets.innerHTML = product.bullets.map(x => `<li>${x}</li>`).join("");

  // WhatsApp product inquiry — no form or backend required.
  // The selected product details are automatically pre-filled into the WhatsApp message.
  const whatsappNumber = "254792946075";
  let selectedPhoto = 1;
  function buildWhatsAppMessage() {
    const specs = (product.specs || []).map(([label, value]) => `• ${label}: ${value}`).join("\n");
    const message = [
      "Hello ReList, I am interested in this product:",
      "",
      `Product: ${product.title}`,
      `Price: ${product.price}`,
      `Category: ${product.category}`,
      `Condition: ${product.condition}`,
      `Location: ${product.location}`,
      `Brand: ${product.brand}`,
      `Seller: ${product.seller}`,
      `Selected photo: ${selectedPhoto} of ${product.images?.length || 0}`,
      "",
      "Product details:",
      product.description || product.lead || "",
      "",
      specs ? `Specifications:\n${specs}` : "",
      "",
      `Listing link: ${location.href}`,
      "",
      "Please let me know if this item is still available."
    ].filter(Boolean).join("\n");
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  }
  document.getElementById("inquireBtn")?.addEventListener("click", () => {
    window.open(buildWhatsAppMessage(), "_blank", "noopener,noreferrer");
  });

  const tabs = document.querySelectorAll(".auth-tabs button"), lp = document.getElementById("loginPanel"), rp = document.getElementById("registerPanel");
  tabs.forEach((b, i) => b.addEventListener("click", () => { tabs.forEach(x => x.classList.remove("active")); b.classList.add("active"); if (lp) lp.hidden = i !== 0; if (rp) rp.hidden = i !== 1; }));
  if (location.hash === "#register") tabs[1]?.click();
  document.getElementById("listingForm")?.addEventListener("submit", e => { e.preventDefault(); alert("Demo listing form submitted. Connect this to a database/backend to publish the listing."); });
});
