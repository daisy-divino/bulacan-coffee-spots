// ========================================
// Bulacan Coffee Spots - script.js
// Adds the interactivity layer to the guide
// ========================================

// The name of this guide (constant)
const guideName = 'Bulacan Coffee Spots';

// The current year (constant)
const currentYear = new Date().getFullYear();

// A running count, starting at 0
let placeCount = 0;

// The coffee places reviewed in this guide
const places = [
    { name: 'MOC Cafe', category: 'Vietnamese-style coffee', rating: 4.5 },
    { name: "Croiss Bites Cafe", category: 'Fresh-baked pastries', rating: 4.0 },
    { name: 'Acir Cafe', category: 'Study and work spots', rating: 4.5 },
    { name: "Eufrocina's Cafe", category: 'Comfort food cafes', rating: 4.0 }
];

// Genuinely computed values (worked out in the script, not typed by hand)
placeCount = places.length;

const totalRating = places.reduce((sum, place) => sum + place.rating, 0);
const averageRating = (totalRating / placeCount).toFixed(1);

const categoryCounts = {};
places.forEach((place) => {
    categoryCounts[place.category] = (categoryCounts[place.category] || 0) + 1;
});

// Write the guide name into an element on the page
const guideNameElement = document.getElementById('guide-name');
if (guideNameElement) {
    guideNameElement.textContent = guideName;
}

// Write a dynamic copyright line into the footer
const copyrightElement = document.getElementById('footer-copyright');
if (copyrightElement) {
    copyrightElement.textContent = '© ' + currentYear + ' ' + guideName + '. All rights reserved.';
}

// Display the computed place count on the home page
const placeCountElement = document.getElementById('place-count');
if (placeCountElement) {
    placeCountElement.textContent = placeCount;
}

// Display the computed average rating on the home page
const averageRatingElement = document.getElementById('average-rating');
if (averageRatingElement) {
    averageRatingElement.textContent = averageRating;
}

// Labelled values logged to the console
console.log('Guide name:', guideName);
console.log('Current year:', currentYear);
console.log('Place count:', placeCount);
console.log('Average rating:', averageRating);
console.log('Places by category:', categoryCounts);