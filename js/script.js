//@prepros-append.jq-start.js
//@prepros-append.script.js
//@prepros-append.jq-end.js

// Свайпер===============================================

document.addEventListener('DOMContentLoaded', () => {
  'use strict';
  
  const mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  effect: 'fade',
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  autoplay: {
    delay: 1500
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
})

// =============================================================================

// МОДАЛЬНОЕ ОКНО С ФОРМОЙ ОБРАТНОГО ЗВОНКА==================================================

// Показать-скрыть.................................
const substrate = document.querySelector('.substrate'),
      buttonLeft = document.querySelector('.button_left'),
      tel = document.querySelector('.callback'),
      tel2 = document.querySelector('.callback2'),
      cross = document.querySelector('.cross');

 tel.addEventListener('click', () => {
  substrate.classList.add('active');
  document.body.style.overflow = 'hidden';
 });
  tel2.addEventListener('click', () => {
  substrate.classList.add('active');
  document.body.style.overflow = 'hidden';
 });
  buttonLeft.addEventListener('click', () => {
    substrate.classList.add('active');
    document.body.style.overflow = 'hidden';
 });
cross.addEventListener('click', () => {
  substrate.classList.remove('active');
   document.body.style.overflow = '';
 });

substrate.addEventListener('click', (e) => {
    if (e.target == substrate) {
          substrate.classList.remove('active');
           document.body.style.overflow = '';
        }
 });



// Фэйковая отправка формы обратного звонка............................

const formPhone = document.querySelector('.form_phone');
const foneSubmit = document.querySelector('.phone__submit');
const thanksModal = document.querySelector('.thanks');
const warningClose = document.querySelector('.warning_close');
const warning = document.querySelector('.warning');
const inputName1 = document.querySelector('#name');
const phoneName1 = document.querySelector('#phone');



foneSubmit.addEventListener('click', formSend) 

function formSend(e) {
  e.preventDefault();
  if (inputName1.value == '' || phoneName1.value == '') {
      addError(inputName1, phoneName1, warning);
  }else {
      remove(inputName1, phoneName1, warning);
      thanksModal.classList.add('active');
      formPhone.reset();
      setTimeout(() => {
      thanksModal.classList.remove('active');
    }, 2000);
      setTimeout(() => {
        substrate.classList.remove('active');
        document.body.style.overflow = '';
      }, 3000)
  }
}


//Универсальная функция addError.....................................
function addError(input1, input2, warning1) {
  input1.classList.add('red');
  input2.classList.add('red');
  warning1.classList.add('active');
}


//Универсальная функция remove........................................
function remove(input1, input2, warning1) {
    if (input1.value != ''){
      input1.classList.remove('red');
      warning1.classList.remove('active');
    }
    if (input2.value !='') {
      input2.classList.remove('red');
      warning1.classList.remove('active');
    }
}



// Закрытие "Введите ваше имя"
warningClose.addEventListener('click', () => {
  warning.classList.remove('active');
})


// ВАЛИДАЦИЯ И ОТПРАВКА ПОДРОБНОЙ ФОРМЫ==============================================

const inputName2 = document.querySelector('#name');
const inputEmail = document.querySelector('#email');
const enterName = document.querySelector('.enter__name');
const enterEmail = document.querySelector('.enter__email');
const nameEmail = document.querySelectorAll('.name__email');
const formButton = document.querySelector('.form_button');
const formDetailed = document.querySelector('.form_detailed');


function validate() {
   if(emailTest() || inputEmail.value == '') {
    enterEmail.classList.add('active');
  } else {
      enterEmail.classList.remove('active');
  }
  if(nameEmail[0].value == '') {
     enterName.classList.add('active');
   } else {
     enterName.classList.remove('active');
   }
}



formButton.addEventListener('click', (e) => {
  e.preventDefault();
  validate(); 
  if (inputEmail.value != '' && nameEmail[0].value != '' && !emailTest()) {
     thanksModal.classList.add('active');
      formDetailed.reset();
       setTimeout(() => {
      thanksModal.classList.remove('active');
     }, 2000);
  }

});



 function emailTest() {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(inputEmail.value);
    }


// ВАЛИДАЦИЯ И ОТПРАВКА ФОРМЫ ДЛЯ КОНСУЛЬТАЦИИ=======================================================

const formConsult = document.querySelector('.form_consult');
const inputNameConsult = document.querySelector('.input-name-consult');
const inputEmailConsult = document.querySelector('.input-email-consult');
const warningFormConsult = document.querySelector('.warning-form-consult');
const warningEmailConsult = document.querySelector('.warning_email_consult');
const warningNameConsult = document.querySelector('.warning_name_consult');
const inputsConsultAll = document.querySelectorAll('.input-consult');;


const validate2 = () => {

  if(inputNameConsult.value == '' || inputEmailConsult.value == '') {
    warningFormConsult.classList.add('active');
  } else {
    warningFormConsult.classList.remove('active');
  }
  if(inputNameConsult.value != '' || (emailTest2() && inputsConsultAll[1].value != '')) {
     warningEmailConsult.classList.add('active');
      warningFormConsult.classList.remove('active');
  } 
  if (inputEmailConsult.value != '' && inputNameConsult.value == '') {
    warningNameConsult.classList.add('active');
     warningFormConsult.classList.remove('active');
  } 
 
}

formConsult.addEventListener('submit', (e) => {
   e.preventDefault();
   validate2();
   if (inputNameConsult.value != '' && inputEmailConsult.value != '' && !emailTest2()) {
     thanksModal.classList.add('active');
      formConsult.reset();
       setTimeout(() => {
      thanksModal.classList.remove('active');
     }, 2000);

     warningNameConsult.classList.remove('active');
     warningEmailConsult.classList.remove('active');

  }
})

function emailTest2() {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(inputEmailConsult.value);
    }


// Маски телефонов..............................................   

$(document).ready(function() {
    jQuery(function($){
     $("#phone").mask("+7(999) 99-99-999");
  });
})

$(document).ready(function() {
    jQuery(function($){
     $("#phone2").mask("+7(999) 99-99-999");
  });
})
 
})// Конец домконтент




   

