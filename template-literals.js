const student = {
    name: 'Shayan',
    subject: 'JS'
};
  
const teacher = {
    name: 'Udacity',
    course: 'ES6'
}
  
let message = student.name + ' please see ' + teacher.course + ' in ' + teacher.name + ' to get new skills.';
let newMessage = `${student.name} please see ${teacher.course} in ${teacher.name} to get new skills.`;
let multilineMessage = `Hey! ${student.name}
${teacher.name}'s course ${teacher.course}
is amazing.
`
console.log(multilineMessage);