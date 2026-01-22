var images = [
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

var names = [
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

var currentIndex = 0;

function onLoadPage() {
  createThumbnails();
}

function createThumbnails() {
  var row = document.getElementById("row");
  row.innerHTML = ""; 

  for (var i = 0; i < images.length; i++) {
    row.innerHTML += 
      '<img src="' + images[i] + 
      '" alt="' + names[i] + 
      '" class="photo-platzhalter" tabindex="0" onclick="openDialog(' + i + ')">';
  }
}

function openDialog(index) {
  currentIndex = index;
  updateDialog();
  document.getElementById("image-dialog").showModal();
}

function updateDialog() {
  document.getElementById("dialog-image").src = images[currentIndex];
  document.getElementById("dialog-title").innerText = names[currentIndex];
  document.getElementById("photo-count").innerText = (currentIndex + 1) + " / " + images.length;
}

function closeBackground(e) {
  var dialog = document.getElementById("image-dialog");
  var box = document.querySelector(".dialog-container");

  if (!box.contains(e.target)) {
    dialog.close();
  }
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

function handleKeys(e) {
  var dialog = document.getElementById("image-dialog");
  if (!dialog.open) return;

  if (e.key === "ArrowLeft") {
    changeImage(-1);
  }
  if (e.key === "ArrowRight") {
    changeImage(1);
  }
  if (e.key === "Escape") {
    dialog.close();
  }
}


function closeDialog() {
  document.getElementById("image-dialog").close();
}




