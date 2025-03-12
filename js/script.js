"use strict"

window.addEventListener("DOMContentLoaded", function(){
  const tabsHeaders = document.querySelectorAll(".tabheader__item");
  const tabsContents = document.querySelectorAll(".tabcontent");
  const tabsHeadersParent = document.querySelector(".tabheader__items");

 

  hideTabContent();
  showTabContent();

  function hideTabContent (){
    tabsContents.forEach(tabContent =>{
      tabContent.classList.add("hide");
      tabContent.classList.remove("show");
    });
    tabsHeaders.forEach(tabHeader => tabHeader.classList.remove("tabheader__item_active"));
  }

  function showTabContent (i=0){
    tabsContents[i].classList.add("show");
    tabsContents[i].classList.remove("hide");
    tabsHeaders[i].classList.add("tabheader__item_active");
  }

  tabsHeadersParent.addEventListener("click", (e)=>{
    if(e.target && e.target.matches(".tabheader__item")){
      tabsHeaders.forEach((tabHeader, index) =>{
        if(e.target === tabHeader){
          hideTabContent();
          showTabContent(index);
        }
      });
    }
  });
});







