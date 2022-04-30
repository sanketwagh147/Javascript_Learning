const age = 17;
const isOldEnough = age >= 18;

if (isOldEnough) {
	console.log("Persons age is enough");
} else {
	console.log(`age is less by ${18 - age}`);
}

// for (i = 1; i <= 10; i++) {
// 	console.log(i);
// }

const birthYear = 2001;
let century;

if (birthYear <= 2000) {
	century = 20;
} else {
	century = 21;
}
console.log(century);
