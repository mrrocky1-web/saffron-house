# -*- coding: utf-8 -*-
import re

path = r"c:\Users\Mobasssir Alam\Downloads\frontend-customer\vs code testing\index.html"
with open(path, 'r', encoding='utf-8') as f:
    html = f.read()

# 1. Add CSS
css_to_add = '''
/* Menu Filters & Admin Bill History additions */
.menu-filters { display:flex; justify-content:center; gap:.75rem; margin-bottom:2rem; flex-wrap:wrap; }
.filter-btn { padding:.45rem 1.1rem; border-radius:50px; font-size:.85rem; font-weight:700; border:2px solid transparent; background:var(--color-white); color:var(--color-muted); cursor:pointer; display:flex; align-items:center; gap:.4rem; transition:all var(--trans); box-shadow:0 2px 8px rgba(0,0,0,.05); }
.filter-btn:hover, .filter-btn.active { border-color:var(--color-primary); color:var(--color-primary); }
.filter-dot { width:10px; height:10px; border-radius:50%; display:inline-block; }
.filter-dot.veg { background:#2e7d32; }
.filter-dot.non-veg { background:#c62828; }

.adm-bill-tabs { display:flex; gap:1rem; border-bottom:2px solid #e8e0d5; margin-bottom:1rem; }
.adm-bill-tab { background:none; border:none; padding:.5rem .75rem; font-size:.85rem; font-weight:700; color:var(--color-muted); cursor:pointer; border-bottom:3px solid transparent; margin-bottom:-2px; transition:all .2s; }
.adm-bill-tab:hover { color:var(--color-primary); }
.adm-bill-tab.active { color:var(--color-primary); border-bottom-color:var(--color-primary); }
.bill-hist-list { display:flex; flex-direction:column; gap:.75rem; max-height:450px; overflow-y:auto; padding-right:.5rem; }
.bill-hist-card { background:#fff; border:1px solid #e8e0d5; border-radius:8px; padding:1rem; cursor:pointer; transition:all .2s; }
.bill-hist-card:hover { border-color:var(--color-secondary); box-shadow:0 4px 12px rgba(0,0,0,.05); }
.bill-hist-card.expanded { border-color:var(--color-primary); }
.bill-hist-head { display:flex; justify-content:space-between; align-items:center; margin-bottom:.4rem; }
.bill-hist-id { font-weight:700; color:var(--color-dark); font-size:.95rem; }
.bill-hist-date { font-size:.75rem; color:var(--color-muted); }
.bill-hist-info { display:flex; justify-content:space-between; font-size:.85rem; color:var(--color-muted); }
.bill-hist-total { font-weight:700; color:var(--color-primary); font-size:1rem; }
.bill-hist-details { display:none; margin-top:.75rem; padding-top:.75rem; border-top:1px dashed #e8e0d5; }
.bill-hist-card.expanded .bill-hist-details { display:block; cursor:default; }
.bh-item { display:flex; justify-content:space-between; font-size:.8rem; margin-bottom:.25rem; color:var(--color-dark); }
.bh-print-btn { margin-top:.75rem; background:#1a3c6e; color:#fff; border:none; padding:.4rem .8rem; border-radius:4px; font-size:.75rem; cursor:pointer; display:flex; align-items:center; gap:.4rem; font-weight:700; }
.bh-print-btn:hover { background:#12305a; }
'''
html = html.replace('/* PRINT STYLES */', css_to_add + '\n    /* PRINT STYLES */')

# 2. Customer Tabs HTML
old_tabs = '''<button class="tab-btn active" data-tab="starters"><i class="fas fa-seedling"></i> Starters</button>
        <button class="tab-btn" data-tab="mains"><i class="fas fa-bowl-food"></i> Mains</button>
        <button class="tab-btn" data-tab="desserts"><i class="fas fa-ice-cream"></i> Desserts</button>
        <button class="tab-btn" data-tab="drinks"><i class="fas fa-glass-water"></i> Drinks</button>'''
