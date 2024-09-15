let price = "200";

let priceAsInt = parseInt(price);
console.log("Using parseInt():", priceAsInt);

let priceAsNumber = Number(price);
console.log("Using Number():", priceAsNumber);

let priceWithPlus = +price;
console.log("Using + operator:", priceWithPlus);

let distance = 150;

let distanceAsString = distance.toString();
console.log("Using .toString():", distanceAsString);

let distanceWithString = String(distance);
console.log("Using String():", distanceWithString);

let weight = "72.5";

let weightAsFloat = parseFloat(weight);
console.log("Using parseFloat():", weightAsFloat);