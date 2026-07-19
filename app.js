const products = [
  {emoji:'🎧', name:'Wireless Earbuds', price:2300, old:2500, tag:'-8%', cat:'audio', brand:'JBL', rating:4.5,
    desc:["JBL Wireless Earbuds deliver clear, punchy sound with deep bass and crisp highs, tuned for music, calls, and gaming alike.","With a compact charging case and touch controls, they're built for everyday use — commuting, working out, or long calls — without wires getting in the way."],
    features:["Bluetooth 5.3 connectivity","Up to 24 hours total playtime with case","IPX4 sweat and splash resistant","Touch controls for play, pause, and calls","Built-in mic for clear calls"],
    reviews:[{name:"Rakibul Hasan", date:"May 14, 2026", rating:5, text:"Sound quality is really impressive for the price. Bass is strong and battery easily lasts me the whole day."}]},
  {emoji:'⌚', name:'Smartwatch Pro', price:3200, old:3400, tag:'-6%', cat:'watch', brand:'Amazfit', rating:4,
    desc:["The Amazfit Smartwatch Pro tracks your heart rate, sleep, and daily activity around the clock, with a bright always-on display that's easy to read in sunlight.","It pairs with your phone for call and message alerts, so you can stay connected without constantly checking your phone."],
    features:["1.43\" AMOLED always-on display","Heart rate & SpO2 monitoring","Up to 7 days battery life","100+ sports modes","Call & notification alerts"],
    reviews:[{name:"Mahmudul Karim", date:"Apr 22, 2026", rating:4, text:"Battery life is great and the screen looks premium. Companion app could be a bit smoother, but overall very happy."}]},
  {emoji:'🔋', name:'20,000mAh Power Bank', price:2200, old:2450, tag:'-10%', cat:'power', brand:'Anker', rating:5,
    desc:["This Anker 20,000mAh Power Bank holds enough charge to top up a phone multiple times or keep a laptop running through a busy travel day.","Dual output ports and fast-charging support mean you can charge two devices at once without waiting around."],
    features:["20,000mAh high-capacity battery","18W fast charging (dual output)","LED battery level indicator","Safe-charge protection circuitry","Compact, travel-friendly design"],
    reviews:[{name:"Sadia Islam", date:"June 05, 2026", rating:5, text:"Ordered this online and it arrived the very next day with the warranty card included. Charges my phone fully more than three times."}]},
  {emoji:'🔊', name:'Bluetooth Speaker', price:1984, old:2200, tag:'-10%', cat:'audio', brand:'Xiaomi', rating:4.5,
    desc:["The Xiaomi Bluetooth Speaker fills a room with warm, balanced sound from a compact body that's easy to carry from the living room to the balcony.","A rechargeable battery keeps the music going for hours, and simple one-button pairing gets you connected in seconds."],
    features:["360° immersive sound","10+ hours playtime per charge","IPX5 water-resistant body","Bluetooth 5.0 fast pairing","Built-in mic for hands-free calls"],
    reviews:[{name:"Tania Rahman", date:"May 02, 2026", rating:5, text:"Great sound for such a small speaker. I use it every evening on the balcony and the battery still has plenty left the next day."}]},
  {emoji:'🖱️', name:'Gaming Mouse RGB', price:1500, old:null, tag:null, cat:'gaming', brand:'Logitech', rating:4,
    desc:["Built for fast, accurate gameplay, this Logitech RGB gaming mouse uses a high-precision sensor that tracks every movement without lag.","Customizable RGB lighting and programmable buttons let you set it up exactly the way you play, whether it's FPS, MOBA, or everyday use."],
    features:["High-precision optical sensor","Customizable RGB lighting","6 programmable buttons","Ergonomic grip for long sessions","Braided cable for durability"],
    reviews:[{name:"Shovon Ahmed", date:"Mar 18, 2026", rating:4, text:"Very responsive and comfortable to hold for long gaming sessions. RGB lighting looks great too."}]},
  {emoji:'💡', name:'Smart LED Strip Light', price:650, old:null, tag:null, cat:'light', brand:'Xiaomi', rating:4,
    desc:["Transform any room with this Xiaomi Smart LED Strip Light — millions of colors, adjustable brightness, and app control right from your phone.","It's simple to install with adhesive backing, and works great behind a TV, desk, or shelf for instant ambient lighting."],
    features:["16 million colors, app-controlled","Music sync mode","Easy adhesive installation","Adjustable brightness & scenes","Cuttable & extendable strip"],
    reviews:[{name:"Nabila Sultana", date:"Feb 27, 2026", rating:4, text:"Easy to set up and the colors look really vibrant. Great for adding a mood-lighting touch behind my desk."}]},
  {emoji:'⌨️', name:'Mechanical Keyboard', price:2800, old:3100, tag:'-9%', cat:'gaming', brand:'Logitech', rating:5,
    desc:["This Logitech Mechanical Keyboard combines tactile, satisfying keystrokes with a sturdy build designed to handle years of typing and gaming.","Backlit keys and a compact layout make it just as good for late-night coding sessions as it is for competitive gaming."],
    features:["Tactile mechanical switches","Per-key RGB backlighting","Durable aluminum-top frame","Anti-ghosting, N-key rollover","Detachable USB-C cable"],
    reviews:[{name:"Imtiaz Chowdhury", date:"Jan 30, 2026", rating:5, text:"Typing feel is excellent and it looks premium on my desk. Worth the extra price over a regular keyboard."}]},
  {emoji:'📷', name:'Webcam 1080p', price:1750, old:null, tag:null, cat:'camera', brand:'Logitech', rating:4,
    desc:["Get sharp, clear video calls with this Logitech 1080p Webcam, built for remote meetings, online classes, and streaming.","Auto light correction keeps you looking clear even in dim rooms, and it clips onto any monitor in seconds."],
    features:["Full HD 1080p video","Auto light correction","Built-in noise-reducing mic","Wide-angle lens","Universal monitor clip"],
    reviews:[{name:"Ayesha Siddika", date:"Apr 09, 2026", rating:4, text:"Video quality is noticeably better than my laptop's built-in camera. Great for work-from-home video calls."}]},
  {emoji:'🔌', name:'65W GaN Charger', price:1400, old:1600, tag:'-13%', cat:'charge', brand:'Ugreen', rating:4.5,
    desc:["Small enough to fit in your pocket, this Ugreen 65W GaN Charger can power a laptop, tablet, and phone with fast, safe charging.","GaN technology means less heat and a smaller size than traditional chargers, without giving up any charging speed."],
    features:["65W fast charging output","Compact GaN design","Multi-device protection circuitry","Compatible with laptops, tablets & phones","Foldable plug for easy travel"],
    reviews:[{name:"Rezaul Karim", date:"May 21, 2026", rating:5, text:"Charges my laptop and phone at the same speed as the original chargers, but it's way smaller and easier to carry."}]},
  {emoji:'🧵', name:'USB-C Braided Cable', price:350, old:null, tag:null, cat:'charge', brand:'Anker', rating:4,
    desc:["This Anker USB-C Braided Cable is built to survive daily bending and tugging, with a reinforced nylon exterior that resists fraying.","It supports fast charging and quick data transfer, so it's equally handy for charging your phone or backing up files."],
    features:["Durable nylon-braided exterior","Supports fast charging","Reinforced connector joints","480Mbps data transfer","1-meter length"],
    reviews:[{name:"Farzana Akter", date:"Mar 05, 2026", rating:4, text:"Feels much sturdier than the cable that came with my phone. Charges quickly and hasn't frayed after months of use."}]},
  {emoji:'📸', name:'Ring Light + Tripod', price:1200, old:1450, tag:'-17%', cat:'camera', brand:'Xiaomi', rating:4.5,
    desc:["This Xiaomi Ring Light + Tripod set gives your videos and photos even, flattering lighting — perfect for content creation, video calls, or livestreams.","The adjustable tripod extends to a comfortable height and folds down small enough to pack for travel shoots."],
    features:["Adjustable brightness & color temperature","Extendable tripod stand","Phone clip with 360° rotation","USB-powered LED ring","Foldable, travel-friendly design"],
    reviews:[{name:"Sabrina Islam", date:"Feb 14, 2026", rating:5, text:"My video calls and reels look so much better with proper lighting now. Easy to set up and pack away."}]},
  {emoji:'🎮', name:'Gamepad Controller', price:2100, old:null, tag:null, cat:'gaming', brand:'Sony', rating:5,
    desc:["Designed for comfort during marathon gaming sessions, this Sony Gamepad Controller offers precise analog sticks and responsive triggers.","It connects wirelessly to your console or PC, giving you the freedom to play from the couch without cable clutter."],
    features:["Wireless Bluetooth connectivity","Precision analog sticks","Responsive trigger buttons","Rechargeable battery, ~20hr life","Compatible with PC & console"],
    reviews:[{name:"Jubayer Alam", date:"Jun 11, 2026", rating:5, text:"Feels exactly like the original console controller. Pairs instantly and the battery lasts through long sessions."}]},
];

