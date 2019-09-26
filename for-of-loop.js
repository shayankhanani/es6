const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < digits.length; i++) {
  console.log(digits[i]);
}

console.log("*********Typical For Loop End*********");

for(const i in digits){
    console.log(i);
}
console.log("*********For In Loop End*********");

Array.prototype.decimalify = function(){
    for(let i = 0; i < this.length; i++){
        this[i] = this[i].toFixed(2);
    }
}

for(const i in digits){
    console.log(i);
}
console.log("*********For In Drawback Loop End*********");

for (const digit of digits) {
    console.log(digit);
}
console.log("*********For of Loop End*********");

for (const digit of digits){
    if(digit % 2 === 0){
        continue;
    }
    console.log(digit);
}
console.log("*********For of Loop End with continue*********");