function createFallingFlower() {
  const flower = document.createElement('div');
  flower.classList.add('falling-flower');

  flower.style.left = Math.random() * 100 + 'vw';
  flower.style.animationDuration = (5 + Math.random() * 5) + 's';

  document.body.appendChild(flower);

setTimeout(() => {
  flower.remove();
  }, 10000);
}

setInterval(createFallingFlower, 500);
    
const music = document.getElementById('bgmusic');

function toggleMusic() {
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}

function openInvitation() {
  const button = document.getElementById('openInvitationBtn');
  button.style.display = 'none';
  document.body.classList.remove('no-scroll'); // Izinkan scroll
  document.getElementById('main').scrollIntoView({ behavior: 'smooth' });

  // Putar musik setelah tombol diklik
  music.play().catch(() => {
  });
};

const countdownEl = document.getElementById('countdown');
const eventDate = new Date('2025-12-12T08:00:00').getTime();

setInterval(() => {
      
const now = new Date().getTime();
const distance = eventDate - now;

const days = Math.floor(distance / (1000 * 60 * 60 * 24));
const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((distance % (1000 * 60)) / 1000);

countdownEl.innerHTML = `${days} Hari ${hours} Jam ${minutes} Menit ${seconds} Detik`;
}, 1000);

document.addEventListener('DOMContentLoaded', () => {
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.2 
};

const observerCallback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        } else {
        entry.target.classList.remove('in-view');
        }
    });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);
const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
elementsToAnimate.forEach(el => observer.observe(el));
});

const daftar = [];

document.getElementById('rsvpForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const nama = document.getElementById('nama').value;
    const jumlah = document.getElementById('jumlah').value;
    const kehadiran = document.getElementById('kehadiran').value;

    const li = document.createElement('li');
    li.textContent = `${nama} - ${jumlah} - ${kehadiran}`;
    document.getElementById('daftarKehadiran').appendChild(li);

    document.getElementById('konfirmasiPesan').textContent = "✅ Terima kasih atas konfirmasinya!";
    this.reset();
  });