const categoryNames = {
  audio:'Audio', watch:'Smartwatch', power:'Power Bank', gaming:'Gaming Gear',
  light:'Smart Light', charge:'Chargers & Cables', camera:'Camera Accessories'
};

function fmtPrice(n){
  return '৳' + Number(n).toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2});
}

/* Used only for the Subtotal / Delivery Charge / Total rows inside the
   Checkout page's "Payment Method" card, which keep the "BDT" text
   instead of the ৳ symbol used everywhere else on the site. */
function fmtPriceBDT(n){
  return Number(n).toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2}) + ' BDT';
}

/* Custom field-level validation tooltip — shows a small notice pointing at a
   specific field (used instead of the browser's default "Please fill out
   this field" bubble), and closes itself automatically. */
let _fieldNoticeEl = null;
let _fieldNoticeTimer = null;
function showFieldNotice(target, msg){
  hideFieldNotice();
  if(!target) return;
  const tip = document.createElement('div');
  tip.className = 'field-notice';
  tip.innerHTML = `<span class="fn-ic">!</span><span>${msg}</span>`;
  document.body.appendChild(tip);
  const r = target.getBoundingClientRect();
  const maxLeft = window.innerWidth - tip.offsetWidth - 12;
  let left = Math.max(12, Math.min(r.left, maxLeft > 12 ? maxLeft : r.left));
  tip.style.left = left + 'px';
  tip.style.top = (r.bottom + 10) + 'px';
  requestAnimationFrame(()=> tip.classList.add('show'));
  _fieldNoticeEl = tip;
  try{ target.focus({preventScroll:true}); }catch(err){ target.focus(); }
  const clear = ()=> hideFieldNotice();
  target.addEventListener('input', clear, {once:true});
  target.addEventListener('change', clear, {once:true});
  target.addEventListener('click', clear, {once:true});
  window.addEventListener('scroll', clear, {once:true, passive:true});
  _fieldNoticeTimer = setTimeout(hideFieldNotice, 4000);
}
function hideFieldNotice(){
  if(_fieldNoticeTimer){ clearTimeout(_fieldNoticeTimer); _fieldNoticeTimer = null; }
  if(_fieldNoticeEl){
    const el = _fieldNoticeEl;
    el.classList.remove('show');
    setTimeout(()=>{ if(el.parentNode) el.parentNode.removeChild(el); }, 180);
    _fieldNoticeEl = null;
  }
}

function productHref(p){
  return `product.html?name=${encodeURIComponent(p.name)}`;
}

function findProductEmoji(name){
  const p = products.find(p => p.name === name);
  return p ? p.emoji : '📦';
}

