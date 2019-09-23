const city = ['Karachi','Lahore','Islamabad'];
let oldWay = city[0];
let [x,y,z] = city;
console.log(y);

const gemstone = {
    type: 'quartz',
    color: 'rose',
    carat: 21.29
};  
const {type, color, carat} = gemstone;
console.log(type, color, carat);

const circle = {
    radius: 10,
    color: 'orange',
    getArea: function() {
      return Math.PI * this.radius * this.radius;
    },
    getCircumference: function() {
      return 2 * Math.PI * this.radius;
    }
};
  
let {radius, getAreaP, getCircumference} = circle;
console.log(getAreaP);