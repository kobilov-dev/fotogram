
const row1Images = [
  './assets/img/chilli-9202873_1280.jpg',
  './assets/img/deer-8052359_1280.jpg',
  './assets/img/hedgehog-1759027_1280.jpg',
  './assets/img/green-turtle-7133765_1280.jpg',
  './assets/img/field-9295186_1280.jpg',
  './assets/img/dolomites-5076487_1280.jpg',
  './assets/img/zebras-8403717_1280.jpg'
];

const row2Images = [
  './assets/img/horses-2427513_1280.jpg',
  './assets/img/rhino-6065480_1920.jpg',
  './assets/img/nature-5411408_1920.jpg',
  './assets/img/horses-1401707_1920.jpg',
  './assets/img/dogs-6463032_1280.jpg'
];

const row1 = document.getElementById('row-1');
const row2 = document.getElementById('row-2');

function renderImages(rowElement, imagesArray) {

  for (let i = 0; i < imagesArray.length; i++) {
    var img = document.createElement('img');
    
    img.src = imagesArray[i];
    img.alt = "Photo " + (i + 1);
    img.className = "photo-platzhalter";
    rowElement.appendChild(img);
  }
}

renderImages(row1, row1Images);
renderImages(row2, row2Images);

const dialog = document.getElementById('image-dialog');
const dialogImage = document.getElementById('dialog-image');
const closeBtn = document.getElementById('close-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

const allImages = [...row1Images, ...row2Images];

let currentIndex = 0;

function updateImage() {
  dialogImage.src = allImages[currentIndex];
}

function setupThumbnails() {
  let thumbnails = document.getElementsByClassName('photo-platzhalter');

 for (let i = 0; i < thumbnails.length; i++) {
  (function(index) {
    thumbnails[index].onclick = function() {
      currentIndex = index;  
      updateImage();
      dialog.showModal();
    };
  })(i);
}

}


// Close-Button Funktion
closeBtn.addEventListener('click', function() {
  dialog.close();
});

// Vorheriges Bild
prevBtn.addEventListener('click', function() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = allImages.length - 1;
  }
  updateImage();
});

// Nächstes Bild
nextBtn.addEventListener('click', function() {
  if (currentIndex < allImages.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateImage();
});

// Setup-Thumbnails aufrufen
setupThumbnails();

function updateImage() {
  dialogImage.src = allImages[currentIndex];
  document.getElementById('photo-count').textContent = `${currentIndex + 1} / ${allImages.length}`;
}
