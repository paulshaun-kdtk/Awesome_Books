// menu-toggle
import Toggle from './modules/toggleMenus.js';

// book addition

import SavedObjects from './modules/bookAdditon.js';

// datetime

import { DateTime } from './luxon.js';

const toggle = new Toggle();

document.getElementById('toggleListButton').addEventListener('click', () => {
  toggle.toggleList();
});

document.getElementById('toggleAddButton').addEventListener('click', () => {
  toggle.toggleAdd();
});

document.getElementById('toggleContactButton').addEventListener('click', () => {
  toggle.toggleContact();
});

const savedObjects = new SavedObjects();
window.addEventListener('load', savedObjects.initialize.bind(savedObjects));

function displayCurrentTime() {
  const now = DateTime.local();
  const formattedTime = now.toLocaleString(DateTime.TIME_SIMPLE);
  const formattedZone = now.toFormat('ZZZZ');
  const currentTimeElement = document.getElementById('currentTime');
  currentTimeElement.textContent = `${formattedTime} (${formattedZone})`;
}

window.onload = displayCurrentTime;