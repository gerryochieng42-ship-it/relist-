from pathlib import Path
import json

base_images = {
'Electronics': [
'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=1400&q=85',
'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1400&q=85',
'https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&w=1400&q=85',
'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1400&q=85',
'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1400&q=85',
],
'Furniture': [
'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1400&q=85',
'https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=1400&q=85',
'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1400&q=85',
'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1400&q=85',
'https://images.unsplash.com/photo-1550226891-ef816aed4a98?auto=format&fit=crop&w=1400&q=85',
],
'Vehicles': [
'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1400&q=85',
'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1400&q=85',
'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1400&q=85',
'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=1400&q=85',
'https://images.unsplash.com/photo-1502744688674-c619d1586c9e?auto=format&fit=crop&w=1400&q=85',
],
'Fashion': [
'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1400&q=85',
'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=1400&q=85',
'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1400&q=85',
'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1400&q=85',
'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=1400&q=85',
],
'Home': [
'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=1400&q=85',
'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1400&q=85',
'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1400&q=85',
'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1400&q=85',
'https://images.unsplash.com/photo-1583845112203-454c8c4f3c9b?auto=format&fit=crop&w=1400&q=85',
],
'Collectibles': [
'https://images.unsplash.com/photo-1539375665275-f9de415ef9ac?auto=format&fit=crop&w=1400&q=85',
'https://images.unsplash.com/photo-1461360228754-6e81c478b882?auto=format&fit=crop&w=1400&q=85',
'https://images.unsplash.com/photo-1521337581100-8ca9a73a5f79?auto=format&fit=crop&w=1400&q=85',
'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=1400&q=85',
'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=85',
]
}

existing = [
(1,'iPhone 14 Pro 256GB',520,'Electronics','Excellent condition','Brooklyn, New York','APPLE','iPhone 14 Pro','Jordan M.','JM','Unlocked · 256GB · Battery 91%',"Unlocked iPhone 14 Pro in excellent working condition."),
(2,'3-Seater Modern Sofa',390,'Furniture','Very good condition','Queens, New York','HOME','Modern Sofa','Alicia R.','AR','Neutral fabric · Clean · Smoke-free','Clean 3-seater sofa with neutral fabric and comfortable cushions.'),
(3,'Sony Alpha Mirrorless Camera',780,'Electronics','Excellent condition','Manhattan, New York','SONY','Alpha Camera','Marcus T.','MT','Lightly used · Lens included','Lightly used Sony Alpha mirrorless camera with lens included.'),
(4,'Bouclé Accent Chair',165,'Furniture','Like new','Jersey City, New Jersey','DESIGN','Accent Chair','Nina K.','NK','Designer look · Barely used','Stylish bouclé accent chair with a designer look and very little use.'),
(5,'MacBook Pro 14-inch',1050,'Electronics','Very good condition','Bronx, New York','APPLE','MacBook Pro','David P.','DP','M2 Pro · 16GB · 512GB SSD','MacBook Pro with M2 Pro chip, 16GB memory, and 512GB SSD.'),
(6,'Vintage Road Bike',430,'Vehicles','Good condition','Manhattan, New York','SPORT','Road Bike','Chris B.','CB','Steel frame · Recently serviced','Classic steel-frame road bike that has recently been serviced.'),
(7,'Genuine Leather Handbag',210,'Fashion','Excellent condition','Brooklyn, New York','FASHION','Leather Bag','Sofia L.','SL','Minimal wear · Dust bag included','Genuine leather handbag with minimal wear.'),
(8,'Automatic Espresso Machine',290,'Home','Like new','Queens, New York','KITCHEN','Coffee Machine','Kevin W.','KW','Fully working · Low usage','Fully working automatic espresso machine with low usage.'),
(9,'Vintage Vinyl Record Collection',180,'Collectibles','Very good condition','Brooklyn, New York','COLLECTIBLE','Vinyl Collection','Alex R.','AR',"Vintage records · Collector's item",'Curated collection of classic vinyl records, stored carefully.'),
]

more = {
'Electronics': ['Samsung Galaxy S23','iPad Air 5th Gen','Dell XPS 13 Laptop','Nintendo Switch OLED','Bose QuietComfort Headphones','Apple Watch Series 9','LG 55-inch 4K TV','GoPro HERO Camera','Kindle Paperwhite','JBL Bluetooth Speaker','Canon EOS M50 Camera','Google Pixel 8','Mechanical Gaming Keyboard','PlayStation 5 Console'],
'Furniture': ['Oak Dining Table','Mid-Century Lounge Chair','Queen Bed Frame','Glass Coffee Table','Six-Drawer Dresser','Bookshelf with Cabinets','Office Desk','TV Console','Round Dining Set','Wooden Nightstand','Sectional Corner Sofa','Storage Ottoman','Standing Floor Lamp','Entryway Bench'],
'Vehicles': ['Toyota Corolla 2018','Honda Civic 2019','Mazda CX-5 2020','Nissan Altima 2017','Ford Escape 2019','Honda CR-V 2018','Kawasaki Ninja 400','Yamaha MT-07','Trek Hybrid Bicycle','Specialized Mountain Bike','Electric Scooter','Jeep Wrangler 2016','Hyundai Elantra 2020','Toyota RAV4 2017'],
'Fashion': ['Nike Air Max Sneakers','Levi’s Denim Jacket','Designer Sunglasses','Wool Winter Coat','Leather Boots','Canvas Backpack','Classic Wristwatch','Women’s Blazer','Men’s Suit Jacket','Cashmere Sweater','Running Shoes','Crossbody Shoulder Bag','Vintage Denim Jeans','Silk Dress'],
'Home': ['Air Fryer XL','Robot Vacuum Cleaner','Microwave Oven','Stand Mixer','Cordless Vacuum','Tower Fan','Rice Cooker','Toaster Oven','Electric Kettle','Food Processor','Portable Heater','Smart LED Lamp','Dehumidifier','Slow Cooker'],
'Collectibles': ['Classic Film Camera Collection','Vintage Comic Books','Sports Trading Cards','Antique Pocket Watch','Retro Game Cartridge Set','Collector Toy Figure','Framed Movie Poster','Old Coin Collection','Vintage Travel Posters','Classic Board Game','Rare Book Set','Model Car Collection','Signed Sports Memorabilia','Vintage Music Cassette Set']
}

