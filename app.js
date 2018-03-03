// Some passwords stored in variables
const realPassword = "MyPassword12345";
const fakePassword = "f4k3";

// Now for the sake of example, we store the real password's hash in a variable (instead of a database)
var realPasswordHash = "";

console.log("The real password: " + realPassword);
console.log("The fake password: " + fakePassword);

// saltRounds is a parameter for hashing
const saltRounds = 10;

// the bcrypt object
const bcrypt = require('bcrypt');

// Generating hashes for the passwords (the second one is not necessary, we won't use it, so it's not stored in a variable, just displayed)

realPasswordHash = bcrypt.hashSync(realPassword, saltRounds);
console.log("Real pw hash: " + realPasswordHash);
console.log("Fake pw hash: " + bcrypt.hashSync(fakePassword, saltRounds));

// Let's check what happens if we try to log in with the fake password
console.log("Trying to log in with the fake password... comparing password to the realPasswordHash... Result: " + bcrypt.compareSync(fakePassword, realPasswordHash));


console.log("Trying to log in with the REAL password... comparing password to the realPasswordHash... Result: " + bcrypt.compareSync(realPassword, realPasswordHash));

