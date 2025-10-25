// Poiščemo vsa vnosna polja in gumb
const inputs = document.querySelectorAll('.vpisnaPolja');
const gumb = document.querySelector('.gumb');

// Funkcija, ki preveri, ali so vsa polja izpolnjena
function preveriPolja() {
  let vsaIzpolnjena = true;

  inputs.forEach(input => {
    if (input.value.trim() === '') {
      vsaIzpolnjena = false;
    }
  });

  if (vsaIzpolnjena) {
    gumb.classList.add('active');
    gumb.disabled = false;
  } else {
    gumb.classList.remove('active');
    gumb.disabled = true;
  }
}

// Dogodki za preverjanje ob vnosu v katerokoli polje
inputs.forEach(input => {
  input.addEventListener('input', preveriPolja);
});

// Inicializacija ob nalaganju strani
preveriPolja();