function cardActionsHTML(p){
  const name = p.name.replace(/'/g,"");
  const wished = isWishlisted(p.name);
  return `<div class="card-actions">
    <button type="button" class="card-act-btn wishlist-btn${wished ? ' active' : ''}" data-name="${name}" onclick="event.stopPropagation(); toggleWishlist('${name}', this)" aria-label="Add to wishlist" title="Wishlist">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M12 20.3s-7.5-4.6-10-9.3C.6 7.8 2.3 4 6 4c2 0 3.6 1.1 4.6 2.7C11.6 5.1 13.2 4 15.2 4c3.7 0 5.4 3.8 4 7-2.5 4.7-10 9.3-10 9.3Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>
    </button>
  </div>`;
}

function cardHTML(p){
  return `<div class="card" data-cat="${p.cat}" style="cursor:pointer;" onclick="if(!event.target.closest('.add-btn') && !event.target.closest('.card-actions')) window.location.href='${productHref(p)}'">
    <div class="card-img">${p.tag ? `<span class="discount-flag">${p.tag}</span>`:''}${cardActionsHTML(p)}${p.emoji}</div>
    <div class="card-body">
      <h3>${p.name}</h3>
      ${starsHTML(p.rating)}
      <div class="price-row">
        <span class="price">${fmtPrice(p.price)}</span>
        ${p.old ? `<span class="price-old">${fmtPrice(p.old)}</span>` : ''}
      </div>
      <button class="add-btn" onclick="event.stopPropagation(); addToCart('${p.name.replace(/'/g,"")}', ${p.price}, this)"><svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M3 4h2l2.4 12.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L21 8H6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="10" cy="21" r="1.4" fill="currentColor"/><circle cx="17" cy="21" r="1.4" fill="currentColor"/></svg> Add to Cart</button>
    </div>
  </div>`;
}

function starsHTML(rating){
  const r = Math.round(rating || 0);
  const filled = Math.max(0, Math.min(5, r));
  return `<div class="offer-stars"><span class="star-filled">${'★'.repeat(filled)}</span><span class="star-empty">${'☆'.repeat(5 - filled)}</span></div>`;
}
function offerCardHTML(p){
  return `<div class="offer-card" data-cat="${p.cat}" style="cursor:pointer;" onclick="if(!event.target.closest('.add-btn') && !event.target.closest('.card-actions')) window.location.href='${productHref(p)}'">
    <div class="card-img">${p.tag ? `<span class="discount-flag">${p.tag}</span>`:''}${cardActionsHTML(p)}${p.emoji}</div>
    <div class="card-body">
      <h3>${p.name}</h3>
      ${starsHTML(p.rating)}
      <div class="price-row">
        <span class="price">${fmtPrice(p.price)}</span>
        ${p.old ? `<span class="price-old">${fmtPrice(p.old)}</span>` : ''}
      </div>
      <button class="add-btn" onclick="event.stopPropagation(); addToCart('${p.name.replace(/'/g,"")}', ${p.price}, this)"><svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M3 4h2l2.4 12.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L21 8H6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="10" cy="21" r="1.4" fill="currentColor"/><circle cx="17" cy="21" r="1.4" fill="currentColor"/></svg> Add to Cart</button>
    </div>
  </div>`;
}

const testimonials = [
  {name:'Sadia Islam', loc:'Chattogram', product:'Anker 20,000mAh Power Bank', rating:5, platform:'💬', text:'I ordered the power bank online — got it the very next day with the warranty card included. Customer service replied on WhatsApp within minutes. Will definitely order again.'},
  {name:'Tanvir Hasan', loc:'Sylhet', product:'AirPods Pro (2nd Gen)', rating:4, platform:'G', text:'The sound quality of the earbuds is amazing and delivery was fast too. Got it in fully original Apple packaging.'},
  {name:'Nusrat Jahan', loc:'Dhaka', product:'Samsung Galaxy Watch 6', rating:5, platform:'f', text:'Bought the smartwatch from the Jamuna Future Park branch. The staff set it up on my phone right there. 10/10 experience!'},
  {name:'Md. Arif', loc:'Mirpur, Dhaka', product:'20W USB-C Fast Charger', rating:5, platform:'🌐', text:'Best gadget shop in Mirpur. Got an original charger at the right price. The tech tips from the staff were great too.'},
  {name:'Rafia Chowdhury', loc:'Uttara, Dhaka', product:'Bluetooth Speaker', rating:5, platform:'💬', text:'The speaker sound quality is excellent for the price. Packaging was really nice and delivery arrived on time.'},
  {name:'Imran Kabir', loc:'Rajshahi', product:'Mechanical Keyboard', rating:4, platform:'f', text:'Build quality of the keyboard is really good. Got it within 3 days even though I\'m outside Dhaka.'},
];

function starRow(rating){
  let out = '';
  for(let i=1;i<=5;i++){ out += i<=rating ? '★' : '<span class="empty">★</span>'; }
  return out;
}
function testiCardHTML(t){
  const initial = t.name.trim().charAt(0);
  return `<div class="testi-card">
    <div class="testi-top">
      <div class="testi-stars">${starRow(t.rating)}</div>
      <div class="testi-platform">${t.platform}</div>
    </div>
    <p class="testi-text">${t.text}</p>
    <div class="testi-divider"></div>
    <div class="testi-user">
      <div class="testi-avatar">${initial}</div>
      <div>
        <div class="testi-name">${t.name} <span style="color:var(--accent); font-size:12px;">✔️</span></div>
        <div class="testi-meta">📍 ${t.loc}</div>
        <div class="testi-meta">🛍️ ${t.product}</div>
      </div>
    </div>
  </div>`;
}
function initTestimonialSlider(){
  const track = document.getElementById('testiTrack');
  const dotsWrap = document.getElementById('testiDots');
  const prevBtn = document.getElementById('testiPrev');
  const nextBtn = document.getElementById('testiNext');
  if(!track) return;

  track.innerHTML = testimonials.map(testiCardHTML).join('');
  dotsWrap.innerHTML = testimonials.map((_,i)=>`<button class="dot-btn${i===0?' active':''}" data-i="${i}"></button>`).join('');

  const dots = Array.from(dotsWrap.querySelectorAll('.dot-btn'));
  const cards = Array.from(track.querySelectorAll('.testi-card'));

  function setActiveDot(i){
    dots.forEach(d=>d.classList.remove('active'));
    if(dots[i]) dots[i].classList.add('active');
  }
  function scrollToIndex(i){
    const card = cards[i];
    if(card) track.scrollTo({left: card.offsetLeft - track.offsetLeft, behavior:'smooth'});
    setActiveDot(i);
  }
  dots.forEach((d,i)=>d.addEventListener('click', ()=>scrollToIndex(i)));

  function step(dir){
    const cardWidth = cards[0].getBoundingClientRect().width + 20;
    track.scrollBy({left: dir*cardWidth, behavior:'smooth'});
  }
  if(prevBtn) prevBtn.addEventListener('click', ()=>step(-1));
  if(nextBtn) nextBtn.addEventListener('click', ()=>step(1));

  let scrollTimer;
  track.addEventListener('scroll', ()=>{
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(()=>{
      let closest = 0, minDist = Infinity;
      cards.forEach((c,i)=>{
        const dist = Math.abs((c.offsetLeft - track.offsetLeft) - track.scrollLeft);
        if(dist < minDist){ minDist = dist; closest = i; }
      });
      setActiveDot(closest);
    }, 120);
  });

  let isDown = false, dragStartX = 0, dragStartScroll = 0, moved = false;
  track.addEventListener('mousedown', e=>{
    isDown = true;
    moved = false;
    track.classList.add('dragging');
    dragStartX = e.pageX;
    dragStartScroll = track.scrollLeft;
  });
  window.addEventListener('mousemove', e=>{
    if(!isDown) return;
    const walk = e.pageX - dragStartX;
    if(Math.abs(walk) > 4) moved = true;
    track.scrollLeft = dragStartScroll - walk;
  });
  window.addEventListener('mouseup', ()=>{
    isDown = false;
    track.classList.remove('dragging');
  });
  track.addEventListener('click', e=>{
    if(moved){ e.preventDefault(); e.stopPropagation(); moved = false; }
  }, true);
}
document.addEventListener('DOMContentLoaded', initTestimonialSlider);

let _cartCache = null;
function getCartItems(){
  if(_cartCache !== null) return _cartCache;
  try{
    _cartCache = JSON.parse(localStorage.getItem('gh_cart_items') || '[]');
  }catch(e){
    _cartCache = [];
  }
  return _cartCache;
}
function saveCartItems(items){
  _cartCache = items;
  try{
    localStorage.setItem('gh_cart_items', JSON.stringify(items));
  }catch(e){
    console.warn('cart storage failed, using in-memory cart only:', e);
  }
  updateCartBadge();
}
let _prevCartCount = null;
function updateCartBadge(){
  const count = getCartItems().reduce((s,i)=>s+i.qty, 0);
  const increased = _prevCartCount !== null && count > _prevCartCount;
  document.querySelectorAll('#cartCount').forEach(el=>{
    el.textContent = count;
    el.classList.toggle('hide', count === 0);
    if(increased){
      el.classList.remove('cart-bump');
      void el.offsetWidth; // restart the animation even if it's already mid-run
      el.classList.add('cart-bump');
    }
  });
  if(increased){
    document.querySelectorAll('.cart-icon-wrap, .cart-float').forEach(el=>{
      el.classList.remove('cart-bump');
      void el.offsetWidth;
      el.classList.add('cart-bump');
    });
  }
  _prevCartCount = count;
  if(typeof updateCartFloat === 'function') updateCartFloat();
  if(typeof renderCartDrawer === 'function') renderCartDrawer();
}
function showAddedFeedback(btn){
  if(!btn) return;
  if(btn._ghAddedTimer) clearTimeout(btn._ghAddedTimer);
  if(!btn.dataset.originalHtml) btn.dataset.originalHtml = btn.innerHTML;
  btn.classList.remove('added');
  void btn.offsetWidth;
  btn.innerHTML = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M4 12.5l5 5L20 6" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg> Added`;
  btn.classList.add('added');
  btn._ghAddedTimer = setTimeout(()=>{
    btn.innerHTML = btn.dataset.originalHtml;
    btn.classList.remove('added');
    btn._ghAddedTimer = null;
  }, 1100);
}
function addToCart(name, price, btnEl){
  const items = getCartItems();
  const existing = items.find(i=>i.name===name);
  if(existing){ existing.qty += 1; }
  else{ items.push({name, price:Number(price), qty:1}); }
  saveCartItems(items);
  if(typeof renderCheckoutSummary === 'function') renderCheckoutSummary();
  showAddedFeedback(btnEl);
}
function removeFromCart(name){
  saveCartItems(getCartItems().filter(i=>i.name!==name));
  if(typeof renderCheckoutSummary === 'function') renderCheckoutSummary();
}
function changeQty(name, delta){
  const items = getCartItems();
  const item = items.find(i=>i.name===name);
  if(!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveCartItems(items);
  if(typeof renderCheckoutSummary === 'function') renderCheckoutSummary();
}
document.addEventListener('DOMContentLoaded', updateCartBadge);

/* wishlist — persisted list of product names, mirrors the cart storage pattern */
let _wishlistCache = null;
function getWishlistItems(){
  if(_wishlistCache !== null) return _wishlistCache;
  try{
    _wishlistCache = JSON.parse(localStorage.getItem('gh_wishlist_items') || '[]');
  }catch(e){
    _wishlistCache = [];
  }
  return _wishlistCache;
}
function saveWishlistItems(items){
  _wishlistCache = items;
  try{
    localStorage.setItem('gh_wishlist_items', JSON.stringify(items));
  }catch(e){
    console.warn('wishlist storage failed, using in-memory wishlist only:', e);
  }
  updateWishlistBadge();
}
function isWishlisted(name){
  return getWishlistItems().includes(name);
}
function toggleWishlist(name, btnEl){
  const items = getWishlistItems();
  const idx = items.indexOf(name);
  let added;
  if(idx > -1){ items.splice(idx, 1); added = false; }
  else{ items.push(name); added = true; }
  saveWishlistItems(items);
  document.querySelectorAll('.wishlist-btn').forEach(btn=>{
    if(btn.dataset.name === name) btn.classList.toggle('active', added);
  });
  if(typeof mode !== 'undefined' && mode === 'wishlist' && typeof renderResults === 'function') renderResults();
  return added;
}
function updateWishlistBadge(){
  const count = getWishlistItems().length;
  document.querySelectorAll('#wishlistCount').forEach(el=>{
    el.textContent = count;
    el.classList.toggle('hide', count === 0);
  });
}
document.addEventListener('DOMContentLoaded', updateWishlistBadge);

/* per-product customer reviews (default reviews + reader-submitted, persisted) */
function reviewStorageKey(product){
  return 'gh_reviews_' + product.name;
}
function getProductReviews(product){
  let extra = [];
  try{
    extra = JSON.parse(localStorage.getItem(reviewStorageKey(product)) || '[]');
  }catch(e){
    extra = [];
  }
  return [...(product.reviews || []), ...extra];
}
function addProductReview(product, review){
  let extra = [];
  try{
    extra = JSON.parse(localStorage.getItem(reviewStorageKey(product)) || '[]');
  }catch(e){
    extra = [];
  }
  extra.push(review);
  try{
    localStorage.setItem(reviewStorageKey(product), JSON.stringify(extra));
  }catch(e){
    console.warn('review storage failed:', e);
  }
  return [...(product.reviews || []), ...extra];
}

/* dark / light mode toggle */
const THEME_ICON_MOON = '<svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M20.354 15.354A9 9 0 0 1 8.646 3.646 9.003 9.003 0 1 0 20.354 15.354Z"/></svg>';
const THEME_ICON_SUN = '<svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.592-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z"/></svg>';
function updateThemeIcon(theme){
  document.querySelectorAll('.theme-toggle .theme-ic').forEach(el=>{
    el.innerHTML = theme === 'dark' ? THEME_ICON_MOON : THEME_ICON_SUN;
  });
}
function toggleTheme(){
  const current = document.documentElement.getAttribute('data-theme') || 'light';
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  updateThemeIcon(next);
}
document.addEventListener('DOMContentLoaded', function(){
  updateThemeIcon(document.documentElement.getAttribute('data-theme') || 'light');
});

/* hide header (top-header + sub-header, both live inside <header>) on scroll down,
   reveal it again on scroll up — only kicks in past a small threshold so it
   doesn't flicker near the very top of the page */
function initHeaderScroll(){
  const header = document.querySelector('header');
  if(!header) return;
  let lastY = window.scrollY;
  let ticking = false;
  const HIDE_AFTER = 80;
  const DELTA = 6; // ignore tiny scroll jitters so the animation only fires on deliberate scrolling

  function update(){
    const y = Math.max(0, window.scrollY);
    const diff = y - lastY;

    if(y <= HIDE_AFTER){
      header.classList.remove('header-hide');
    } else if(diff > DELTA){
      header.classList.add('header-hide');
      lastY = y;
    } else if(diff < -DELTA){
      header.classList.remove('header-hide');
      lastY = y;
    }
    ticking = false;
  }

  window.addEventListener('scroll', ()=>{
    if(!ticking){
      requestAnimationFrame(update);
      ticking = true;
    }
  }, {passive:true});
}
document.addEventListener('DOMContentLoaded', initHeaderScroll);

/* floating cart widget + slide-in cart drawer */
let cartFloatEl = null, cartBackdropEl = null, cartDrawerBodyEl = null, cartDrawerFootEl = null;

function initCartFloat(){
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'cart-float';
  btn.id = 'cartFloatBtn';
  btn.setAttribute('aria-label', 'Shopping Cart');
  btn.innerHTML = `
    <div class="cf-top">
      <svg viewBox="0 0 24 24" fill="none"><path d="M3 4h2l2.4 12.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L21 8H6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><circle cx="10" cy="21" r="1.4" fill="currentColor"/><circle cx="17" cy="21" r="1.4" fill="currentColor"/></svg>
      <span id="cfCount">0 Items</span>
    </div>
    <div class="cf-bottom" id="cfTotal">৳0.00</div>`;
  document.documentElement.appendChild(btn);
  cartFloatEl = btn;
  btn.classList.add('show');
  btn.addEventListener('click', (e)=>{ e.preventDefault(); openCartDrawer(); });
}

function updateCartFloat(){
  if(!cartFloatEl) return;
  const items = getCartItems();
  const count = items.reduce((s,i)=>s+i.qty, 0);
  const total = items.reduce((s,i)=>s+i.price*i.qty, 0);
  cartFloatEl.querySelector('#cfCount').textContent = count + (count === 1 ? ' Item' : ' Items');
  cartFloatEl.querySelector('#cfTotal').textContent = fmtPrice(total);
}

function initCartDrawer(){
  const backdrop = document.createElement('div');
  backdrop.className = 'cart-backdrop';
  backdrop.id = 'cartBackdrop';
  backdrop.innerHTML = `
    <div class="cart-drawer" role="dialog" aria-label="Shopping Cart">
      <div class="cart-drawer-head">
        <h3>Shopping Cart</h3>
        <button type="button" class="cart-drawer-close" id="cartDrawerClose">Close ✕</button>
      </div>
      <div class="cart-drawer-body" id="cartDrawerBody"></div>
      <div class="cart-drawer-foot" id="cartDrawerFoot"></div>
    </div>`;
  document.documentElement.appendChild(backdrop);
  cartBackdropEl = backdrop;
  cartDrawerBodyEl = backdrop.querySelector('#cartDrawerBody');
  cartDrawerFootEl = backdrop.querySelector('#cartDrawerFoot');

  backdrop.addEventListener('click', (e)=>{
    if(e.target === backdrop) closeCartDrawer();
  });
  backdrop.querySelector('#cartDrawerClose').addEventListener('click', closeCartDrawer);
  document.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape') closeCartDrawer();
  });
}