new_tabs = '''<button class="tab-btn active" data-tab="starters"><i class="fas fa-seedling"></i> Starters</button>
        <button class="tab-btn" data-tab="mains"><i class="fas fa-bowl-food"></i> Mains</button>
        <button class="tab-btn" data-tab="fastfood"><i class="fas fa-hamburger"></i> Fast Food</button>
        <button class="tab-btn" data-tab="desserts"><i class="fas fa-ice-cream"></i> Desserts</button>
        <button class="tab-btn" data-tab="drinks"><i class="fas fa-glass-water"></i> Drinks</button>'''
html = html.replace(old_tabs, new_tabs)

# 3. Customer Panels HTML & Filter
old_panels = '''<div class="menu-panel active" id="tab-starters"></div>
      <div class="menu-panel" id="tab-mains"></div>
      <div class="menu-panel" id="tab-desserts"></div>
      <div class="menu-panel" id="tab-drinks"></div>'''
new_panels = '''
      <div class="menu-filters fade-in delay-1" id="custMenuFilters">
        <button class="filter-btn active" onclick="setCustMenuFilter('all', this)">All</button>
        <button class="filter-btn" onclick="setCustMenuFilter('veg', this)"><span class="filter-dot veg"></span> Veg</button>
        <button class="filter-btn" onclick="setCustMenuFilter('non-veg', this)"><span class="filter-dot non-veg"></span> Non-Veg</button>
      </div>
      <div class="menu-panel active" id="tab-starters"></div>
      <div class="menu-panel" id="tab-mains"></div>
      <div class="menu-panel" id="tab-fastfood"></div>
      <div class="menu-panel" id="tab-desserts"></div>
      <div class="menu-panel" id="tab-drinks"></div>'''
html = html.replace(old_panels, new_panels)

# 4. Admin Menu HTML
old_adm_menu = '''<div class="adm-panel active" id="adm-tab-menu"></div>'''
new_adm_menu = '''<div class="adm-panel active" id="adm-tab-menu">
            <div class="adm-sec-head" style="margin-top:0; border-bottom:none; padding-bottom:0; margin-bottom:1rem;">
               <div style="display:flex; align-items:center; gap:1rem; width:100%; justify-content:space-between; flex-wrap:wrap;">
                 <h3 style="margin:0">📋 Menu Items</h3>
                 <div class="menu-filters" id="adminMenuFilters" style="margin:0; gap:.5rem;">
                   <button class="filter-btn active" onclick="setAdminMenuFilter('all', this)" style="padding:.3rem .8rem; font-size:.75rem">All</button>
                   <button class="filter-btn" onclick="setAdminMenuFilter('veg', this)" style="padding:.3rem .8rem; font-size:.75rem"><span class="filter-dot veg"></span> Veg</button>
                   <button class="filter-btn" onclick="setAdminMenuFilter('non-veg', this)" style="padding:.3rem .8rem; font-size:.75rem"><span class="filter-dot non-veg"></span> Non-Veg</button>
                 </div>
               </div>
            </div>
            <div id="adminMenuContainer"></div>
          </div>'''
html = html.replace(old_adm_menu, new_adm_menu)

# 5. Admin Billing HTML
old_billing_start = '''<!-- BILLING TAB -->
          <div class="adm-panel" id="adm-tab-billing">
            <div class="billing-layout">'''
new_billing_start = '''<!-- BILLING TAB -->
          <div class="adm-panel" id="adm-tab-billing">
            <div class="adm-bill-tabs">
              <button class="adm-bill-tab active" onclick="switchBillView('new', this)">🧾 New Bill</button>
              <button class="adm-bill-tab" onclick="switchBillView('history', this)">🕒 Billing History</button>
            </div>
            <div class="billing-layout" id="billNewView">'''
html = html.replace(old_billing_start, new_billing_start)

old_billing_end = '''</div>
          </div>

          <!-- INFO TAB -->'''
new_billing_end = '''</div>
            <div id="billHistoryView" style="display:none;">
               <div class="bill-hist-list" id="billHistoryList"></div>
            </div>
          </div>

          <!-- INFO TAB -->'''
html = html.replace(old_billing_end, new_billing_end)

