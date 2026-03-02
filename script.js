const display = document.getElementById('display');
function  appendTOdisplay(input) {
    display.value += input;
}
function clearDisplay() {
    display.value = '';
}
function deleteOneByOne() {
  display.value  =   display.value.toString().slice(0,-1);// (0, -1) literally means: "Start at the beginning, and stop exactly one character before the end."
}

function calculate() {
    try{
    display.value = eval(display.value);
    }
    catch(error){
        display.value = 'Error';
    }
}