function renderCartDrawer(){
  if(!cartDrawerBodyEl) return;
  const items = getCartItems();
  if(items.length === 0){
    cartDrawerBodyEl.innerHTML = `
      <div class="cart-drawer-empty">
        <div class="cde-icon">
          <svg viewBox="0 0 36 36" fill="none">
            <path d="M4 5h4l3.2 17a2.4 2.4 0 0 0 2.4 2h12a2.4 2.4 0 0 0 2.35-1.9L30.5 11H12" stroke="#2F7AED" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="14.5" cy="30.5" r="1.9" stroke="#2F7AED" stroke-width="1.8"/>
            <circle cx="24.5" cy="30.5" r="1.9" stroke="#2F7AED" stroke-width="1.8"/>
            <circle cx="27.5" cy="8.5" r="6" fill="#fff" stroke="#2F7AED" stroke-width="1.8"/>
            <path d="M25.3 6.3l4.4 4.4M29.7 6.3l-4.4 4.4" stroke="#2F7AED" stroke-width="1.6" stroke-linecap="round"/>
          </svg>
        </div>
        <p>No items in your cart!</p>
        <a href="shop.html">Start Shopping</a>
      </div>`;
    cartDrawerFootEl.innerHTML = '';
    return;
  }
  cartDrawerBodyEl.innerHTML = items.map(i => `
    <div class="cdr-item">
      <div class="cdr-emoji">${findProductEmoji(i.name)}</div>
      <div class="cdr-info">
        <div class="cdr-name">${i.name || 'Product'}</div>
        <div class="cdr-qty-row">
          <div class="cdr-qty">
            <button type="button" onclick="changeQty('${i.name.replace(/'/g,"")}', -1)"><svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M4 12h16" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/></svg></button>
            <span>${i.qty}</span>
            <button type="button" onclick="changeQty('${i.name.replace(/'/g,"")}', 1)"><svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M12 4v16M4 12h16" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/></svg></button>
          </div>
          <div class="cdr-price">× ${fmtPrice(i.price)} = ${fmtPrice(i.price * i.qty)}</div>
        </div>
      </div>
      <button type="button" class="cdr-remove" onclick="removeFromCart('${i.name.replace(/'/g,"")}')">✕</button>
    </div>
  `).join('');
  const subtotal = items.reduce((s,i)=>s+i.price*i.qty, 0);
  cartDrawerFootEl.innerHTML = `
    <div class="cdf-row"><span>Subtotal</span><b>${fmtPrice(subtotal)}</b></div>
    <a href="checkout.html" class="cdf-btn">CHECKOUT</a>`;
}

