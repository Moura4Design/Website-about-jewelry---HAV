let slideIndex = 1;

function plusSlides(n) {
  slideIndex = slideIndex + n;
  showSlides(slideIndex);
}

/*function currentSlide(n) {
  showSlides(slideIndex = n);
}*/
showSlides(1);

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("myslides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }

  slides[slideIndex-1].style.display = "block";  
  

};

autoSlide();
function autoSlide() {
  let i;
  let slides = document.getElementsByClassName('myslides');
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  slideIndex++;
  setTimeout(autoSlide, 3000);
}

document.getElementById("prev").addEventListener("click", function(){
  plusSlides(-1);
});

document.getElementById("next").addEventListener("click", function(){
  plusSlides(1);
});

function myYear() {
  let d = new Date();
  let n = d.getFullYear();
  document.getElementById("num").innerHTML = "HAV Jewelry Design © 2013 -  " + n;
}

myYear();