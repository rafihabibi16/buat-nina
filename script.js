  // ── 1. Page Navigation ──
  function showPage(id) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('nav button').forEach(b => b.classList.remove('active'));
    
    const targetPage = document.getElementById(id);
    if (targetPage) {
      targetPage.classList.add('active');
    }
    
    const idx = id === 'page-about' ? 0 : 1;
    const btn = document.querySelectorAll('nav button')[idx];
    if (btn) btn.classList.add('active');
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ── 2. Floating Hearts  ──
  function initHearts() {
    const heartsEl = document.getElementById('hearts');
    if (!heartsEl) return;
    const emojis = ['❤️','🩷','💕','💗','🌹','💝'];
    for (let i = 0; i < 18; i++) {
      const h = document.createElement('div');
      h.className = 'heart';
      h.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      h.style.left = Math.random() * 100 + 'vw';
      h.style.animationDuration = (8 + Math.random() * 10) + 's';
      h.style.animationDelay = (Math.random() * 12) + 's';
      h.style.fontSize = (1 + Math.random() * 1.5) + 'rem';
      heartsEl.appendChild(h);
    }
  }

  // ── 3. Foto Terbang  ──
  function buatFotoTerbang() {
    const container = document.getElementById('hearts');
    if (!container) return;

    const foto = document.createElement('div');
    
    const daftarFoto = [
        'image/WhatsApp Image 2026-03-22 at 13.50.59 (1).jpeg',
        'image/WhatsApp Image 2026-03-22 at 13.50.59.jpeg',
        'image/WhatsApp Image 2026-03-22 at 13.51.00 (1).jpeg',
        'image/WhatsApp Image 2026-03-22 at 13.51.00.jpeg',
        'image/WhatsApp Image 2026-03-22 at 13.51.01 (1).jpeg',
        'image/WhatsApp Image 2026-03-22 at 13.51.01.jpeg'
    ]; 

   // Pilih foto secara acak dari daftar di atas
    const urlFoto = daftarFoto[Math.floor(Math.random() * daftarFoto.length)];

    const durasi = Math.random() * 5 + 10;
    const ukuran = Math.random() * 20 + 50;
    
    Object.assign(foto.style, {
      position: 'absolute',
      bottom: '-100px',
      left: Math.random() * 100 + 'vw',
      width: ukuran + 'px',
      height: ukuran + 'px',
      backgroundImage: `url("${urlFoto}")`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderRadius: '50%',
      border: '3px solid white',
      boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
      zIndex: '1',
      pointerEvents: 'none',
      animation: `floatUp ${durasi}s linear forwards`
    });

    container.appendChild(foto);
    setTimeout(() => foto.remove(), durasi * 1000);
  }

  // JALANKAN OTOMATIS
setInterval(buatFotoTerbang, 3000);

  // ── 4. Musik & Audio ──
  function getAudioElement() {
    return document.getElementById('background-music');
  }

  function toggleMusic() {
    const audio = getAudioElement();
    const musicControl = document.getElementById('music-control');
    const hint = document.getElementById('music-text-hint');

    if (audio.paused) {
      audio.play().catch(err => console.log("Gagal putar:", err));
      musicControl.innerHTML = "🎶";
      if(hint) hint.style.display = 'none';
    } else {
      audio.pause();
      musicControl.innerHTML = "🔇";
    }
  }

  document.addEventListener('click', function() {
    const audio = getAudioElement();
    const hint = document.getElementById('music-text-hint');
    if (audio && audio.paused) {
      audio.play().catch(err => {});
      document.getElementById('music-control').innerHTML = "🎶";
      if(hint) hint.style.display = 'none';
    }
  }, { once: true });

  // ── 5. Countdown (Hari Bersama) ──
  function updateCountdown() {
    const startDate = new Date(2022, 11, 11); // 8 Sept 2024
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / (1000 * 60)) % 60);
    const secs = Math.floor((diff / 1000) % 60);

    const el = document.getElementById('days-counter');
    if(el) {
      el.innerHTML = `${days} <span style="font-size: 0.8rem; display:block;">Hari ${hours}:${mins}:${secs}</span>`;
    }
  }

  // ── 6. Typewriter Effect ──
  const bioText = `Husnina Himmatun Fathonah, kalo nyebut nina dia itu wanita yang aku suka dari lucunya, cantiknya, pintarnya, kuat, imut, baiknya, marah marah nya dan masih banyak lagi.. kamu itu hafal 4 juz itu sih keren banget, bermain ice skating di taman anggrek, minum kopi yang super pait itu, suka dengan kucing, suka dengan benda benda lucu seperti gelang, casing hp lucu, ngeronce kangen banget sih ngeronce, terus tas putih, coklat, pink.. terus kamu juga suka sama makanan yang jorok kaya cilor rasta, kentang julan, dimsum mentai, curry, coklat, sushis,seblak, kebab, sate padang, mi laksa, pokoknya makannya banyak dah nih anak hehe.. terus beralih ke minuman nina itu suka kopi yang paitt, dalgona, pokoknya kalo di jejerin berbagai minuman dan salah satu nya ada kopi pasti milih kopi ini anaknya hahaha.. dan nina itu orangnya dapat dipercaya, dapat diandalkan, baik banget, kalian yg jadi temennya jgn macem macem kalian sbelum gua sikatt!.. intinya nina itu baik banget banget bangettt kalo dideskripsiin butuh tak terhingga ini halaman hehe.. baik baik yaaa💕`;

  let charIdx = 0;
  function typeWriter() {
    const el = document.querySelector(".bio-text");
    if (el && charIdx < bioText.length) {
      el.innerHTML += bioText.charAt(charIdx);
      charIdx++;
      setTimeout(typeWriter, 40);
    }
  }

  // ── 7. Kirim Peluk  ──
  function giveHug() {
    for (let i = 0; i < 15; i++) {
      const emoji = document.createElement('div');
      emoji.innerHTML = ['🤗', '❤️', '💖', '🫂'][Math.floor(Math.random() * 4)];
      emoji.style.cssText = `position:fixed; left:${Math.random()*100}vw; bottom:-50px; font-size:40px; z-index:9999; transition:2s ease-out;`;
      document.body.appendChild(emoji);
      setTimeout(() => {
        emoji.style.transform = `translateY(-100vh) rotate(${Math.random()*360}deg)`;
        emoji.style.opacity = '0';
      }, 50);
      setTimeout(() => emoji.remove(), 2000);
    }
  }

  // ── 8. Inisialisasi Saat Load ──
  window.addEventListener('load', () => {
    initHearts();
    typeWriter();
    setInterval(updateCountdown, 1000);
    updateCountdown();
    setInterval(buatFotoTerbang, 4000); // Muncul tiap 4 detik
  });

  // ── 9. Video & Photo Handlers (Tetap Ada) ──
  function handleVideo(input) {
    const file = input.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    const video = document.getElementById('sorry-video');
    const placeholder = document.getElementById('video-placeholder');
    video.src = url;
    video.style.display = 'block';
    placeholder.style.display = 'none';
  }

  // --- 1. FITUR TOMBOL  (NO) ---
