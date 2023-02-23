// function
// function eventFunction(){
//     console.log('I have clicked on the document')
// }
// after every click it will log a message in console
// document.addEventListener('click',eventFunction);
// --------------------------------------------------------------
// const content = document.querySelector('wrapper');
let links = document.querySelectorAll('a');
let thirdlink = links[2];
thirdlink.addEventListener('click', function(event){
    event.preventDefault();
    console.log("click opration");
});
 