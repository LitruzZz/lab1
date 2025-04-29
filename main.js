// Task 1 (12 variant)
console.log("Task 1");
let z = 3;
let q = 1;
let result = (z !== 6.5) || (z * q >= 2);
console.log(result);

// Task 2 (12 variant)
console.log("Task 2");
let alpha = 4.4;
let beta = 1.87;
let y2 = Math.pow(Math.tan(beta - 1), 4) ** 2 - 0.035;
let x2 = 1 / Math.tan((alpha - 1) / Math.E) + Math.pow(2, (alpha + 1) / 2);
let a = Math.sqrt(Math.abs(Math.PI - y2)) + Math.pow(Math.sin(Math.PI * x2), 2) + 1.67;
console.log("Result:");
console.log("a = " + a.toFixed(4));
console.log("x = " + x2.toFixed(4));
console.log("y = " + y2.toFixed(4));

// Task 3 (12 variant)
console.log("Task 3");
let x3 = 0.5;
let y3 = null;
if (x3 < -1) {
	y3 = Math.acos(2 / (Math.PI - x3));
} else if (Math.abs(x3) < 1) {
	y3 = Math.exp(-x3 * x3);
} else if (x3 > 1) {
	y3 = Math.PI * Math.pow(Math.log(x3), 2);
} else if (Math.abs(x3) === 1) {
	y3 = Math.pow(10, -3);
}
if (y3 === null) {
	console.log("Wrong input");
} else {
	console.log("y = " + y3.toFixed(4));
}

// Task 4(12 variant)
console.log("Task 4.a");
for (let x4a = 2.3; x4a <= 7.8; x4a += 0.9) {
	let z4a = (6 * x4a + 4) / (Math.sin(3 * x4a) - x4a);
	console.log("x = " + x4a.toFixed(1) + ", z = " + z4a.toFixed(4));
}

console.log("Task 4.b");
let x4b = 2.8;
for (let i = 0; i < 6; i++) {
	let z4b = (6 * x4b + 4) / (Math.sin(3 * x4b) - x4b);
	console.log("x = " + x4b.toFixed(1) + ", z = " + z4b.toFixed(4));
	x4b += 0.3;
}

// Task 5 (12 variant)
console.log("Task 5.1");
let y5 = 0;
for (let n = 1; n <= 17; n++) {
	y5 += (n ** 2 - n) / (n ** 2 + n + 6);
}
console.log("y =", y5.toFixed(4));

console.log("Task 5.2");
let p = 1;
for (let l = 3; l <= 10; l++) {
	p *= Math.exp(-l + 2);
}
console.log("p =", p.toExponential(6));
