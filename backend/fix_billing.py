# -*- coding: utf-8 -*-
import re

path = r"c:\Users\Mobasssir Alam\Downloads\frontend-customer\vs code testing\index.html"
with open(path, 'r', encoding='utf-8') as f:
    html = f.read()

# Replace the printBill block
print_regex = re.compile(r'function printBill\(\)\s*\{.*?window\.print\(\);\s*\}', re.DOTALL)

new_print_logic = '''function switchBillView(view, btn) {
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
  }'''

if print_regex.search(html):
    html = print_regex.sub(new_print_logic, html)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(html)
    print("Successfully replaced printBill and added billing history logic.")
else:
    print("printBill regex not found!")

