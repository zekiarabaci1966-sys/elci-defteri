// ELÇİ DEFTERİ — CANLI TANITIM (yalnız index.html#demo ile açılır; gerçek kayıtlara dokunmaz)
(function(){
// ---------- örnek veri ----------
const bahceler=["Ahmet Bey'in bahçesi","Hasan Bey'in bahçesi","Mustafa Bey'in bahçesi","Kozan Paketleme Tesisi"];
const adlar=[['Ayşe Kaya','Fatma Demir','Hatice Şahin','Emine Yıldız','Zeynep Çelik'],['Elif Aydın','Meryem Öztürk','Hülya Arslan','Sevgi Doğan'],['Gül Kılıç','Selin Koç','Derya Kurt','Necla Er'],['Songül Ak','Kadriye Tan','Nuray Bal']];
const isler=['GN','BD','GN','PK'];
V=tamamla(null);
bahceler.forEach((ad,k)=>V.bahce.push({id:yeniId(),ad,renk:k,sonIs:isler[k]}));
adlar.forEach((l,k)=>l.forEach(ad=>V.isci.push({id:yeniId(),ad,tel:'05320000000',bahce:V.bahce[k].id})));
for(let n=1;n<=21;n++){const d=gunEkle(bugun(),-n);if(d.getDay()===0)continue;const g={k:{},b:{},i:{}};
 V.isci.forEach((i,j)=>{const bk=V.bahce.findIndex(b=>b.id===i.bahce);
  if(n===1&&bk===1)return; // dün Hasan Bey'in bahçesi unutuldu
  const r=(j*7+n*3)%11;if(r===0)return;g.k[i.id]=r===5?'YG':isler[bk];g.b[i.id]=i.bahce;});
 V.gun[anah(d)]=g;}
V.avans.push({id:yeniId(),isci:V.isci[1].id,t:anah(gunEkle(bugun(),-2)),tutar:500});
kaydet();acik=null;sayfa='bugun';ciz();

// ---------- tanıtım araçları ----------
const css=document.createElement('style');css.textContent=
 '#dmY{position:fixed;left:50%;top:8px;transform:translateX(-50%);z-index:99;background:#111827;color:#fff;font-size:19px;font-weight:800;line-height:1.35;padding:12px 16px;border-radius:14px;width:min(94vw,520px);text-align:center;box-shadow:0 6px 24px rgba(0,0,0,.35);transition:opacity .3s}'+
 '#dmY small{display:block;font-size:13px;font-weight:700;color:#fde68a;margin-bottom:3px}'+
 '#dmP{position:fixed;z-index:98;width:46px;height:46px;border-radius:50%;background:rgba(220,38,38,.35);border:4px solid #dc2626;pointer-events:none;transition:left .7s ease,top .7s ease,transform .15s;transform:translate(-50%,-50%) scale(1);left:50%;top:60%}'+
 '#dmP.bas{transform:translate(-50%,-50%) scale(.6);background:rgba(220,38,38,.7)}'+
 '#dmK{position:fixed;z-index:99;right:10px;bottom:84px;background:#fff;border:2px solid #111827;border-radius:10px;padding:8px 12px;font-weight:800;font-size:14px}';
document.head.appendChild(css);
const Y=document.createElement('div');Y.id='dmY';document.body.appendChild(Y);
const P=document.createElement('div');P.id='dmP';document.body.appendChild(P);
const K=document.createElement('button');K.id='dmK';K.textContent='⏸ Durdur';document.body.appendChild(K);
let dur=false,hiz=/hizli/.test(location.search)?0.03:1;K.onclick=()=>{dur=!dur;K.textContent=dur?'▶ Devam':'⏸ Durdur';};
const bekle=ms=>new Promise(r=>{const t0=Date.now();let gecen=0,son=Date.now();(function d(){const s=Date.now();if(!dur)gecen+=s-son;son=s;if(gecen>=ms*hiz)r();else setTimeout(d,60);})();});
let adimNo=0;const TOPLAM=33;
async function yaz(m,ms){adimNo++;Y.innerHTML='<small>Adım '+adimNo+' / '+TOPLAM+'</small>'+m;await bekle(ms||2600);}
function bul(s){return typeof s==='string'?document.querySelector(s):s;}
async function git(s){const e=bul(s);if(!e)return null;e.scrollIntoView({block:'center',behavior:'smooth'});await bekle(600);
 const r=e.getBoundingClientRect();P.style.left=(r.left+r.width/2)+'px';P.style.top=(r.top+r.height/2)+'px';await bekle(900);return e;}
async function dokun(s){const e=await git(s);if(!e)return;P.classList.add('bas');await bekle(250);P.classList.remove('bas');e.click();await bekle(700);}
async function yazarakDoldur(s,metin){const e=await git(s);if(!e)return;e.focus();
 for(const c of metin){e.value+=c;e.dispatchEvent(new Event('input'));await bekle(c==='\n'?260:45);}}
window.prompt=()=>dmPrompt;window.confirm=()=>true;let dmPrompt='';
window.open=()=>null; // WhatsApp'ı gerçekten açmasın

// ---------- senaryo ----------
async function oyna(){adimNo=0;
 await yaz('Merhaba! Elçi Defteri\'ni birlikte kullanalım.<br>Kırmızı halka = parmağın dokunduğu yer.',3800);
 await git('#kartlar');
 await yaz('ANA EKRAN: her bahçe bir renkli kart.<br>Kartta bugün kaç kişinin geldiği yazar.',3600);
 await git('.bk[data-b="'+V.bahce[1].id+'"]');
 await yaz('Hasan Bey\'in kartında kırmızı uyarı var:<br>"Dün yoklama yok" — elçi dün yazmayı unutmuş.',3800);
 // yeni bahçe
 dmPrompt="Ali Bey'in bahçesi";
 await yaz('Önce yeni bir bahçe ekleyelim…',2200);
 await dokun('#bahceEkle');
 await yaz('"Ali Bey\'in bahçesi" eklendi, kendi rengini aldı.<br>Ekran yerinde kaldı.',3200);
 // Ahmet Bey yoklama
 await yaz('Şimdi sabah yoklaması: Ahmet Bey\'in bahçesine dokunuyoruz.',2600);
 await dokun('.bk[data-b="'+V.bahce[0].id+'"]');
 await yaz('Bahçenin işçileri alt alta. Önce bugünkü işi seçiyoruz: GENEL.',3000);
 await dokun('#isSec [data-is="GN"]');
 await yaz('Herkes geldiyse tek düğme: HERKES GELDİ.',2600);
 await dokun('#hepsi');
 await yaz('5 kişi birden "Geldi" oldu (yeşil).',2800);
 const l=V.isci.filter(i=>i.bahce===V.bahce[0].id).sort((a,b)=>a.ad.localeCompare(b.ad,'tr'));
 await yaz(l[1].ad+' öğlen gitti: düğmesine BİR kez dokun = YARIM GÜN.',3000);
 await dokun('[data-d="'+l[1].id+'"]');
 await yaz(l[3].ad+' hiç gelmedi: İKİ kez dokun = GELMEDİ.',3000);
 await dokun('[data-d="'+l[3].id+'"]');await dokun('[data-d="'+l[3].id+'"]');
 await git('#sayac');
 await yaz('Altta sayaç: Geldi 3 · Yarım 1 · Gelmedi 1. Yoklama bitti!',3400);
 // puantaj
 await yaz('İşçinin ADINA dokununca PUANTAJI açılır…',2600);
 await dokun('[data-p="'+l[0].id+'"]');
 await yaz('Haftalık puantaj: gün gün ne çalıştı, ne kadar tuttu.',3200);
 await dokun('#pen [data-m="ay"]');
 await yaz('AYLIK takvim: yeşil geldi · sarı yarım · kırmızı gelmedi.<br>Boş kutu = iş yoktu (sayılmaz).',4600);
 await git('#avT');
 await yaz('Buradan avans da verilir: 500 TL yazıp VER.',2800);
 await yazarakDoldur('#avT','500');await dokun('#avV');
 await git('#waTek');
 await yaz('"WhatsApp\'tan gönder" = işçiye hazır mesaj gider:<br>geldiği / gelmediği günler + kalan alacağı.',4200);
 await dokun('#pen [data-kapat]');
 // toplu işçi ekle
 await yaz('Yeni işçiler mi geldi? "+ Bu bahçeye işçi ekle".',2600);
 await dokun('#isciEkleB');
 await yaz('Her satıra bir isim — telefon yanına yazılabilir.<br>(Telefonda: Rehberden seç ya da 🎤 ile söyle.)',3400);
 await yazarakDoldur('#topluT','Kübra Yalçın 0532 111 22 33\nEsra Duman\nNazlı Can');
 await bekle(900);
 await dokun('#topluK');
 await yaz('3 kişi tek seferde eklendi.',2600);
 // dünü tamamla
 await dokun('#geriBahce');
 await yaz('Şimdi unutulan dünü düzeltelim: Hasan Bey\'in kartı.',2600);
 await dokun('.bk[data-b="'+V.bahce[1].id+'"]');
 await yaz('Kırmızı şerit: "Dün yoklama alınmadı" → DÜNE GİT.',3000);
 await dokun('#duneGit');
 await yaz('Artık dünün ekranındayız. HERKES GELDİ…',2600);
 await dokun('#hepsi');
 await yaz('Dün de yazıldı.',2400);
 secili=bugun();hafta=pazartesi(secili);
 await dokun('#geriBahce');
 await git('.bk[data-b="'+V.bahce[1].id+'"]');
 await yaz('Bugüne döndük: Hasan Bey\'in kartındaki kırmızı uyarı kalktı.',3200);
 // hafta
 await yaz('Alttaki HAFTA düğmesi: haftanın hesabı.',2600);
 await dokun('#nav [data-s="hafta"]');
 await git('#ozet');
 await yaz('Üstte: toplam yevmiye · ELÇİ PAYINIZ · işçilere kalan.',3600);
 await git('#tab');
 await yaz('Tablo bahçe bahçe: kim hangi gün ne yaptı, ne kadar alacak.',3800);
 await git('#bahce');
 await yaz('Bahçe sahiplerinden alacağınız — bahçe bahçe.',3400);
 await dokun('#waB');
 await yaz('Hafta sonu: herkesin hesabı tek listede, "Gönder"e dokun, WhatsApp açılır.',4000);
 await dokun('#pen [data-kapat]');
 // para
 await dokun('#nav [data-s="para"]');
 await git('#kazancim');
 await yaz('CÜZDAN = elçinin kendi parası: YEKÜN kazanç, bu hafta, bu ay, bu sezon.<br>(Şifre konursa kimse göremez.)',4600);
 await git('#islem');
 await yaz('Altında işçilere verdiğiniz avanslar.',3000);
 await dokun('#nav [data-s="bugun"]');
 await yaz('Bu kadar! Her sabah: karta dokun → HERKES GELDİ → gelmeyene dokun.<br>3 dokunuşta yoklama biter.',6000);
 Y.innerHTML='<small>Tanıtım bitti</small>Kendiniz deneyebilirsiniz (örnek veriler).<br><button id="dmTekrar" style="margin-top:8px;background:#16a34a;color:#fff;border-radius:10px;padding:9px 16px;font-weight:800;font-size:16px">↺ Baştan izle</button>';
 P.style.display='none';K.style.display='none';
 document.getElementById('dmTekrar').onclick=()=>location.reload();
}
setTimeout(oyna,800);
})();
