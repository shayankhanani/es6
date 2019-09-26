const cities = ["KHI","LHR","ISB","HYD","PEW","UET"];
console.log("*********Spread Operator*********");
console.log(...cities);
const primes = new Set([1,3,5,7,11,13,17,19,23,29]);
console.log(...primes);
console.log("*********Concat Method*********");
let combo = cities.concat(primes);
console.log(combo);

console.log("*********Combining Arrays*********");
combo = [cities, primes];
console.log(combo);

console.log("*********Combining Arrays by Spread Opreator*********");
combo = [...cities, ...primes];
console.log(combo);