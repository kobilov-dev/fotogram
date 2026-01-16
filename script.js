
const allImages = [
  './assets/img/chilli-9202873_1280.jpg',
  './assets/img/deer-8052359_1280.jpg',
  './assets/img/hedgehog-1759027_1280.jpg',
  './assets/img/green-turtle-7133765_1280.jpg',
  './assets/img/field-9295186_1280.jpg',
  './assets/img/dolomites-5076487_1280.jpg',
  './assets/img/zebras-8403717_1280.jpg',
  './assets/img/horses-2427513_1280.jpg',
  './assets/img/rhino-6065480_1920.jpg',
  './assets/img/nature-5411408_1920.jpg',
  './assets/img/horses-1401707_1920.jpg',
  './assets/img/dogs-6463032_1280.jpg'
];

const allNames = [
  'Chilli',
  'Deer',
  'Hedgehog',
  'Green Turtle',
  'Field',
  'Dolomites',
  'Zebras',
  'Horses',
  'Rhino',
  'Nature',
  'Horses2',
  'Dogs'
];

// HTML-Elementen holen
const dialog = document.getElementById('image-dialog');
const dialogImage = document.getElementById('dialog-image');
const dialogTitle = document.getElementById('dialog-title');
const photoCount = document.getElementById('photo-count');
const closeBtn = document.getElementById('close-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

// Aktuell angezeigtes Bild
let currentIndex = 0;

// Bilder in HTML erstellen
let row = document.getElementById('row');

for (let i = 0; i < allImages.length; i++) {
  
  row.innerHTML = row.innerHTML +
    '<img src="' + allImages[i] +
    '" alt="' + allNames[i] +
    '" class="photo-platzhalter" tabindex="0">';
}



// Overlay 
function updateDialog() {
  
  dialogImage.src = allImages[currentIndex];
  dialogTitle.textContent = allNames[currentIndex];
  photoCount.textContent = (currentIndex + 1) + " / " + allImages.length;
}


// Thumbnails anklickbar machen, Mausklick
function setupThumbnails() {
  const thumbnails = document.getElementsByClassName('photo-platzhalter');

  for (let i = 0; i < thumbnails.length; i++) {
    
    thumbnails[i].onclick = function() {
      currentIndex = i;
      updateDialog();
      dialog.showModal();
    };

    // Enter oder Space öffnet Dialog
    thumbnails[i].addEventListener('keydown', function(e) {
      
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        currentIndex = i;
        updateDialog();
        dialog.showModal();
      }
    });
  }
}


// FUNKTION: Navigation im Overlay

prevBtn.addEventListener('click', function() {

  if (currentIndex > 0) {
  currentIndex = currentIndex - 1;
} else {
  currentIndex = allImages.length - 1;
}
  updateDialog();
});

nextBtn.addEventListener('click', function() {
 
  if (currentIndex < allImages.length - 1) {
  currentIndex = currentIndex + 1;
} else {
  currentIndex = 0;
}
  updateDialog();
});


closeBtn.addEventListener('click', function() {
  dialog.close();
});


dialog.addEventListener('click', function(e) {
  if (e.target === dialog) {
    dialog.close();
  }
});


// Tastatursteuerung für Overlay
document.addEventListener('keydown', function(e) {

  if (!dialog.open) return;

  if (e.key === 'ArrowLeft') {
    prevBtn.click();
  }

  if (e.key === 'ArrowRight') {
    nextBtn.click();
  }

  if (e.key === 'Escape') {
    dialog.close();
  }

  if (e.key === 'Tab') {

    let alleBilder = document.getElementsByClassName('photo-platzhalter');
    let letztesBild = alleBilder[alleBilder.length - 1];

    if (document.activeElement === letztesBild) {
      e.preventDefault(); 
      dialog.close();      
    }
  }

});

// INITIALISIERUNG
setupThumbnails();
