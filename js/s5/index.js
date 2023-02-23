const countValue = document.getElementById('counter');

function incV(){
    // geting value from UI
    let value = parseInt(countValue.innerText);
    // update the value 
    value += 1;
    // set or push the vavlue into dom or UI
    countValue.innerText = value;

};
function decV(){
    // get value from UI
    let value = parseInt(countValue.innerText);
    // updating value
    value -= 1;
    // set the value on dom
    countValue.innerText = value;

};
function resV(){
    // setting value to dom
    let value = parseInt(countValue.innerText);
    value = 0;
    countValue.innerText = value;
};