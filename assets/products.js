// ============================================================
// ReList PRODUCT CATALOGUE — EASY EDIT SECTION
// Edit products here. Each product has 3 editable image URLs.
// To add a product: copy one complete entry and change the fields.
// ============================================================
const productData = {
  // PRODUCT 1 — ELECTRONICS — EDIT THIS PRODUCT HERE
  1: {title:"iPhone 14 Pro 256GB",price:"$520",category:"Electronics",condition:"Excellent condition",location:"Brooklyn, New York",brand:"APPLE",visual:"iPhone 14 Pro",lead:"Unlocked iPhone 14 Pro in excellent working condition.",seller:"Jordan M.",avatar:"JM",meta:"Member since 2025 · 5 listings",description:"Unlocked iPhone 14 Pro in excellent working condition. Ask the seller for more information, additional photos, and availability.",bullets:["Well-kept item", "Seller verified listing details", "Available for direct inquiry", "Additional photos available on request", "Local pickup or agreed delivery"],specs:[["Condition", "Excellent"], ["Category", "Electronics"], ["Location", "Brooklyn"], ["Listed", "Recently"]],images:[
    // IMAGE 1 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 2 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 3 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&w=1400&q=85"
  ],className:"p-item",summary:"Unlocked \u00b7 256GB \u00b7 Battery 91%"},
  // PRODUCT 2 — FURNITURE — EDIT THIS PRODUCT HERE
  2: {title:"3-Seater Modern Sofa",price:"$390",category:"Furniture",condition:"Very good condition",location:"Queens, New York",brand:"HOME",visual:"Modern Sofa",lead:"Clean 3-seater sofa with neutral fabric and comfortable cushions.",seller:"Alicia R.",avatar:"AR",meta:"Member since 2025 · 5 listings",description:"Clean 3-seater sofa with neutral fabric and comfortable cushions. Ask the seller for more information, additional photos, and availability.",bullets:["Well-kept item", "Seller verified listing details", "Available for direct inquiry", "Additional photos available on request", "Local pickup or agreed delivery"],specs:[["Condition", "Very good"], ["Category", "Furniture"], ["Location", "Queens"], ["Listed", "Recently"]],images:[
    // IMAGE 1 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 2 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 3 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1400&q=85"
  ],className:"p-item",summary:"Neutral fabric \u00b7 Clean \u00b7 Smoke-free"},
  // PRODUCT 3 — ELECTRONICS — EDIT THIS PRODUCT HERE
  3: {title:"Sony Alpha Mirrorless Camera",price:"$780",category:"Electronics",condition:"Excellent condition",location:"Manhattan, New York",brand:"SONY",visual:"Alpha Camera",lead:"Lightly used Sony Alpha mirrorless camera with lens included.",seller:"Marcus T.",avatar:"MT",meta:"Member since 2025 · 5 listings",description:"Lightly used Sony Alpha mirrorless camera with lens included. Ask the seller for more information, additional photos, and availability.",bullets:["Well-kept item", "Seller verified listing details", "Available for direct inquiry", "Additional photos available on request", "Local pickup or agreed delivery"],specs:[["Condition", "Excellent"], ["Category", "Electronics"], ["Location", "Manhattan"], ["Listed", "Recently"]],images:[
    // IMAGE 1 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 2 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 3 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1400&q=85"
  ],className:"p-item",summary:"Lightly used \u00b7 Lens included"},
  // PRODUCT 4 — FURNITURE — EDIT THIS PRODUCT HERE
  4: {title:"Bouclé Accent Chair",price:"$165",category:"Furniture",condition:"Like new",location:"Jersey City, New Jersey",brand:"DESIGN",visual:"Accent Chair",lead:"Stylish bouclé accent chair with a designer look and very little use.",seller:"Nina K.",avatar:"NK",meta:"Member since 2025 · 5 listings",description:"Stylish bouclé accent chair with a designer look and very little use. Ask the seller for more information, additional photos, and availability.",bullets:["Well-kept item", "Seller verified listing details", "Available for direct inquiry", "Additional photos available on request", "Local pickup or agreed delivery"],specs:[["Condition", "Like new"], ["Category", "Furniture"], ["Location", "Jersey City"], ["Listed", "Recently"]],images:[
    // IMAGE 1 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 2 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1550226891-ef816aed4a98?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 3 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1400&q=85"
  ],className:"p-item",summary:"Designer look \u00b7 Barely used"},
  // PRODUCT 5 — ELECTRONICS — EDIT THIS PRODUCT HERE
  5: {title:"MacBook Pro 14-inch",price:"$1,050",category:"Electronics",condition:"Very good condition",location:"Bronx, New York",brand:"APPLE",visual:"MacBook Pro",lead:"MacBook Pro with M2 Pro chip, 16GB memory, and 512GB SSD.",seller:"David P.",avatar:"DP",meta:"Member since 2025 · 5 listings",description:"MacBook Pro with M2 Pro chip, 16GB memory, and 512GB SSD. Ask the seller for more information, additional photos, and availability.",bullets:["Well-kept item", "Seller verified listing details", "Available for direct inquiry", "Additional photos available on request", "Local pickup or agreed delivery"],specs:[["Condition", "Very good"], ["Category", "Electronics"], ["Location", "Bronx"], ["Listed", "Recently"]],images:[
    // IMAGE 1 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 2 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 3 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1400&q=85"
  ],className:"p-item",summary:"M2 Pro \u00b7 16GB \u00b7 512GB SSD"},
  // PRODUCT 6 — VEHICLES — EDIT THIS PRODUCT HERE
  6: {title:"Vintage Road Bike",price:"$430",category:"Vehicles",condition:"Good condition",location:"Manhattan, New York",brand:"SPORT",visual:"Road Bike",lead:"Classic steel-frame road bike that has recently been serviced.",seller:"Chris B.",avatar:"CB",meta:"Member since 2025 · 5 listings",description:"Classic steel-frame road bike that has recently been serviced. Ask the seller for more information, additional photos, and availability.",bullets:["Well-kept item", "Seller verified listing details", "Available for direct inquiry", "Additional photos available on request", "Local pickup or agreed delivery"],specs:[["Condition", "Good"], ["Category", "Vehicles"], ["Location", "Manhattan"], ["Listed", "Recently"]],images:[
    // IMAGE 1 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 2 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 3 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1400&q=85"
  ],className:"p-item",summary:"Steel frame \u00b7 Recently serviced"},
  // PRODUCT 7 — FASHION — EDIT THIS PRODUCT HERE
  7: {title:"Genuine Leather Handbag",price:"$210",category:"Fashion",condition:"Excellent condition",location:"Brooklyn, New York",brand:"FASHION",visual:"Leather Bag",lead:"Genuine leather handbag with minimal wear.",seller:"Sofia L.",avatar:"SL",meta:"Member since 2025 · 5 listings",description:"Genuine leather handbag with minimal wear. Ask the seller for more information, additional photos, and availability.",bullets:["Well-kept item", "Seller verified listing details", "Available for direct inquiry", "Additional photos available on request", "Local pickup or agreed delivery"],specs:[["Condition", "Excellent"], ["Category", "Fashion"], ["Location", "Brooklyn"], ["Listed", "Recently"]],images:[
    // IMAGE 1 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 2 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 3 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1400&q=85"
  ],className:"p-item",summary:"Minimal wear \u00b7 Dust bag included"},
  // PRODUCT 8 — HOME — EDIT THIS PRODUCT HERE
  8: {title:"Automatic Espresso Machine",price:"$290",category:"Home",condition:"Like new",location:"Queens, New York",brand:"KITCHEN",visual:"Coffee Machine",lead:"Fully working automatic espresso machine with low usage.",seller:"Kevin W.",avatar:"KW",meta:"Member since 2025 · 5 listings",description:"Fully working automatic espresso machine with low usage. Ask the seller for more information, additional photos, and availability.",bullets:["Well-kept item", "Seller verified listing details", "Available for direct inquiry", "Additional photos available on request", "Local pickup or agreed delivery"],specs:[["Condition", "Like new"], ["Category", "Home"], ["Location", "Queens"], ["Listed", "Recently"]],images:[
    // IMAGE 1 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 2 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 3 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1583845112203-454c8c4f3c9b?auto=format&fit=crop&w=1400&q=85"
  ],className:"p-item",summary:"Fully working \u00b7 Low usage"},
  // PRODUCT 9 — COLLECTIBLES — EDIT THIS PRODUCT HERE
  9: {title:"Vintage Vinyl Record Collection",price:"$180",category:"Collectibles",condition:"Very good condition",location:"Brooklyn, New York",brand:"COLLECTIBLE",visual:"Vinyl Collection",lead:"Curated collection of classic vinyl records, stored carefully.",seller:"Alex R.",avatar:"AR",meta:"Member since 2025 · 5 listings",description:"Curated collection of classic vinyl records, stored carefully. Ask the seller for more information, additional photos, and availability.",bullets:["Well-kept item", "Seller verified listing details", "Available for direct inquiry", "Additional photos available on request", "Local pickup or agreed delivery"],specs:[["Condition", "Very good"], ["Category", "Collectibles"], ["Location", "Brooklyn"], ["Listed", "Recently"]],images:[
    // IMAGE 1 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 2 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 3 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1539375665275-f9de415ef9ac?auto=format&fit=crop&w=1400&q=85"
  ],className:"p-item",summary:"Vintage records \u00b7 Collector's item"},
  // PRODUCT 10 — ELECTRONICS — EDIT THIS PRODUCT HERE
  10: {title:"Samsung Galaxy S23",price:"$240",category:"Electronics",condition:"Excellent condition",location:"Jersey City, New Jersey",brand:"ELECTRONICS",visual:"Samsung Galaxy S23",lead:"Samsung Galaxy S23 listed in excellent condition. Contact the seller for details, availability, and pickup information. ",seller:"ReList Seller",avatar:"RS",meta:"Member since 2025 · 5 listings",description:"Samsung Galaxy S23 listed in excellent condition. Contact the seller for details, availability, and pickup information.  Ask the seller for more information, additional photos, and availability.",bullets:["Well-kept item", "Seller verified listing details", "Available for direct inquiry", "Additional photos available on request", "Local pickup or agreed delivery"],specs:[["Condition", "Excellent"], ["Category", "Electronics"], ["Location", "Jersey City"], ["Listed", "Recently"]],images:[
    // IMAGE 1 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 2 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 3 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&w=1400&q=85"
  ],className:"p-item",summary:"Excellent \u00b7 Ready to view"},
  // PRODUCT 11 — ELECTRONICS — EDIT THIS PRODUCT HERE
  11: {title:"iPad Air 5th Gen",price:"$350",category:"Electronics",condition:"Very good condition",location:"Brooklyn, New York",brand:"ELECTRONICS",visual:"iPad Air 5th Gen",lead:"iPad Air 5th Gen listed in very good condition. Contact the seller for details, availability, and pickup information. ",seller:"ReList Seller",avatar:"RS",meta:"Member since 2025 · 5 listings",description:"iPad Air 5th Gen listed in very good condition. Contact the seller for details, availability, and pickup information.  Ask the seller for more information, additional photos, and availability.",bullets:["Well-kept item", "Seller verified listing details", "Available for direct inquiry", "Additional photos available on request", "Local pickup or agreed delivery"],specs:[["Condition", "Very good"], ["Category", "Electronics"], ["Location", "Brooklyn"], ["Listed", "Recently"]],images:[
    // IMAGE 1 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 2 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 3 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1400&q=85"
  ],className:"p-item",summary:"Very good \u00b7 Ready to view"},
  // PRODUCT 12 — ELECTRONICS — EDIT THIS PRODUCT HERE
  12: {title:"Dell XPS 13 Laptop",price:"$475",category:"Electronics",condition:"Good condition",location:"Manhattan, New York",brand:"ELECTRONICS",visual:"Dell XPS 13 Laptop",lead:"Dell XPS 13 Laptop listed in good condition. Contact the seller for details, availability, and pickup information. ",seller:"ReList Seller",avatar:"RS",meta:"Member since 2025 · 5 listings",description:"Dell XPS 13 Laptop listed in good condition. Contact the seller for details, availability, and pickup information.  Ask the seller for more information, additional photos, and availability.",bullets:["Well-kept item", "Seller verified listing details", "Available for direct inquiry", "Additional photos available on request", "Local pickup or agreed delivery"],specs:[["Condition", "Good"], ["Category", "Electronics"], ["Location", "Manhattan"], ["Listed", "Recently"]],images:[
    // IMAGE 1 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 2 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 3 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1400&q=85"
  ],className:"p-item",summary:"Good \u00b7 Ready to view"},
  // PRODUCT 13 — ELECTRONICS — EDIT THIS PRODUCT HERE
  13: {title:"Nintendo Switch OLED",price:"$620",category:"Electronics",condition:"Like new",location:"Jersey City, New Jersey",brand:"ELECTRONICS",visual:"Nintendo Switch OLED",lead:"Nintendo Switch OLED listed in like new. Contact the seller for details, availability, and pickup information. ",seller:"ReList Seller",avatar:"RS",meta:"Member since 2025 · 5 listings",description:"Nintendo Switch OLED listed in like new. Contact the seller for details, availability, and pickup information.  Ask the seller for more information, additional photos, and availability.",bullets:["Well-kept item", "Seller verified listing details", "Available for direct inquiry", "Additional photos available on request", "Local pickup or agreed delivery"],specs:[["Condition", "Like new"], ["Category", "Electronics"], ["Location", "Jersey City"], ["Listed", "Recently"]],images:[
    // IMAGE 1 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 2 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 3 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=1400&q=85"
  ],className:"p-item",summary:"Like new \u00b7 Ready to view"},
  // PRODUCT 14 — ELECTRONICS — EDIT THIS PRODUCT HERE
  14: {title:"Bose QuietComfort Headphones",price:"$185",category:"Electronics",condition:"Excellent condition",location:"Brooklyn, New York",brand:"ELECTRONICS",visual:"Bose QuietComfort Headphones",lead:"Bose QuietComfort Headphones listed in excellent condition. Contact the seller for details, availability, and pickup information. ",seller:"ReList Seller",avatar:"RS",meta:"Member since 2025 · 5 listings",description:"Bose QuietComfort Headphones listed in excellent condition. Contact the seller for details, availability, and pickup information.  Ask the seller for more information, additional photos, and availability.",bullets:["Well-kept item", "Seller verified listing details", "Available for direct inquiry", "Additional photos available on request", "Local pickup or agreed delivery"],specs:[["Condition", "Excellent"], ["Category", "Electronics"], ["Location", "Brooklyn"], ["Listed", "Recently"]],images:[
    // IMAGE 1 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 2 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 3 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1400&q=85"
  ],className:"p-item",summary:"Excellent \u00b7 Ready to view"},
  // PRODUCT 15 — ELECTRONICS — EDIT THIS PRODUCT HERE
  15: {title:"Apple Watch Series 9",price:"$890",category:"Electronics",condition:"Very good condition",location:"Manhattan, New York",brand:"ELECTRONICS",visual:"Apple Watch Series 9",lead:"Apple Watch Series 9 listed in very good condition. Contact the seller for details, availability, and pickup information. ",seller:"ReList Seller",avatar:"RS",meta:"Member since 2025 · 5 listings",description:"Apple Watch Series 9 listed in very good condition. Contact the seller for details, availability, and pickup information.  Ask the seller for more information, additional photos, and availability.",bullets:["Well-kept item", "Seller verified listing details", "Available for direct inquiry", "Additional photos available on request", "Local pickup or agreed delivery"],specs:[["Condition", "Very good"], ["Category", "Electronics"], ["Location", "Manhattan"], ["Listed", "Recently"]],images:[
    // IMAGE 1 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 2 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 3 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&w=1400&q=85"
  ],className:"p-item",summary:"Very good \u00b7 Ready to view"},
  // PRODUCT 16 — ELECTRONICS — EDIT THIS PRODUCT HERE
  16: {title:"LG 55-inch 4K TV",price:"$145",category:"Electronics",condition:"Good condition",location:"Jersey City, New Jersey",brand:"ELECTRONICS",visual:"LG 55-inch 4K TV",lead:"LG 55-inch 4K TV listed in good condition. Contact the seller for details, availability, and pickup information. ",seller:"ReList Seller",avatar:"RS",meta:"Member since 2025 · 5 listings",description:"LG 55-inch 4K TV listed in good condition. Contact the seller for details, availability, and pickup information.  Ask the seller for more information, additional photos, and availability.",bullets:["Well-kept item", "Seller verified listing details", "Available for direct inquiry", "Additional photos available on request", "Local pickup or agreed delivery"],specs:[["Condition", "Good"], ["Category", "Electronics"], ["Location", "Jersey City"], ["Listed", "Recently"]],images:[
    // IMAGE 1 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 2 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 3 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1400&q=85"
  ],className:"p-item",summary:"Good \u00b7 Ready to view"},
  // PRODUCT 17 — ELECTRONICS — EDIT THIS PRODUCT HERE
  17: {title:"GoPro HERO Camera",price:"$560",category:"Electronics",condition:"Like new",location:"Brooklyn, New York",brand:"ELECTRONICS",visual:"GoPro HERO Camera",lead:"GoPro HERO Camera listed in like new. Contact the seller for details, availability, and pickup information. ",seller:"ReList Seller",avatar:"RS",meta:"Member since 2025 · 5 listings",description:"GoPro HERO Camera listed in like new. Contact the seller for details, availability, and pickup information.  Ask the seller for more information, additional photos, and availability.",bullets:["Well-kept item", "Seller verified listing details", "Available for direct inquiry", "Additional photos available on request", "Local pickup or agreed delivery"],specs:[["Condition", "Like new"], ["Category", "Electronics"], ["Location", "Brooklyn"], ["Listed", "Recently"]],images:[
    // IMAGE 1 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 2 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 3 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1400&q=85"
  ],className:"p-item",summary:"Like new \u00b7 Ready to view"},
  // PRODUCT 18 — ELECTRONICS — EDIT THIS PRODUCT HERE
  18: {title:"Kindle Paperwhite",price:"$275",category:"Electronics",condition:"Excellent condition",location:"Manhattan, New York",brand:"ELECTRONICS",visual:"Kindle Paperwhite",lead:"Kindle Paperwhite listed in excellent condition. Contact the seller for details, availability, and pickup information. ",seller:"ReList Seller",avatar:"RS",meta:"Member since 2025 · 5 listings",description:"Kindle Paperwhite listed in excellent condition. Contact the seller for details, availability, and pickup information.  Ask the seller for more information, additional photos, and availability.",bullets:["Well-kept item", "Seller verified listing details", "Available for direct inquiry", "Additional photos available on request", "Local pickup or agreed delivery"],specs:[["Condition", "Excellent"], ["Category", "Electronics"], ["Location", "Manhattan"], ["Listed", "Recently"]],images:[
    // IMAGE 1 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 2 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 3 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=1400&q=85"
  ],className:"p-item",summary:"Excellent \u00b7 Ready to view"},
  // PRODUCT 19 — ELECTRONICS — EDIT THIS PRODUCT HERE
  19: {title:"JBL Bluetooth Speaker",price:"$410",category:"Electronics",condition:"Very good condition",location:"Jersey City, New Jersey",brand:"ELECTRONICS",visual:"JBL Bluetooth Speaker",lead:"JBL Bluetooth Speaker listed in very good condition. Contact the seller for details, availability, and pickup information. ",seller:"ReList Seller",avatar:"RS",meta:"Member since 2025 · 5 listings",description:"JBL Bluetooth Speaker listed in very good condition. Contact the seller for details, availability, and pickup information.  Ask the seller for more information, additional photos, and availability.",bullets:["Well-kept item", "Seller verified listing details", "Available for direct inquiry", "Additional photos available on request", "Local pickup or agreed delivery"],specs:[["Condition", "Very good"], ["Category", "Electronics"], ["Location", "Jersey City"], ["Listed", "Recently"]],images:[
    // IMAGE 1 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 2 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 3 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1400&q=85"
  ],className:"p-item",summary:"Very good \u00b7 Ready to view"},
  // PRODUCT 20 — ELECTRONICS — EDIT THIS PRODUCT HERE
  20: {title:"Canon EOS M50 Camera",price:"$725",category:"Electronics",condition:"Good condition",location:"Brooklyn, New York",brand:"ELECTRONICS",visual:"Canon EOS M50 Camera",lead:"Canon EOS M50 Camera listed in good condition. Contact the seller for details, availability, and pickup information. ",seller:"ReList Seller",avatar:"RS",meta:"Member since 2025 · 5 listings",description:"Canon EOS M50 Camera listed in good condition. Contact the seller for details, availability, and pickup information.  Ask the seller for more information, additional photos, and availability.",bullets:["Well-kept item", "Seller verified listing details", "Available for direct inquiry", "Additional photos available on request", "Local pickup or agreed delivery"],specs:[["Condition", "Good"], ["Category", "Electronics"], ["Location", "Brooklyn"], ["Listed", "Recently"]],images:[
    // IMAGE 1 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 2 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 3 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&w=1400&q=85"
  ],className:"p-item",summary:"Good \u00b7 Ready to view"},
  // PRODUCT 21 — ELECTRONICS — EDIT THIS PRODUCT HERE
  21: {title:"Google Pixel 8",price:"$195",category:"Electronics",condition:"Like new",location:"Manhattan, New York",brand:"ELECTRONICS",visual:"Google Pixel 8",lead:"Google Pixel 8 listed in like new. Contact the seller for details, availability, and pickup information. ",seller:"ReList Seller",avatar:"RS",meta:"Member since 2025 · 5 listings",description:"Google Pixel 8 listed in like new. Contact the seller for details, availability, and pickup information.  Ask the seller for more information, additional photos, and availability.",bullets:["Well-kept item", "Seller verified listing details", "Available for direct inquiry", "Additional photos available on request", "Local pickup or agreed delivery"],specs:[["Condition", "Like new"], ["Category", "Electronics"], ["Location", "Manhattan"], ["Listed", "Recently"]],images:[
    // IMAGE 1 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 2 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 3 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1400&q=85"
  ],className:"p-item",summary:"Like new \u00b7 Ready to view"},
  // PRODUCT 22 — FURNITURE — EDIT THIS PRODUCT HERE
  22: {title:"Oak Dining Table",price:"$240",category:"Furniture",condition:"Excellent condition",location:"Jersey City, New Jersey",brand:"FURNITURE",visual:"Oak Dining Table",lead:"Oak Dining Table listed in excellent condition. Contact the seller for details, availability, and pickup information. ",seller:"ReList Seller",avatar:"RS",meta:"Member since 2025 · 5 listings",description:"Oak Dining Table listed in excellent condition. Contact the seller for details, availability, and pickup information.  Ask the seller for more information, additional photos, and availability.",bullets:["Well-kept item", "Seller verified listing details", "Available for direct inquiry", "Additional photos available on request", "Local pickup or agreed delivery"],specs:[["Condition", "Excellent"], ["Category", "Furniture"], ["Location", "Jersey City"], ["Listed", "Recently"]],images:[
    // IMAGE 1 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 2 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 3 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1400&q=85"
  ],className:"p-item",summary:"Excellent \u00b7 Ready to view"},
  // PRODUCT 23 — FURNITURE — EDIT THIS PRODUCT HERE
  23: {title:"Mid-Century Lounge Chair",price:"$350",category:"Furniture",condition:"Very good condition",location:"Brooklyn, New York",brand:"FURNITURE",visual:"Mid-Century Lounge Chair",lead:"Mid-Century Lounge Chair listed in very good condition. Contact the seller for details, availability, and pickup information. ",seller:"ReList Seller",avatar:"RS",meta:"Member since 2025 · 5 listings",description:"Mid-Century Lounge Chair listed in very good condition. Contact the seller for details, availability, and pickup information.  Ask the seller for more information, additional photos, and availability.",bullets:["Well-kept item", "Seller verified listing details", "Available for direct inquiry", "Additional photos available on request", "Local pickup or agreed delivery"],specs:[["Condition", "Very good"], ["Category", "Furniture"], ["Location", "Brooklyn"], ["Listed", "Recently"]],images:[
    // IMAGE 1 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 2 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 3 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1400&q=85"
  ],className:"p-item",summary:"Very good \u00b7 Ready to view"},
  // PRODUCT 24 — FURNITURE — EDIT THIS PRODUCT HERE
  24: {title:"Queen Bed Frame",price:"$475",category:"Furniture",condition:"Good condition",location:"Manhattan, New York",brand:"FURNITURE",visual:"Queen Bed Frame",lead:"Queen Bed Frame listed in good condition. Contact the seller for details, availability, and pickup information. ",seller:"ReList Seller",avatar:"RS",meta:"Member since 2025 · 5 listings",description:"Queen Bed Frame listed in good condition. Contact the seller for details, availability, and pickup information.  Ask the seller for more information, additional photos, and availability.",bullets:["Well-kept item", "Seller verified listing details", "Available for direct inquiry", "Additional photos available on request", "Local pickup or agreed delivery"],specs:[["Condition", "Good"], ["Category", "Furniture"], ["Location", "Manhattan"], ["Listed", "Recently"]],images:[
    // IMAGE 1 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 2 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 3 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1550226891-ef816aed4a98?auto=format&fit=crop&w=1400&q=85"
  ],className:"p-item",summary:"Good \u00b7 Ready to view"},
  // PRODUCT 25 — FURNITURE — EDIT THIS PRODUCT HERE
  25: {title:"Glass Coffee Table",price:"$620",category:"Furniture",condition:"Like new",location:"Jersey City, New Jersey",brand:"FURNITURE",visual:"Glass Coffee Table",lead:"Glass Coffee Table listed in like new. Contact the seller for details, availability, and pickup information. ",seller:"ReList Seller",avatar:"RS",meta:"Member since 2025 · 5 listings",description:"Glass Coffee Table listed in like new. Contact the seller for details, availability, and pickup information.  Ask the seller for more information, additional photos, and availability.",bullets:["Well-kept item", "Seller verified listing details", "Available for direct inquiry", "Additional photos available on request", "Local pickup or agreed delivery"],specs:[["Condition", "Like new"], ["Category", "Furniture"], ["Location", "Jersey City"], ["Listed", "Recently"]],images:[
    // IMAGE 1 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 2 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1550226891-ef816aed4a98?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 3 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1400&q=85"
  ],className:"p-item",summary:"Like new \u00b7 Ready to view"},
  // PRODUCT 26 — FURNITURE — EDIT THIS PRODUCT HERE
  26: {title:"Six-Drawer Dresser",price:"$185",category:"Furniture",condition:"Excellent condition",location:"Brooklyn, New York",brand:"FURNITURE",visual:"Six-Drawer Dresser",lead:"Six-Drawer Dresser listed in excellent condition. Contact the seller for details, availability, and pickup information. ",seller:"ReList Seller",avatar:"RS",meta:"Member since 2025 · 5 listings",description:"Six-Drawer Dresser listed in excellent condition. Contact the seller for details, availability, and pickup information.  Ask the seller for more information, additional photos, and availability.",bullets:["Well-kept item", "Seller verified listing details", "Available for direct inquiry", "Additional photos available on request", "Local pickup or agreed delivery"],specs:[["Condition", "Excellent"], ["Category", "Furniture"], ["Location", "Brooklyn"], ["Listed", "Recently"]],images:[
    // IMAGE 1 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1550226891-ef816aed4a98?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 2 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 3 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=1400&q=85"
  ],className:"p-item",summary:"Excellent \u00b7 Ready to view"},
  // PRODUCT 27 — FURNITURE — EDIT THIS PRODUCT HERE
  27: {title:"Bookshelf with Cabinets",price:"$890",category:"Furniture",condition:"Very good condition",location:"Manhattan, New York",brand:"FURNITURE",visual:"Bookshelf with Cabinets",lead:"Bookshelf with Cabinets listed in very good condition. Contact the seller for details, availability, and pickup information. ",seller:"ReList Seller",avatar:"RS",meta:"Member since 2025 · 5 listings",description:"Bookshelf with Cabinets listed in very good condition. Contact the seller for details, availability, and pickup information.  Ask the seller for more information, additional photos, and availability.",bullets:["Well-kept item", "Seller verified listing details", "Available for direct inquiry", "Additional photos available on request", "Local pickup or agreed delivery"],specs:[["Condition", "Very good"], ["Category", "Furniture"], ["Location", "Manhattan"], ["Listed", "Recently"]],images:[
    // IMAGE 1 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 2 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 3 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1400&q=85"
  ],className:"p-item",summary:"Very good \u00b7 Ready to view"},
  // PRODUCT 28 — FURNITURE — EDIT THIS PRODUCT HERE
  28: {title:"Office Desk",price:"$145",category:"Furniture",condition:"Good condition",location:"Jersey City, New Jersey",brand:"FURNITURE",visual:"Office Desk",lead:"Office Desk listed in good condition. Contact the seller for details, availability, and pickup information. ",seller:"ReList Seller",avatar:"RS",meta:"Member since 2025 · 5 listings",description:"Office Desk listed in good condition. Contact the seller for details, availability, and pickup information.  Ask the seller for more information, additional photos, and availability.",bullets:["Well-kept item", "Seller verified listing details", "Available for direct inquiry", "Additional photos available on request", "Local pickup or agreed delivery"],specs:[["Condition", "Good"], ["Category", "Furniture"], ["Location", "Jersey City"], ["Listed", "Recently"]],images:[
    // IMAGE 1 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 2 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 3 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1400&q=85"
  ],className:"p-item",summary:"Good \u00b7 Ready to view"},
  // PRODUCT 29 — FURNITURE — EDIT THIS PRODUCT HERE
  29: {title:"TV Console",price:"$560",category:"Furniture",condition:"Like new",location:"Brooklyn, New York",brand:"FURNITURE",visual:"TV Console",lead:"TV Console listed in like new. Contact the seller for details, availability, and pickup information. ",seller:"ReList Seller",avatar:"RS",meta:"Member since 2025 · 5 listings",description:"TV Console listed in like new. Contact the seller for details, availability, and pickup information.  Ask the seller for more information, additional photos, and availability.",bullets:["Well-kept item", "Seller verified listing details", "Available for direct inquiry", "Additional photos available on request", "Local pickup or agreed delivery"],specs:[["Condition", "Like new"], ["Category", "Furniture"], ["Location", "Brooklyn"], ["Listed", "Recently"]],images:[
    // IMAGE 1 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 2 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 3 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1550226891-ef816aed4a98?auto=format&fit=crop&w=1400&q=85"
  ],className:"p-item",summary:"Like new \u00b7 Ready to view"},
  // PRODUCT 30 — FURNITURE — EDIT THIS PRODUCT HERE
  30: {title:"Round Dining Set",price:"$275",category:"Furniture",condition:"Excellent condition",location:"Manhattan, New York",brand:"FURNITURE",visual:"Round Dining Set",lead:"Round Dining Set listed in excellent condition. Contact the seller for details, availability, and pickup information. ",seller:"ReList Seller",avatar:"RS",meta:"Member since 2025 · 5 listings",description:"Round Dining Set listed in excellent condition. Contact the seller for details, availability, and pickup information.  Ask the seller for more information, additional photos, and availability.",bullets:["Well-kept item", "Seller verified listing details", "Available for direct inquiry", "Additional photos available on request", "Local pickup or agreed delivery"],specs:[["Condition", "Excellent"], ["Category", "Furniture"], ["Location", "Manhattan"], ["Listed", "Recently"]],images:[
    // IMAGE 1 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 2 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1550226891-ef816aed4a98?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 3 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1400&q=85"
  ],className:"p-item",summary:"Excellent \u00b7 Ready to view"},
  // PRODUCT 31 — FURNITURE — EDIT THIS PRODUCT HERE
  31: {title:"Wooden Nightstand",price:"$410",category:"Furniture",condition:"Very good condition",location:"Jersey City, New Jersey",brand:"FURNITURE",visual:"Wooden Nightstand",lead:"Wooden Nightstand listed in very good condition. Contact the seller for details, availability, and pickup information. ",seller:"ReList Seller",avatar:"RS",meta:"Member since 2025 · 5 listings",description:"Wooden Nightstand listed in very good condition. Contact the seller for details, availability, and pickup information.  Ask the seller for more information, additional photos, and availability.",bullets:["Well-kept item", "Seller verified listing details", "Available for direct inquiry", "Additional photos available on request", "Local pickup or agreed delivery"],specs:[["Condition", "Very good"], ["Category", "Furniture"], ["Location", "Jersey City"], ["Listed", "Recently"]],images:[
    // IMAGE 1 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1550226891-ef816aed4a98?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 2 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 3 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=1400&q=85"
  ],className:"p-item",summary:"Very good \u00b7 Ready to view"},
  // PRODUCT 32 — FURNITURE — EDIT THIS PRODUCT HERE
  32: {title:"Sectional Corner Sofa",price:"$725",category:"Furniture",condition:"Good condition",location:"Brooklyn, New York",brand:"FURNITURE",visual:"Sectional Corner Sofa",lead:"Sectional Corner Sofa listed in good condition. Contact the seller for details, availability, and pickup information. ",seller:"ReList Seller",avatar:"RS",meta:"Member since 2025 · 5 listings",description:"Sectional Corner Sofa listed in good condition. Contact the seller for details, availability, and pickup information.  Ask the seller for more information, additional photos, and availability.",bullets:["Well-kept item", "Seller verified listing details", "Available for direct inquiry", "Additional photos available on request", "Local pickup or agreed delivery"],specs:[["Condition", "Good"], ["Category", "Furniture"], ["Location", "Brooklyn"], ["Listed", "Recently"]],images:[
    // IMAGE 1 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 2 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 3 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1400&q=85"
  ],className:"p-item",summary:"Good \u00b7 Ready to view"},
  // PRODUCT 33 — FURNITURE — EDIT THIS PRODUCT HERE
  33: {title:"Storage Ottoman",price:"$195",category:"Furniture",condition:"Like new",location:"Manhattan, New York",brand:"FURNITURE",visual:"Storage Ottoman",lead:"Storage Ottoman listed in like new. Contact the seller for details, availability, and pickup information. ",seller:"ReList Seller",avatar:"RS",meta:"Member since 2025 · 5 listings",description:"Storage Ottoman listed in like new. Contact the seller for details, availability, and pickup information.  Ask the seller for more information, additional photos, and availability.",bullets:["Well-kept item", "Seller verified listing details", "Available for direct inquiry", "Additional photos available on request", "Local pickup or agreed delivery"],specs:[["Condition", "Like new"], ["Category", "Furniture"], ["Location", "Manhattan"], ["Listed", "Recently"]],images:[
    // IMAGE 1 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 2 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 3 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1400&q=85"
  ],className:"p-item",summary:"Like new \u00b7 Ready to view"},
  // PRODUCT 34 — FURNITURE — EDIT THIS PRODUCT HERE
  34: {title:"Standing Floor Lamp",price:"$330",category:"Furniture",condition:"Excellent condition",location:"Jersey City, New Jersey",brand:"FURNITURE",visual:"Standing Floor Lamp",lead:"Standing Floor Lamp listed in excellent condition. Contact the seller for details, availability, and pickup information. ",seller:"ReList Seller",avatar:"RS",meta:"Member since 2025 · 5 listings",description:"Standing Floor Lamp listed in excellent condition. Contact the seller for details, availability, and pickup information.  Ask the seller for more information, additional photos, and availability.",bullets:["Well-kept item", "Seller verified listing details", "Available for direct inquiry", "Additional photos available on request", "Local pickup or agreed delivery"],specs:[["Condition", "Excellent"], ["Category", "Furniture"], ["Location", "Jersey City"], ["Listed", "Recently"]],images:[
    // IMAGE 1 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 2 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 3 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1550226891-ef816aed4a98?auto=format&fit=crop&w=1400&q=85"
  ],className:"p-item",summary:"Excellent \u00b7 Ready to view"},
  // PRODUCT 35 — VEHICLES — EDIT THIS PRODUCT HERE
  35: {title:"Toyota Corolla 2018",price:"$240",category:"Vehicles",condition:"Excellent condition",location:"Newark, New Jersey",brand:"VEHICLES",visual:"Toyota Corolla 2018",lead:"Toyota Corolla 2018 listed in excellent condition. Contact the seller for details, availability, and pickup information. ",seller:"ReList Seller",avatar:"RS",meta:"Member since 2025 · 5 listings",description:"Toyota Corolla 2018 listed in excellent condition. Contact the seller for details, availability, and pickup information.  Ask the seller for more information, additional photos, and availability.",bullets:["Well-kept item", "Seller verified listing details", "Available for direct inquiry", "Additional photos available on request", "Local pickup or agreed delivery"],specs:[["Condition", "Excellent"], ["Category", "Vehicles"], ["Location", "Newark"], ["Listed", "Recently"]],images:[
    // IMAGE 1 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 2 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 3 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1400&q=85"
  ],className:"p-item",summary:"Excellent \u00b7 Ready to view"},
  // PRODUCT 36 — VEHICLES — EDIT THIS PRODUCT HERE
  36: {title:"Honda Civic 2019",price:"$350",category:"Vehicles",condition:"Very good condition",location:"Queens, New York",brand:"VEHICLES",visual:"Honda Civic 2019",lead:"Honda Civic 2019 listed in very good condition. Contact the seller for details, availability, and pickup information. ",seller:"ReList Seller",avatar:"RS",meta:"Member since 2025 · 5 listings",description:"Honda Civic 2019 listed in very good condition. Contact the seller for details, availability, and pickup information.  Ask the seller for more information, additional photos, and availability.",bullets:["Well-kept item", "Seller verified listing details", "Available for direct inquiry", "Additional photos available on request", "Local pickup or agreed delivery"],specs:[["Condition", "Very good"], ["Category", "Vehicles"], ["Location", "Queens"], ["Listed", "Recently"]],images:[
    // IMAGE 1 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 2 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 3 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=1400&q=85"
  ],className:"p-item",summary:"Very good \u00b7 Ready to view"},
  // PRODUCT 37 — VEHICLES — EDIT THIS PRODUCT HERE
  37: {title:"Mazda CX-5 2020",price:"$475",category:"Vehicles",condition:"Good condition",location:"Bronx, New York",brand:"VEHICLES",visual:"Mazda CX-5 2020",lead:"Mazda CX-5 2020 listed in good condition. Contact the seller for details, availability, and pickup information. ",seller:"ReList Seller",avatar:"RS",meta:"Member since 2025 · 5 listings",description:"Mazda CX-5 2020 listed in good condition. Contact the seller for details, availability, and pickup information.  Ask the seller for more information, additional photos, and availability.",bullets:["Well-kept item", "Seller verified listing details", "Available for direct inquiry", "Additional photos available on request", "Local pickup or agreed delivery"],specs:[["Condition", "Good"], ["Category", "Vehicles"], ["Location", "Bronx"], ["Listed", "Recently"]],images:[
    // IMAGE 1 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 2 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 3 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1502744688674-c619d1586c9e?auto=format&fit=crop&w=1400&q=85"
  ],className:"p-item",summary:"Good \u00b7 Ready to view"},
  // PRODUCT 38 — VEHICLES — EDIT THIS PRODUCT HERE
  38: {title:"Nissan Altima 2017",price:"$620",category:"Vehicles",condition:"Like new",location:"Newark, New Jersey",brand:"VEHICLES",visual:"Nissan Altima 2017",lead:"Nissan Altima 2017 listed in like new. Contact the seller for details, availability, and pickup information. ",seller:"ReList Seller",avatar:"RS",meta:"Member since 2025 · 5 listings",description:"Nissan Altima 2017 listed in like new. Contact the seller for details, availability, and pickup information.  Ask the seller for more information, additional photos, and availability.",bullets:["Well-kept item", "Seller verified listing details", "Available for direct inquiry", "Additional photos available on request", "Local pickup or agreed delivery"],specs:[["Condition", "Like new"], ["Category", "Vehicles"], ["Location", "Newark"], ["Listed", "Recently"]],images:[
    // IMAGE 1 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 2 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1502744688674-c619d1586c9e?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 3 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1400&q=85"
  ],className:"p-item",summary:"Like new \u00b7 Ready to view"},
  // PRODUCT 39 — VEHICLES — EDIT THIS PRODUCT HERE
  39: {title:"Ford Escape 2019",price:"$185",category:"Vehicles",condition:"Excellent condition",location:"Queens, New York",brand:"VEHICLES",visual:"Ford Escape 2019",lead:"Ford Escape 2019 listed in excellent condition. Contact the seller for details, availability, and pickup information. ",seller:"ReList Seller",avatar:"RS",meta:"Member since 2025 · 5 listings",description:"Ford Escape 2019 listed in excellent condition. Contact the seller for details, availability, and pickup information.  Ask the seller for more information, additional photos, and availability.",bullets:["Well-kept item", "Seller verified listing details", "Available for direct inquiry", "Additional photos available on request", "Local pickup or agreed delivery"],specs:[["Condition", "Excellent"], ["Category", "Vehicles"], ["Location", "Queens"], ["Listed", "Recently"]],images:[
    // IMAGE 1 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1502744688674-c619d1586c9e?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 2 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 3 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1400&q=85"
  ],className:"p-item",summary:"Excellent \u00b7 Ready to view"},
  // PRODUCT 40 — VEHICLES — EDIT THIS PRODUCT HERE
  40: {title:"Honda CR-V 2018",price:"$890",category:"Vehicles",condition:"Very good condition",location:"Bronx, New York",brand:"VEHICLES",visual:"Honda CR-V 2018",lead:"Honda CR-V 2018 listed in very good condition. Contact the seller for details, availability, and pickup information. ",seller:"ReList Seller",avatar:"RS",meta:"Member since 2025 · 5 listings",description:"Honda CR-V 2018 listed in very good condition. Contact the seller for details, availability, and pickup information.  Ask the seller for more information, additional photos, and availability.",bullets:["Well-kept item", "Seller verified listing details", "Available for direct inquiry", "Additional photos available on request", "Local pickup or agreed delivery"],specs:[["Condition", "Very good"], ["Category", "Vehicles"], ["Location", "Bronx"], ["Listed", "Recently"]],images:[
    // IMAGE 1 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 2 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 3 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1400&q=85"
  ],className:"p-item",summary:"Very good \u00b7 Ready to view"},
  // PRODUCT 41 — VEHICLES — EDIT THIS PRODUCT HERE
  41: {title:"Kawasaki Ninja 400",price:"$145",category:"Vehicles",condition:"Good condition",location:"Newark, New Jersey",brand:"VEHICLES",visual:"Kawasaki Ninja 400",lead:"Kawasaki Ninja 400 listed in good condition. Contact the seller for details, availability, and pickup information. ",seller:"ReList Seller",avatar:"RS",meta:"Member since 2025 · 5 listings",description:"Kawasaki Ninja 400 listed in good condition. Contact the seller for details, availability, and pickup information.  Ask the seller for more information, additional photos, and availability.",bullets:["Well-kept item", "Seller verified listing details", "Available for direct inquiry", "Additional photos available on request", "Local pickup or agreed delivery"],specs:[["Condition", "Good"], ["Category", "Vehicles"], ["Location", "Newark"], ["Listed", "Recently"]],images:[
    // IMAGE 1 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 2 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 3 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=1400&q=85"
  ],className:"p-item",summary:"Good \u00b7 Ready to view"},
  // PRODUCT 42 — VEHICLES — EDIT THIS PRODUCT HERE
  42: {title:"Yamaha MT-07",price:"$560",category:"Vehicles",condition:"Like new",location:"Queens, New York",brand:"VEHICLES",visual:"Yamaha MT-07",lead:"Yamaha MT-07 listed in like new. Contact the seller for details, availability, and pickup information. ",seller:"ReList Seller",avatar:"RS",meta:"Member since 2025 · 5 listings",description:"Yamaha MT-07 listed in like new. Contact the seller for details, availability, and pickup information.  Ask the seller for more information, additional photos, and availability.",bullets:["Well-kept item", "Seller verified listing details", "Available for direct inquiry", "Additional photos available on request", "Local pickup or agreed delivery"],specs:[["Condition", "Like new"], ["Category", "Vehicles"], ["Location", "Queens"], ["Listed", "Recently"]],images:[
    // IMAGE 1 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 2 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 3 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1502744688674-c619d1586c9e?auto=format&fit=crop&w=1400&q=85"
  ],className:"p-item",summary:"Like new \u00b7 Ready to view"},
  // PRODUCT 43 — VEHICLES — EDIT THIS PRODUCT HERE
  43: {title:"Trek Hybrid Bicycle",price:"$275",category:"Vehicles",condition:"Excellent condition",location:"Bronx, New York",brand:"VEHICLES",visual:"Trek Hybrid Bicycle",lead:"Trek Hybrid Bicycle listed in excellent condition. Contact the seller for details, availability, and pickup information. ",seller:"ReList Seller",avatar:"RS",meta:"Member since 2025 · 5 listings",description:"Trek Hybrid Bicycle listed in excellent condition. Contact the seller for details, availability, and pickup information.  Ask the seller for more information, additional photos, and availability.",bullets:["Well-kept item", "Seller verified listing details", "Available for direct inquiry", "Additional photos available on request", "Local pickup or agreed delivery"],specs:[["Condition", "Excellent"], ["Category", "Vehicles"], ["Location", "Bronx"], ["Listed", "Recently"]],images:[
    // IMAGE 1 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 2 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1502744688674-c619d1586c9e?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 3 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1400&q=85"
  ],className:"p-item",summary:"Excellent \u00b7 Ready to view"},
  // PRODUCT 44 — VEHICLES — EDIT THIS PRODUCT HERE
  44: {title:"Specialized Mountain Bike",price:"$410",category:"Vehicles",condition:"Very good condition",location:"Newark, New Jersey",brand:"VEHICLES",visual:"Specialized Mountain Bike",lead:"Specialized Mountain Bike listed in very good condition. Contact the seller for details, availability, and pickup information. ",seller:"ReList Seller",avatar:"RS",meta:"Member since 2025 · 5 listings",description:"Specialized Mountain Bike listed in very good condition. Contact the seller for details, availability, and pickup information.  Ask the seller for more information, additional photos, and availability.",bullets:["Well-kept item", "Seller verified listing details", "Available for direct inquiry", "Additional photos available on request", "Local pickup or agreed delivery"],specs:[["Condition", "Very good"], ["Category", "Vehicles"], ["Location", "Newark"], ["Listed", "Recently"]],images:[
    // IMAGE 1 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1502744688674-c619d1586c9e?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 2 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 3 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1400&q=85"
  ],className:"p-item",summary:"Very good \u00b7 Ready to view"},
  // PRODUCT 45 — VEHICLES — EDIT THIS PRODUCT HERE
  45: {title:"Electric Scooter",price:"$725",category:"Vehicles",condition:"Good condition",location:"Queens, New York",brand:"VEHICLES",visual:"Electric Scooter",lead:"Electric Scooter listed in good condition. Contact the seller for details, availability, and pickup information. ",seller:"ReList Seller",avatar:"RS",meta:"Member since 2025 · 5 listings",description:"Electric Scooter listed in good condition. Contact the seller for details, availability, and pickup information.  Ask the seller for more information, additional photos, and availability.",bullets:["Well-kept item", "Seller verified listing details", "Available for direct inquiry", "Additional photos available on request", "Local pickup or agreed delivery"],specs:[["Condition", "Good"], ["Category", "Vehicles"], ["Location", "Queens"], ["Listed", "Recently"]],images:[
    // IMAGE 1 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 2 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 3 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1400&q=85"
  ],className:"p-item",summary:"Good \u00b7 Ready to view"},
  // PRODUCT 46 — VEHICLES — EDIT THIS PRODUCT HERE
  46: {title:"Jeep Wrangler 2016",price:"$195",category:"Vehicles",condition:"Like new",location:"Bronx, New York",brand:"VEHICLES",visual:"Jeep Wrangler 2016",lead:"Jeep Wrangler 2016 listed in like new. Contact the seller for details, availability, and pickup information. ",seller:"ReList Seller",avatar:"RS",meta:"Member since 2025 · 5 listings",description:"Jeep Wrangler 2016 listed in like new. Contact the seller for details, availability, and pickup information.  Ask the seller for more information, additional photos, and availability.",bullets:["Well-kept item", "Seller verified listing details", "Available for direct inquiry", "Additional photos available on request", "Local pickup or agreed delivery"],specs:[["Condition", "Like new"], ["Category", "Vehicles"], ["Location", "Bronx"], ["Listed", "Recently"]],images:[
    // IMAGE 1 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 2 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 3 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=1400&q=85"
  ],className:"p-item",summary:"Like new \u00b7 Ready to view"},
  // PRODUCT 47 — VEHICLES — EDIT THIS PRODUCT HERE
  47: {title:"Hyundai Elantra 2020",price:"$330",category:"Vehicles",condition:"Excellent condition",location:"Newark, New Jersey",brand:"VEHICLES",visual:"Hyundai Elantra 2020",lead:"Hyundai Elantra 2020 listed in excellent condition. Contact the seller for details, availability, and pickup information. ",seller:"ReList Seller",avatar:"RS",meta:"Member since 2025 · 5 listings",description:"Hyundai Elantra 2020 listed in excellent condition. Contact the seller for details, availability, and pickup information.  Ask the seller for more information, additional photos, and availability.",bullets:["Well-kept item", "Seller verified listing details", "Available for direct inquiry", "Additional photos available on request", "Local pickup or agreed delivery"],specs:[["Condition", "Excellent"], ["Category", "Vehicles"], ["Location", "Newark"], ["Listed", "Recently"]],images:[
    // IMAGE 1 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 2 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 3 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1502744688674-c619d1586c9e?auto=format&fit=crop&w=1400&q=85"
  ],className:"p-item",summary:"Excellent \u00b7 Ready to view"},
  // PRODUCT 48 — VEHICLES — EDIT THIS PRODUCT HERE
  48: {title:"Toyota RAV4 2017",price:"$680",category:"Vehicles",condition:"Very good condition",location:"Queens, New York",brand:"VEHICLES",visual:"Toyota RAV4 2017",lead:"Toyota RAV4 2017 listed in very good condition. Contact the seller for details, availability, and pickup information. ",seller:"ReList Seller",avatar:"RS",meta:"Member since 2025 · 5 listings",description:"Toyota RAV4 2017 listed in very good condition. Contact the seller for details, availability, and pickup information.  Ask the seller for more information, additional photos, and availability.",bullets:["Well-kept item", "Seller verified listing details", "Available for direct inquiry", "Additional photos available on request", "Local pickup or agreed delivery"],specs:[["Condition", "Very good"], ["Category", "Vehicles"], ["Location", "Queens"], ["Listed", "Recently"]],images:[
    // IMAGE 1 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 2 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1502744688674-c619d1586c9e?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 3 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1400&q=85"
  ],className:"p-item",summary:"Very good \u00b7 Ready to view"},
  // PRODUCT 49 — FASHION — EDIT THIS PRODUCT HERE
  49: {title:"Nike Air Max Sneakers",price:"$240",category:"Fashion",condition:"Excellent condition",location:"Queens, New York",brand:"FASHION",visual:"Nike Air Max Sneakers",lead:"Nike Air Max Sneakers listed in excellent condition. Contact the seller for details, availability, and pickup information. ",seller:"ReList Seller",avatar:"RS",meta:"Member since 2025 · 5 listings",description:"Nike Air Max Sneakers listed in excellent condition. Contact the seller for details, availability, and pickup information.  Ask the seller for more information, additional photos, and availability.",bullets:["Well-kept item", "Seller verified listing details", "Available for direct inquiry", "Additional photos available on request", "Local pickup or agreed delivery"],specs:[["Condition", "Excellent"], ["Category", "Fashion"], ["Location", "Queens"], ["Listed", "Recently"]],images:[
    // IMAGE 1 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 2 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 3 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1400&q=85"
  ],className:"p-item",summary:"Excellent \u00b7 Ready to view"},
  // PRODUCT 50 — FASHION — EDIT THIS PRODUCT HERE
  50: {title:"Levi’s Denim Jacket",price:"$350",category:"Fashion",condition:"Very good condition",location:"Bronx, New York",brand:"FASHION",visual:"Levi’s Denim Jacket",lead:"Levi’s Denim Jacket listed in very good condition. Contact the seller for details, availability, and pickup information. ",seller:"ReList Seller",avatar:"RS",meta:"Member since 2025 · 5 listings",description:"Levi’s Denim Jacket listed in very good condition. Contact the seller for details, availability, and pickup information.  Ask the seller for more information, additional photos, and availability.",bullets:["Well-kept item", "Seller verified listing details", "Available for direct inquiry", "Additional photos available on request", "Local pickup or agreed delivery"],specs:[["Condition", "Very good"], ["Category", "Fashion"], ["Location", "Bronx"], ["Listed", "Recently"]],images:[
    // IMAGE 1 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 2 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 3 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1400&q=85"
  ],className:"p-item",summary:"Very good \u00b7 Ready to view"},
  // PRODUCT 51 — FASHION — EDIT THIS PRODUCT HERE
  51: {title:"Designer Sunglasses",price:"$475",category:"Fashion",condition:"Good condition",location:"Newark, New Jersey",brand:"FASHION",visual:"Designer Sunglasses",lead:"Designer Sunglasses listed in good condition. Contact the seller for details, availability, and pickup information. ",seller:"ReList Seller",avatar:"RS",meta:"Member since 2025 · 5 listings",description:"Designer Sunglasses listed in good condition. Contact the seller for details, availability, and pickup information.  Ask the seller for more information, additional photos, and availability.",bullets:["Well-kept item", "Seller verified listing details", "Available for direct inquiry", "Additional photos available on request", "Local pickup or agreed delivery"],specs:[["Condition", "Good"], ["Category", "Fashion"], ["Location", "Newark"], ["Listed", "Recently"]],images:[
    // IMAGE 1 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 2 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 3 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=1400&q=85"
  ],className:"p-item",summary:"Good \u00b7 Ready to view"},
  // PRODUCT 52 — FASHION — EDIT THIS PRODUCT HERE
  52: {title:"Wool Winter Coat",price:"$620",category:"Fashion",condition:"Like new",location:"Queens, New York",brand:"FASHION",visual:"Wool Winter Coat",lead:"Wool Winter Coat listed in like new. Contact the seller for details, availability, and pickup information. ",seller:"ReList Seller",avatar:"RS",meta:"Member since 2025 · 5 listings",description:"Wool Winter Coat listed in like new. Contact the seller for details, availability, and pickup information.  Ask the seller for more information, additional photos, and availability.",bullets:["Well-kept item", "Seller verified listing details", "Available for direct inquiry", "Additional photos available on request", "Local pickup or agreed delivery"],specs:[["Condition", "Like new"], ["Category", "Fashion"], ["Location", "Queens"], ["Listed", "Recently"]],images:[
    // IMAGE 1 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 2 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 3 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1400&q=85"
  ],className:"p-item",summary:"Like new \u00b7 Ready to view"},
  // PRODUCT 53 — FASHION — EDIT THIS PRODUCT HERE
  53: {title:"Leather Boots",price:"$185",category:"Fashion",condition:"Excellent condition",location:"Bronx, New York",brand:"FASHION",visual:"Leather Boots",lead:"Leather Boots listed in excellent condition. Contact the seller for details, availability, and pickup information. ",seller:"ReList Seller",avatar:"RS",meta:"Member since 2025 · 5 listings",description:"Leather Boots listed in excellent condition. Contact the seller for details, availability, and pickup information.  Ask the seller for more information, additional photos, and availability.",bullets:["Well-kept item", "Seller verified listing details", "Available for direct inquiry", "Additional photos available on request", "Local pickup or agreed delivery"],specs:[["Condition", "Excellent"], ["Category", "Fashion"], ["Location", "Bronx"], ["Listed", "Recently"]],images:[
    // IMAGE 1 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 2 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 3 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=1400&q=85"
  ],className:"p-item",summary:"Excellent \u00b7 Ready to view"},
  // PRODUCT 54 — FASHION — EDIT THIS PRODUCT HERE
  54: {title:"Canvas Backpack",price:"$890",category:"Fashion",condition:"Very good condition",location:"Newark, New Jersey",brand:"FASHION",visual:"Canvas Backpack",lead:"Canvas Backpack listed in very good condition. Contact the seller for details, availability, and pickup information. ",seller:"ReList Seller",avatar:"RS",meta:"Member since 2025 · 5 listings",description:"Canvas Backpack listed in very good condition. Contact the seller for details, availability, and pickup information.  Ask the seller for more information, additional photos, and availability.",bullets:["Well-kept item", "Seller verified listing details", "Available for direct inquiry", "Additional photos available on request", "Local pickup or agreed delivery"],specs:[["Condition", "Very good"], ["Category", "Fashion"], ["Location", "Newark"], ["Listed", "Recently"]],images:[
    // IMAGE 1 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 2 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 3 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1400&q=85"
  ],className:"p-item",summary:"Very good \u00b7 Ready to view"},
  // PRODUCT 55 — FASHION — EDIT THIS PRODUCT HERE
  55: {title:"Classic Wristwatch",price:"$145",category:"Fashion",condition:"Good condition",location:"Queens, New York",brand:"FASHION",visual:"Classic Wristwatch",lead:"Classic Wristwatch listed in good condition. Contact the seller for details, availability, and pickup information. ",seller:"ReList Seller",avatar:"RS",meta:"Member since 2025 · 5 listings",description:"Classic Wristwatch listed in good condition. Contact the seller for details, availability, and pickup information.  Ask the seller for more information, additional photos, and availability.",bullets:["Well-kept item", "Seller verified listing details", "Available for direct inquiry", "Additional photos available on request", "Local pickup or agreed delivery"],specs:[["Condition", "Good"], ["Category", "Fashion"], ["Location", "Queens"], ["Listed", "Recently"]],images:[
    // IMAGE 1 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 2 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 3 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1400&q=85"
  ],className:"p-item",summary:"Good \u00b7 Ready to view"},
  // PRODUCT 56 — FASHION — EDIT THIS PRODUCT HERE
  56: {title:"Women’s Blazer",price:"$560",category:"Fashion",condition:"Like new",location:"Bronx, New York",brand:"FASHION",visual:"Women’s Blazer",lead:"Women’s Blazer listed in like new. Contact the seller for details, availability, and pickup information. ",seller:"ReList Seller",avatar:"RS",meta:"Member since 2025 · 5 listings",description:"Women’s Blazer listed in like new. Contact the seller for details, availability, and pickup information.  Ask the seller for more information, additional photos, and availability.",bullets:["Well-kept item", "Seller verified listing details", "Available for direct inquiry", "Additional photos available on request", "Local pickup or agreed delivery"],specs:[["Condition", "Like new"], ["Category", "Fashion"], ["Location", "Bronx"], ["Listed", "Recently"]],images:[
    // IMAGE 1 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 2 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 3 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=1400&q=85"
  ],className:"p-item",summary:"Like new \u00b7 Ready to view"},
  // PRODUCT 57 — FASHION — EDIT THIS PRODUCT HERE
  57: {title:"Men’s Suit Jacket",price:"$275",category:"Fashion",condition:"Excellent condition",location:"Newark, New Jersey",brand:"FASHION",visual:"Men’s Suit Jacket",lead:"Men’s Suit Jacket listed in excellent condition. Contact the seller for details, availability, and pickup information. ",seller:"ReList Seller",avatar:"RS",meta:"Member since 2025 · 5 listings",description:"Men’s Suit Jacket listed in excellent condition. Contact the seller for details, availability, and pickup information.  Ask the seller for more information, additional photos, and availability.",bullets:["Well-kept item", "Seller verified listing details", "Available for direct inquiry", "Additional photos available on request", "Local pickup or agreed delivery"],specs:[["Condition", "Excellent"], ["Category", "Fashion"], ["Location", "Newark"], ["Listed", "Recently"]],images:[
    // IMAGE 1 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 2 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 3 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1400&q=85"
  ],className:"p-item",summary:"Excellent \u00b7 Ready to view"},
  // PRODUCT 58 — FASHION — EDIT THIS PRODUCT HERE
  58: {title:"Cashmere Sweater",price:"$410",category:"Fashion",condition:"Very good condition",location:"Queens, New York",brand:"FASHION",visual:"Cashmere Sweater",lead:"Cashmere Sweater listed in very good condition. Contact the seller for details, availability, and pickup information. ",seller:"ReList Seller",avatar:"RS",meta:"Member since 2025 · 5 listings",description:"Cashmere Sweater listed in very good condition. Contact the seller for details, availability, and pickup information.  Ask the seller for more information, additional photos, and availability.",bullets:["Well-kept item", "Seller verified listing details", "Available for direct inquiry", "Additional photos available on request", "Local pickup or agreed delivery"],specs:[["Condition", "Very good"], ["Category", "Fashion"], ["Location", "Queens"], ["Listed", "Recently"]],images:[
    // IMAGE 1 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 2 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 3 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=1400&q=85"
  ],className:"p-item",summary:"Very good \u00b7 Ready to view"},
  // PRODUCT 59 — FASHION — EDIT THIS PRODUCT HERE
  59: {title:"Running Shoes",price:"$725",category:"Fashion",condition:"Good condition",location:"Bronx, New York",brand:"FASHION",visual:"Running Shoes",lead:"Running Shoes listed in good condition. Contact the seller for details, availability, and pickup information. ",seller:"ReList Seller",avatar:"RS",meta:"Member since 2025 · 5 listings",description:"Running Shoes listed in good condition. Contact the seller for details, availability, and pickup information.  Ask the seller for more information, additional photos, and availability.",bullets:["Well-kept item", "Seller verified listing details", "Available for direct inquiry", "Additional photos available on request", "Local pickup or agreed delivery"],specs:[["Condition", "Good"], ["Category", "Fashion"], ["Location", "Bronx"], ["Listed", "Recently"]],images:[
    // IMAGE 1 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 2 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 3 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1400&q=85"
  ],className:"p-item",summary:"Good \u00b7 Ready to view"},
  // PRODUCT 60 — FASHION — EDIT THIS PRODUCT HERE
  60: {title:"Crossbody Shoulder Bag",price:"$195",category:"Fashion",condition:"Like new",location:"Newark, New Jersey",brand:"FASHION",visual:"Crossbody Shoulder Bag",lead:"Crossbody Shoulder Bag listed in like new. Contact the seller for details, availability, and pickup information. ",seller:"ReList Seller",avatar:"RS",meta:"Member since 2025 · 5 listings",description:"Crossbody Shoulder Bag listed in like new. Contact the seller for details, availability, and pickup information.  Ask the seller for more information, additional photos, and availability.",bullets:["Well-kept item", "Seller verified listing details", "Available for direct inquiry", "Additional photos available on request", "Local pickup or agreed delivery"],specs:[["Condition", "Like new"], ["Category", "Fashion"], ["Location", "Newark"], ["Listed", "Recently"]],images:[
    // IMAGE 1 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 2 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 3 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1400&q=85"
  ],className:"p-item",summary:"Like new \u00b7 Ready to view"},
  // PRODUCT 61 — FASHION — EDIT THIS PRODUCT HERE
  61: {title:"Vintage Denim Jeans",price:"$330",category:"Fashion",condition:"Excellent condition",location:"Queens, New York",brand:"FASHION",visual:"Vintage Denim Jeans",lead:"Vintage Denim Jeans listed in excellent condition. Contact the seller for details, availability, and pickup information. ",seller:"ReList Seller",avatar:"RS",meta:"Member since 2025 · 5 listings",description:"Vintage Denim Jeans listed in excellent condition. Contact the seller for details, availability, and pickup information.  Ask the seller for more information, additional photos, and availability.",bullets:["Well-kept item", "Seller verified listing details", "Available for direct inquiry", "Additional photos available on request", "Local pickup or agreed delivery"],specs:[["Condition", "Excellent"], ["Category", "Fashion"], ["Location", "Queens"], ["Listed", "Recently"]],images:[
    // IMAGE 1 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 2 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 3 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=1400&q=85"
  ],className:"p-item",summary:"Excellent \u00b7 Ready to view"},
  // PRODUCT 62 — FASHION — EDIT THIS PRODUCT HERE
  62: {title:"Silk Dress",price:"$680",category:"Fashion",condition:"Very good condition",location:"Bronx, New York",brand:"FASHION",visual:"Silk Dress",lead:"Silk Dress listed in very good condition. Contact the seller for details, availability, and pickup information. ",seller:"ReList Seller",avatar:"RS",meta:"Member since 2025 · 5 listings",description:"Silk Dress listed in very good condition. Contact the seller for details, availability, and pickup information.  Ask the seller for more information, additional photos, and availability.",bullets:["Well-kept item", "Seller verified listing details", "Available for direct inquiry", "Additional photos available on request", "Local pickup or agreed delivery"],specs:[["Condition", "Very good"], ["Category", "Fashion"], ["Location", "Bronx"], ["Listed", "Recently"]],images:[
    // IMAGE 1 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 2 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 3 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1400&q=85"
  ],className:"p-item",summary:"Very good \u00b7 Ready to view"},
  // PRODUCT 63 — HOME — EDIT THIS PRODUCT HERE
  63: {title:"Air Fryer XL",price:"$240",category:"Home",condition:"Excellent condition",location:"Bronx, New York",brand:"HOME",visual:"Air Fryer XL",lead:"Air Fryer XL listed in excellent condition. Contact the seller for details, availability, and pickup information. ",seller:"ReList Seller",avatar:"RS",meta:"Member since 2025 · 5 listings",description:"Air Fryer XL listed in excellent condition. Contact the seller for details, availability, and pickup information.  Ask the seller for more information, additional photos, and availability.",bullets:["Well-kept item", "Seller verified listing details", "Available for direct inquiry", "Additional photos available on request", "Local pickup or agreed delivery"],specs:[["Condition", "Excellent"], ["Category", "Home"], ["Location", "Bronx"], ["Listed", "Recently"]],images:[
    // IMAGE 1 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 2 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 3 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1400&q=85"
  ],className:"p-item",summary:"Excellent \u00b7 Ready to view"},
  // PRODUCT 64 — HOME — EDIT THIS PRODUCT HERE
  64: {title:"Robot Vacuum Cleaner",price:"$350",category:"Home",condition:"Very good condition",location:"Newark, New Jersey",brand:"HOME",visual:"Robot Vacuum Cleaner",lead:"Robot Vacuum Cleaner listed in very good condition. Contact the seller for details, availability, and pickup information. ",seller:"ReList Seller",avatar:"RS",meta:"Member since 2025 · 5 listings",description:"Robot Vacuum Cleaner listed in very good condition. Contact the seller for details, availability, and pickup information.  Ask the seller for more information, additional photos, and availability.",bullets:["Well-kept item", "Seller verified listing details", "Available for direct inquiry", "Additional photos available on request", "Local pickup or agreed delivery"],specs:[["Condition", "Very good"], ["Category", "Home"], ["Location", "Newark"], ["Listed", "Recently"]],images:[
    // IMAGE 1 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 2 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 3 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1400&q=85"
  ],className:"p-item",summary:"Very good \u00b7 Ready to view"},
  // PRODUCT 65 — HOME — EDIT THIS PRODUCT HERE
  65: {title:"Microwave Oven",price:"$475",category:"Home",condition:"Good condition",location:"Queens, New York",brand:"HOME",visual:"Microwave Oven",lead:"Microwave Oven listed in good condition. Contact the seller for details, availability, and pickup information. ",seller:"ReList Seller",avatar:"RS",meta:"Member since 2025 · 5 listings",description:"Microwave Oven listed in good condition. Contact the seller for details, availability, and pickup information.  Ask the seller for more information, additional photos, and availability.",bullets:["Well-kept item", "Seller verified listing details", "Available for direct inquiry", "Additional photos available on request", "Local pickup or agreed delivery"],specs:[["Condition", "Good"], ["Category", "Home"], ["Location", "Queens"], ["Listed", "Recently"]],images:[
    // IMAGE 1 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 2 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 3 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1583845112203-454c8c4f3c9b?auto=format&fit=crop&w=1400&q=85"
  ],className:"p-item",summary:"Good \u00b7 Ready to view"},
  // PRODUCT 66 — HOME — EDIT THIS PRODUCT HERE
  66: {title:"Stand Mixer",price:"$620",category:"Home",condition:"Like new",location:"Bronx, New York",brand:"HOME",visual:"Stand Mixer",lead:"Stand Mixer listed in like new. Contact the seller for details, availability, and pickup information. ",seller:"ReList Seller",avatar:"RS",meta:"Member since 2025 · 5 listings",description:"Stand Mixer listed in like new. Contact the seller for details, availability, and pickup information.  Ask the seller for more information, additional photos, and availability.",bullets:["Well-kept item", "Seller verified listing details", "Available for direct inquiry", "Additional photos available on request", "Local pickup or agreed delivery"],specs:[["Condition", "Like new"], ["Category", "Home"], ["Location", "Bronx"], ["Listed", "Recently"]],images:[
    // IMAGE 1 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 2 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1583845112203-454c8c4f3c9b?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 3 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=1400&q=85"
  ],className:"p-item",summary:"Like new \u00b7 Ready to view"},
  // PRODUCT 67 — HOME — EDIT THIS PRODUCT HERE
  67: {title:"Cordless Vacuum",price:"$185",category:"Home",condition:"Excellent condition",location:"Newark, New Jersey",brand:"HOME",visual:"Cordless Vacuum",lead:"Cordless Vacuum listed in excellent condition. Contact the seller for details, availability, and pickup information. ",seller:"ReList Seller",avatar:"RS",meta:"Member since 2025 · 5 listings",description:"Cordless Vacuum listed in excellent condition. Contact the seller for details, availability, and pickup information.  Ask the seller for more information, additional photos, and availability.",bullets:["Well-kept item", "Seller verified listing details", "Available for direct inquiry", "Additional photos available on request", "Local pickup or agreed delivery"],specs:[["Condition", "Excellent"], ["Category", "Home"], ["Location", "Newark"], ["Listed", "Recently"]],images:[
    // IMAGE 1 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1583845112203-454c8c4f3c9b?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 2 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 3 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1400&q=85"
  ],className:"p-item",summary:"Excellent \u00b7 Ready to view"},
  // PRODUCT 68 — HOME — EDIT THIS PRODUCT HERE
  68: {title:"Tower Fan",price:"$890",category:"Home",condition:"Very good condition",location:"Queens, New York",brand:"HOME",visual:"Tower Fan",lead:"Tower Fan listed in very good condition. Contact the seller for details, availability, and pickup information. ",seller:"ReList Seller",avatar:"RS",meta:"Member since 2025 · 5 listings",description:"Tower Fan listed in very good condition. Contact the seller for details, availability, and pickup information.  Ask the seller for more information, additional photos, and availability.",bullets:["Well-kept item", "Seller verified listing details", "Available for direct inquiry", "Additional photos available on request", "Local pickup or agreed delivery"],specs:[["Condition", "Very good"], ["Category", "Home"], ["Location", "Queens"], ["Listed", "Recently"]],images:[
    // IMAGE 1 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 2 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 3 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1400&q=85"
  ],className:"p-item",summary:"Very good \u00b7 Ready to view"},
  // PRODUCT 69 — HOME — EDIT THIS PRODUCT HERE
  69: {title:"Rice Cooker",price:"$145",category:"Home",condition:"Good condition",location:"Bronx, New York",brand:"HOME",visual:"Rice Cooker",lead:"Rice Cooker listed in good condition. Contact the seller for details, availability, and pickup information. ",seller:"ReList Seller",avatar:"RS",meta:"Member since 2025 · 5 listings",description:"Rice Cooker listed in good condition. Contact the seller for details, availability, and pickup information.  Ask the seller for more information, additional photos, and availability.",bullets:["Well-kept item", "Seller verified listing details", "Available for direct inquiry", "Additional photos available on request", "Local pickup or agreed delivery"],specs:[["Condition", "Good"], ["Category", "Home"], ["Location", "Bronx"], ["Listed", "Recently"]],images:[
    // IMAGE 1 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 2 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 3 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1400&q=85"
  ],className:"p-item",summary:"Good \u00b7 Ready to view"},
  // PRODUCT 70 — HOME — EDIT THIS PRODUCT HERE
  70: {title:"Toaster Oven",price:"$560",category:"Home",condition:"Like new",location:"Newark, New Jersey",brand:"HOME",visual:"Toaster Oven",lead:"Toaster Oven listed in like new. Contact the seller for details, availability, and pickup information. ",seller:"ReList Seller",avatar:"RS",meta:"Member since 2025 · 5 listings",description:"Toaster Oven listed in like new. Contact the seller for details, availability, and pickup information.  Ask the seller for more information, additional photos, and availability.",bullets:["Well-kept item", "Seller verified listing details", "Available for direct inquiry", "Additional photos available on request", "Local pickup or agreed delivery"],specs:[["Condition", "Like new"], ["Category", "Home"], ["Location", "Newark"], ["Listed", "Recently"]],images:[
    // IMAGE 1 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 2 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 3 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1583845112203-454c8c4f3c9b?auto=format&fit=crop&w=1400&q=85"
  ],className:"p-item",summary:"Like new \u00b7 Ready to view"},
  // PRODUCT 71 — HOME — EDIT THIS PRODUCT HERE
  71: {title:"Electric Kettle",price:"$275",category:"Home",condition:"Excellent condition",location:"Queens, New York",brand:"HOME",visual:"Electric Kettle",lead:"Electric Kettle listed in excellent condition. Contact the seller for details, availability, and pickup information. ",seller:"ReList Seller",avatar:"RS",meta:"Member since 2025 · 5 listings",description:"Electric Kettle listed in excellent condition. Contact the seller for details, availability, and pickup information.  Ask the seller for more information, additional photos, and availability.",bullets:["Well-kept item", "Seller verified listing details", "Available for direct inquiry", "Additional photos available on request", "Local pickup or agreed delivery"],specs:[["Condition", "Excellent"], ["Category", "Home"], ["Location", "Queens"], ["Listed", "Recently"]],images:[
    // IMAGE 1 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 2 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1583845112203-454c8c4f3c9b?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 3 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=1400&q=85"
  ],className:"p-item",summary:"Excellent \u00b7 Ready to view"},
  // PRODUCT 72 — HOME — EDIT THIS PRODUCT HERE
  72: {title:"Food Processor",price:"$410",category:"Home",condition:"Very good condition",location:"Bronx, New York",brand:"HOME",visual:"Food Processor",lead:"Food Processor listed in very good condition. Contact the seller for details, availability, and pickup information. ",seller:"ReList Seller",avatar:"RS",meta:"Member since 2025 · 5 listings",description:"Food Processor listed in very good condition. Contact the seller for details, availability, and pickup information.  Ask the seller for more information, additional photos, and availability.",bullets:["Well-kept item", "Seller verified listing details", "Available for direct inquiry", "Additional photos available on request", "Local pickup or agreed delivery"],specs:[["Condition", "Very good"], ["Category", "Home"], ["Location", "Bronx"], ["Listed", "Recently"]],images:[
    // IMAGE 1 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1583845112203-454c8c4f3c9b?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 2 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 3 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1400&q=85"
  ],className:"p-item",summary:"Very good \u00b7 Ready to view"},
  // PRODUCT 73 — HOME — EDIT THIS PRODUCT HERE
  73: {title:"Portable Heater",price:"$725",category:"Home",condition:"Good condition",location:"Newark, New Jersey",brand:"HOME",visual:"Portable Heater",lead:"Portable Heater listed in good condition. Contact the seller for details, availability, and pickup information. ",seller:"ReList Seller",avatar:"RS",meta:"Member since 2025 · 5 listings",description:"Portable Heater listed in good condition. Contact the seller for details, availability, and pickup information.  Ask the seller for more information, additional photos, and availability.",bullets:["Well-kept item", "Seller verified listing details", "Available for direct inquiry", "Additional photos available on request", "Local pickup or agreed delivery"],specs:[["Condition", "Good"], ["Category", "Home"], ["Location", "Newark"], ["Listed", "Recently"]],images:[
    // IMAGE 1 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 2 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 3 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1400&q=85"
  ],className:"p-item",summary:"Good \u00b7 Ready to view"},
  // PRODUCT 74 — HOME — EDIT THIS PRODUCT HERE
  74: {title:"Smart LED Lamp",price:"$195",category:"Home",condition:"Like new",location:"Queens, New York",brand:"HOME",visual:"Smart LED Lamp",lead:"Smart LED Lamp listed in like new. Contact the seller for details, availability, and pickup information. ",seller:"ReList Seller",avatar:"RS",meta:"Member since 2025 · 5 listings",description:"Smart LED Lamp listed in like new. Contact the seller for details, availability, and pickup information.  Ask the seller for more information, additional photos, and availability.",bullets:["Well-kept item", "Seller verified listing details", "Available for direct inquiry", "Additional photos available on request", "Local pickup or agreed delivery"],specs:[["Condition", "Like new"], ["Category", "Home"], ["Location", "Queens"], ["Listed", "Recently"]],images:[
    // IMAGE 1 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 2 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 3 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1400&q=85"
  ],className:"p-item",summary:"Like new \u00b7 Ready to view"},
  // PRODUCT 75 — HOME — EDIT THIS PRODUCT HERE
  75: {title:"Dehumidifier",price:"$330",category:"Home",condition:"Excellent condition",location:"Bronx, New York",brand:"HOME",visual:"Dehumidifier",lead:"Dehumidifier listed in excellent condition. Contact the seller for details, availability, and pickup information. ",seller:"ReList Seller",avatar:"RS",meta:"Member since 2025 · 5 listings",description:"Dehumidifier listed in excellent condition. Contact the seller for details, availability, and pickup information.  Ask the seller for more information, additional photos, and availability.",bullets:["Well-kept item", "Seller verified listing details", "Available for direct inquiry", "Additional photos available on request", "Local pickup or agreed delivery"],specs:[["Condition", "Excellent"], ["Category", "Home"], ["Location", "Bronx"], ["Listed", "Recently"]],images:[
    // IMAGE 1 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 2 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 3 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1583845112203-454c8c4f3c9b?auto=format&fit=crop&w=1400&q=85"
  ],className:"p-item",summary:"Excellent \u00b7 Ready to view"},
  // PRODUCT 76 — HOME — EDIT THIS PRODUCT HERE
  76: {title:"Slow Cooker",price:"$680",category:"Home",condition:"Very good condition",location:"Newark, New Jersey",brand:"HOME",visual:"Slow Cooker",lead:"Slow Cooker listed in very good condition. Contact the seller for details, availability, and pickup information. ",seller:"ReList Seller",avatar:"RS",meta:"Member since 2025 · 5 listings",description:"Slow Cooker listed in very good condition. Contact the seller for details, availability, and pickup information.  Ask the seller for more information, additional photos, and availability.",bullets:["Well-kept item", "Seller verified listing details", "Available for direct inquiry", "Additional photos available on request", "Local pickup or agreed delivery"],specs:[["Condition", "Very good"], ["Category", "Home"], ["Location", "Newark"], ["Listed", "Recently"]],images:[
    // IMAGE 1 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 2 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1583845112203-454c8c4f3c9b?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 3 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=1400&q=85"
  ],className:"p-item",summary:"Very good \u00b7 Ready to view"},
  // PRODUCT 77 — COLLECTIBLES — EDIT THIS PRODUCT HERE
  77: {title:"Classic Film Camera Collection",price:"$240",category:"Collectibles",condition:"Excellent condition",location:"Newark, New Jersey",brand:"COLLECTIBLES",visual:"Classic Film Camera Collection",lead:"Classic Film Camera Collection listed in excellent condition. Contact the seller for details, availability, and pickup information. ",seller:"ReList Seller",avatar:"RS",meta:"Member since 2025 · 5 listings",description:"Classic Film Camera Collection listed in excellent condition. Contact the seller for details, availability, and pickup information.  Ask the seller for more information, additional photos, and availability.",bullets:["Well-kept item", "Seller verified listing details", "Available for direct inquiry", "Additional photos available on request", "Local pickup or agreed delivery"],specs:[["Condition", "Excellent"], ["Category", "Collectibles"], ["Location", "Newark"], ["Listed", "Recently"]],images:[
    // IMAGE 1 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1539375665275-f9de415ef9ac?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 2 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1461360228754-6e81c478b882?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 3 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1521337581100-8ca9a73a5f79?auto=format&fit=crop&w=1400&q=85"
  ],className:"p-item",summary:"Excellent \u00b7 Ready to view"},
  // PRODUCT 78 — COLLECTIBLES — EDIT THIS PRODUCT HERE
  78: {title:"Vintage Comic Books",price:"$350",category:"Collectibles",condition:"Very good condition",location:"Queens, New York",brand:"COLLECTIBLES",visual:"Vintage Comic Books",lead:"Vintage Comic Books listed in very good condition. Contact the seller for details, availability, and pickup information. ",seller:"ReList Seller",avatar:"RS",meta:"Member since 2025 · 5 listings",description:"Vintage Comic Books listed in very good condition. Contact the seller for details, availability, and pickup information.  Ask the seller for more information, additional photos, and availability.",bullets:["Well-kept item", "Seller verified listing details", "Available for direct inquiry", "Additional photos available on request", "Local pickup or agreed delivery"],specs:[["Condition", "Very good"], ["Category", "Collectibles"], ["Location", "Queens"], ["Listed", "Recently"]],images:[
    // IMAGE 1 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1461360228754-6e81c478b882?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 2 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1521337581100-8ca9a73a5f79?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 3 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=1400&q=85"
  ],className:"p-item",summary:"Very good \u00b7 Ready to view"},
  // PRODUCT 79 — COLLECTIBLES — EDIT THIS PRODUCT HERE
  79: {title:"Sports Trading Cards",price:"$475",category:"Collectibles",condition:"Good condition",location:"Bronx, New York",brand:"COLLECTIBLES",visual:"Sports Trading Cards",lead:"Sports Trading Cards listed in good condition. Contact the seller for details, availability, and pickup information. ",seller:"ReList Seller",avatar:"RS",meta:"Member since 2025 · 5 listings",description:"Sports Trading Cards listed in good condition. Contact the seller for details, availability, and pickup information.  Ask the seller for more information, additional photos, and availability.",bullets:["Well-kept item", "Seller verified listing details", "Available for direct inquiry", "Additional photos available on request", "Local pickup or agreed delivery"],specs:[["Condition", "Good"], ["Category", "Collectibles"], ["Location", "Bronx"], ["Listed", "Recently"]],images:[
    // IMAGE 1 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1521337581100-8ca9a73a5f79?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 2 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 3 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=85"
  ],className:"p-item",summary:"Good \u00b7 Ready to view"},
  // PRODUCT 80 — COLLECTIBLES — EDIT THIS PRODUCT HERE
  80: {title:"Antique Pocket Watch",price:"$620",category:"Collectibles",condition:"Like new",location:"Newark, New Jersey",brand:"COLLECTIBLES",visual:"Antique Pocket Watch",lead:"Antique Pocket Watch listed in like new. Contact the seller for details, availability, and pickup information. ",seller:"ReList Seller",avatar:"RS",meta:"Member since 2025 · 5 listings",description:"Antique Pocket Watch listed in like new. Contact the seller for details, availability, and pickup information.  Ask the seller for more information, additional photos, and availability.",bullets:["Well-kept item", "Seller verified listing details", "Available for direct inquiry", "Additional photos available on request", "Local pickup or agreed delivery"],specs:[["Condition", "Like new"], ["Category", "Collectibles"], ["Location", "Newark"], ["Listed", "Recently"]],images:[
    // IMAGE 1 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 2 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 3 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1539375665275-f9de415ef9ac?auto=format&fit=crop&w=1400&q=85"
  ],className:"p-item",summary:"Like new \u00b7 Ready to view"},
  // PRODUCT 81 — COLLECTIBLES — EDIT THIS PRODUCT HERE
  81: {title:"Retro Game Cartridge Set",price:"$185",category:"Collectibles",condition:"Excellent condition",location:"Queens, New York",brand:"COLLECTIBLES",visual:"Retro Game Cartridge Set",lead:"Retro Game Cartridge Set listed in excellent condition. Contact the seller for details, availability, and pickup information. ",seller:"ReList Seller",avatar:"RS",meta:"Member since 2025 · 5 listings",description:"Retro Game Cartridge Set listed in excellent condition. Contact the seller for details, availability, and pickup information.  Ask the seller for more information, additional photos, and availability.",bullets:["Well-kept item", "Seller verified listing details", "Available for direct inquiry", "Additional photos available on request", "Local pickup or agreed delivery"],specs:[["Condition", "Excellent"], ["Category", "Collectibles"], ["Location", "Queens"], ["Listed", "Recently"]],images:[
    // IMAGE 1 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 2 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1539375665275-f9de415ef9ac?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 3 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1461360228754-6e81c478b882?auto=format&fit=crop&w=1400&q=85"
  ],className:"p-item",summary:"Excellent \u00b7 Ready to view"},
  // PRODUCT 82 — COLLECTIBLES — EDIT THIS PRODUCT HERE
  82: {title:"Collector Toy Figure",price:"$890",category:"Collectibles",condition:"Very good condition",location:"Bronx, New York",brand:"COLLECTIBLES",visual:"Collector Toy Figure",lead:"Collector Toy Figure listed in very good condition. Contact the seller for details, availability, and pickup information. ",seller:"ReList Seller",avatar:"RS",meta:"Member since 2025 · 5 listings",description:"Collector Toy Figure listed in very good condition. Contact the seller for details, availability, and pickup information.  Ask the seller for more information, additional photos, and availability.",bullets:["Well-kept item", "Seller verified listing details", "Available for direct inquiry", "Additional photos available on request", "Local pickup or agreed delivery"],specs:[["Condition", "Very good"], ["Category", "Collectibles"], ["Location", "Bronx"], ["Listed", "Recently"]],images:[
    // IMAGE 1 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1539375665275-f9de415ef9ac?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 2 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1461360228754-6e81c478b882?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 3 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1521337581100-8ca9a73a5f79?auto=format&fit=crop&w=1400&q=85"
  ],className:"p-item",summary:"Very good \u00b7 Ready to view"},
  // PRODUCT 83 — COLLECTIBLES — EDIT THIS PRODUCT HERE
  83: {title:"Framed Movie Poster",price:"$145",category:"Collectibles",condition:"Good condition",location:"Newark, New Jersey",brand:"COLLECTIBLES",visual:"Framed Movie Poster",lead:"Framed Movie Poster listed in good condition. Contact the seller for details, availability, and pickup information. ",seller:"ReList Seller",avatar:"RS",meta:"Member since 2025 · 5 listings",description:"Framed Movie Poster listed in good condition. Contact the seller for details, availability, and pickup information.  Ask the seller for more information, additional photos, and availability.",bullets:["Well-kept item", "Seller verified listing details", "Available for direct inquiry", "Additional photos available on request", "Local pickup or agreed delivery"],specs:[["Condition", "Good"], ["Category", "Collectibles"], ["Location", "Newark"], ["Listed", "Recently"]],images:[
    // IMAGE 1 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1461360228754-6e81c478b882?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 2 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1521337581100-8ca9a73a5f79?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 3 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=1400&q=85"
  ],className:"p-item",summary:"Good \u00b7 Ready to view"},
  // PRODUCT 84 — COLLECTIBLES — EDIT THIS PRODUCT HERE
  84: {title:"Old Coin Collection",price:"$560",category:"Collectibles",condition:"Like new",location:"Queens, New York",brand:"COLLECTIBLES",visual:"Old Coin Collection",lead:"Old Coin Collection listed in like new. Contact the seller for details, availability, and pickup information. ",seller:"ReList Seller",avatar:"RS",meta:"Member since 2025 · 5 listings",description:"Old Coin Collection listed in like new. Contact the seller for details, availability, and pickup information.  Ask the seller for more information, additional photos, and availability.",bullets:["Well-kept item", "Seller verified listing details", "Available for direct inquiry", "Additional photos available on request", "Local pickup or agreed delivery"],specs:[["Condition", "Like new"], ["Category", "Collectibles"], ["Location", "Queens"], ["Listed", "Recently"]],images:[
    // IMAGE 1 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1521337581100-8ca9a73a5f79?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 2 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 3 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=85"
  ],className:"p-item",summary:"Like new \u00b7 Ready to view"},
  // PRODUCT 85 — COLLECTIBLES — EDIT THIS PRODUCT HERE
  85: {title:"Vintage Travel Posters",price:"$275",category:"Collectibles",condition:"Excellent condition",location:"Bronx, New York",brand:"COLLECTIBLES",visual:"Vintage Travel Posters",lead:"Vintage Travel Posters listed in excellent condition. Contact the seller for details, availability, and pickup information. ",seller:"ReList Seller",avatar:"RS",meta:"Member since 2025 · 5 listings",description:"Vintage Travel Posters listed in excellent condition. Contact the seller for details, availability, and pickup information.  Ask the seller for more information, additional photos, and availability.",bullets:["Well-kept item", "Seller verified listing details", "Available for direct inquiry", "Additional photos available on request", "Local pickup or agreed delivery"],specs:[["Condition", "Excellent"], ["Category", "Collectibles"], ["Location", "Bronx"], ["Listed", "Recently"]],images:[
    // IMAGE 1 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 2 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 3 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1539375665275-f9de415ef9ac?auto=format&fit=crop&w=1400&q=85"
  ],className:"p-item",summary:"Excellent \u00b7 Ready to view"},
  // PRODUCT 86 — COLLECTIBLES — EDIT THIS PRODUCT HERE
  86: {title:"Classic Board Game",price:"$410",category:"Collectibles",condition:"Very good condition",location:"Newark, New Jersey",brand:"COLLECTIBLES",visual:"Classic Board Game",lead:"Classic Board Game listed in very good condition. Contact the seller for details, availability, and pickup information. ",seller:"ReList Seller",avatar:"RS",meta:"Member since 2025 · 5 listings",description:"Classic Board Game listed in very good condition. Contact the seller for details, availability, and pickup information.  Ask the seller for more information, additional photos, and availability.",bullets:["Well-kept item", "Seller verified listing details", "Available for direct inquiry", "Additional photos available on request", "Local pickup or agreed delivery"],specs:[["Condition", "Very good"], ["Category", "Collectibles"], ["Location", "Newark"], ["Listed", "Recently"]],images:[
    // IMAGE 1 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 2 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1539375665275-f9de415ef9ac?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 3 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1461360228754-6e81c478b882?auto=format&fit=crop&w=1400&q=85"
  ],className:"p-item",summary:"Very good \u00b7 Ready to view"},
  // PRODUCT 87 — COLLECTIBLES — EDIT THIS PRODUCT HERE
  87: {title:"Rare Book Set",price:"$725",category:"Collectibles",condition:"Good condition",location:"Queens, New York",brand:"COLLECTIBLES",visual:"Rare Book Set",lead:"Rare Book Set listed in good condition. Contact the seller for details, availability, and pickup information. ",seller:"ReList Seller",avatar:"RS",meta:"Member since 2025 · 5 listings",description:"Rare Book Set listed in good condition. Contact the seller for details, availability, and pickup information.  Ask the seller for more information, additional photos, and availability.",bullets:["Well-kept item", "Seller verified listing details", "Available for direct inquiry", "Additional photos available on request", "Local pickup or agreed delivery"],specs:[["Condition", "Good"], ["Category", "Collectibles"], ["Location", "Queens"], ["Listed", "Recently"]],images:[
    // IMAGE 1 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1539375665275-f9de415ef9ac?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 2 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1461360228754-6e81c478b882?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 3 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1521337581100-8ca9a73a5f79?auto=format&fit=crop&w=1400&q=85"
  ],className:"p-item",summary:"Good \u00b7 Ready to view"},
  // PRODUCT 88 — COLLECTIBLES — EDIT THIS PRODUCT HERE
  88: {title:"Model Car Collection",price:"$195",category:"Collectibles",condition:"Like new",location:"Bronx, New York",brand:"COLLECTIBLES",visual:"Model Car Collection",lead:"Model Car Collection listed in like new. Contact the seller for details, availability, and pickup information. ",seller:"ReList Seller",avatar:"RS",meta:"Member since 2025 · 5 listings",description:"Model Car Collection listed in like new. Contact the seller for details, availability, and pickup information.  Ask the seller for more information, additional photos, and availability.",bullets:["Well-kept item", "Seller verified listing details", "Available for direct inquiry", "Additional photos available on request", "Local pickup or agreed delivery"],specs:[["Condition", "Like new"], ["Category", "Collectibles"], ["Location", "Bronx"], ["Listed", "Recently"]],images:[
    // IMAGE 1 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1461360228754-6e81c478b882?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 2 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1521337581100-8ca9a73a5f79?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 3 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=1400&q=85"
  ],className:"p-item",summary:"Like new \u00b7 Ready to view"},
  // PRODUCT 89 — COLLECTIBLES — EDIT THIS PRODUCT HERE
  89: {title:"Signed Sports Memorabilia",price:"$330",category:"Collectibles",condition:"Excellent condition",location:"Newark, New Jersey",brand:"COLLECTIBLES",visual:"Signed Sports Memorabilia",lead:"Signed Sports Memorabilia listed in excellent condition. Contact the seller for details, availability, and pickup information. ",seller:"ReList Seller",avatar:"RS",meta:"Member since 2025 · 5 listings",description:"Signed Sports Memorabilia listed in excellent condition. Contact the seller for details, availability, and pickup information.  Ask the seller for more information, additional photos, and availability.",bullets:["Well-kept item", "Seller verified listing details", "Available for direct inquiry", "Additional photos available on request", "Local pickup or agreed delivery"],specs:[["Condition", "Excellent"], ["Category", "Collectibles"], ["Location", "Newark"], ["Listed", "Recently"]],images:[
    // IMAGE 1 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1521337581100-8ca9a73a5f79?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 2 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 3 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=85"
  ],className:"p-item",summary:"Excellent \u00b7 Ready to view"},
  // PRODUCT 90 — COLLECTIBLES — EDIT THIS PRODUCT HERE
  90: {title:"Vintage Music Cassette Set",price:"$680",category:"Collectibles",condition:"Very good condition",location:"Queens, New York",brand:"COLLECTIBLES",visual:"Vintage Music Cassette Set",lead:"Vintage Music Cassette Set listed in very good condition. Contact the seller for details, availability, and pickup information. ",seller:"ReList Seller",avatar:"RS",meta:"Member since 2025 · 5 listings",description:"Vintage Music Cassette Set listed in very good condition. Contact the seller for details, availability, and pickup information.  Ask the seller for more information, additional photos, and availability.",bullets:["Well-kept item", "Seller verified listing details", "Available for direct inquiry", "Additional photos available on request", "Local pickup or agreed delivery"],specs:[["Condition", "Very good"], ["Category", "Collectibles"], ["Location", "Queens"], ["Listed", "Recently"]],images:[
    // IMAGE 1 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 2 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=85",
    // IMAGE 3 — REPLACE THIS URL WITH YOUR PRODUCT PHOTO
    "https://images.unsplash.com/photo-1539375665275-f9de415ef9ac?auto=format&fit=crop&w=1400&q=85"
  ],className:"p-item",summary:"Very good \u00b7 Ready to view"},
};