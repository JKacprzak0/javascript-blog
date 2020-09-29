'use strict'; //show errors

function buttonClicked(buttonName){
    console.log(buttonName + ' został kliknięty');
  }
  
  function titleClickHandler(){
    const links = document.querySelectorAll('.titles a');
    console.groupCollapsed(links);
  }
  
  const buttonTest = document.getElementById('button-test');
  
  buttonTest.addEventListener('click', titleClickHandler);