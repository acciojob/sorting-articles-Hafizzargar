//your JS code here. If required.
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];


// Define the strip function to remove common words from band names
function strip(word) {
const regex = /^(a |the |an )/i;
return word.replace(regex, '').trim();
}

// Sort the bands array using the strip function to ignore common words
const sortedBands = bands.sort((a, b) => (strip(a) > strip(b)) ? 1 : -1);

// Update the DOM with the sorted band names
const bandList = document.getElementById('band');
sortedBands.forEach(band => {
const listItem = document.createElement('li');
listItem.textContent = band;
bandList.appendChild(listItem);
});