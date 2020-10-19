'use strict'; // show errors

const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';
//pytanie po co te opty?

function generateTitleLinks(){
  /* remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML = '';  //pytanie to usuwa z pojedynczego linka czy ze wszystkich na raz??
  

  /* for each article */
  const posts = document.querySelectorAll(optArticleSelector);
  for (let post of posts){
    /* get the article id */
    const postId=post.getAttribute('id');
    const postLink= '#'+ postId;
    /* get the title from the title element */
    const postTitle = post.querySelector(optTitleSelector).innerHTML; //cut title from post
    /* create HTML of the link */
    const linkHTML = '<li><a href ="' + postLink + '"><span>'+ postTitle +'</span></a></li>';
    console.log(linkHTML);
    /* insert link into titleList */
    titleList.innerHTML = titleList.innerHTML+ linkHTML; 
  }

  const links = document.querySelectorAll('.titles a');
  console.log(links);
  for (let link of links){
    link.addEventListener('click', titleClickHandler);
    console.log(link);
  }
}

generateTitleLinks(); //wykonanie funkcji







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
  const articleSelector=clickedElement.getAttribute('href');
  console.log(articleSelector);

  /* find the correct article using the selector (value of 'href' attribute) [DONE] */
  const targetArticle=  document.querySelector(articleSelector);
  console.log(targetArticle);

  

  /* add class 'active' to the correct article   [DONE] */
  console.log('clickedElement:', targetArticle);
  targetArticle.classList.add('active');
}






