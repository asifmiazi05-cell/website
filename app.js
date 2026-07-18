const products = [
  {emoji:'🎧', name:'Wireless Earbuds', price:2300, old:2500, tag:'-8%', cat:'audio', brand:'JBL', rating:4.5},
  {emoji:'⌚', name:'Smartwatch Pro', price:3200, old:3400, tag:'-6%', cat:'watch', brand:'Amazfit', rating:4},
  {emoji:'🔋', name:'20,000mAh Power Bank', price:2200, old:2450, tag:'-10%', cat:'power', brand:'Anker', rating:5},
  {emoji:'🔊', name:'Bluetooth Speaker', price:1984, old:2200, tag:'-10%', cat:'audio', brand:'Xiaomi', rating:4.5},
  {emoji:'🖱️', name:'Gaming Mouse RGB', price:1500, old:null, tag:null, cat:'gaming', brand:'Logitech', rating:4},
  {emoji:'💡', name:'Smart LED Strip Light', price:650, old:null, tag:null, cat:'light', brand:'Xiaomi', rating:4},
  {emoji:'⌨️', name:'Mechanical Keyboard', price:2800, old:3100, tag:'-9%', cat:'gaming', brand:'Logitech', rating:5},
  {emoji:'📷', name:'Webcam 1080p', price:1750, old:null, tag:null, cat:'camera', brand:'Logitech', rating:4},
  {emoji:'🔌', name:'65W GaN Charger', price:1400, old:1600, tag:'-13%', cat:'charge', brand:'Ugreen', rating:4.5},
  {emoji:'🧵', name:'USB-C Braided Cable', price:350, old:null, tag:null, cat:'charge', brand:'Anker', rating:4},
  {emoji:'📸', name:'Ring Light + Tripod', price:1200, old:1450, tag:'-17%', cat:'camera', brand:'Xiaomi', rating:4.5},
  {emoji:'🎮', name:'Gamepad Controller', price:2100, old:null, tag:null, cat:'gaming', brand:'Sony', rating:5},
];

const categoryNames = {
  audio:'Audio', watch:'Smartwatch', power:'Power Bank', gaming:'Gaming Gear',
  light:'Smart Light', charge:'Chargers & Cables', camera:'Camera Accessories'
};

function fmtPrice(n){
  return Number(n).toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2}) + ' BDT';
}

function productHref(p){
  return `product.html?name=${encodeURIComponent(p.name)}`;
}

function cardHTML(p){
  return `<div class="card" data-cat="${p.cat}" style="cursor:pointer;" onclick="if(!event.target.closest('.add-btn')) window.location.href='${productHref(p)}'">
    <div class="card-img">${p.tag ? `<span class="discount-flag">${p.tag}</span>`:''}${p.emoji}</div>
    <div class="card-body">
      <h3>${p.name}</h3>
      <div class="price-row">
        <span class="price">${fmtPrice(p.price)}</span>
        ${p.old ? `<span class="price-old">${fmtPrice(p.old)}</span>` : ''}
      </div>
      <button class="add-btn" onclick="event.stopPropagation(); addToCart('${p.name.replace(/'/g,"")}', ${p.price})">Add to Cart</button>
    </div>
  </div>`;
}

