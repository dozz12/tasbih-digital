let counts = {
  subhanallah: 0,
  alhamdulillah: 0,
  allahuakbar: 0
};

let currentDzikir = 'subhanallah';

function updateDzikir() {
  currentDzikir = document.getElementById('dzikir-select').value;
  updateDisplay();
}

function updateDisplay() {
  const el = document.getElementById('current-count');
  el.innerText = counts[currentDzikir];
}

function increment() {
  counts[currentDzikir]++;
  const el = document.getElementById('current-count');
  el.innerText = counts[currentDzikir];

  el.classList.remove('pop-animation');
  void el.offsetWidth;
  el.classList.add('pop-animation');
}

function resetCounts() {
  for (let key in counts) {
    counts[key] = 0;
  }
  updateDisplay();
}

const translations = {
  id: {
    title: "Tasbih Digital",
    labelDzikir: "Pilih Dzikir",
    btnTambah: "+ Tambah",
    btnReset: "🔄 Reset Semua"
  },
  en: {
    title: "Digital Tasbih",
    labelDzikir: "Select Dhikr",
    btnTambah: "+ Count",
    btnReset: "🔄 Reset All"
  },
  fr: {
    title: "Chapelet Numérique",
    labelDzikir: "Choisir un Dhikr",
    btnTambah: "+ Compter",
    btnReset: "🔄 Réinitialiser"
  },
  ar: {
    title: "المسبحة الرقمية",
    labelDzikir: "اختر الذكر",
    btnTambah: "+ عدّ",
    btnReset: "🔄 إعادة الكل"
  }
};

function setLanguage(lang) {
  const t = translations[lang];
  document.getElementById('title').innerText = t.title;
  document.getElementById('label-dzikir').innerText = t.labelDzikir;
  document.getElementById('btn-tambah').innerText = t.btnTambah;
  document.getElementById('btn-reset').innerText = t.btnReset;
}
