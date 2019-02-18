
window.addEventListener("scroll", function() {
    if (pageYOffset > 200) {
      document.getElementById("message").classList.add('ghost');
    } else {
      document.getElementById("message").classList.remove('ghost');
}
});

document.getElementById("contactbtn").addEventListener("click", function() {
document.getElementById("progressbar").innerHTML = "20%";
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
