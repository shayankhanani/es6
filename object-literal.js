let type = 'quartz';
let color = 'rose';
let carat = 21.29;

let oldWay = {
  type: type,
  color: color,
  carat: carat
};

console.log(oldWay);

let newWay = {type, color, carat};
console.log(newWay.type);

oldWay = {
    type: type,
    color: color,
    carat: carat,
    worth: function(){
        console.log('Value of the gem');
    }
}

newWay = {
    type,
    color,
    carat,
    worth(){
        console.log('Value of the gem');
    }
}

