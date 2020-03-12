$(document).ready(function() {

  var allPs = $("p");
  console.log(allPs);

  var classp = $(".paragraph1");
  console.log(classp);

  var idp = $("#ptag");
  console.log(idp);

  allPs.html("Hi this is my new text");

  idp.html("this is another text that was dynamicaly generated");

  var div = $("empty");
  div.html("<h2>HI</h2>");

  idp.click(function(){
    $("img").attr("src", "https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/HB4AT3D3IMI6TMPTWIZ74WAR54.jpg");
  });

  $(".paragraph1").click(imgOpacity);

  $(".paragraph1").click(function () {
    $("p").click(function () {
      $("body").css("background","red");
    })
  })
})

function imgOpacity(){
  $("img").css("opacity", "0.5")
}
