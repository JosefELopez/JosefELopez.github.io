let img= document.querySelector('img');
let btn1= document.querySelector('#btn1');
let btn2= document.querySelector('#btn2');

btn1.addEventListener('click', () => {
  img.src = 'ii.png';
})

btn2.addEventListener('click', () => {
  img.src = 'iie.png';
})

// $(document).ready(function() {

  // var image1=new Image()
  // image1.src="home.png"
  // var image2=new Image()
  // image2.src="ex.png"
  // var image3=new Image()
  // image3.src="start.png"
  // var image4=new Image()
  // image4.src="ii.png"
  // var image5=new Image()
  // image5.src="iii.png"
  // function changeStyle() {
  // document.getElementById("home").src="ex.png";
  // }

  // function changeStyle() {
  //
  // document.getElementById("home").src="ex.png";
  //
  // }

  // var slideIndex = 1;
  // showDivs(slideIndex);
  //
  // function plusDivs(n) {
  //   showDivs(slideIndex += n);
  // }
  //
  // function showDivs(n) {
  //   var i;
  //   var x = document.getElementsByClassName("mySlides");
  //   if (n > x.length) {slideIndex = 1}
  //   if (n < 1) {slideIndex = x.length}
  //   for (i = 0; i < x.length; i++) {
  //     x[i].style.display = "none";
  //   }
  //   x[slideIndex-1].style.display = "block";
  // }



// var image_tracker= "f";
// function changeStyle() {
//   var image=document.getElementById("home").src="ex.png";
//   if(image_tracker=f){
//     image.src="home.png";
//     image_tracker="t";
//   }else{
//     image.src="ex.png";
//     image_tracker="f";
//   }
// }
