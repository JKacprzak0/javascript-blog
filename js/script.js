'use strict'; // show errors

//function titleClickHandler(){
  //const links = document.querySelectorAll('.titles a');
  //console.log(links);
  //console.log(buttonTest.nodeName + ' został kliknięty');
//}

//const buttonTest = document.getElementById('button-test');

//buttonTest.addEventListener('click', titleClickHandler);



function titleClickHandler(){
  console.log('Link was clicked');
  
  /* remove class 'active' from all article links  */

  /* add class 'active' to the clicked link */

  /* remove class 'active' from all articles */

  /* get 'href' attribute from the clicked link */

  /* find the correct article using the selector (value of 'href' attribute) */

  /* add class 'active' to the correct article */
}



const links = document.querySelectorAll('.titles a');
console.log(links);
for (let link of links){
  link.addEventListener('click', titleClickHandler);
  console.log(link)
  console.log()