function openCartDrawer(){
  if(!cartBackdropEl) return;
  renderCartDrawer();
  cartBackdropEl.classList.add('show');
  document.body.style.overflow = 'hidden';
}
function closeCartDrawer(){
  if(!cartBackdropEl) return;
  cartBackdropEl.classList.remove('show');
  document.body.style.overflow = '';
}

function initCartToggles(){
  document.querySelectorAll('[data-cart-toggle]').forEach(el=>{
    el.addEventListener('click', (e)=>{
      const opensNewTab = e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1;
      if(opensNewTab) return;
      e.preventDefault();
      openCartDrawer();
    });
  });
}

document.addEventListener('DOMContentLoaded', function(){
  initCartFloat();
  initCartDrawer();
  updateCartFloat();
  initCartToggles();
});

function initScrollTop(){
  const wrap = document.createElement('div');
  wrap.className = 'scroll-top-wrap';
  wrap.innerHTML = `
    <button type="button" class="scroll-top-btn" id="scrollTopBtn" aria-label="Back to top">
      <svg class="stp-chevron" viewBox="0 0 24 24" fill="none">
        <path d="M6 13.5l6-6 6 6" stroke="#111111" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M6 19l6-6 6 6" stroke="#FFFFFF" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>`;
  document.documentElement.appendChild(wrap);

  const btn = wrap.querySelector('#scrollTopBtn');

  function update(){
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const showAt = 300;
    wrap.classList.toggle('show', scrollTop > showAt);

    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const fillProgress = maxScroll > showAt
      ? Math.max(0, Math.min(1, (scrollTop - showAt) / (maxScroll - showAt)))
      : 1;
    btn.style.backgroundPosition = `0 ${fillProgress * 100}%`;
  }
  window.addEventListener('scroll', update, {passive:true});
  btn.addEventListener('click', ()=>window.scrollTo({top:0, behavior:'smooth'}));
  update();
}
document.addEventListener('DOMContentLoaded', initScrollTop);

