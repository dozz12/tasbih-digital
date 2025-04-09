let counts = {
  subhanallah: 0,
  alhamdulillah: 0,
  allahuakbar: 0
};

function increment(type) {
  counts[type]++;
  const countId = `${type}-count`;
  const el = document.getElementById(countId);
  el.innerText = counts[type];

  // Efek animasi pop
  el.classList.remove('pop-animation');
  void el.offsetWidth; // paksa browser untuk "reset" animasi
  el.classList.add('pop-animation');
}

function resetCounts() {
  for (let key in counts) {
    counts[key] = 0;
    const el = document.getElementById(`${key}-count`);
    el.innerText = 0;
    el.classList.remove('pop-animation');
  }
}
