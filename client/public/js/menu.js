const menu = document.getElementById('header');
const scroll_btn = document.getElementById("scroll--top");

scroll_btn.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

window.addEventListener("scroll", () => {
   scroll_btn.classList.add("scroll--top--show");

  let scrollTop = window.pageYOffset;

  if (scrollTop === 0) {
   scroll_btn.classList.remove("scroll--top--show");
  }
});
 
 window.addEventListener("scroll", function () {
    
   let scroll_Y = window.scrollY;
   if (scroll_Y >= 75) {
      menu.classList.add("sticky--header");
   } else {
      menu.classList.remove("sticky--header");
   }
 });
 // call bootstrap tooltip
$(function () {
  $('body').tooltip({
    selector: '[data-toggle="tooltip"]',
    container: 'body'
});
});$(".input_text").focus(function(){
  $(this).prev('.fa').addclass('glowIcon')
})
$(".input_text").focusout(function(){
  $(this).prev('.fa').removeclass('glowIcon')
})
const btn = document.querySelector("#btn");
const btnText = document.querySelector("#btnText");

btn.onclick = () => {
  btnText.innerHTML = "Thanks";
  btn.classList.add("active");
};
//Capsdey

var swiper2 = new Swiper('.swiper2', {
  effect:"coverflow",
          direction: 'horizontal',
          loop: true,
          autoplay: {               
          disableOnInteraction: false,
          pauseOnMouseEnter: true,             
          },
          pagination: {
          el: ".swiper-pagination1",
          clickable:true,
          },
          coverflowEffect:{
              slideShadows: false,
              rotate:20,
              scale:0.70,
          }
         
  });   