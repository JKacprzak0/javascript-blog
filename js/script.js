'use strict'; // show errors

const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list';


function generateTitleLinks(){
  /* remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML = '';  
  

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
    /* insert link into titleList */
    titleList.innerHTML = titleList.innerHTML+ linkHTML; 
  }

  const links = document.querySelectorAll('.titles a');
  for (let link of links){
    link.addEventListener('click', titleClickHandler);
  }
}

generateTitleLinks(); //wykonanie funkcji





function titleClickHandler(link){
  link.preventDefault();   //stop moving through the page
  
  
  /* remove class 'active' from all article links  [DONE] */
  const activeLinks = document.querySelectorAll('.titles a.active');

  for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
  }

  /* remove class 'active' from all articles  [DONE] */
  const activeArticles = document.querySelectorAll('.posts .active');

  for(let activeArticle of activeArticles){
    activeArticle.classList.remove('active');
  }

  /* get 'href' attribute from the clicked link [DONE] */
  /* add class 'active' to the clicked link [DONE] */
  const clickedElement = this;
  clickedElement.classList.add('active');
  const articleSelector=clickedElement.getAttribute('href');

  /* find the correct article using the selector (value of 'href' attribute) [DONE] */
  const targetArticle=  document.querySelector(articleSelector);

  /* add class 'active' to the correct article   [DONE] */
  targetArticle.classList.add('active');
}


function generateTags(){
  /* find all articles */
  const posts = document.querySelectorAll(optArticleSelector);

  /* START LOOP: for every article: */
  for(let post of posts){
    /* find tags wrapper */
    /* make html variable with empty string */
    const tagList = post.querySelector(optArticleTagsSelector);
    tagList.innerHTML = ''; 
    /* get tags from data-tags attribute */
    const postTags=post.getAttribute('data-tags');
    /* split tags into array */
    const arrayTags = postTags.split(' ');
    for (let arrayTag of arrayTags){
      /* START LOOP: for each tag */
      /* generate HTML of the link */
      /* add generated code to html variable */
      const linkTag = '<li><a href="#tag-'+ arrayTag + '">' + arrayTag + '</a></li>';
      /* insert HTML of all the links into the tags wrapper */
      tagList.innerHTML = tagList.innerHTML + linkTag;
      /* END LOOP: for each tag */
    }
  /* END LOOP: for every article: */
  }
  const tags = document.querySelectorAll('.post-tags a');
  for (let tag of tags){
    tag.addEventListener('click', tagClickHandler);
  }
}
generateTags();


function tagClickHandler(tag){
  /* prevent default action for this event */
  tag.preventDefault();
  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;
  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href=clickedElement.getAttribute('href');
  console.log(href);
  /* make a new constant "tag" and extract tag from the "href" constant */

  /* find all tag links with class active */
  //a.active[href^="#tag-"]'

  /* START LOOP: for each active tag link */

    /* remove class active */

  /* END LOOP: for each active tag link */

  /* find all tag links with "href" attribute equal to the "href" constant */

  /* START LOOP: for each found tag link */

    /* add class active */

  /* END LOOP: for each found tag link */

  /* execute function "generateTitleLinks" with article selector as argument */
}

function addClickListenersToTags(){
  /* find all links to tags */

  /* START LOOP: for each link */

    /* add tagClickHandler as event listener for that link */

  /* END LOOP: for each link */
}

addClickListenersToTags();



