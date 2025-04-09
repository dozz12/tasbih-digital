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
