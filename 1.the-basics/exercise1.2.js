const original = 4936;

const onesPlace = 4936 % 10;
console.log(`The ones place is ${onesPlace}.`);

const tensPlace = ((4936 - onesPlace) / 10) % 10;
console.log(`The tens place is ${tensPlace}.`);

const hundredsPlace = ((493 - tensPlace) / 10) % 10;
console.log(`The hundreds place is ${hundredsPlace}.`);

const thousandsPlace = ((49 - hundredsPlace) / 10) % 10;
console.log(`The thousands place is ${thousandsPlace}.`);
