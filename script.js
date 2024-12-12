// Get the form, entry list, and clear button
const form = document.getElementById('diaryForm');
const entryList = document.getElementById('entryList');
const clearButton = document.getElementById('clearForm');

// Event listener for form submission
form.addEventListener('submit', function (e) {
  e.preventDefault();

  // Get the title, content, and current date
  const title = document.getElementById('entryTitle').value;
  const content = document.getElementById('entryContent').value;
  const date = new Date();
  const timestamp = `${date.toLocaleDateString()} at ${date.toLocaleTimeString()}`;

  // Create a new entry element
  const newEntry = document.createElement('div');
  newEntry.classList.add('entry');

  // Add content to the new entry
  newEntry.innerHTML = `
    <h3>${title}</h3>
    <p>${content}</p>
    <p class="timestamp">${timestamp}</p>
  `;

  // Append the new entry to the list of entries
  entryList.appendChild(newEntry);

  // Clear the form fields
  form.reset();
});

// Event listener to clear the form
clearButton.addEventListener('click', function () {
  form.reset();
});
