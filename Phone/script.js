let circle = document.querySelector('#circle');
let upBtn = document.querySelector('#upBtn');
let downBtn = document.querySelector('#downBtn');

let rotateValue =circle.style.transform ; 
let rotateSum;
upBtn.onclick = function() {
    rotateSum = rotateValue + 'rotate(-90deg)';
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
}
downBtn.onclick = function() {
    rotateSum = rotateValue + 'rotate(90deg)';
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
}

let text= document.querySelector('.sec-text');

let textLoad = () => {
    setTimeout(() => {
        text.textContent = "For You";
    }, 0);
    setTimeout(() => {
        text.textContent = "24/7";
    }, 4000);
    setTimeout(() => {
        text.textContent = "With Heart";
    }, 8000);
}

textLoad();

setInterval(textLoad, 12000);


let order = document.querySelector('.order');

order.addEventListener('click', function(e) {
    if (!order.classList.contains('animate')) {
        order.classList.add('animate');
        setTimeout(() => {
            order.classList.remove('animate')
        }, 10000);
        e.preventDefault();
    }
    
})
let validName = /^[A-Z][a-z]+$/;
let validSurname = /^[A-Z][a-z]+$/;
let validCartNumber = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
let validTerm = /^\d{2}\/\d{2}$/;
let Validcvv = /^\d{3}$/;

let namee = document.querySelector('.name');
let surname = document.querySelector('.surname')
let cartNumber = document.querySelector('.cart-number')
let term = document.querySelector('.term');
let cvv = document.querySelector('.cvv');

namee.oninput = () => {
    if (namee.value.match(validName)) {
        namee.style.border = '5px solid green';
    }
    else {
        namee.style.border = '5px solid red';
    }
    
}

surname.oninput = () => {
    if (surname.value.match(validSurname)) {
        surname.style.border = '5px solid green';
    }
    else {
        surname.style.border = '5px solid red';
    }
    
}

cartNumber.oninput = () => {
    if (cartNumber.value.match(validCartNumber)) {
        cartNumber.style.border = '5px solid green';
    }
    else {
        cartNumber.style.border = '5px solid red';
    }
    if (cartNumber.value.length == 4 || cartNumber.value.length == 9 || cartNumber.value.length == 14) {
        cartNumber.value += '-';
    } 
}

term.oninput = () => {
    if (term.value.match(validTerm)) {
        term.style.border = '5px solid green';
    }
    else {
        term.style.border = '5px solid red';
    }
    if (term.value.length == 2) {
        term.value += '/';
    } 
}


cvv.oninput = () => {
    if (cvv.value.match(Validcvv)) {
        cvv.style.border = '5px solid green';
    }
    else {
        cvv.style.border = '5px solid red';
    }
    
}


let cardd = document.querySelector('.cardd');
let help = document.querySelector('.help');
let close_img = document.querySelector('.close-img');

help.onclick = (e)=> {
    cardd.style.top = '50%';
    e.preventDefault()
}


close_img.onclick = () => {
    cardd.style.top = '150%';
}

