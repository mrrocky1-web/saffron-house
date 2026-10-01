
  /* ================================================================
     DEFAULT DATA
     ================================================================ */
  const DEFAULT_DATA = {
    info: {
      name:'Saffron House', heroTag:'Est. 2008 — Mumbai, India',
      tagline:'Where every bite tells a royal story from the heart of North India.',
      yearsOfExcellence:'15+', chefName:'Chef Arjun Mehra',
      chefTitle:'Head Chef & Co-Founder · 20 yrs experience',
      phone1:'+91 98765 43210', phone2:'+91 22 2600 1234',
      email:'reservations@saffronhouse.in',
      address:'42, Carter Road, Bandra West\nMumbai, Maharashtra 400050',
      whatsapp:'919876543210', adminPassword:'admin123'
    },
    menu: {
      starters:[
        {id:'s1',name:'Crispy Paneer Tikka',price:320,desc:'Cottage cheese marinated in yoghurt and spices, chargrilled in our clay tandoor.',type:'veg',photos:['https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&q=80']},
        {id:'s2',name:'Murgh Malai Seekh',price:390,desc:'Minced chicken kebab with cream, cashew paste, and fragrant cardamom.',type:'non-veg',photos:['https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80']},
        {id:'s3',name:'Dahi Puri Shots',price:200,desc:'Bite-sized crispy puris filled with spiced yoghurt, tamarind chutney, and sev.',type:'veg',photos:[]},
        {id:'s4',name:'Lamb Chops Rogan',price:550,desc:'Slow-braised Kashmiri lamb chops with robust rogan marinade and mint raita.',type:'non-veg',photos:['https://images.unsplash.com/photo-1555126634-323283e090fa?w=800&q=80']},
        {id:'s5',name:'Aloo Nazakat',price:260,desc:'Stuffed potato shells with spiced paneer filling, shallow-fried to golden perfection.',type:'veg',photos:[]},
        {id:'s6',name:'Prawn Koliwada',price:480,desc:'Mumbai-style batter-fried prawns tossed with curry leaves and kokum chutney.',type:'non-veg',photos:[]}
      ],
      mains:[
        {id:'m1',name:'Dal Makhani',price:380,desc:'Black lentils slow-cooked overnight with butter, cream, and a hint of fenugreek.',type:'veg',photos:['https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&q=80']},
        {id:'m2',name:'Dum Gosht Biryani',price:650,desc:'Aged basmati layered with slow-cooked mutton, saffron milk, and caramelised onions.',type:'non-veg',photos:['https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800&q=80']},
        {id:'m3',name:'Butter Chicken',price:520,desc:'Tender tandoori chicken simmered in our signature tomato-butter-cream sauce.',type:'non-veg',photos:['https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=800&q=80']},
        {id:'m4',name:'Shahi Paneer',price:420,desc:'Royal cottage cheese in a cashew-onion-saffron gravy with gold leaf garnish.',type:'veg',photos:['https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&q=80']},
        {id:'m5',name:'Raan-e-Mehra',price:1100,desc:'Our signature whole leg of lamb marinated 24 hours, slow-roasted and served tableside.',type:'non-veg',photos:['https://images.unsplash.com/photo-1555126634-323283e090fa?w=800&q=80']},
        {id:'m6',name:'Saag Aloo',price:300,desc:'Mustard-leaf saag with spiced golden potatoes, finished with a ghee tempering.',type:'veg',photos:[]}
      ],
      desserts:[
        {id:'d1',name:'Gulab Jamun Soufflé',price:280,desc:'A warm rose-water soufflé inspired by the classic mithai, served with rabri ice cream.',type:'veg',photos:[]},
        {id:'d2',name:'Saffron Panna Cotta',price:320,desc:'Italian-inspired panna cotta infused with Kashmiri saffron and pistachio brittle.',type:'veg',photos:[]},
        {id:'d3',name:'Gajar Halwa Tart',price:260,desc:'Slow-cooked carrot halwa in a buttery shortcrust shell with cardamom cream.',type:'veg',photos:[]},
        {id:'d4',name:'Kulfi Falooda',price:220,desc:'Traditional pistachio kulfi with rose milk, vermicelli, and basil seeds.',type:'veg',photos:[]}
      ],
      drinks:[
        {id:'dr1',name:'Royal Mango Lassi',price:180,desc:'Thick Alphonso mango blended with chilled yoghurt and a pinch of cardamom.',type:'veg',photos:[]},
        {id:'dr2',name:'Rose Sharbat',price:150,desc:'Hand-crafted rose syrup with chilled water, dried rose petals, and lemon.',type:'veg',photos:[]},
        {id:'dr3',name:'Masala Chai',price:120,desc:'Ginger, cardamom, clove, and cinnamon brew with full-fat milk and jaggery.',type:'veg',photos:['https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?w=800&q=80','https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80']},
        {id:'dr4',name:'Thandai Fizz',price:200,desc:'Chilled thandai (almonds, fennel, poppy seeds) topped with sparkling soda.',type:'veg',photos:[]}
      ],
      fastfood:[
        {id:'ff1',name:'Bombay Vada Pav Sliders',price:180,desc:'Mini brioche buns filled with spicy potato fritters and dry garlic chutney.',type:'veg',photos:[]},
        {id:'ff2',name:'Chicken Tikka Wrap',price:250,desc:'Charcoal-grilled chicken rolled in roomali roti with mint chutney.',type:'non-veg',photos:[]},
        {id:'ff3',name:'Loaded Paneer Nachos',price:280,desc:'Crispy tortilla chips topped with makhani sauce, paneer chunks, and cheese.',type:'veg',photos:[]}
      ],
      billingHistory: []
    },
    carousel:[
      {id:'c1',name:'Dum Gosht Biryani',price:650,desc:'Slow-cooked mutton sealed inside a pot — every grain of rice tells a story.',img:'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=1200&q=80'},
      {id:'c2',name:'Butter Chicken',price:520,desc:'Our most beloved — tandoori chicken simmered in rich tomato-cream sauce.',img:'https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=1200&q=80'},
      {id:'c3',name:'Raan-e-Mehra',price:1100,desc:'Whole leg of lamb marinated 24 hours and slow-roasted — our crown jewel.',img:'https://images.unsplash.com/photo-1555126634-323283e090fa?w=1200&q=80'},
      {id:'c4',name:'Dal Makhani',price:380,desc:'Black lentils slow-cooked for 18 hours in butter and cream — pure comfort.',img:'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=1200&q=80'},
      {id:'c5',name:'Shahi Paneer',price:420,desc:'Royal cottage cheese in a cashew-saffron gravy fit for a Mughal feast.',img:'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=1200&q=80'},
      {id:'c6',name:'Murgh Malai Seekh',price:390,desc:'Velvety chicken seekh kebab — silky, smoky, and utterly irresistible.',img:'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=1200&q=80'}
    ],
    reviews:[
      {id:'r1', name:'Rahul Sharma', date:'Visited August 2025', rating:5, text:'"The Dum Gosht Biryani transported me straight to Lucknow. Every grain of rice was infused with flavour."', avatar:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80'},
      {id:'r2', name:'Priya Menon', date:'Visited June 2025', rating:5, text:'"Celebrated our 10th anniversary here. The Shahi Paneer was the best we\'ve ever had — velvety and perfectly spiced."', avatar:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80'},
      {id:'r3', name:'Aditya Kumar', date:'Visited July 2025', rating:4.5, text:'"The Raan-e-Mehra was spectacular — falling-off-the-bone tender. A must-try!"', avatar:'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80'}
    ],
    gallery:[
      {id:'g1',url:'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80',alt:'Signature curry platter'},
      {id:'g2',url:'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&q=80',alt:'Biryani'},
      {id:'g3',url:'https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=600&q=80',alt:'Butter chicken'},
      {id:'g4',url:'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80',alt:'Restaurant interior'},
      {id:'g5',url:'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&q=80',alt:'Dal makhani'},
      {id:'g6',url:'https://images.unsplash.com/photo-1555126634-323283e090fa?w=600&q=80',alt:'Tandoor'},
      {id:'g7',url:'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80',alt:'Paneer tikka'},
      {id:'g8',url:'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80',alt:'Seekh kebab'}
    ]
  };

  /* ================================================================
     DATA MANAGEMENT
     ================================================================ */
  let RDATA;
  function loadData(){try{const s=localStorage.getItem('saffronHouseData2');RDATA=s?JSON.parse(s):JSON.parse(JSON.stringify(DEFAULT_DATA));if(!RDATA.menu.fastfood)RDATA.menu.fastfood=JSON.parse(JSON.stringify(DEFAULT_DATA.menu.fastfood));if(!RDATA.billingHistory)RDATA.billingHistory=[];if(!RDATA.reviews)RDATA.reviews=JSON.parse(JSON.stringify(DEFAULT_DATA.reviews));}catch(e){RDATA=JSON.parse(JSON.stringify(DEFAULT_DATA));}}
  function saveData(){localStorage.setItem('saffronHouseData2',JSON.stringify(RDATA));}
  function genId(){return'i'+Date.now()+'_'+Math.random().toString(36).substr(2,4);}
  function rupee(n){return'\u20B9'+Number(n).toLocaleString('en-IN');}
  function esc(s){return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}

  /* ================================================================
     RENDER CUSTOMER SITE
     ================================================================ */
  function renderAll(){renderInfo();renderMenu();renderCarousel();renderGallery(); renderReviews();}

  function renderInfo(){
    const I=RDATA.info;
    const nl=document.getElementById('navLogo');
    if(nl){const p=I.name.split(' ');nl.innerHTML=esc(p[0])+' <span>'+esc(p.slice(1).join(' '))+'</span>';}
    const ht=document.getElementById('heroTag');if(ht)ht.innerHTML='<i class="fas fa-star"></i> &nbsp; '+esc(I.heroTag);
    const hti=document.getElementById('heroTitle');if(hti){const p=I.name.split(' ');hti.innerHTML='<em>'+esc(p[0])+'</em> '+esc(p.slice(1).join(' '));}
    const htl=document.getElementById('heroTagline');if(htl)htl.textContent=I.tagline;
    const yt=document.getElementById('yearsText');if(yt)yt.textContent=I.yearsOfExcellence;
    const cn=document.getElementById('chefName');if(cn)cn.textContent=I.chefName;
    const ct=document.getElementById('chefTitle');if(ct)ct.textContent=I.chefTitle;
    const rp=document.getElementById('resPhone');if(rp)rp.textContent=I.phone1;
    const ia=document.getElementById('infoAddress');if(ia)ia.innerHTML=esc(I.address).replace(/\n/g,'<br/>');
    const ip1=document.getElementById('infoPhone1');if(ip1){ip1.textContent=I.phone1;ip1.href='tel:'+I.phone1.replace(/\s/g,'');}
    const ip2=document.getElementById('infoPhone2');if(ip2){ip2.textContent=I.phone2;ip2.href='tel:'+I.phone2.replace(/\s/g,'');}
    const ie=document.getElementById('infoEmail');if(ie){ie.textContent=I.email;ie.href='mailto:'+I.email;}
    const fl=document.getElementById('footerLogo');if(fl){const p=I.name.split(' ');fl.innerHTML=esc(p[0])+' <span>'+esc(p.slice(1).join(' '))+'</span>';}
    const wa=document.getElementById('whatsappBtn');if(wa)wa.href='https://wa.me/'+I.whatsapp;
    document.title=I.name+' | Authentic North Indian Restaurant';
  }

  let custMenuFilter = 'all';
  function setCustMenuFilter(f, btn) {
    custMenuFilter = f;
    document.querySelectorAll('#custMenuFilters .filter-btn').forEach(b=>b.classList.remove('active'));
    if(btn) btn.classList.add('active');
    renderMenu();
  }

  function renderMenu(){
    const cats={starters:'tab-starters',mains:'tab-mains',fastfood:'tab-fastfood',desserts:'tab-desserts',drinks:'tab-drinks'};
    Object.keys(cats).forEach(cat=>{
      const panel=document.getElementById(cats[cat]);
      if(!panel)return;
      let items=RDATA.menu[cat]||[];
      if(custMenuFilter!=='all') items=items.filter(i=>i.type===custMenuFilter);
      if(!items.length){panel.innerHTML=`<p style="color:var(--color-muted);text-align:center;padding:2rem;grid-column:1/-1">No ${custMenuFilter!=='all'?custMenuFilter:''} items found in this category.</p>`;return;}
      panel.innerHTML=items.map((item,i)=>{
        const delay=i>0&&i<=4?' delay-'+i:'';
        const firstPhoto=item.photos&&item.photos.length?item.photos[0]:'';
        const hasPhotos=item.photos&&item.photos.length>0;
        return`<div class="menu-card fade-in${delay}" onclick="openDishModal('${esc(item.id)}','${cat}')">
          ${hasPhotos?'<span class="menu-has-photos">📷 '+item.photos.length+' photo'+(item.photos.length>1?'s':'')+'</span>':''}
          <div class="menu-indicator ${esc(item.type)}" title="${item.type==='veg'?'Vegetarian':'Non-Vegetarian'}"></div>
          ${firstPhoto?`<div class="menu-card-thumb"><img src="${esc(firstPhoto)}" alt="${esc(item.name)}" loading="lazy" /></div>`:''}
          <div class="menu-details">
            <div class="menu-row"><span class="menu-name">${esc(item.name)}</span><span class="menu-price">${rupee(item.price)}</span></div>
            <p class="menu-desc">${esc(item.desc)}</p>
            <p class="menu-view-hint"><i class="fas fa-images"></i> Click to ${hasPhotos?'view photos':'see details'}</p>
          </div>
        </div>`;
      }).join('');
      panel.querySelectorAll('.fade-in').forEach(el=>observer.observe(el));
    });
  }

  /* ================================================================
     DISH MODAL
     ================================================================ */
  let dishGalIdx=0, dishGalPhotos=[];

  function openDishModal(itemId, cat){
    const item=(RDATA.menu[cat]||[]).find(i=>i.id===itemId);
    if(!item)return;
    dishGalPhotos=item.photos||[];
    dishGalIdx=0;
    document.getElementById('dishModalName').textContent=item.name;
    document.getElementById('dishModalPrice').textContent=rupee(item.price);
    document.getElementById('dishModalDesc').textContent=item.desc;
    const typeEl=document.getElementById('dishModalType');
    typeEl.className='dish-modal-type '+(item.type==='veg'?'dish-type-veg':'dish-type-non-veg');
    typeEl.innerHTML=`<div class="dish-type-dot ${esc(item.type)}"></div>${item.type==='veg'?'Vegetarian':'Non-Vegetarian'}`;
    renderDishGallery();
    document.getElementById('dishModal').classList.add('open');
    document.body.style.overflow='hidden';
  }

  function renderDishGallery(){
    const gal=document.getElementById('dishModalGallery');
    if(!dishGalPhotos.length){
      gal.innerHTML='<div class="dish-no-photo"><i class="fas fa-camera"></i><p>No photos yet</p></div>';return;
    }
    const dots=dishGalPhotos.map((_,i)=>`<button class="dish-gallery-dot${i===dishGalIdx?' active':''}" onclick="dishGalTo(${i})"></button>`).join('');
    const imgs=dishGalPhotos.map((url,i)=>`<img src="${esc(url)}" alt="Dish photo ${i+1}" class="${i===dishGalIdx?'active':'hidden'}" loading="lazy" />`).join('');
    gal.innerHTML=`<div class="dish-gallery-main">${imgs}</div>
    <div class="dish-gallery-nav">
      <button class="dish-gal-btn" onclick="dishGalTo(${dishGalIdx-1})"><i class="fas fa-chevron-left"></i></button>
      <div class="dish-gallery-dots">${dots}</div>
      <div class="dish-gal-counter">${dishGalIdx+1}/${dishGalPhotos.length}</div>
      <button class="dish-gal-btn" onclick="dishGalTo(${dishGalIdx+1})"><i class="fas fa-chevron-right"></i></button>
    </div>`;
  }

  function dishGalTo(n){
    if(!dishGalPhotos.length)return;
    dishGalIdx=((n%dishGalPhotos.length)+dishGalPhotos.length)%dishGalPhotos.length;
    renderDishGallery();
  }

  function closeDishModal(){document.getElementById('dishModal').classList.remove('open');document.body.style.overflow='';}
  document.getElementById('dishModalClose').addEventListener('click',closeDishModal);
  document.getElementById('dishModal').addEventListener('click',e=>{if(e.target===document.getElementById('dishModal'))closeDishModal();});

  /* ================================================================
     CAROUSEL
     ================================================================ */
  let carCurrent=0,carTimer;
  function renderCarousel(){
    const track=document.getElementById('carouselTrack'),dotsEl=document.getElementById('carouselDots');
    if(!track||!dotsEl)return;
    const slides=RDATA.carousel||[];
    track.innerHTML=slides.map(s=>`<div class="carousel-slide"><img src="${esc(s.img)}" alt="${esc(s.name)}" loading="lazy"/><div class="carousel-caption"><h3>${esc(s.name)}</h3><p>${esc(s.desc)}</p><span class="dish-price">${rupee(s.price)}</span></div></div>`).join('');
    dotsEl.innerHTML=slides.map((_,i)=>`<button class="carousel-dot${i===0?' active':''}" onclick="carGoTo(${i})"></button>`).join('');
    carCurrent=0;track.style.transform='translateX(0)';clearInterval(carTimer);carTimer=setInterval(()=>carGoTo(carCurrent+1),4500);
  }
  function carGoTo(n){const s=RDATA.carousel||[];if(!s.length)return;carCurrent=((n%s.length)+s.length)%s.length;const t=document.getElementById('carouselTrack');if(t)t.style.transform=`translateX(-${carCurrent*100}%)`;document.querySelectorAll('.carousel-dot').forEach((d,i)=>d.classList.toggle('active',i===carCurrent));}
  document.getElementById('prevBtn').addEventListener('click',()=>{clearInterval(carTimer);carGoTo(carCurrent-1);carTimer=setInterval(()=>carGoTo(carCurrent+1),4500);});
  document.getElementById('nextBtn').addEventListener('click',()=>{clearInterval(carTimer);carGoTo(carCurrent+1);carTimer=setInterval(()=>carGoTo(carCurrent+1),4500);});
  let touchStartX=0;
  document.getElementById('carouselTrack').addEventListener('touchstart',e=>{touchStartX=e.touches[0].clientX;},{passive:true});
  document.getElementById('carouselTrack').addEventListener('touchend',e=>{const d=touchStartX-e.changedTouches[0].clientX;if(Math.abs(d)>50){clearInterval(carTimer);carGoTo(d>0?carCurrent+1:carCurrent-1);carTimer=setInterval(()=>carGoTo(carCurrent+1),4500);}});

  /* ================================================================
     GALLERY
     ================================================================ */
  function renderGallery(){
    const grid=document.getElementById('galleryGrid');
    if(!grid)return;
    const photos=RDATA.gallery||[];
    if(!photos.length){grid.innerHTML='<p style="color:var(--color-muted);text-align:center;padding:2rem;grid-column:1/-1">No gallery photos yet. Add from Admin Panel → 🖼️ Gallery.</p>';return;}
    grid.innerHTML=photos.map(p=>`<div class="gallery-item" data-full="${esc(p.url)}"><img src="${esc(p.url)}" alt="${esc(p.alt)}" loading="lazy"/><div class="gallery-item-overlay"><i class="fas fa-expand"></i></div></div>`).join('');
    grid.querySelectorAll('.gallery-item').forEach(item=>{item.addEventListener('click',()=>{document.getElementById('lightboxImg').src=item.dataset.full;document.getElementById('lightbox').classList.add('open');document.body.style.overflow='hidden';});});
  }

  /* ================================================================
     ADMIN — AUTH
     ================================================================ */
  let adminLoggedIn=false;
  function adminLogin(){
    const pw=document.getElementById('adminPwInput').value;
    const err=document.getElementById('pwError');
    if(pw===RDATA.info.adminPassword){
      adminLoggedIn=true;
      document.getElementById('adminPwScreen').style.display='none';
      document.getElementById('adminPanelContent').style.display='flex';
      document.getElementById('adminPanelContent').style.flexDirection='column';
      document.getElementById('adminLogoutBtn').style.display='block';
      err.style.display='none';document.getElementById('adminPwInput').value='';
      populateInfoForm();renderAdminMenu();renderAdminCarousel();renderAdminGallery();
      initBilling();
      renderAdminReviews();
    }else{err.style.display='block';document.getElementById('adminPwInput').value='';document.getElementById('adminPwInput').focus();}
  }
  function adminLogout(){adminLoggedIn=false;document.getElementById('adminPwScreen').style.display='flex';document.getElementById('adminPanelContent').style.display='none';document.getElementById('adminLogoutBtn').style.display='none';document.getElementById('adminPwInput').value='';document.getElementById('pwError').style.display='none';document.querySelectorAll('.adm-tab').forEach((t,i)=>t.classList.toggle('active',i===0));document.querySelectorAll('.adm-panel').forEach((p,i)=>p.classList.toggle('active',i===0));}
  function openAdminPanel(){document.getElementById('adminOverlay').classList.add('open');if(!adminLoggedIn){setTimeout(()=>document.getElementById('adminPwInput').focus(),100);}}
  function closeAdminPanel(){document.getElementById('adminOverlay').classList.remove('open');}
  function showToast(msg,dur){const t=document.getElementById('adminToast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),dur||2500);}

  /* ================================================================
     ADMIN — MENU
     ================================================================ */
  const CAT_LABELS={starters:'🌱 Starters',mains:'🍛 Mains',fastfood:'🍔 Fast Food',desserts:'🍨 Desserts',drinks:'🥤 Drinks'};
  let admMenuFilter = 'all';
  function setAdminMenuFilter(f, btn) {
    admMenuFilter = f;
    document.querySelectorAll('#adminMenuFilters .filter-btn').forEach(b=>b.classList.remove('active'));
    if(btn) btn.classList.add('active');
    renderAdminMenu();
  }

  let currentPhotoTarget={type:'',id:'',cat:''};

  function renderAdminMenu(){
    const c=document.getElementById('adminMenuContainer');if(!c)return;
    let html='';
    Object.keys(RDATA.menu).forEach(cat=>{
      let items=RDATA.menu[cat];
      if(admMenuFilter!=='all') items=items.filter(i=>i.type===admMenuFilter);
      html+=`<div class="adm-sec-head"><h3>${CAT_LABELS[cat]||cat}</h3><button class="adm-btn adm-btn-add-item" onclick="showAddForm('${cat}')"><i class="fas fa-plus"></i> Add Item</button></div>`;
      if(!items.length) html += `<p style="font-size:.85rem; color:#888; margin-bottom:1rem; padding-left:1rem;">No ${admMenuFilter!=='all'?admMenuFilter:''} items found.</p>`;
      items.forEach(item=>{
        const fp=item.photos&&item.photos.length?item.photos[0]:'';
        html+=`<div class="adm-item" id="adm-item-${item.id}">
          <div class="adm-item-dot ${esc(item.type)}"></div>
          <div class="adm-item-thumb">${fp?`<img src="${esc(fp)}" alt="" />`:'<span class="no-img"><i class="fas fa-camera"></i></span>'}</div>
          <div class="adm-item-info"><div class="adm-item-name">${esc(item.name)}</div><div class="adm-item-sub">${rupee(item.price)} · ${(item.photos||[]).length} photo(s)</div></div>
          <span class="adm-price-badge">${rupee(item.price)}</span>
          <div class="adm-actions">
            <button class="adm-btn adm-btn-edit" onclick="toggleEditForm('${item.id}','${cat}')"><i class="fas fa-pen"></i> Edit</button>
            <button class="adm-btn adm-btn-del" onclick="deleteItem('${item.id}','${cat}')"><i class="fas fa-trash"></i></button>
          </div>
        </div>
        <div class="adm-edit-form" id="ef-${item.id}">
          <div class="adm-form-row">
            <div class="adm-fg"><label>Item Name</label><input type="text" id="ef-name-${item.id}" value="${esc(item.name)}" /></div>
            <div class="adm-fg"><label>Price (₹)</label><input type="number" id="ef-price-${item.id}" value="${item.price}" min="1" /></div>
            <div class="adm-fg"><label>Type</label><select id="ef-type-${item.id}"><option value="veg" ${item.type==='veg'?'selected':''}>🟢 Vegetarian</option><option value="non-veg" ${item.type==='non-veg'?'selected':''}>🔴 Non-Vegetarian</option></select></div>
            <div class="adm-fg full"><label>Description</label><textarea id="ef-desc-${item.id}">${esc(item.desc)}</textarea></div>
          </div>
          <!-- Photo Manager -->
          <div class="photo-manager">
            <div class="photo-manager-title">📷 Dish Photos (${(item.photos||[]).length} added)</div>
            <div class="photo-list" id="pm-list-${item.id}">${(item.photos||[]).map((url,pi)=>`<div class="photo-thumb-wrap"><img src="${esc(url)}" alt=""/><button class="photo-thumb-del" onclick="removeItemPhoto('${item.id}','${cat}',${pi})">×</button></div>`).join('')}</div>
            <div class="photo-add-row">
              <input type="text" id="pm-url-${item.id}" placeholder="Paste image URL here..." />
              <button class="adm-btn adm-btn-green" onclick="addItemPhotoByUrl('${item.id}','${cat}')"><i class="fas fa-plus"></i> Add URL</button>
              <label class="photo-upload-label"><i class="fas fa-upload"></i> Upload<input type="file" accept="image/*" style="display:none" onchange="addItemPhotoByUpload(this,'${item.id}','${cat}')" /></label>
            </div>
          </div>
          <div class="adm-form-actions" style="margin-top:.75rem">
            <button class="adm-btn adm-btn-cancel" onclick="closeEditForm('${item.id}')">Cancel</button>
            <button class="adm-btn adm-btn-save" onclick="saveItem('${item.id}','${cat}')"><i class="fas fa-save"></i> Save</button>
          </div>
        </div>`;
      });
      html+=`<div class="adm-add-box" id="add-box-${cat}" style="display:none">
        <h4>➕ Add New ${CAT_LABELS[cat]||cat} Item</h4>
        <div class="adm-form-row">
          <div class="adm-fg"><label>Item Name *</label><input type="text" id="new-name-${cat}" placeholder="e.g. Tandoori Platter" /></div>
          <div class="adm-fg"><label>Price (₹) *</label><input type="number" id="new-price-${cat}" placeholder="350" min="1" /></div>
          <div class="adm-fg"><label>Type</label><select id="new-type-${cat}"><option value="veg">🟢 Vegetarian</option><option value="non-veg">🔴 Non-Vegetarian</option></select></div>
          <div class="adm-fg full"><label>Description *</label><textarea id="new-desc-${cat}" placeholder="Brief description of the dish…"></textarea></div>
        </div>
        <div class="adm-form-actions">
          <button class="adm-btn adm-btn-cancel" onclick="hideAddForm('${cat}')">Cancel</button>
          <button class="adm-btn adm-btn-save" onclick="addItem('${cat}')"><i class="fas fa-plus"></i> Add Item</button>
        </div>
      </div>`;
    });
    c.innerHTML=html;
  }

  function toggleEditForm(id,cat){const ef=document.getElementById('ef-'+id);if(!ef)return;const o=ef.classList.contains('open');document.querySelectorAll('.adm-edit-form.open').forEach(f=>f.classList.remove('open'));if(!o)ef.classList.add('open');}
  function closeEditForm(id){const ef=document.getElementById('ef-'+id);if(ef)ef.classList.remove('open');}

  function saveItem(id,cat){
    const name=document.getElementById('ef-name-'+id).value.trim();
    const price=parseFloat(document.getElementById('ef-price-'+id).value);
    const type=document.getElementById('ef-type-'+id).value;
    const desc=document.getElementById('ef-desc-'+id).value.trim();
    if(!name||!price||!desc){showToast('⚠️ Please fill all fields');return;}
    const item=RDATA.menu[cat].find(i=>i.id===id);
    if(item){item.name=name;item.price=price;item.type=type;item.desc=desc;}
    saveData();renderMenu();renderAdminMenu();renderCarousel();
    showToast('✅ Item updated!');
  }

  function deleteItem(id,cat){if(!confirm('Delete this item?'))return;RDATA.menu[cat]=RDATA.menu[cat].filter(i=>i.id!==id);saveData();renderMenu();renderAdminMenu();showToast('🗑️ Item deleted.');}
  function showAddForm(cat){document.querySelectorAll('[id^="add-box-"]').forEach(b=>b.style.display='none');const b=document.getElementById('add-box-'+cat);if(b){b.style.display='block';b.scrollIntoView({behavior:'smooth',block:'nearest'});}}
  function hideAddForm(cat){const b=document.getElementById('add-box-'+cat);if(b)b.style.display='none';}
  function addItem(cat){
    const name=document.getElementById('new-name-'+cat).value.trim();
    const price=parseFloat(document.getElementById('new-price-'+cat).value);
    const type=document.getElementById('new-type-'+cat).value;
    const desc=document.getElementById('new-desc-'+cat).value.trim();
    if(!name||!price||!desc){showToast('⚠️ Fill Name, Price & Description');return;}
    RDATA.menu[cat].push({id:genId(),name,price,desc,type,photos:[]});
    saveData();renderMenu();renderAdminMenu();showToast('✅ Item added!');
  }

  /* Photo management for menu items */
  function addItemPhotoByUrl(id,cat){
    const inp=document.getElementById('pm-url-'+id);
    const url=inp.value.trim();
    if(!url){showToast('⚠️ Paste an image URL first');return;}
    const item=RDATA.menu[cat].find(i=>i.id===id);
    if(item){if(!item.photos)item.photos=[];item.photos.push(url);}
    inp.value='';saveData();renderMenu();renderAdminMenu();showToast('📷 Photo added!');
    // Keep form open
    setTimeout(()=>{const ef=document.getElementById('ef-'+id);if(ef)ef.classList.add('open');},50);
  }

  function addItemPhotoByUpload(input,id,cat){
    const file=input.files[0];if(!file)return;
    if(file.size>600*1024){showToast('⚠️ Image too large (max 600KB). Use URL instead.');return;}
    const reader=new FileReader();
    reader.onload=e=>{
      const item=RDATA.menu[cat].find(i=>i.id===id);
      if(item){if(!item.photos)item.photos=[];item.photos.push(e.target.result);}
      saveData();renderMenu();renderAdminMenu();showToast('📷 Photo uploaded!');
      setTimeout(()=>{const ef=document.getElementById('ef-'+id);if(ef)ef.classList.add('open');},50);
    };
    reader.readAsDataURL(file);input.value='';
  }

  function removeItemPhoto(id,cat,idx){
    const item=RDATA.menu[cat].find(i=>i.id===id);
    if(item&&item.photos){item.photos.splice(idx,1);}
    saveData();renderMenu();renderAdminMenu();showToast('🗑️ Photo removed.');
    setTimeout(()=>{const ef=document.getElementById('ef-'+id);if(ef)ef.classList.add('open');},50);
  }

  /* ================================================================
     ADMIN — CAROUSEL
     ================================================================ */
  function renderAdminCarousel(){
    const c=document.getElementById('carouselAdminList');if(!c)return;
    c.innerHTML=RDATA.carousel.map((slide,i)=>`
    <div class="adm-slide-card">
      <div class="adm-slide-head">
        <div class="adm-slide-num">${i+1}</div>
        <div class="adm-slide-img-prev"><img src="${esc(slide.img)}" alt="" /></div>
        <div class="adm-slide-info"><div class="adm-slide-name">${esc(slide.name)}</div><div class="adm-item-sub">${rupee(slide.price)}</div></div>
        <div class="adm-actions">
          <button class="adm-btn adm-btn-edit" onclick="toggleCarouselForm('${slide.id}')"><i class="fas fa-pen"></i> Edit</button>
          <button class="adm-btn adm-btn-del" onclick="deleteCarouselSlide('${slide.id}')"><i class="fas fa-trash"></i></button>
        </div>
      </div>
      <div class="adm-edit-form" id="cef-${slide.id}" style="margin:0;border-radius:0 0 10px 10px;border-top:none">
        <div class="adm-form-row">
          <div class="adm-fg"><label>Dish Name</label><input type="text" id="cef-name-${slide.id}" value="${esc(slide.name)}" /></div>
          <div class="adm-fg"><label>Price (₹)</label><input type="number" id="cef-price-${slide.id}" value="${slide.price}" min="1" /></div>
          <div class="adm-fg full"><label>Description</label><textarea id="cef-desc-${slide.id}">${esc(slide.desc)}</textarea></div>
          <div class="adm-fg full"><label>Image URL</label><input type="url" id="cef-img-${slide.id}" value="${esc(slide.img)}" /></div>
        </div>
        <div class="adm-form-actions">
          <button class="adm-btn adm-btn-cancel" onclick="toggleCarouselForm('${slide.id}')">Cancel</button>
          <button class="adm-btn adm-btn-save" onclick="saveCarouselItem('${slide.id}')"><i class="fas fa-save"></i> Save</button>
        </div>
      </div>
    </div>`).join('');
  }

  function toggleCarouselForm(id){const ef=document.getElementById('cef-'+id);if(!ef)return;const o=ef.classList.contains('open');document.querySelectorAll('[id^="cef-"].open').forEach(f=>f.classList.remove('open'));if(!o)ef.classList.add('open');}
  function saveCarouselItem(id){
    const slide=RDATA.carousel.find(c=>c.id===id);if(!slide)return;
    const name=document.getElementById('cef-name-'+id).value.trim();
    const price=parseFloat(document.getElementById('cef-price-'+id).value);
    const desc=document.getElementById('cef-desc-'+id).value.trim();
    const img=document.getElementById('cef-img-'+id).value.trim();
    if(!name||!price){showToast('⚠️ Name and price required');return;}
    slide.name=name;slide.price=price;slide.desc=desc;if(img)slide.img=img;
    saveData();renderCarousel();renderAdminCarousel();showToast('✅ Carousel slide updated!');
  }
  function deleteCarouselSlide(id){if(!confirm('Delete this carousel slide?'))return;RDATA.carousel=RDATA.carousel.filter(c=>c.id!==id);saveData();renderCarousel();renderAdminCarousel();showToast('🗑️ Slide deleted.');}
  function showAddSlideForm(){document.getElementById('add-slide-box').style.display='block';}
  function hideAddSlideForm(){document.getElementById('add-slide-box').style.display='none';}
  function addCarouselSlide(){
    const name=document.getElementById('ns-name').value.trim();
    const price=parseFloat(document.getElementById('ns-price').value);
    const desc=document.getElementById('ns-desc').value.trim();
    const img=document.getElementById('ns-img').value.trim();
    if(!name||!price||!img){showToast('⚠️ Name, Price & Image URL required');return;}
    RDATA.carousel.push({id:genId(),name,price,desc,img});
    saveData();renderCarousel();renderAdminCarousel();
    ['ns-name','ns-price','ns-desc','ns-img'].forEach(id=>{const el=document.getElementById(id);if(el)el.value='';});
    hideAddSlideForm();showToast('✅ Carousel slide added!');
  }

  /* ================================================================
     ADMIN — GALLERY
     ================================================================ */
  function renderAdminGallery(){
    const grid=document.getElementById('galleryAdminGrid');if(!grid)return;
    const photos=RDATA.gallery||[];
    if(!photos.length){grid.innerHTML='<p style="color:var(--color-muted);font-size:.85rem;grid-column:1/-1">No photos yet. Add below.</p>';return;}
    grid.innerHTML=photos.map((p,i)=>`<div class="gal-admin-item"><img src="${esc(p.url)}" alt="${esc(p.alt)}" /><button class="gal-admin-del" onclick="deleteGalleryPhoto('${p.id}')" title="Remove">×</button></div>`).join('');
    renderGallery();
  }

  function addGalleryPhotoByUrl(){
    const url=document.getElementById('gal-new-url').value.trim();
    const alt=document.getElementById('gal-new-alt').value.trim()||'Gallery photo';
    if(!url){showToast('⚠️ Please enter an image URL');return;}
    if(!RDATA.gallery)RDATA.gallery=[];
    RDATA.gallery.push({id:genId(),url,alt});
    document.getElementById('gal-new-url').value='';document.getElementById('gal-new-alt').value='';
    saveData();renderAdminGallery();showToast('🖼️ Photo added to gallery!');
  }

  function addGalleryByUpload(input){
    const file=input.files[0];if(!file)return;
    if(file.size>800*1024){showToast('⚠️ Image too large (max 800KB). Use URL instead.');return;}
    const reader=new FileReader();
    reader.onload=e=>{
      if(!RDATA.gallery)RDATA.gallery=[];
      RDATA.gallery.push({id:genId(),url:e.target.result,alt:file.name});
      saveData();renderAdminGallery();showToast('🖼️ Photo uploaded to gallery!');
    };
    reader.readAsDataURL(file);input.value='';
  }

  function deleteGalleryPhoto(id){if(!confirm('Remove this photo?'))return;RDATA.gallery=(RDATA.gallery||[]).filter(p=>p.id!==id);saveData();renderAdminGallery();showToast('🗑️ Photo removed.');}

  /* ================================================================
     ADMIN — BILLING CALCULATOR
     ================================================================ */
  let billCart=[];
  let billActiveCat='all';

  function initBilling(){
    billCart=[];
    // Build cat tabs
    const tabs=document.getElementById('billCatTabs');
    if(tabs){tabs.innerHTML=['all','starters','mains','fastfood','desserts','drinks'].map(c=>`<button class="billing-cat-btn${c==='all'?' active':''}" onclick="setBillCat('${c}')">${c==='all'?'All':CAT_LABELS[c]||c}</button>`).join('');}
    renderBillingItems();
    updateBillTotals();
  }

  function setBillCat(cat){billActiveCat=cat;document.querySelectorAll('.billing-cat-btn').forEach(b=>b.classList.toggle('active',b.textContent.toLowerCase()===cat||(cat==='all'&&b.textContent==='All')));renderBillingItems();}

  function renderBillingItems(){
    const list=document.getElementById('billItemsList');if(!list)return;
    const search=(document.getElementById('billSearch').value||'').toLowerCase();
    let allItems=[];
    const cats=billActiveCat==='all'?Object.keys(RDATA.menu):[billActiveCat];
    cats.forEach(cat=>{(RDATA.menu[cat]||[]).forEach(item=>{allItems.push({...item,_cat:cat});});});
    if(search)allItems=allItems.filter(i=>i.name.toLowerCase().includes(search)||i.desc.toLowerCase().includes(search));
    if(!allItems.length){list.innerHTML='<div class="billing-empty">No items found</div>';return;}
    list.innerHTML=allItems.map(item=>`<div class="billing-menu-item" onclick="addToBill('${item.id}','${item._cat}')">
      <div class="billing-menu-item-dot ${esc(item.type)}"></div>
      <div class="billing-menu-item-name">${esc(item.name)}</div>
      <div class="billing-menu-item-price">${rupee(item.price)}</div>
      <button class="billing-menu-item-add"><i class="fas fa-plus"></i></button>
    </div>`).join('');
  }

  function addToBill(id,cat){
    const item=RDATA.menu[cat].find(i=>i.id===id);if(!item)return;
    const existing=billCart.find(c=>c.id===id);
    if(existing)existing.qty++;
    else billCart.push({id,cat,name:item.name,price:item.price,qty:1});
    renderBillCart();updateBillTotals();
  }

  function renderBillCart(){
    const el=document.getElementById('billCartItems');if(!el)return;
    if(!billCart.length){el.innerHTML='<div class="billing-empty"><i class="fas fa-shopping-cart" style="font-size:2rem;color:#ddd;display:block;margin-bottom:.5rem"></i>Add items from the menu</div>';document.getElementById('billItemCount').textContent='0 items';return;}
    const total=billCart.reduce((s,c)=>s+c.qty,0);
    document.getElementById('billItemCount').textContent=total+' item'+(total>1?'s':'');
    el.innerHTML=billCart.map((c,i)=>`<div class="bill-item">
      <div class="bill-item-name">${esc(c.name)}</div>
      <div class="bill-qty-ctrl">
        <button class="bill-qty-btn" onclick="changeBillQty(${i},-1)">−</button>
        <span class="bill-qty-num">${c.qty}</span>
        <button class="bill-qty-btn" onclick="changeBillQty(${i},1)">+</button>
      </div>
      <div class="bill-item-total">${rupee(c.price*c.qty)}</div>
      <button class="bill-item-del" onclick="removeBillItem(${i})"><i class="fas fa-times"></i></button>
    </div>`).join('');
  }

  function changeBillQty(idx,delta){billCart[idx].qty+=delta;if(billCart[idx].qty<=0)billCart.splice(idx,1);renderBillCart();updateBillTotals();}
  function removeBillItem(idx){billCart.splice(idx,1);renderBillCart();updateBillTotals();}
  function clearBill(){billCart=[];document.getElementById('billTable').value='';document.getElementById('billCustomer').value='';renderBillCart();updateBillTotals();}

  function updateBillTotals(){
    const subtotal=billCart.reduce((s,c)=>s+c.price*c.qty,0);
    const gstPct=parseFloat(document.getElementById('billGst').value)||0;
    const svcPct=parseFloat(document.getElementById('billService').value)||0;
    const gstAmt=subtotal*gstPct/100;
    const svcAmt=subtotal*svcPct/100;
    const total=subtotal+gstAmt+svcAmt;
    document.getElementById('billSubtotal').textContent=rupee(subtotal);
    document.getElementById('billGstAmt').textContent=rupee(gstAmt);
    document.getElementById('billSvcAmt').textContent=rupee(svcAmt);
    document.getElementById('billTotal').textContent=rupee(total);
    document.getElementById('billGstLabel').textContent=gstPct;
    document.getElementById('billSvcLabel').textContent=svcPct;
  }

  function switchBillView(view, btn) {
    document.querySelectorAll('.adm-bill-tab').forEach(b=>b.classList.remove('active'));
    if(btn) btn.classList.add('active');
    if(view==='new') {
      document.getElementById('billNewView').style.display='grid';
      document.getElementById('billHistoryView').style.display='none';
    } else {
      document.getElementById('billNewView').style.display='none';
      document.getElementById('billHistoryView').style.display='block';
      renderBillHistory();
    }
  }

  function printBill(){
    if(!billCart.length){showToast('⚠️ Add items to generate a bill');return;}
    const info=RDATA.info;
    const subtotal=billCart.reduce((s,c)=>s+c.price*c.qty,0);
    const gstPct=parseFloat(document.getElementById('billGst').value)||0;
    const svcPct=parseFloat(document.getElementById('billService').value)||0;
    const gstAmt=subtotal*gstPct/100;const svcAmt=subtotal*svcPct/100;const total=subtotal+gstAmt+svcAmt;
    const tableNo=document.getElementById('billTable').value||'—';
    const customer=document.getElementById('billCustomer').value||'Valued Guest';

    const now=Date.now();
    const billId = 'B' + now.toString().slice(-6);
    if(!RDATA.billingHistory) RDATA.billingHistory=[];
    RDATA.billingHistory.push({
       id: billId, timestamp: now, items: [...billCart], subtotal, gstPct, svcPct, gstAmt, svcAmt, total, tableNo, customer
    });
    saveData();
    showToast('✅ Bill saved to history');

    const dateStr=new Date(now).toLocaleDateString('en-IN')+' '+new Date(now).toLocaleTimeString('en-IN',{hour:'2-digit',minute:'2-digit'});
    const itemsHtml=billCart.map(c=>`<div class="print-item"><span class="print-item-name">${esc(c.name)} x${c.qty}</span><span>${rupee(c.price*c.qty)}</span></div>`).join('');
    const billHtml=`<div class="print-header"><h1>${esc(info.name)}</h1><p>${esc(info.address.replace(/\\n/g,', '))}</p><p>📞 ${esc(info.phone1)}</p><p style="margin-top:.5rem;font-size:.75rem">Bill #${billId} | Date: ${dateStr}</p><p>Table: ${esc(tableNo)} | Customer: ${esc(customer)}</p></div><div class="print-items">${itemsHtml}</div><div class="print-total-section"><p><span>Subtotal</span><span>${rupee(subtotal)}</span></p>${gstPct?`<p><span>GST (${gstPct}%)</span><span>${rupee(gstAmt)}</span></p>`:''} ${svcPct?`<p><span>Service Charge (${svcPct}%)</span><span>${rupee(svcAmt)}</span></p>`:''}<p class="grand"><span>TOTAL</span><span>${rupee(total)}</span></p></div><div class="print-footer"><p>Thank you for dining with us!</p><p>${esc(info.name)} — ${esc(info.email)}</p></div>`;
    document.getElementById('printBillArea').innerHTML=billHtml;
    window.print();
  }

  function renderBillHistory() {
    const list = document.getElementById('billHistoryList');
    if(!RDATA.billingHistory || !RDATA.billingHistory.length) {
      list.innerHTML = '<div style="text-align:center; padding:2rem; color:#888;">No billing history found.</div>';
      return;
    }
    const hist = [...RDATA.billingHistory].sort((a,b)=>b.timestamp - a.timestamp);
    list.innerHTML = hist.map(b => {
      const d = new Date(b.timestamp);
      const dateStr = d.toLocaleDateString('en-IN')+' '+d.toLocaleTimeString('en-IN',{hour:'2-digit',minute:'2-digit'});
      const itemsList = b.items.map(i => `<div class="bh-item"><span>${esc(i.name)} x${i.qty}</span><span>${rupee(i.price*i.qty)}</span></div>`).join('');
      return `<div class="bill-hist-card" onclick="this.classList.toggle('expanded')">
        <div class="bill-hist-head">
          <span class="bill-hist-id">#${b.id}</span>
          <span class="bill-hist-date">${dateStr}</span>
        </div>
        <div class="bill-hist-info">
          <span>${b.items.length} items | Table: ${esc(b.tableNo)}</span>
          <span class="bill-hist-total">${rupee(b.total)}</span>
        </div>
        <div class="bill-hist-details" onclick="event.stopPropagation()">
          <div style="margin-bottom:.5rem; font-size:.85rem; color:#555;">Customer: ${esc(b.customer)}</div>
          ${itemsList}
          <div style="margin-top:.5rem; border-top:1px solid #eee; padding-top:.5rem; font-size:.8rem;">
             <div style="display:flex; justify-content:space-between"><span>Subtotal:</span><span>${rupee(b.subtotal)}</span></div>
             ${b.gstPct?`<div style="display:flex; justify-content:space-between"><span>GST (${b.gstPct}%):</span><span>${rupee(b.gstAmt)}</span></div>`:''}
             ${b.svcPct?`<div style="display:flex; justify-content:space-between"><span>Service (${b.svcPct}%):</span><span>${rupee(b.svcAmt)}</span></div>`:''}
          </div>
          <button class="bh-print-btn" onclick="printPastBill('${b.id}')"><i class="fas fa-print"></i> Print Duplicate</button>
        </div>
      </div>`;
    }).join('');
  }

  function printPastBill(id) {
     const b = (RDATA.billingHistory||[]).find(x => x.id === id);
     if(!b) return;
     const info=RDATA.info;
     const dateStr=new Date(b.timestamp).toLocaleDateString('en-IN')+' '+new Date(b.timestamp).toLocaleTimeString('en-IN',{hour:'2-digit',minute:'2-digit'});
     const itemsHtml=b.items.map(c=>`<div class="print-item"><span class="print-item-name">${esc(c.name)} x${c.qty}</span><span>${rupee(c.price*c.qty)}</span></div>`).join('');
     const billHtml=`<div class="print-header"><h1>${esc(info.name)}</h1><p>${esc(info.address.replace(/\\n/g,', '))}</p><p>📞 ${esc(info.phone1)}</p><p style="margin-top:.5rem;font-size:.75rem">Bill #${b.id} (DUPLICATE) | Date: ${dateStr}</p><p>Table: ${esc(b.tableNo)} | Customer: ${esc(b.customer)}</p></div><div class="print-items">${itemsHtml}</div><div class="print-total-section"><p><span>Subtotal</span><span>${rupee(b.subtotal)}</span></p>${b.gstPct?`<p><span>GST (${b.gstPct}%)</span><span>${rupee(b.gstAmt)}</span></p>`:''} ${b.svcPct?`<p><span>Service Charge (${b.svcPct}%)</span><span>${rupee(b.svcAmt)}</span></p>`:''}<p class="grand"><span>TOTAL</span><span>${rupee(b.total)}</span></p></div><div class="print-footer"><p>Thank you for dining with us!</p><p>${esc(info.name)} — ${esc(info.email)}</p></div>`;
     document.getElementById('printBillArea').innerHTML=billHtml;
     window.print();
  }

  /* ================================================================
     ADMIN — INFO
     ================================================================ */
  function populateInfoForm(){
    const I=RDATA.info;
    const map={'inf-name':'name','inf-heroTag':'heroTag','inf-tagline':'tagline','inf-years':'yearsOfExcellence','inf-chef':'chefName','inf-chefTitle':'chefTitle','inf-phone1':'phone1','inf-phone2':'phone2','inf-email':'email','inf-address':'address','inf-whatsapp':'whatsapp','inf-password':'adminPassword'};
    Object.keys(map).forEach(elId=>{const el=document.getElementById(elId);if(el)el.value=I[map[elId]]||'';});
  }

  function saveInfo(){
    const map={'inf-name':'name','inf-heroTag':'heroTag','inf-tagline':'tagline','inf-years':'yearsOfExcellence','inf-chef':'chefName','inf-chefTitle':'chefTitle','inf-phone1':'phone1','inf-phone2':'phone2','inf-email':'email','inf-address':'address','inf-whatsapp':'whatsapp','inf-password':'adminPassword'};
    Object.keys(map).forEach(elId=>{const el=document.getElementById(elId);if(el&&el.value.trim())RDATA.info[map[elId]]=el.value.trim();});
    saveData();renderInfo();showToast('✅ Info saved!');
  }

  /* ================================================================
     ADMIN — DATA BACKUP
     ================================================================ */
  function exportData(){const json=JSON.stringify(RDATA,null,2);const b=new Blob([json],{type:'application/json'});const u=URL.createObjectURL(b);const a=document.createElement('a');a.href=u;a.download='restaurant-data-'+new Date().toISOString().split('T')[0]+'.json';a.click();URL.revokeObjectURL(u);showToast('📥 Exported!');}
  document.getElementById('importFileInput').addEventListener('change',function(e){const file=e.target.files[0];if(!file)return;const r=new FileReader();r.onload=ev=>{try{const p=JSON.parse(ev.target.result);if(p.info&&p.menu&&p.carousel){RDATA=p;saveData();renderAll();populateInfoForm();renderAdminMenu();renderAdminCarousel();renderAdminGallery();showToast('✅ Data imported!');}else showToast('❌ Invalid file format.');}catch(err){showToast('❌ Failed to parse file.');}};r.readAsText(file);this.value='';});
  function resetData(){if(!confirm('Reset ALL data to original defaults?'))return;RDATA=JSON.parse(JSON.stringify(DEFAULT_DATA));saveData();renderAll();populateInfoForm();renderAdminMenu();renderAdminCarousel();renderAdminGallery();showToast('🔄 Reset to defaults!');}

  /* ================================================================
     NAV, HAMBURGER, HERO
     ================================================================ */
  const navbar=document.getElementById('navbar');
  const navLinks=document.querySelectorAll('.nav-links a[data-section]');
  const sections=document.querySelectorAll('section[id]');
  const handleScroll = () => {
    const st = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    navbar.classList.toggle('scrolled', st > 60);
    let cur = '';
    sections.forEach(sec => {
      if (sec.offsetTop - 120 <= st) cur = sec.id;
    });
    navLinks.forEach(a => a.classList.toggle('active', a.dataset.section === cur));
  };
  window.addEventListener('scroll', handleScroll);
  document.body.addEventListener('scroll', handleScroll); // For some mobile browsers where body scrolls
  document.addEventListener('scroll', handleScroll, true); // Capture phase to catch all scrolls
  const hamburger=document.getElementById('hamburger'),mobileMenu=document.getElementById('mobileMenu');
  hamburger.addEventListener('click',()=>{hamburger.classList.toggle('open');mobileMenu.classList.toggle('open');});
  document.querySelectorAll('.mobile-link').forEach(l=>l.addEventListener('click',()=>{hamburger.classList.remove('open');mobileMenu.classList.remove('open');}));
  window.addEventListener('load',()=>{document.getElementById('heroBg').classList.add('zoomed');});

  /* MENU TABS */
  document.querySelectorAll('.tab-btn').forEach(btn=>{btn.addEventListener('click',()=>{document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));document.querySelectorAll('.menu-panel').forEach(p=>p.classList.remove('active'));btn.classList.add('active');const panel=document.getElementById('tab-'+btn.dataset.tab);if(panel){panel.classList.add('active');panel.querySelectorAll('.fade-in').forEach(el=>{el.classList.remove('visible');setTimeout(()=>el.classList.add('visible'),20);});}});});

  /* LIGHTBOX */
  const lightbox=document.getElementById('lightbox'),lightboxImg=document.getElementById('lightboxImg'),lightboxClose=document.getElementById('lightboxClose');
  function closeLightbox(){lightbox.classList.remove('open');document.body.style.overflow='';setTimeout(()=>{lightboxImg.src='';},300);}
  lightboxClose.addEventListener('click',closeLightbox);
  lightbox.addEventListener('click',e=>{if(e.target===lightbox)closeLightbox();});

  /* RESERVATION FORM */
  document.getElementById('res-date').setAttribute('min',new Date().toISOString().split('T')[0]);
  document.getElementById('reservationForm').addEventListener('submit',function(e){e.preventDefault();this.style.display='none';document.getElementById('formSuccess').style.display='block';});

  /* FADE-IN */
  const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('visible');});},{threshold:0.12});
  document.querySelectorAll('.fade-in').forEach(el=>observer.observe(el));

  /* NEWSLETTER */
  function handleNewsletter(btn){const input=btn.previousElementSibling;const email=input.value.trim();if(!email||!email.includes('@')){input.style.borderColor='#c62828';input.focus();return;}btn.textContent='✓ Subscribed!';btn.style.background='#2e7d32';btn.style.color='#fff';btn.disabled=true;input.value='';input.style.borderColor='';}

  /* ADMIN PANEL EVENTS */
  document.getElementById('adminTrigger').addEventListener('click',openAdminPanel);
  document.getElementById('adminClose').addEventListener('click',closeAdminPanel);
  document.getElementById('adminOverlay').addEventListener('click',e=>{if(e.target===document.getElementById('adminOverlay'))closeAdminPanel();});
  document.addEventListener('keydown',e=>{if(e.ctrlKey&&e.shiftKey&&e.key==='A'){e.preventDefault();openAdminPanel();}if(e.key==='Escape'){closeLightbox();closeAdminPanel();closeDishModal();}});
  document.querySelectorAll('.adm-tab').forEach(tab=>{tab.addEventListener('click',()=>{document.querySelectorAll('.adm-tab').forEach(t=>t.classList.remove('active'));document.querySelectorAll('.adm-panel').forEach(p=>p.classList.remove('active'));tab.classList.add('active');const panel=document.getElementById('adm-tab-'+tab.dataset.admTab);if(panel)panel.classList.add('active');if(tab.dataset.admTab==='billing')initBilling();});});

  
  /* ================================================================
     REVIEWS SYSTEM
     ================================================================ */
  function renderReviews(){
    const grid = document.getElementById('reviewsGrid');
    if(!grid) return;
    const revs = RDATA.reviews || [];
    if(!revs.length) { grid.innerHTML = '<p style="color:rgba(255,255,255,0.7); grid-column:1/-1; text-align:center;">No reviews yet. Be the first to share your experience!</p>'; return; }
    grid.innerHTML = revs.map((r,i) => {
       const delay = i%3===1 ? ' delay-1' : (i%3===2 ? ' delay-2' : '');
       let starsHtml = '';
       for(let s=1; s<=5; s++) {
          if(r.rating >= s) starsHtml += '<i class="fas fa-star"></i>';
          else if(r.rating >= s-0.5) starsHtml += '<i class="fas fa-star-half-alt"></i>';
          else starsHtml += '<i class="far fa-star"></i>';
       }
       return `<div class="review-card fade-in${delay}">
         <div class="review-stars">${starsHtml}</div>
         <p class="review-text">${esc(r.text)}</p>
         <div class="review-author">
           <div class="review-avatar"><img src="${esc(r.avatar||'https://ui-avatars.com/api/?name='+encodeURIComponent(r.name)+'&background=C9A84C&color=1A1008')}" alt="" loading="lazy" /></div>
           <div><div class="review-name">${esc(r.name)}</div><div class="review-date">${esc(r.date)}</div></div>
         </div>
       </div>`;
    }).join('');
    // re-observe fade-ins
    if (typeof observer !== 'undefined') grid.querySelectorAll('.fade-in').forEach(el=>observer.observe(el));
  }

  function openReviewModal() { document.getElementById('reviewModal').classList.add('open'); document.body.style.overflow='hidden'; }
  function closeReviewModal() { document.getElementById('reviewModal').classList.remove('open'); document.body.style.overflow=''; }
  document.getElementById('reviewModal').addEventListener('click', e => { if(e.target===document.getElementById('reviewModal')) closeReviewModal(); });

  let curRating = 5;
  document.querySelectorAll('#ratingInput i').forEach(star => {
     star.addEventListener('click', (e) => {
        curRating = parseInt(e.target.dataset.val);
        document.getElementById('revRating').value = curRating;
        document.querySelectorAll('#ratingInput i').forEach((s, i) => {
           s.className = (i < curRating) ? 'fas fa-star' : 'far fa-star';
        });
     });
  });

  document.getElementById('writeReviewForm').addEventListener('submit', function(e) {
     e.preventDefault();
     const name = document.getElementById('revName').value.trim();
     let text = document.getElementById('revText').value.trim();
     const rating = parseInt(document.getElementById('revRating').value);
     if(!name || !text) return;
     if(!text.startsWith('"')) text = '"' + text + '"';
     const now = new Date();
     const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
     const dateStr = 'Visited ' + months[now.getMonth()] + ' ' + now.getFullYear();
     if(!RDATA.reviews) RDATA.reviews = [];
     RDATA.reviews.unshift({ id: genId(), name, text, rating, date: dateStr, avatar: '' });
     saveData();
     renderReviews();
     if(adminLoggedIn) renderAdminReviews();
     closeReviewModal();
     this.reset();
     curRating = 5;
     document.getElementById('revRating').value = 5;
     document.querySelectorAll('#ratingInput i').forEach(s=>s.className='fas fa-star');
     // Small Toast message
     const t = document.createElement('div');
     t.textContent = '🌟 Thank you for your review!';
     t.style.cssText = 'position:fixed; bottom:2rem; left:50%; transform:translateX(-50%); background:#2e7d32; color:#fff; padding:.8rem 1.5rem; border-radius:50px; z-index:9999; font-weight:700; box-shadow:0 10px 30px rgba(0,0,0,0.3); transition:opacity 0.4s; opacity:0;';
     document.body.appendChild(t);
     setTimeout(()=>t.style.opacity='1', 10);
     setTimeout(()=>{t.style.opacity='0'; setTimeout(()=>t.remove(),400);}, 3000);
  });

  function renderAdminReviews() {
     const list = document.getElementById('adminReviewsList');
     if(!list) return;
     const revs = RDATA.reviews || [];
     if(!revs.length) { list.innerHTML = '<div style="padding:1rem; text-align:center; color:#888;">No reviews yet.</div>'; return; }
     list.innerHTML = revs.map(r => `
        <div class="adm-item" style="align-items:flex-start; margin-bottom:0.5rem; padding:1rem;">
           <div class="adm-item-info">
             <div style="font-weight:700; color:var(--color-dark); font-size:0.95rem;">${esc(r.name)} <span style="color:#f59e0b; font-size:0.85rem; margin-left:0.4rem">${r.rating} ★</span></div>
             <div style="font-size:0.75rem; color:#777; margin:0.3rem 0">${esc(r.date)}</div>
             <div style="font-size:0.85rem; color:#444; font-style:italic; line-height:1.4">${esc(r.text)}</div>
           </div>
           <div class="adm-actions" style="align-self:flex-start; margin-left:1rem;">
              <button class="adm-btn adm-btn-del" onclick="deleteReview('${r.id}')"><i class="fas fa-trash"></i> Delete</button>
           </div>
        </div>
     `).join('');
  }

  function deleteReview(id) {
     if(!confirm('Delete this customer review?')) return;
     RDATA.reviews = RDATA.reviews.filter(r => r.id !== id);
     saveData();
     renderReviews();
     renderAdminReviews();
     showToast('🗑️ Review deleted.');
  }
  
  /* INIT */
  loadData();
  renderAll();
  
