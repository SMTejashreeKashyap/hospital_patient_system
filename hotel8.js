

let patientList = [
{ name: "Suresh", age: 35 },
{ name: "Anita", age: 52 },
{ name: "Kiran", age: 28 }
];
patientList.push({ name: "Devendra", age: 64 });

let oldestPatient = patientList[0];
for (let i = 1; i < patientList.length; i++) {
if (patientList[i].age > oldestPatient.age) {
oldestPatient = patientList[i];
}
}
console.log("Total Patients:", patientList.length);
console.log(`Oldest Patient: ${oldestPatient.name} (${oldestPatient.age} years old)`);

