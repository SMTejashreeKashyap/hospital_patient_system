
function checkPatientCategory(name, age) {
if (age < 18) {
return `${name} is a Minor.`;
} else {
return `${name} is an Adult.`;
}
}
console.log(checkPatientCategory("Aarav", 15));
console.log(checkPatientCategory("Priya", 30));
