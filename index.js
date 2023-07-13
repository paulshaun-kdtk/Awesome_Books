// Define an object to store the saved objects
const savedObjects = {
  objects: [],

  // Function to add a new object to the savedObjects array and store it in localStorage
  addObject: function(object) {
    this.objects.push(object);
    localStorage.setItem('savedObjects', JSON.stringify(this.objects));
  },

  // Function to retrieve saved objects from localStorage
  retrieveObjects: function() {
    const savedData = localStorage.getItem('savedObjects');
    if (savedData) {
      this.objects = JSON.parse(savedData);
    }
  },

  // Function to display all saved objects
  displayObjects: function() {
    const objectsContainer = document.getElementById('objectsContainer');
    objectsContainer.innerHTML = ''; // Clear previous content

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

  // Function to remove an object from the savedObjects array and update localStorage
  removeObject: function(index) {
    this.objects.splice(index, 1);
    localStorage.setItem('savedObjects', JSON.stringify(this.objects));
  }
};

// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault();

  // Get form values
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;

  // Create a new object with the form values
  const newBook = { title, description };

  // Add the new object to the savedObjects array and store it in localStorage
  savedObjects.addObject(newBook);

  // Display the saved objects
  savedObjects.displayObjects();
}

// Retrieve saved objects from localStorage on page load
savedObjects.retrieveObjects();

// Add event listener to the form submit button
document.getElementById('submitBtn').addEventListener('click', handleSubmit);
