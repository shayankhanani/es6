const expanded = ["shayan","khanani","dev",10,30,50,80];
const [name,last,profession,...scores] = expanded;
console.log(scores);
console.log("*********Rest Operator in Destructuring*********");
function averageOld(){
    let sum = 0;
    for(const argument of arguments){
        sum += argument;
    }
    return sum/arguments.length;
}
console.log(averageOld(3,4,8,9));
console.log("*********Average Old Method with arguments*********");
function average(...nums) {
    let sum = 0;
    for(const num of nums){
        sum += num;   
    }
    return sum / nums.length;
}
console.log(average(2, 6));

console.log("*********Average Method with Rest Operator*********");