# 6. JS DEFAULT_DATA Fastfood
old_drinks = '''drinks:[
        {id:'dr1',name:'Royal Mango Lassi',price:180,desc:'Thick Alphonso mango blended with chilled yoghurt and a pinch of cardamom.',type:'veg',photos:[]},
        {id:'dr2',name:'Rose Sharbat',price:150,desc:'Hand-crafted rose syrup with chilled water, dried rose petals, and lemon.',type:'veg',photos:[]},
        {id:'dr3',name:'Masala Chai',price:120,desc:'Ginger, cardamom, clove, and cinnamon brew with full-fat milk and jaggery.',type:'veg',photos:['https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?w=800&q=80','https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80']},
        {id:'dr4',name:'Thandai Fizz',price:200,desc:'Chilled thandai (almonds, fennel, poppy seeds) topped with sparkling soda.',type:'veg',photos:[]}
      ]'''
new_drinks_fastfood = '''drinks:[
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
      billingHistory: []'''
html = html.replace(old_drinks, new_drinks_fastfood)

# 7. JS loadData
old_load = '''function loadData(){try{const s=localStorage.getItem('saffronHouseData2');RDATA=s?JSON.parse(s):JSON.parse(JSON.stringify(DEFAULT_DATA));}catch(e){RDATA=JSON.parse(JSON.stringify(DEFAULT_DATA));}}'''
new_load = '''function loadData(){try{const s=localStorage.getItem('saffronHouseData2');RDATA=s?JSON.parse(s):JSON.parse(JSON.stringify(DEFAULT_DATA));if(!RDATA.menu.fastfood)RDATA.menu.fastfood=JSON.parse(JSON.stringify(DEFAULT_DATA.menu.fastfood));if(!RDATA.billingHistory)RDATA.billingHistory=[];}catch(e){RDATA=JSON.parse(JSON.stringify(DEFAULT_DATA));}}'''
html = html.replace(old_load, new_load)

# 8. JS renderMenu (Customer)
old_rm = '''function renderMenu(){
    const cats={starters:'tab-starters',mains:'tab-mains',desserts:'tab-desserts',drinks:'tab-drinks'};
    Object.keys(cats).forEach(cat=>{
      const panel=document.getElementById(cats[cat]);
      if(!panel)return;
      const items=RDATA.menu[cat]||[];
      if(!items.length){panel.innerHTML='<p style="color:var(--color-muted);text-align:center;padding:2rem;grid-column:1/-1">No items yet. Add from Admin Panel.</p>';return;}
      panel.innerHTML=items.map((item,i)=>{'''
new_rm = '''let custMenuFilter = 'all';
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
      panel.innerHTML=items.map((item,i)=>{'''
html = html.replace(old_rm, new_rm)

# 9. JS renderAdminMenu
old_am = '''const CAT_LABELS={starters:'🌱 Starters',mains:'🍛 Mains',desserts:'🍨 Desserts',drinks:'🥤 Drinks'};
  // currentPhotoTarget tracks which item/field we're adding a photo for
  let currentPhotoTarget={type:'',id:'',cat:''};

  function renderAdminMenu(){
    const c=document.getElementById('adm-tab-menu');if(!c)return;
    let html='';
    Object.keys(RDATA.menu).forEach(cat=>{
      const items=RDATA.menu[cat];
      html+=`<div class="adm-sec-head"><h3>${CAT_LABELS[cat]||cat}</h3><button class="adm-btn adm-btn-add-item" onclick="showAddForm('${cat}')"><i class="fas fa-plus"></i> Add Item</button></div>`;
      items.forEach(item=>{'''
new_am = '''const CAT_LABELS={starters:'🌱 Starters',mains:'🍛 Mains',fastfood:'🍔 Fast Food',desserts:'🍨 Desserts',drinks:'🥤 Drinks'};
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
      items.forEach(item=>{'''
html = html.replace(old_am, new_am)

# 10. JS Admin Billing
old_ab_init = '''['all','starters','mains','desserts','drinks'].map'''
new_ab_init = '''['all','starters','mains','fastfood','desserts','drinks'].map'''
html = html.replace(old_ab_init, new_ab_init)

