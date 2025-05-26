
function toggleCard(id) {
  const section = document.getElementById(id);
  section.style.display = section.style.display === 'block' ? 'none' : 'block';
}

// --- Drag & Drop ---
const draggables = document.querySelectorAll('.draggable');
const dropzones = document.querySelectorAll('.dropzone');
const resultMessage = document.getElementById('result-message');

draggables.forEach(drag => {
  drag.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', drag.id);
  });
});

dropzones.forEach(zone => {
  zone.addEventListener('dragover', (e) => {
    e.preventDefault();
    zone.classList.add('hovered');
  });

  zone.addEventListener('dragleave', () => {
    zone.classList.remove('hovered');
  });

  zone.addEventListener('drop', (e) => {
    e.preventDefault();
    zone.classList.remove('hovered');
    const droppedId = e.dataTransfer.getData('text/plain');
    const correctId = zone.dataset.correct;
    const droppedElement = document.getElementById(droppedId);

    // empêcher plusieurs dépôts
    if (zone.querySelector('.draggable')) return;

    zone.appendChild(droppedElement);

    checkAllMatched();
  });
});

function checkAllMatched() {
  const total = dropzones.length;
  let matched = 0;
  dropzones.forEach(zone => {
    const dropped = zone.querySelector('.draggable');
    if (dropped && dropped.id === zone.dataset.correct) {
      matched++;
    }
  });

  if (matched === total) {
    resultMessage.textContent = "✅ Bien joué ! Toutes les correspondances sont correctes !";
    resultMessage.style.color = "green";
  } else {
    resultMessage.textContent = "";
  }
}