function initGlobalRipple(){
  const RIPPLE_SELECTOR = 'button, a, .filter-pill, .radio-opt, .faq-q';
  const NAV_DELAY = 260;

  function spawnRipple(el, clientX, clientY){
    if(getComputedStyle(el).position === 'static'){
      el.style.position = 'relative';
    }
    let wrap = el.querySelector(':scope > .gh-ripple-wrap');
    if(!wrap){
      wrap = document.createElement('span');
      wrap.className = 'gh-ripple-wrap';
      el.appendChild(wrap);
    }
    const rect = el.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = (clientX ?? (rect.left + rect.width / 2)) - rect.left - size / 2;
    const y = (clientY ?? (rect.top + rect.height / 2)) - rect.top - size / 2;

    const ripple = document.createElement('span');
    ripple.className = 'gh-ripple';
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    wrap.appendChild(ripple);
    ripple.addEventListener('animationend', ()=>ripple.remove());
  }

  document.addEventListener('click', function(e){
    const el = e.target.closest(RIPPLE_SELECTOR);
    if(!el || el.disabled) return;

    spawnRipple(el, e.clientX, e.clientY);

    if(el.tagName === 'A' && !el.hasAttribute('data-cart-toggle')){
      const href = el.getAttribute('href');
      const opensNewTab = el.target === '_blank' || e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1;
      const isRealLink = href && href !== '#' && !href.startsWith('javascript:') && !opensNewTab;
      if(isRealLink && !e.defaultPrevented){
        e.preventDefault();
        const dest = el.href;
        setTimeout(()=>{ window.location.href = dest; }, NAV_DELAY);
      }
    }
  }, true);
}
document.addEventListener('DOMContentLoaded', initGlobalRipple);

function doSearch(e){
  e.preventDefault();
  const input = document.getElementById('searchInput');
  const q = input ? input.value.trim() : '';
  window.location.href = 'shop.html' + (q ? ('?search=' + encodeURIComponent(q)) : '');
  return false;
}