locations=['Brooklyn, New York','Queens, New York','Manhattan, New York','Bronx, New York','Jersey City, New Jersey','Newark, New Jersey']
conditions=['Excellent condition','Very good condition','Good condition','Like new']
prices=[240,350,475,620,185,890,145,560,275,410,725,195,330,680,260]

# build entries preserving IDs 1-9
entries=[]
for idx,t,p,c,cond,loc,brand,visual,seller,avatar,summary,lead in existing:
    imgs=base_images[c]
    # rotate pool for the three gallery photos
    offset=(idx-1)%len(imgs)
    images=[imgs[(offset+j)%len(imgs)] for j in range(3)]
    entries.append((idx,t,p,c,cond,loc,brand,visual,seller,avatar,summary,lead,images))

next_id=10
from collections import Counter
existing_counts=Counter(e[3] for e in existing)
for cat,names in more.items():
    needed=15-existing_counts.get(cat,0)
    for i,name in enumerate(names[:needed]):
        imgs=base_images[cat]
        images=[imgs[(i+j)%len(imgs)] for j in range(3)]
        loc=locations[(i+next_id)%len(locations)]
        cond=conditions[i%len(conditions)]
        price=prices[i]
        entries.append((next_id,name,price,cat,cond,loc,cat.upper(),name,'ReList Seller', 'RS', f'{cond.replace(" condition","")} · Ready to view', f'{name} listed in {cond.lower()}. Contact the seller for details, availability, and pickup information. ',images))
        next_id+=1

# Ensure exactly 15/category
from collections import Counter
assert Counter(e[3] for e in entries)=={k:15 for k in more}

lines=[]
lines.append('// ============================================================')
lines.append('// ReList PRODUCT CATALOGUE — EASY EDIT SECTION')
lines.append('// Edit products here. Each product has 3 editable image URLs.')
lines.append('// To add a product: copy one complete entry and change the fields.')
lines.append('// ============================================================')
lines.append('const productData = {')
for e in entries:
    id,t,p,c,cond,loc,brand,visual,seller,avatar,summary,lead,images=e
    lines.append(f'  // PRODUCT {id} — {c.upper()} — EDIT THIS PRODUCT HERE')
    obj = {"title":t,"price":"$"+format(p,","),"category":c,"condition":cond,"location":loc,"brand":brand,"visual":visual,"lead":lead,"seller":seller,"avatar":avatar,"meta":"Member since 2025 · 5 listings","description":lead+" Ask the seller for more information, additional photos, and availability.","bullets":["Well-kept item","Seller verified listing details","Available for direct inquiry","Additional photos available on request","Local pickup or agreed delivery"],"specs":[["Condition",cond.replace(" condition","")],["Category",c],["Location",loc.split(",")[0]],["Listed","Recently"]]}
    fields = ','.join(f'{k}:{json.dumps(v, ensure_ascii=False)}' for k,v in obj.items())
    lines.append(f'  {id}: {{{fields},images:[')
    for j,img in enumerate(images,1):
        comma=',' if j<3 else ''
        lines.append(f'    // IMAGE {j} — REPLACE THIS URL WITH YOUR PRODUCT PHOTO')
        lines.append(f'    {json.dumps(img)}{comma}')
    lines.append('  ],className:"p-item",summary:'+json.dumps(summary)+'},')
lines.append('};')
Path('/mnt/data/relist_15/assets/products.js').write_text('\n'.join(lines),encoding='utf-8')

# Remove embedded productData block and add comment.
app=Path('/mnt/data/relist_15/assets/app.js')
s=app.read_text()
start=s.index('  const productData = {')
end=s.index('\n  };\n\n  const toggle',start)+len('\n  };')
s=s[:start]+'  // Product catalogue is kept separately in assets/products.js for easy editing.\n'+s[end:]
app.write_text(s,encoding='utf-8')

# Add products.js before app.js on all pages using app.js
for f in Path('/mnt/data/relist_15').glob('*.html'):
    s=f.read_text(encoding='utf-8')
    s=s.replace('<script src="assets/app.js"></script>','<script src="assets/products.js"></script><script src="assets/app.js"></script>')
    f.write_text(s,encoding='utf-8')

# update browse count
b=Path('/mnt/data/relist_15/browse.html')
s=b.read_text().replace('<strong id="resultCount">9</strong> items found','<strong id="resultCount">90</strong> items found')
b.write_text(s,encoding='utf-8')

# Update README with exact editing instructions
r=Path('/mnt/data/relist_15/README.txt')
r.write_text('ReList static marketplace\n\nPRODUCT EDITING\n1. Open assets/products.js\n2. Find the category and PRODUCT number you want to edit.\n3. Change title, price, condition, location, description, etc.\n4. For product photos, replace the 3 URLs directly under IMAGE 1, IMAGE 2, IMAGE 3.\n5. Save and refresh the website.\n\nThere are 90 demo listings: 15 in each category: Electronics, Furniture, Vehicles, Fashion, Home, Collectibles.\n\nEach product detail page uses its own 3-image gallery. Browse cards use IMAGE 1 automatically.\n',encoding='utf-8')
print('created', len(entries), 'products')
