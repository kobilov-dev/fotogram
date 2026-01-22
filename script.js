let images = [
  "./assets/img/chilli-9202873_1280.jpg",
  "./assets/img/deer-8052359_1280.jpg",
  "./assets/img/hedgehog-1759027_1280.jpg",
  "./assets/img/green-turtle-7133765_1280.jpg",
  "./assets/img/field-9295186_1280.jpg",
  "./assets/img/dolomites-5076487_1280.jpg",
  "./assets/img/zebras-8403717_1280.jpg",
  "./assets/img/horses-2427513_1280.jpg",
  "./assets/img/rhino-6065480_1920.jpg",
  "./assets/img/nature-5411408_1920.jpg",
  "./assets/img/horses-1401707_1920.jpg",
  "./assets/img/dogs-6463032_1280.jpg"
];

let names = [
  "Chilli",
  "Deer",
  "Hedgehog",
  "Green Turtle",
  "Field",
  "Dolomites",
  "Zebras",
  "Horses",
  "Rhino",
  "Nature",
  "Horses",
  "Dogs"
];

let currentIndex = 0;
var dialog = document.getElementById("image-dialog");

function onLoadPage() {
  createThumbnails();
}

let lastFocusedElement; // Speichert das Bild, das den Dialog geöffnet hat

function createThumbnails() {
  var row = document.getElementById("row");
  row.innerHTML = "";

  for (var i = 0; i < images.length; i++) {
    row.innerHTML += `
      <img 
        src="${images[i]}" 
        alt="${names[i]}" 
        class="photo-platzhalter" 
        tabindex="0" 
        role="button"
        onclick="openDialog(${i})"
        onkeydown="handleThumbnailKey(event, ${i})">
    `;
  }
}

function openDialog(index) {
  lastFocusedElement = document.activeElement;
  currentIndex = index;
  updateDialog();
  dialog.showModal();
}

function closeDialog() {
  dialog.close();
  if (lastFocusedElement) {
    lastFocusedElement.focus(); 
  }
}

// habe auch mit leertaste zusammengemacht 13 => Entertaste, 32 => Leertaste 
function handleThumbnailKey(e, index) {
  if (e.keyCode === 13 || e.keyCode === 32) { 
    e.preventDefault();
    openDialog(index);
  }
}

function openDialog(index) {
  currentIndex = index;
  updateDialog();
  dialog.showModal();
}

function updateDialog() {
  document.getElementById("dialog-image").src = images[currentIndex];
  document.getElementById("dialog-title").innerText = names[currentIndex];
  document.getElementById("photo-count").innerText = (currentIndex + 1) + " / " + images.length;
}

function closeDialog() {
  dialog.close();
}

function changeImage(step) {
  currentIndex = currentIndex + step;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  updateDialog();
}

dialog.addEventListener("click", function(e) {
  var box = document.querySelector(".dialog-container");
  if (!box.contains(e.target)) {
    closeDialog();
  }
});

document.body.onkeydown = function(e) {
  if (!dialog.open) return;

  if (e.key === "ArrowLeft") changeImage(-1);
  if (e.key === "ArrowRight") changeImage(1);
  if (e.key === "Escape") closeDialog();
}


