
window.addEventListener("scroll", function() {
    if (pageYOffset > 200) {
      document.getElementById("message").classList.add('ghost');
    } else {
      document.getElementById("message").classList.remove('ghost');
}
});

document.getElementById("SignUpButton").addEventListener("click", function() {
document.getElementById("progressive").innerHTML = "10%";
document.getElementById("progressive").style.width = "15%";
document.getElementById("progressive").style.color = "white";
});

/*
window.addEventListener("scroll", function() {
  if (pageYOffset > 300) {
    document.getElementById("gotoresume-button").classList.remove('btn-lg');
    document.getElementById("gotoresume-button").classList.add('btn-sm');
  } else {
    document.getElementById("gotoresume-button").classList.remove('btn-sm');
    document.getElementById("gotoresume-button").classList.add('btn-lg');
}
})
*/