function escapeHtml(str){
  return String(str).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
}

/* live "type-ahead" suggestions dropdown under the header search bar —
   matches product name, brand, or category so a keyword like "gaming" or
   "audio" surfaces related products, not just literal name matches */
function matchProductsForSearch(query){
  const q = query.trim().toLowerCase();
  if(!q) return [];
  return products.filter(p=>{
    const catName = (categoryNames[p.cat] || p.cat || '').toLowerCase();
    return p.name.toLowerCase().includes(q) ||
           (p.brand || '').toLowerCase().includes(q) ||
           catName.includes(q);
  });
}

function initSearchSuggestions(){
  const input = document.getElementById('searchInput');
  const form = document.querySelector('.search-form');
  if(!input || !form) return;

  const panel = document.createElement('div');
  panel.className = 'search-suggest';
  panel.id = 'searchSuggestPanel';
  form.appendChild(panel);

  let activeIndex = -1;
  let debounceTimer = null;

  function items(){
    return Array.from(panel.querySelectorAll('.ss-item'));
  }

  function setActive(i){
    const list = items();
    activeIndex = i;
    list.forEach((el, idx)=> el.classList.toggle('active', idx === activeIndex));
    if(activeIndex > -1 && list[activeIndex]) list[activeIndex].scrollIntoView({block:'nearest'});
  }

  function renderPanel(rawQuery){
    const query = rawQuery.trim();
    if(!query){ closePanel(); return; }
    const results = matchProductsForSearch(query).slice(0, 6);
    activeIndex = -1;
    if(results.length === 0){
      panel.innerHTML = `<div class="ss-empty">No products found for "${escapeHtml(query)}"</div>`;
    } else {
      panel.innerHTML = results.map(p => `
        <a href="${productHref(p)}" class="ss-item">
          <span class="ss-emoji">${p.emoji}</span>
          <span class="ss-info">
            <span class="ss-name">${escapeHtml(p.name)}</span>
            <span class="ss-price">${fmtPrice(p.price)}</span>
          </span>
        </a>`).join('') +
        `<a href="shop.html?search=${encodeURIComponent(query)}" class="ss-viewall">See all results for "${escapeHtml(query)}" →</a>`;
    }
    panel.classList.add('show');
  }

  function closePanel(){
    panel.classList.remove('show');
    panel.innerHTML = '';
    activeIndex = -1;
  }

  input.addEventListener('input', ()=>{
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(()=> renderPanel(input.value), 150);
  });
  input.addEventListener('focus', ()=>{
    if(input.value.trim()) renderPanel(input.value);
  });
  document.addEventListener('click', (e)=>{
    if(!form.contains(e.target)) closePanel();
  });
  input.addEventListener('keydown', (e)=>{
    const list = items();
    if(e.key === 'Escape'){
      closePanel();
      return;
    }
    if(e.key === 'ArrowDown' && list.length){
      e.preventDefault();
      setActive(Math.min(list.length - 1, activeIndex + 1));
      return;
    }
    if(e.key === 'ArrowUp' && list.length){
      e.preventDefault();
      setActive(Math.max(0, activeIndex - 1));
      return;
    }
    if(e.key === 'Enter' && activeIndex > -1 && list[activeIndex]){
      e.preventDefault();
      window.location.href = list[activeIndex].getAttribute('href');
    }
  });
}
document.addEventListener('DOMContentLoaded', initSearchSuggestions);

function initHeaderMenu(){
  const btn = document.getElementById('moreBtn');
  const menu = document.getElementById('moreMenu');
  if(!btn || !menu) return;
  btn.addEventListener('click', (e)=>{
    e.stopPropagation();
    menu.classList.toggle('show');
  });
  document.addEventListener('click', (e)=>{
    if(!menu.contains(e.target) && e.target !== btn){
      menu.classList.remove('show');
    }
  });
}
document.addEventListener('DOMContentLoaded', initHeaderMenu);

function initHeroSlider(){
  const slider = document.getElementById('heroSlider');
  const slides = document.querySelectorAll('#heroSlider .banner-slide');
  const dots = document.querySelectorAll('#heroDots .dot-btn');
  if(slides.length === 0) return;
  let current = 0;
  let timer = null;

  function goTo(i){
    i = (i + slides.length) % slides.length;
    slides[current].classList.remove('active');
    dots[current] && dots[current].classList.remove('active');
    current = i;
    slides[current].classList.add('active');
    dots[current] && dots[current].classList.add('active');
  }
  function next(){ goTo(current + 1); }
  function prev(){ goTo(current - 1); }
  function startAutoplay(){
    timer = setInterval(next, 3500);
  }
  function stopAutoplay(){
    if(timer) clearInterval(timer);
  }

  dots.forEach((dot, i)=>{
    dot.addEventListener('click', ()=>{
      stopAutoplay();
      goTo(i);
      startAutoplay();
    });
  });

  let startX = 0, deltaX = 0, dragging = false;
  const SWIPE_THRESHOLD = 40;

  function dragStart(x){
    dragging = true;
    startX = x;
    deltaX = 0;
    stopAutoplay();
    slider.style.cursor = 'grabbing';
  }
  function dragMove(x){
    if(!dragging) return;
    deltaX = x - startX;
  }
  function dragEnd(){
    if(!dragging) return;
    dragging = false;
    slider.style.cursor = 'grab';
    if(deltaX > SWIPE_THRESHOLD) prev();
    else if(deltaX < -SWIPE_THRESHOLD) next();
    startAutoplay();
  }

  slider.addEventListener('touchstart', e=>dragStart(e.touches[0].clientX), {passive:true});
  slider.addEventListener('touchmove', e=>dragMove(e.touches[0].clientX), {passive:true});
  slider.addEventListener('touchend', dragEnd);

  slider.addEventListener('mousedown', e=>{ e.preventDefault(); dragStart(e.clientX); });
  window.addEventListener('mousemove', e=>dragMove(e.clientX));
  window.addEventListener('mouseup', dragEnd);
  slider.style.cursor = 'grab';

  startAutoplay();
}
document.addEventListener('DOMContentLoaded', initHeroSlider);

