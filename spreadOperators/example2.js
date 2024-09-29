// Merging objects using spread
const obj1 = { name: "John", age: 30 };
const obj2 = { location: "New York", age: 35 }; // age will be overwritten
const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj); // Output: { name: "John", age: 35, location: "New York" }