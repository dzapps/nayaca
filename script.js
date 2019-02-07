/* window.addEventListener('scroll', function() {
  for (let i = 0; i < document.getElementById('urch').length; i++) {
    for (let j = 0; j < pageYOffset; j++) {
      while (i === j) {
        document.getElementById('urch').split()[i].style.color = "#FF6F61";
      }}}; */



  window.addEventListener("scroll", function() {
    if (pageYOffset > 300) {
      document.getElementById("mainheadline").classList.add('ghost');
    } else {
      document.getElementById("mainheadline").classList.remove('ghost');
}
});

function changeBottonSize() {
  if (window.width <= 1000){
    document.getElementById("SignInButton").classList.remove('btn-sm');
    document.getElementById("SignInButton").classList.add('btn-xs');
  } else {
    document.getElementById("SignInButton").classList.remove('btn-xs');
    document.getElementById("SignInButton").classList.add('btn-sm');
  }
}

window.width()

/*

getElementById("about").addEventListener("click", function() {
    document.getElementById("about_box").classList.remove('visible');
    document.getElementById("about_box").classList.add('invisible');
  });



const A4ratio = Math(29.7/21);


  document.getElementById("hiya").classList.remove('bg-transparent');
   document.getElementById("hiya").classList.remove('navbar-dark');
   document.getElementById("hiya").classList.add('bg-light');
   document.getElementById("hiya").classList.add('navbar-light');
   document.getElementById("paypal").classList.remove('paypal');
   document.getElementById("paypal").classList.add('paypal-invert');
      $('.navbar-brand img').attr('src','https://cdn.glitch.com/89557d53-bdf9-42eb-adfc-ed86e46978c4%2FNayaca%20Logo.001.png?1544769785783');
   } else {
   document.getElementById("hiya").classList.add('bg-transparent');
   document.getElementById("hiya").classList.remove('bg-white');
   document.getElementById("hiya").classList.remove('navbar-light');
   document.getElementById("hiya").classList.add('navbar-dark');
   document.getElementById("paypal").classList.remove('paypal-invert');
   document.getElementById("paypal").classList.add('paypal');
      $('.navbar-brand img').attr('src','https://cdn.glitch.com/89557d53-bdf9-42eb-adfc-ed86e46978c4%2FNayaca%20Logo.003.png?1546601524771');
     }
  });
*/

/*
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $('#custom-nav').addClass('affix');
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        $('.navbar-brand img').attr('src','https://cdn.glitch.com/89557d53-bdf9-42eb-adfc-ed86e46978c4%2FNayaca%20Logo.001.png?1544769785783'); //change src
    } else {
        $('#custom-nav').removeClass('affix');
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        $('.navbar-brand img').attr('src','https://cdn.glitch.com/89557d53-bdf9-42eb-adfc-ed86e46978c4%2FNayaca%20Logo.002.png?1544769787669')
    }
}); */


 /*   let str = "How are you doing today?";
    let res = str.split(" ");
    document.getElementById("demo").innerHTML = res;
}*/

  /*
document.write("HEllo");
*/
/*
window.addEventListener('scroll', function() {
  document.getElementById('urch').innerHTML
    for (


  innerHTML = {}



    const slogan = ['GET YOUR DREAM JOB'];
for (let i = 0; i < slogan.length; i++){
      for j = 0; j < pageYOffset * 0.1; j++ {

  document.write(slogan());
};
    for urch[pageYOffset];
});

var numberArray = [];

for(var i = 1; i <= 20; i++){
    numberArray.push(i);
}

console.log(numberArray);




var i=0;
function test(){

for(i=0;i<=5;i++){
    return "the number is" + i;
}
}

document.write(test()); */
