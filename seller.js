searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
  searchForm.classList.toggle('active');
}

let email = document.getElementById('email');
let number = document.getElementById('number');
let span = document.getElementByIdTagName('span');


email.onkeydown = function(){
    const regex = /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\([a-zA-Z]){2,8}$/;
    const regexo = /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\([a-zA-Z]){2,3}\.[a-zA-Z]{1,3}$/;
    if (regex.test(email.value) || regexo.test(email.value))

    {
        span[0].innerText ="your email is valid";
        span[0].style.color = 'lime';
    }

    else{
        span[0].innerText ="your email is invalid";
        span[0].style.color = 'red';


    }
}

number.onkeydown = function(){
    const regexn = /^[0-9]{10}$/;
    if (regexn.test(number.value))

    {
        span[1].innerText ="your number is valid";
        span[1].style.color = 'lime';
    }

    else{
        span[1].innerText ="your number is invalid";
        span[1].style.color = 'red';
    }
}