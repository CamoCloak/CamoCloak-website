const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
     else{
     entry.target.classList.remove('show');
     }
  });
});

  const hiddenElements=document.querySelectorAll('.hovercard');
  hiddenElements.forEach((el) => observer.observe(el));






  const observer1 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if(entry.isIntersecting){
      entry.target.classList.add('show1');
    }
     else{
     entry.target.classList.remove('show1');
     }
  });
});
 

  const hiddenElements1=document.querySelectorAll('#box');
  hiddenElements1.forEach((el) => observer1.observe(el));
  const hiddenElements2=document.querySelectorAll('#box2');
  hiddenElements2.forEach((el) => observer1.observe(el));
  const hiddenElements3=document.querySelectorAll('#box3');
  hiddenElements3.forEach((el) => observer1.observe(el));


   const observer100 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if(entry.isIntersecting){
      entry.target.classList.add('show2');
    }
     else{
     entry.target.classList.remove('show2');
     }
  });
});

  const hiddenElements100=document.querySelectorAll('.title3');
  hiddenElements100.forEach((el) => observer100.observe(el));
 const hiddenElements101=document.querySelectorAll('.title4');
  hiddenElements101.forEach((el) => observer100.observe(el));
   const hiddenElements102=document.querySelectorAll('.text5');
  hiddenElements102.forEach((el) => observer100.observe(el));
   const hiddenElements103=document.querySelectorAll('.title5r');
  hiddenElements103.forEach((el) => observer100.observe(el));
   const hiddenElements104=document.querySelectorAll('.title5l');
  hiddenElements104.forEach((el) => observer100.observe(el));


  const hiddenElements1001=document.querySelectorAll('.title6');
  hiddenElements1001.forEach((el) => observer100.observe(el));
   const hiddenElements1002=document.querySelectorAll('.text6');
  hiddenElements1002.forEach((el) => observer100.observe(el));
 const hiddenElements1003=document.querySelectorAll('.endbar');
  hiddenElements1003.forEach((el) => observer100.observe(el));
  const hiddenElements1004=document.querySelectorAll('.navbar');
  hiddenElements1004.forEach((el) => observer100.observe(el));
  const hiddenElements1005=document.querySelectorAll('.navbarp');
  hiddenElements1005.forEach((el) => observer100.observe(el));
  const hiddenElements1006=document.querySelectorAll('.box10image');
  hiddenElements1006.forEach((el) => observer100.observe(el));
  const hiddenElements1007=document.querySelectorAll('.box10title');
  hiddenElements1007.forEach((el) => observer100.observe(el));
const hiddenElements1008=document.querySelectorAll('.box10text');
  hiddenElements1008.forEach((el) => observer100.observe(el));



const letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz123456789-_.";

let interval = null;

document.querySelector(".logotext").onmouseover = event => {  
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return event.target.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 64)]
      })
      .join("");
    
    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 6;
  }, 30);
}














 
