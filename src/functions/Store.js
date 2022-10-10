const storeTask = () => {
  const task = document.getElementById('taskName').value;
  const notes = document.getElementById('taskNotes').value;
  const priority = document.getElementById('')
}






var htmlElem = document.querySelector('html');
var pElem = document.querySelector('p');
var imgElem = document.querySelector('img');

var bgcolorForm = document.getElementById('bgcolor');
var fontForm = document.getElementById('font');
var imageForm = document.getElementById('image');

if (!localStorage.getItem('bgcolor')) {
    populateStorage();
  } else {
    setStyles();
  }


function setStyles() {
    const currentColor = localStorage.getItem('bgcolor');
    const currentFont = localStorage.getItem('font');
    const currentImage = localStorage.getItem('image');

    document.getElementById('bgcolor').value = currentColor;
    document.getElementById('font').value = currentFont;
    document.getElementById('image').value = currentImage;

    htmlElem.style.backgroundColor = `#${currentColor}`;
    pElem.style.fontFamily = currentFont;
    imgElem.setAttribute('src', currentImage);
}





function populateStorage() {
    localStorage.setItem('bgcolor', document.getElementById('bgcolor').value);
    localStorage.setItem('font', document.getElementById('font').value);
    localStorage.setItem('image', document.getElementById('image').value);

    setStyles();
}

bgcolorForm.onchange = populateStorage;
fontForm.onchange = populateStorage;
imageForm.onchange = populateStorage;

// Storage.removeItem() takes a single argument — the key of the data item you want to remove — and removes it from the storage object for that domain.
// Storage.clear() takes no arguments, and empties the entire storage object for that domain.