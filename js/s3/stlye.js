// console.log("Hello World");

// let lastname = 'Ahlawat';
// let firstNAme = new String("KD");
// // making primitive to object
// //lastname.
// date
// let date = new Date()
// let date2 = new Date('June 20 1998 07:15');
// let date3 = new Date(1998,6,20,7)
// ---------------------arrays------------------
// let num = [1,4,2,7];
// console.log(num);
// num.push(8);
// console.log(num);
// num.unshift('a');
// console.log(num);
// num.splice(2,0,'a','b','c','d');
// console.log(num);
// ----------------------------refrences--------------------------

let courses =[{no:1,naam:'kd'},{no:2,naam:'Rahul'}];
// let course = courses.find(function(course){
//     return course.naam ==='kd';
// });
let course = courses.find(course => course.naam ==='kd' );
console.log(course);