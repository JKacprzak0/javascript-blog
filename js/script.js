'use strict'; // show errors



function titleClickHandler(link){
  link.preventDefault();   //stop moving though the page
  
  
  /* remove class 'active' from all article links  [DONE] */
  const activeLinks = document.querySelectorAll('.titles a.active');
  console.log(activeLinks);

  for(let activeLink of activeLinks){
      console.log('usuniete');
      activeLink.classList.remove('active');
      
  }

  /* add class 'active' to the clicked link */

  /* remove class 'active' from all articles  [NOT_WORKING] */
  const activeArticles = document.querySelectorAll('.posts .active');
  console.log(activeArticles);
  console.log('jisjakj')

  for(let activeArticle of activeArticles){
    activeArticle.classList.remove('active');
    
  }

  /* get 'href' attribute from the clicked link */

  /* find the correct article using the selector (value of 'href' attribute) */

  /* add class 'active' to the correct article   [IN_PROGRESS] */
  
  const clickedElement = this;
  console.log('clickedElement:', clickedElement);
  clickedElement.classList.add('active');
  const articleSelector=clickedElement.getAttribute("href")
  console.log(articleSelector)
}


const links = document.querySelectorAll('.titles a');
console.log(links);
for (let link of links){
  link.addEventListener('click', titleClickHandler);
  console.log(link);
}
