# -*- coding: utf-8 -*-
import re

path = r"c:\Users\Mobasssir Alam\Downloads\frontend-customer\vs code testing\index.html"
with open(path, 'r', encoding='utf-8') as f:
    html = f.read()

# 1. CSS
css_add = """
.rating-input { display:flex; gap:0.4rem; font-size:1.5rem; color:var(--color-secondary); cursor:pointer; margin-top:0.3rem; }
.rating-input i { transition:transform 0.2s; }
.rating-input i:hover { transform:scale(1.15); }
"""
html = html.replace('/* PRINT STYLES */', css_add + '\n    /* PRINT STYLES */')

# 2. Review Section HTML
old_reviews_grid = re.search(r'<div class="reviews-grid">.*?</div>\s*</div>\s*</section>', html, re.DOTALL)
if old_reviews_grid:
    new_reviews_grid = """<div style="text-align:center; margin-bottom:2.5rem;" class="fade-in delay-1">
      <button class="btn btn-outline" style="border-color:rgba(255,255,255,0.4);" onclick="openReviewModal()"><i class="fas fa-pen"></i> Write a Review</button>
    </div>
    <div class="reviews-grid" id="reviewsGrid"></div>
  </div>
</section>

<!-- CUSTOMER REVIEW MODAL -->
<div class="dish-modal-overlay" id="reviewModal" style="z-index:4000;">
  <div class="res-form" style="position:relative; width:100%; max-width:450px; margin:1rem; padding:2rem; box-shadow:0 25px 60px rgba(0,0,0,0.5);">
     <button class="dish-modal-close" style="top:1rem; right:1rem; background:rgba(0,0,0,0.1); color:#333;" onclick="closeReviewModal()"><i class="fas fa-times"></i></button>
     <h3 class="form-title" style="margin-bottom:1.5rem; color:var(--color-dark); font-size:1.3rem;">Share Your Experience</h3>
     <form id="writeReviewForm">
        <div class="form-group" style="margin-bottom:1.25rem">
           <label>Your Rating *</label>
           <div class="rating-input" id="ratingInput">
              <i class="fas fa-star" data-val="1"></i><i class="fas fa-star" data-val="2"></i><i class="fas fa-star" data-val="3"></i><i class="fas fa-star" data-val="4"></i><i class="fas fa-star" data-val="5"></i>
           </div>
           <input type="hidden" id="revRating" value="5">
        </div>
        <div class="form-group" style="margin-bottom:1.25rem"><label>Your Name *</label><input type="text" id="revName" required placeholder="e.g. Rahul Sharma" /></div>
        <div class="form-group" style="margin-bottom:1.5rem"><label>Review *</label><textarea id="revText" required placeholder="Tell us about the food and service..."></textarea></div>
        <button type="submit" class="btn btn-primary" style="width:100%; justify-content:center"><i class="fas fa-paper-plane"></i> Submit Review</button>
     </form>
  </div>
</div>
"""
    html = html.replace(old_reviews_grid.group(0), new_reviews_grid)
else:
    print("Could not find reviews-grid regex.")

# 3. Admin Tabs
old_adm_tabs = '''<button class="adm-tab" data-adm-tab="info">🏠 Info</button>'''
new_adm_tabs = '''<button class="adm-tab" data-adm-tab="reviews">⭐ Reviews</button>\n          <button class="adm-tab" data-adm-tab="info">🏠 Info</button>'''
html = html.replace(old_adm_tabs, new_adm_tabs)

# 4. Admin Panels
old_info_panel = '''<!-- INFO TAB -->'''
new_reviews_panel = '''<!-- REVIEWS TAB -->
          <div class="adm-panel" id="adm-tab-reviews">
            <div class="adm-sec-head" style="margin-top:0"><h3>⭐ Customer Reviews</h3></div>
            <div id="adminReviewsList" style="display:flex; flex-direction:column; gap:0.5rem;"></div>
          </div>

          <!-- INFO TAB -->'''
html = html.replace(old_info_panel, new_reviews_panel)

# 5. DEFAULT_DATA
old_gallery = '''gallery:['''
new_reviews_and_gallery = '''reviews:[
      {id:'r1', name:'Rahul Sharma', date:'Visited August 2025', rating:5, text:'"The Dum Gosht Biryani transported me straight to Lucknow. Every grain of rice was infused with flavour."', avatar:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80'},
      {id:'r2', name:'Priya Menon', date:'Visited June 2025', rating:5, text:'"Celebrated our 10th anniversary here. The Shahi Paneer was the best we\\'ve ever had — velvety and perfectly spiced."', avatar:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80'},
      {id:'r3', name:'Aditya Kumar', date:'Visited July 2025', rating:4.5, text:'"The Raan-e-Mehra was spectacular — falling-off-the-bone tender. A must-try!"', avatar:'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80'}
    ],
    gallery:['''
html = html.replace(old_gallery, new_reviews_and_gallery)

# 6. loadData
html = html.replace("if(!RDATA.billingHistory)RDATA.billingHistory=[];", "if(!RDATA.billingHistory)RDATA.billingHistory=[];if(!RDATA.reviews)RDATA.reviews=JSON.parse(JSON.stringify(DEFAULT_DATA.reviews));")

# 7. renderAll & Admin initialization
html = html.replace("renderGallery();}", "renderGallery(); renderReviews();}")
html = html.replace("renderAdminGallery();\n      initBilling();", "renderAdminGallery();\n      initBilling();\n      renderAdminReviews();")

# 8. Add JS logic
js_to_add = """
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
  """
# Insert JS logic before /* INIT */
html = html.replace("/* INIT */", js_to_add + "\n  /* INIT */")

with open(path, 'w', encoding='utf-8') as f:
    f.write(html)

print("Success")
