// Fecha del evento: 24 de mayo de 2025 a las 8:00am (hora local)
const eventDate = new Date("2025-05-24T08:00:00");

function animateChange(id, value) {
  const el = document.getElementById(id);
  if (el.textContent !== value) {
    el.textContent = value;
    el.classList.remove("bounce");
    void el.offsetWidth; // Reinicia la animación
    el.classList.add("bounce");
  }
}

function updateCountdown() {
  const now = new Date();
  const diff = eventDate - now;

  // Si ya pasó el evento, muestra un mensaje alternativo.
  if (diff <= 0) {
    document.querySelector('.countdown').innerHTML = "<div class='count-box'>¡Es hoy!</div>";
    return;
  }

  const days = String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, '0');
  const hours = String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, '0');
  const minutes = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, '0');
  const seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, '0');

  animateChange("days", days);
  animateChange("hours", hours);
  animateChange("minutes", minutes);
  animateChange("seconds", seconds);
}

// Iniciar la cuenta regresiva cada segundo
setInterval(updateCountdown, 1000);
updateCountdown(); // Primera actualización inmediata