old_print = '''function printBill(){
    if(!billCart.length){showToast('⚠️ Add items to generate a bill');return;}
    const info=RDATA.info;
    const subtotal=billCart.reduce((s,c)=>s+c.price*c.qty,0);
    const gstPct=parseFloat(document.getElementById('billGst').value)||0;
    const svcPct=parseFloat(document.getElementById('billService').value)||0;
    const gstAmt=subtotal*gstPct/100;const svcAmt=subtotal*svcPct/100;const total=subtotal+gstAmt+svcAmt;
    const tableNo=document.getElementById('billTable').value||'—';
    const customer=document.getElementById('billCustomer').value||'Valued Guest';
    const now=new Date();
    const dateStr=now.toLocaleDateString('en-IN')+' '+now.toLocaleTimeString('en-IN',{hour:'2-digit',minute:'2-digit'});
    const itemsHtml=billCart.map(c=>`<div class="print-item"><span class="print-item-name">${esc(c.name)} x${c.qty}</span><span>${rupee(c.price*c.qty)}</span></div>`).join('');
    const billHtml=`<div class="print-header"><h1>${esc(info.name)}</h1><p>${esc(info.address.replace(/\n/g,', '))}</p><p>📞 ${esc(info.phone1)}</p><p style="margin-top:.5rem;font-size:.75rem">Date: ${dateStr}</p><p>Table: ${esc(tableNo)} | Customer: ${esc(customer)}</p></div><div class="print-items">${itemsHtml}</div><div class="print-total-section"><p><span>Subtotal</span><span>${rupee(subtotal)}</span></p>${gstPct?`<p><span>GST (${gstPct}%)</span><span>${rupee(gstAmt)}</span></p>`:''} ${svcPct?`<p><span>Service Charge (${svcPct}%)</span><span>${rupee(svcAmt)}</span></p>`:''}<p class="grand"><span>TOTAL</span><span>${rupee(total)}</span></p></div><div class="print-footer"><p>Thank you for dining with us!</p><p>${esc(info.name)} — ${esc(info.email)}</p></div>`;
    document.getElementById('printBillArea').innerHTML=billHtml;
    window.print();
  }'''
new_print = '''function switchBillView(view, btn) {
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
    const billHtml=`<div class="print-header"><h1>${esc(info.name)}</h1><p>${esc(info.address.replace(/\n/g,', '))}</p><p>📞 ${esc(info.phone1)}</p><p style="margin-top:.5rem;font-size:.75rem">Bill #${billId} | Date: ${dateStr}</p><p>Table: ${esc(tableNo)} | Customer: ${esc(customer)}</p></div><div class="print-items">${itemsHtml}</div><div class="print-total-section"><p><span>Subtotal</span><span>${rupee(subtotal)}</span></p>${gstPct?`<p><span>GST (${gstPct}%)</span><span>${rupee(gstAmt)}</span></p>`:''} ${svcPct?`<p><span>Service Charge (${svcPct}%)</span><span>${rupee(svcAmt)}</span></p>`:''}<p class="grand"><span>TOTAL</span><span>${rupee(total)}</span></p></div><div class="print-footer"><p>Thank you for dining with us!</p><p>${esc(info.name)} — ${esc(info.email)}</p></div>`;
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
     const billHtml=`<div class="print-header"><h1>${esc(info.name)}</h1><p>${esc(info.address.replace(/\n/g,', '))}</p><p>📞 ${esc(info.phone1)}</p><p style="margin-top:.5rem;font-size:.75rem">Bill #${b.id} (DUPLICATE) | Date: ${dateStr}</p><p>Table: ${esc(b.tableNo)} | Customer: ${esc(b.customer)}</p></div><div class="print-items">${itemsHtml}</div><div class="print-total-section"><p><span>Subtotal</span><span>${rupee(b.subtotal)}</span></p>${b.gstPct?`<p><span>GST (${b.gstPct}%)</span><span>${rupee(b.gstAmt)}</span></p>`:''} ${b.svcPct?`<p><span>Service Charge (${b.svcPct}%)</span><span>${rupee(b.svcAmt)}</span></p>`:''}<p class="grand"><span>TOTAL</span><span>${rupee(b.total)}</span></p></div><div class="print-footer"><p>Thank you for dining with us!</p><p>${esc(info.name)} — ${esc(info.email)}</p></div>`;
     document.getElementById('printBillArea').innerHTML=billHtml;
     window.print();
  }'''
html = html.replace(old_print, new_print)

# Write back
with open(path, 'w', encoding='utf-8') as f:
    f.write(html)

print("HTML file successfully updated.")
