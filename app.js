const myArray = ["JavaScript", "TypeScript", "TypeScript", "React.js", "JavaScript", "Next.js"]

// *** Set *** //
console.log("Set: ", [...new Set(myArray)]);
//Output: Set: ["JavaScript", "TypeScript", "React.js", "Next.js"]

// *** filter *** //
console.log("filter: ", myArray.filter((item, index) => {
  //return myArray.indexOf(item)
  return myArray.indexOf(item) === index
}));
//Output: filter: ["JavaScript", "TypeScript", "React.js", "Next.js"]

// *** reduce *** //
console.log("reduce: ", myArray.reduce((unique, item) => {
  return unique.includes(item) ? unique : [...unique, item];
}, []));
//Output: reduce: ["JavaScript", "TypeScript", "React.js", "Next.js"]


// *** forEach *** //
const uniqueItems = [];
myArray.forEach((item) => {
  if (!uniqueItems.includes(item)) {
   return uniqueItems.push(item);
  };
})
console.log("forEach: ", uniqueItems);
//Output: forEach: ["JavaScript", "TypeScript", "React.js", "Next.js"]


// *** for...of *** //
const forofUniqueItems = [];
for (const item of myArray) {
  if (!forofUniqueItems.includes(item)) {
    forofUniqueItems.push(item)
  }
}
console.log("for...of: ", forofUniqueItems)
//Output: for...of: ["JavaScript", "TypeScript", "React.js", "Next.js"]