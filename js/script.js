'use strict'; // show errors



function titleClickHandler(link){
  link.preventDefault();   //stop moving though the page
  
  
  /* remove class 'active' from all article links  [DONE] */
  const activeLinks = document.querySelectorAll('.titles a.active');
  console.log(activeLinks);

  for(let activeLink of activeLinks){

      activeLink.classList.remove('active');
      
  }

  /* remove class 'active' from all articles  [DONE] */
  const activeArticles = document.querySelectorAll('.posts .active');
  console.log(activeArticles);

  for(let activeArticle of activeArticles){
    activeArticle.classList.remove('active');
  }

   

  /* get 'href' attribute from the clicked link [DONE] */
  /* add class 'active' to the clicked link [DONE] */
 const clickedElement = this;
 console.log('clickedElement:', clickedElement);
 clickedElement.classList.add('active');
 const articleSelector=clickedElement.getAttribute("href");
 console.log(articleSelector);

  /* find the correct article using the selector (value of 'href' attribute) [DONE] */
  const targetArticle=  document.querySelector(articleSelector);
  console.log(targetArticle);
  //const targetArticle=  document.querySelector("[href= articleSelector]");

  /* add class 'active' to the correct article   [DONE] */
  console.log('clickedElement:', targetArticle);
  targetArticle.classList.add('active');
}


const links = document.querySelectorAll('.titles a');
console.log(links);
for (let link of links){
  link.addEventListener('click', titleClickHandler);
  console.log(link);
}
