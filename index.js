const savedObjects = {
  objects: [],

  addObject(object) {
    this.objects.push(object);
    localStorage.setItem('savedObjects', JSON.stringify(this.objects));
  },

  retrieveObjects() {
    const savedData = localStorage.getItem('savedObjects');
    if (savedData) {
      this.objects = JSON.parse(savedData);
    }
  },

  // display all saved objects
  displayObjects() {
    const objectsContainer = document.getElementById('objectsContainer');
    objectsContainer.innerHTML = '';

    this.objects.forEach((object, index) => {
      const objectElement = document.createElement('div');

      const titleElement = document.createElement('span');
      titleElement.textContent = ` ${object.title}, `;

      const descriptionElement = document.createElement('span');
      descriptionElement.textContent = ` ${object.description}`;

      const hrElement = document.createElement('div');
      hrElement.classList.add('hr');

      const removeButton = document.createElement('input');
      removeButton.type = 'button';
      removeButton.value = 'Remove';
      removeButton.addEventListener('click', () => {
        this.removeObject(index);
        this.displayObjects();
      });

      objectElement.appendChild(titleElement);
      objectElement.appendChild(descriptionElement);
      objectElement.appendChild(removeButton);
      objectElement.appendChild(hrElement);

      objectsContainer.appendChild(objectElement);
    });
  },

  // remove  object from the savedObjects array and update localStorage
  removeObject(index) {
    this.objects.splice(index, 1);
    localStorage.setItem('savedObjects', JSON.stringify(this.objects));
  },
};

// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault();

  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const newBook = { title, description };

  savedObjects.addObject(newBook);
  savedObjects.displayObjects();
}

savedObjects.retrieveObjects();

window.addEventListener('load', () => {
  savedObjects.displayObjects();
});

document.getElementById('submitBtn').addEventListener('click', handleSubmit);
