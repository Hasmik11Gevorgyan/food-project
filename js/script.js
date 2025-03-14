"use strict"

window.addEventListener("DOMContentLoaded", function(){
  // Tab logic start
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
  // tab logic end 

  // timer logic start
 const deadline = "2025-03-17"
  function getTimeRemaining(endtime){
    const total = Date.parse(endtime) - Date.parse(new Date());
    const days = Math.floor(total / (1000*60*60*24));
    const hours = Math.floor(total / (1000*60*60) %24);
    const minutes = Math.floor((total /1000/60) %60);
    const secunds = Math.floor((total/1000) %60);
    return{
      total,
      days,
      hours,
      minutes,
      secunds,
    }
  }
 function setZero(n){
   return n >= 0 && n <10 ? `0${n}` : n
 }

  function setClock(selector, endtime){
    const timer = document.querySelector(selector);
    const daysBlock = document.querySelector("#days");
    const hoursBlock = document.querySelector("#hours");
    const minutesBlock = document.querySelector("#minutes");
    const secundsBlock = document.querySelector("#seconds");

    const timerId = setInterval(upDateClock,1000)

    function upDateClock(){
      const {total,days, hours,minutes,secunds} = getTimeRemaining(endtime)
      
      daysBlock.textContent = setZero(days )
      hoursBlock.textContent = setZero(hours )
      minutesBlock.textContent = setZero(minutes ) 
      secundsBlock.textContent = setZero(secunds )

      if(total <= 0){
        clearInterval(timerId)
      }
    }
    upDateClock()
    
  }
setClock(".timer",deadline)
  // timer logic end
});







