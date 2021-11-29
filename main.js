const btn = document.querySelector('.btn-move');
const enterinput = document.querySelector('.enter');
const registerinput = document.querySelector('.register');
console.log(register,btn,enter);

function Enter(){
    enterinput.style.right = '0px';
    registerinput.style.right= '-450px';
    btn.style.right = '75px';
}


function register(){
    enterinput.style.right = '450px';
    registerinput.style.right= '0px';
    btn.style.right = '0';
}