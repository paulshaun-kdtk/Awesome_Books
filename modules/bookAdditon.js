class SavedObjects {
  constructor() {
    this.objects = [];
    this.objectsContainer = document.getElementById('objectsContainer');
    this.submitButton = document.getElementById('submitBtn');
    this.titleInput = document.getElementById('title');
    this.descriptionInput = document.getElementById('description');
    this.successMessage = document.getElementById('successMessage');

    this.submitButton.addEventListener('click', this.handleSubmit.bind(this));
  }

  addObject = (object) => {
    this.objects.push(object);
    localStorage.setItem('savedObjects', JSON.stringify(this.objects));
  }

  retrieveObjects = () => {
    const savedData = localStorage.getItem('savedObjects');
    if (savedData) {
      this.objects = JSON.parse(savedData);
    }
  }

  displayObjects = () => {
    this.objectsContainer.innerHTML = '';

    this.objects.forEach((object, index) => {
      const objectElement = document.createElement('div');

      const titleElement = document.createElement('span');
      titleElement.textContent = `${object.title}...by `;

      const descriptionElement = document.createElement('span');
      descriptionElement.textContent = `...${object.description}`;

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

      this.objectsContainer.appendChild(objectElement);
    });
  }

  removeObject = (index) => {
    this.objects.splice(index, 1);
    localStorage.setItem('savedObjects', JSON.stringify(this.objects));
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const title = this.titleInput.value;
    const description = this.descriptionInput.value;
    const newObject = { title, description };

    this.addObject(newObject);
    this.displayObjects();
    this.showSuccessMessage();
    this.resetForm();
  }

  showSuccessMessage = () => {
    this.successMessage.style.display = 'block';
    setTimeout(() => {
      this.successMessage.style.display = 'none';
    }, 3000);
  }

  resetForm = () => {
    this.titleInput.value = '';
    this.descriptionInput.value = '';
  }

  initialize = () => {
    this.retrieveObjects();
    this.displayObjects();
  }
}

export default SavedObjects;