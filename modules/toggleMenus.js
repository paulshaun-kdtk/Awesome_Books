class Toggle {
  constructor() {
    this.menu = document.getElementById('objectsContainer');
    this.form = document.getElementById('addBook');
    this.contact = document.getElementById('contact');
    this.heading = document.getElementById('h1');
  }

  toggleList() {
    if (this.menu.style.display === 'none') {
      this.menu.style.display = 'block';
      this.heading.style.display = 'block';
      this.form.style.display = 'none';
      this.contact.style.display = 'none';
    } else {
      this.menu.style.display = 'none';
    }
  }

  toggleAdd() {
    if (this.form.style.display === 'none') {
      this.form.style.display = 'block';
      this.contact.style.display = 'none';
      this.menu.style.display = 'none';
      this.heading.style.display = 'none';
    } else {
      this.form.style.display = 'none';
    }
  }

  toggleContact() {
    if (this.contact.style.display === 'none') {
      this.contact.style.display = 'block';
      this.menu.style.display = 'none';
      this.form.style.display = 'none';
      this.heading.style.display = 'none';
    } else {
      this.contact.style.display = 'none';
    }
  }
}

export default Toggle;