function starsHTML(rating){
  const r = Math.round(rating || 0);
  const filled = Math.max(0, Math.min(5, r));
  return `<div class="offer-stars"><span class="star-filled">${'★'.repeat(filled)}</span><span class="star-empty">${'☆'.repeat(5 - filled)}</span></div>`;
}
function offerCardHTML(p){
  return `<div class="offer-card" data-cat="${p.cat}" style="cursor:pointer;" onclick="if(!event.target.closest('.add-btn')) window.location.href='${productHref(p)}'">
    <div class="card-img">${p.tag ? `<span class="discount-flag">${p.tag}</span>`:''}${p.emoji}</div>
    <div class="card-body">
      <h3>${p.name}</h3>
      ${starsHTML(p.rating)}
      <div class="price-row">
        <span class="price">${fmtPrice(p.price)}</span>
        ${p.old ? `<span class="price-old">${fmtPrice(p.old)}</span>` : ''}
      </div>
      <button class="add-btn" onclick="event.stopPropagation(); addToCart('${p.name.replace(/'/g,"")}', ${p.price})">Add to Cart</button>
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
function updateCartBadge(){
  const count = getCartItems().reduce((s,i)=>s+i.qty, 0);
  document.querySelectorAll('#cartCount').forEach(el=>{
    el.textContent = count;
    el.classList.toggle('hide', count === 0);
  });
  if(typeof updateCartFloat === 'function') updateCartFloat();
  if(typeof renderCartDrawer === 'function') renderCartDrawer();
}
function addToCart(name, price){
  const items = getCartItems();
  const existing = items.find(i=>i.name===name);
  if(existing){ existing.qty += 1; }
  else{ items.push({name, price:Number(price), qty:1}); }
  saveCartItems(items);
  if(typeof renderCheckoutSummary === 'function') renderCheckoutSummary();
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

/* dark / light mode toggle */
function updateThemeIcon(theme){
  document.querySelectorAll('.theme-toggle .theme-ic').forEach(el=>{
    el.textContent = theme === 'dark' ? '☀️' : '🌙';
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
      <svg viewBox="0 0 24 24" fill="none"><path d="M3 4h2l2.4 12.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L21 8H6" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><circle cx="10" cy="21" r="1.4" fill="#fff"/><circle cx="17" cy="21" r="1.4" fill="#fff"/></svg>
      <span id="cfCount">0 Items</span>
    </div>
    <div class="cf-bottom" id="cfTotal">0.00 BDT</div>`;
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
          <svg viewBox="0 0 24 24" fill="none"><path d="M3 4h2l2.4 12.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L21 8H6" stroke="var(--accent)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><circle cx="10" cy="21" r="1.4" fill="var(--accent)"/><circle cx="17" cy="21" r="1.4" fill="var(--accent)"/></svg>
        </div>
        <p>Your cart is empty!</p>
        <a href="shop.html">Start Shopping →</a>
      </div>`;
    cartDrawerFootEl.innerHTML = '';
    return;
  }
  cartDrawerBodyEl.innerHTML = items.map(i => `
    <div class="cdr-item">
      <div class="cdr-emoji">🛍️</div>
      <div class="cdr-info">
        <div class="cdr-name">${i.name}</div>
        <div class="cdr-price">${fmtPrice(i.price)}</div>
        <div class="cdr-qty">
          <button type="button" onclick="changeQty('${i.name.replace(/'/g,"")}', -1)">-</button>
          <span>${i.qty}</span>
          <button type="button" onclick="changeQty('${i.name.replace(/'/g,"")}', 1)">+</button>
        </div>
      </div>
      <button type="button" class="cdr-remove" onclick="removeFromCart('${i.name.replace(/'/g,"")}')">✕</button>
    </div>
  `).join('');
  const subtotal = items.reduce((s,i)=>s+i.price*i.qty, 0);
  cartDrawerFootEl.innerHTML = `
    <div class="cdf-row"><span>Subtotal</span><b>${fmtPrice(subtotal)}</b></div>
    <a href="checkout.html" class="cdf-btn">Go to Checkout →</a>`;
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
    <svg class="stp-swoosh" width="58" height="58" viewBox="0 0 58 58">
      <circle cx="29" cy="29" r="26" fill="none" stroke="#FF7A1A" stroke-width="2.5"
        stroke-linecap="round" stroke-dasharray="26 148" stroke-dashoffset="-90" opacity=".5"/>
      <circle cx="29" cy="29" r="26" fill="none" stroke="#FF7A1A" stroke-width="2.5"
        stroke-linecap="round" stroke-dasharray="11 163" stroke-dashoffset="-122" opacity=".3"/>
    </svg>
    <button type="button" class="scroll-top-btn" id="scrollTopBtn" aria-label="Back to top">
      <svg class="stp-chevron" viewBox="0 0 24 24" fill="none">
        <path d="M6 15l6-6 6 6" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>`;
  document.documentElement.appendChild(wrap);

  const btn = wrap.querySelector('#scrollTopBtn');
  const swoosh = wrap.querySelector('.stp-swoosh');

  function update(){
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;
    swoosh.style.transform = `rotate(${pct * 360}deg)`;
    const showThreshold = docHeight > 0 ? Math.min(300, docHeight * 0.35) : Infinity;
    wrap.classList.toggle('show', scrollTop > showThreshold);
  }
  window.addEventListener('scroll', update, {passive:true});
  window.addEventListener('resize', update);
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
    const distEl = document.getElementById('districtSelect');
    const deliveryCharge = distEl ? (distEl.value === 'Dhaka' ? 60 : 120) : 0;
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
