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

// ---------------------------------------------------------------------------
// Decision 1: Rating label (if / else if / else chain)
// Declares a numeric rating out of 5 for one place and writes one of three
// labels into the page. All comparisons use strict equality / relational
// operators (no type coercion).
// ---------------------------------------------------------------------------
const placeRating = 4.5; // numeric rating out of 5 for MOC Cafe
let ratingLabel;
if (placeRating >= 4) {
    ratingLabel = 'Highly recommended';
} else if (placeRating >= 2.5) {
    ratingLabel = 'Worth a visit';
} else {
    ratingLabel = "Only if you're nearby";
}

const ratingLabelElement = document.getElementById('rating-label');
if (ratingLabelElement) {
    ratingLabelElement.textContent = ratingLabel;
}

// ---------------------------------------------------------------------------
// Decision 2: Budget check (&& + ternary)
// Declares a price level and whether the place is currently open. Uses && to
// decide whether both conditions are met, then a ternary to display either
// 'Good option right now' or 'Maybe another time'.
// ---------------------------------------------------------------------------
const priceLevel = 2;     // 1 = cheap, 2 = moderate, 3 = expensive
const isOpen = true;      // whether the place is currently open
const affordable = priceLevel === 1 || priceLevel === 2;
const bothMet = affordable && isOpen;
const budgetResult = bothMet ? 'Good option right now' : 'Maybe another time';

const budgetCheckElement = document.getElementById('budget-check');
if (budgetCheckElement) {
    budgetCheckElement.textContent = budgetResult;
}

// ---------------------------------------------------------------------------
// Decision 3: Distance note (boolean + ternary)
// Uses a boolean and a ternary to display either 'Walking distance' or
// 'Better to commute'.
// ---------------------------------------------------------------------------
const withinWalkingDistance = false;
const distanceNote = withinWalkingDistance ? 'Walking distance' : 'Better to commute';

const distanceElement = document.getElementById('distance-note');
if (distanceElement) {
    distanceElement.textContent = distanceNote;
}

// Labelled values logged to the console
console.log('Rating label:', ratingLabel);
console.log('Budget check:', budgetResult);
console.log('Distance note:', distanceNote);