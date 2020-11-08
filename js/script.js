'use strict'; // show errors

const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list',
  optArticleAuthorSelector = '.post-author',
  optArticleAuthorListSelector= '.authors',
  optAllTagsSelector = '.tags';

function generateTitleLinks(customSelector = ''){
//function generateTitleLinks(){
  /* remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML = '';  
  

  /* for each article */
  const posts = document.querySelectorAll(optArticleSelector + customSelector);
  //generateTitleLinks('[data-tags~="' + tagName + '"]');
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
      const allTagList = document.querySelector(optAllTagsSelector);
      if (allTagList.innerHTML.indexOf(linkTag) == -1){
        console.log('weszlo');
        allTagList.innerHTML = allTagList.innerHTML + linkTag;
      }
      //allTagList.innerHTML = allTagList;
    }
  /* END LOOP: for every article: */
  }
  const tags = document.querySelectorAll('.post-tags a');
  for (let tag of tags){
    tag.addEventListener('click', tagClickHandler);
  }
}
generateTags();


function addClickListenersToTags(){
/* find all links to tags */
  const allTags = document.querySelectorAll('a[href^="#tag-"]');
  /* START LOOP: for each link */
  for(let allTag of allTags){
    allTag.addEventListener('click', tagClickHandler);
  }
  /* add tagClickHandler as event listener for that link */

  /* END LOOP: for each link */
}
addClickListenersToTags();
 

function tagClickHandler(tag){
  /* prevent default action for this event */
  tag.preventDefault();
  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;
  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href');
  /* make a new constant "tag" and extract tag from the "href" constant */
  const tagName = href.slice(5); //character position starts from 0 not 1
  /* find all tag links with class active */
  const activeTags = document.querySelectorAll('a.active[href^="#tag-"]'); //find all active a with href beginng with #tag
  /* START LOOP: for each active tag link */
  /* remove class active */
  for(let activeTag of activeTags){
    activeTag.classList.remove('active');
  }
  /* END LOOP: for each active tag link */

  /* find all tag links with "href" attribute equal to the "href" constant */
  const allMatchingTags = document.querySelectorAll('a[href="' + href + '"]');
  /* START LOOP: for each found tag link */
  /* add class active */
  for(let allMatchingTag of allMatchingTags){
    allMatchingTag.classList.add('active');
  }
  /* END LOOP: for each found tag link */

  /* execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-tags~="' + tagName + '"]');
}



function generateAuthors(){
  /* find all articles */
  const posts = document.querySelectorAll(optArticleSelector);

  /* START LOOP: for every article: */
  const listAuthors = document.querySelector(optArticleAuthorListSelector);
  listAuthors.innerHTML = '';
  for(let post of posts){
    /* find tags wrapper */
    /* make html variable with empty string */
    const authorName = post.querySelector(optArticleAuthorSelector);
    authorName.innerHTML = '';
    const postAuthor = post.getAttribute('data-author');
    authorName.innerHTML = postAuthor;
    const linkAuthor = '<li><a href="#'+ postAuthor + '">' + postAuthor + '</a></li>';
    /* remove repeating aurthors */
    if (listAuthors.innerHTML.indexOf(linkAuthor) == -1) {
      listAuthors.innerHTML = listAuthors.innerHTML + linkAuthor;
    }
  /* END LOOP: for every article: */
  }

  const authors = document.querySelectorAll('.authors a');
  for (let author of authors){
    author.addEventListener('click', authorClickHandler);
  }
}
generateAuthors();


function authorClickHandler(e){
  /* prevent default action for this event */
  e.preventDefault();
  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;
  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const hrefAuthor = clickedElement.getAttribute('href');
  const hrefAuthorName = hrefAuthor.slice(1); //character position starts from 0 not 1
  /* find all author links with class active */
  const activeAuthors = document.querySelectorAll('.authors a.active'); 
  // /* START LOOP: for each active author link */
  // /* remove class active */
  for(let activeAuthor of activeAuthors){
    activeAuthor.classList.remove('active');
  }
  // /* END LOOP: for each active author link */

  /* find all author links with "href" attribute equal to the "href" constant */
  const allMatchingAuthors = document.querySelectorAll('a[href="' + hrefAuthor + '"]');
  /* START LOOP: for each found author link */
  /* add class active */
  for(let allMatchingAuthor of allMatchingAuthors){
    allMatchingAuthor.classList.add('active');
  }
  /* END LOOP: for each found tag link */

  /* execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-author="' + hrefAuthorName + '"]');
}