function moveButton() {
  const btnNo = document.getElementById('btn-no');
  const btnGroup = btnNo.parentElement; // Kita ambil wadah tombolnya
  
  // Ambil posisi wadah tombol sebagai titik tengah
  const rect = btnGroup.getBoundingClientRect();
  
  // Menentukan jarak lari 
  const range = 150; 

  // Hitung posisi acak
  const randomX = (Math.random() - 0.5) * range * 2;
  const randomY = (Math.random() - 0.5) * range * 2;

  // Terapkan pergeseran (menggunakan transform agar lebih halus)
  btnNo.style.transition = "transform 0.2s ease";
  btnNo.style.transform = `translate(${randomX}px, ${randomY}px)`;

  // Ganti teks 
  const texts = ["Enggak 😜", "Eits! 😋", "Gak kena 😝", "Coba lagi 🤔", "Wlee 😛"];
  btnNo.innerText = texts[Math.floor(Math.random() * texts.length)];
}

// --- 2. FITUR TERIMA MAAF (YES) ---
function acceptedApology() {
  // 1. Munculkan pesan sukses di web
  document.getElementById('success-message').style.display = 'flex';
  
  // 2. Efek Kembang Api
  for (let i = 0; i < 20; i++) {
    setTimeout(createFirework, i * 200);
  }

  // 3. KIRIM PESAN KE WHATSAPP
  const nomorWA = "085852816457"; 
  const pesan = "iyaa aku maafin mpiii";
  
  // jeda 2 detik 
  setTimeout(() => {
    window.open(`https://wa.me/${085852816457}?text=${encodeURIComponent(pesan)}`, '_blank');
  }, 2000);
}

function closeSuccess() {
  const successMsg = document.getElementById('success-message');
  
  // Kasih efek fade out pas di tutup
  successMsg.style.opacity = '0';
  successMsg.style.transition = 'opacity 0.5s ease';
  
  setTimeout(() => {
    successMsg.style.display = 'none';
    successMsg.style.opacity = '1'; // Reset opacity 
    
    // Opsional: Balikin ke halaman 'Tentang Kamu' otomatis
    showPage('page-about');
  }, 500);
}

// Fungsi buat Kembang Api Sederhana 
function createFirework() {
  const colors = ['#ff4d6d', '#ffb6c1', '#ffc107', '#2ecc71', '#3498db'];
  
  for (let i = 0; i < 10; i++) {
    const firework = document.createElement('div');
    firework.className = 'firework';
    firework.style.background = colors[Math.floor(Math.random() * colors.length)];
    
    // Mulai dari tengah layar
    firework.style.left = '50vw';
    firework.style.top = '50vh';
    
    // Animasi ledakan
    firework.style.animation = 'explode 1.5s ease-out forwards';
    
    // Arah ledakan random
    const angle = Math.random() * Math.PI * 2;
    const velocity = Math.random() * 200 + 100;
    const dx = Math.cos(angle) * velocity;
    const dy = Math.sin(angle) * velocity;
    
    firework.style.transform = `translate(${dx}px, ${dy}px)`;
    
    document.body.appendChild(firework);
    
    setTimeout(() => firework.remove(), 1500);
  }
}

// Buat tanggal TTD otomatis di KTP
function updateCurrentDate() {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const dateStr = new Date().toLocaleDateString('id-ID', options);
  const el = document.getElementById('current-date');
  if (el) el.innerText = dateStr;
}
updateCurrentDate();

function scanMood() {
  const moods = [
    "Lagi Happy banget nih pastiiii🥰",
    "Cantiknya nambah 1000% hari ini! ✨",
    "Butuh asupan Cilor nih kayaknya... 🍡",
    "Lagi laper ya? Yuk jajan! 🍕",
    "Tiba-tiba pengen minum kopi ya? 👀",
    "Lagi capekk yaa, jangan lupa istirahat"
  ];
  const randomMood = moods[Math.floor(Math.random() * moods.length)];
  document.getElementById('mood-result').innerText = randomMood;
}

function createSnow() {
  const heart = document.createElement('div');
  heart.classList.add('snow-heart');
  heart.innerHTML = '❤️';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = Math.random() * 3 + 2 + 's';
  heart.style.opacity = Math.random();
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}
setInterval(createSnow, 300);