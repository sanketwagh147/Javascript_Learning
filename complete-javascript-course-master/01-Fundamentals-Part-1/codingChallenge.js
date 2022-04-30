const markWeight = 19;
const markHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;

function bmi(weight, height) {
	return weight / height ** 2;
}

let markBmi = bmi(markWeight, markHeight);
let johnBmi = bmi(johnWeight, johnHeight);
console.log(markBmi, johnBmi);

if (bmi(markWeight, markHeight) >= bmi(johnWeight, johnHeight)) {
	console.log("Mark has higher bmi than John");
} else {
	console.log("john has higher bmi than Marks");
}
