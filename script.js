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

  if (diff <= 0) {
    document.querySelector('.countdown').innerHTML =
      "<div class='count-box'>¡Es hoy!</div>";
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

setInterval(updateCountdown, 1000);
updateCountdown();

// Funcionalidad "Leer más" / "Leer menos" para expandir el texto de cada mentor individualmente
document.addEventListener("DOMContentLoaded", function () {
  const readMoreButtons = document.querySelectorAll(".read-more-btn");
  const readLessButtons = document.querySelectorAll(".read-less-btn");

  // Expande el contenido de cada tarjeta de mentor de forma independiente
  readMoreButtons.forEach(btn => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      const descriptionBlock = btn.closest(".mentor-description-block");
      // Se añade la clase que, mediante CSS, expandirá el bloque y ocultará el snippet
      descriptionBlock.classList.add("expanded");
      // Se oculta el botón "Leer más"
      btn.style.display = "none";
    });
  });

  // Contrae el contenido de la misma tarjeta
  readLessButtons.forEach(btn => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      const descriptionBlock = btn.closest(".mentor-description-block");
      // Se remueve la clase para colapsar el bloque y mostrar el snippet nuevamente
      descriptionBlock.classList.remove("expanded");
      // Se muestra nuevamente el botón "Leer más"
      const readMore = descriptionBlock.querySelector(".read-more-btn");
      if (readMore) {
        readMore.style.display = "inline-block";
      }
    });
  });
});