function initFAQ(){
  document.querySelectorAll('.faq-q').forEach(q=>{
    q.addEventListener('click', ()=>{
      q.parentElement.classList.toggle('open');
    });
  });
}

function initOrderForm(){
  const form = document.getElementById('orderForm');
  if(!form) return;
  document.querySelectorAll('.radio-opt').forEach(opt=>{
    opt.addEventListener('click', ()=>{
      document.querySelectorAll('.radio-opt').forEach(o=>o.classList.remove('checked'));
      opt.classList.add('checked');
    });
  });
  form.addEventListener('submit', function(e){
    e.preventDefault();
    const items = getCartItems();
    const box = document.getElementById('confirmBox');
    if(items.length === 0){
      box.innerHTML = `⚠️ Your cart is empty. Please add products from the shop first.`;
      box.classList.add('show');
      return;
    }
    const list = items.map(i=>`${i.name} × ${i.qty}`).join('<br>');
    const subtotal = items.reduce((s,i)=>s+i.price*i.qty, 0);
    const distEl = document.getElementById('districtValue');
    const deliveryCharge = (distEl && distEl.value) ? (distEl.value === 'Dhaka' ? 60 : 120) : 0;
    const total = subtotal + deliveryCharge;
    const payEl = document.querySelector('input[name="pay"]:checked');
    const payMethod = payEl ? payEl.value : 'cod';
    let payLine = 'Cash on Delivery';
    if(payMethod === 'bkash'){
      const trxEl = document.getElementById('bkashTrxId');
      payLine = 'bKash' + (trxEl && trxEl.value ? ` (TrxID: ${trxEl.value.trim()})` : '');
    }
    const orderNo = 'GH' + Math.floor(100000 + Math.random() * 900000);
    document.getElementById('osOrderNo').textContent = '#' + orderNo;
    document.getElementById('osItems').innerHTML = list;
    document.getElementById('osSubtotal').textContent = fmtPrice(subtotal);
    document.getElementById('osDelivery').textContent = fmtPrice(deliveryCharge);
    document.getElementById('osTotal').textContent = fmtPrice(total);
    document.getElementById('osPayment').textContent = payLine;
    document.getElementById('orderSuccessBackdrop').classList.add('show');
    saveCartItems([]);
    if(typeof renderCheckoutSummary === 'function') renderCheckoutSummary();
  });
}

function initContactForm(){
  const form = document.getElementById('contactForm');
  if(!form) return;
  form.addEventListener('submit', function(e){
    e.preventDefault();
    const nameEl = document.getElementById('contactNameInput');
    const infoEl = document.getElementById('contactInfoInput');
    const msgEl = document.getElementById('contactMessageInput');
    if(!nameEl.value.trim()){
      showFieldNotice(nameEl, 'Please fill out this field.');
      return;
    }
    if(!infoEl.value.trim()){
      showFieldNotice(infoEl, 'Please fill out this field.');
      return;
    }
    if(!msgEl.value.trim()){
      showFieldNotice(msgEl, 'Please fill out this field.');
      return;
    }
    const box = document.getElementById('contactConfirm');
    box.innerHTML = `✅ Thank you! Your message has been received, we'll get back to you soon.`;
    box.classList.add('show');
    form.reset();
  });
}

/* Reusable searchable custom dropdown (used for district/thana selects).
   container: the .custom-select element
   options: array of strings
   opts: { placeholder, searchPlaceholder, onSelect(value) }
   Returns an object with setOptions(newOptions) and reset() so callers (e.g. thana list
   after a district changes) can update it without rebuilding the whole widget. */
function initSearchableSelect(container, options, opts){
  const trigger = container.querySelector('.cs-trigger');
  const valueEl = container.querySelector('.cs-value');
  const panel = container.querySelector('.cs-panel');
  const searchInput = container.querySelector('.cs-search-wrap input');
  const optionsEl = container.querySelector('.cs-options');
  const hiddenInput = container.querySelector('input[type="hidden"]');
  let currentOptions = options.slice();
  let selectedValue = '';

  function renderOptions(filter){
    const q = (filter || '').trim().toLowerCase();
    const list = q ? currentOptions.filter(o=>o.toLowerCase().includes(q)) : currentOptions;
    if(list.length === 0){
      optionsEl.innerHTML = `<div class="cs-empty">No results found</div>`;
      return;
    }
    optionsEl.innerHTML = list.map(o=>
      `<div class="cs-option${o===selectedValue ? ' selected' : ''}" data-val="${o}">${o}</div>`
    ).join('');
    optionsEl.querySelectorAll('.cs-option').forEach(el=>{
      el.addEventListener('click', ()=>{
        selectedValue = el.dataset.val;
        hiddenInput.value = selectedValue;
        valueEl.textContent = selectedValue;
        valueEl.classList.remove('placeholder');
        closePanel();
        hiddenInput.dispatchEvent(new Event('change', {bubbles:true}));
        if(opts && opts.onSelect) opts.onSelect(selectedValue);
      });
    });
  }

  function openPanel(){
    container.classList.add('open');
    searchInput.value = '';
    renderOptions('');
    searchInput.focus();
  }
  function closePanel(){
    container.classList.remove('open');
  }

  trigger.addEventListener('click', (e)=>{
    e.stopPropagation();
    if(container.classList.contains('open')) closePanel(); else openPanel();
  });
  searchInput.addEventListener('input', ()=> renderOptions(searchInput.value));
  searchInput.addEventListener('click', (e)=> e.stopPropagation());
  document.addEventListener('click', (e)=>{
    if(!container.contains(e.target)) closePanel();
  });

  return {
    setOptions(newOptions){
      currentOptions = newOptions.slice();
      selectedValue = '';
      hiddenInput.value = '';
      valueEl.textContent = (opts && opts.placeholder) || 'Select';
      valueEl.classList.add('placeholder');
    },
    reset(){
      selectedValue = '';
      hiddenInput.value = '';
      valueEl.textContent = (opts && opts.placeholder) || 'Select';
      valueEl.classList.add('placeholder');
    }
  };
}
