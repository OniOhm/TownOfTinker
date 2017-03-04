var paine = document.getElementsByClassName('paine');
var beginning = document.getElementById('bottomNavLastPage');
// Listeners
window.addEventListener('scroll',scrollFadeOut,false);
// paine.addEventListener('click', scrollFadeIn,false);
beginning.addEventListener('click',windowchange,false);



// Listener functions
function windowchange(){
  window.location = '/index';
}
function scrollFadeIn(){
  document.getElementById('bottomNavHolder').style.opacity = "1.0";
}
function scrollFadeOut(){
  document.getElementById('bottomNavHolder').style.opacity = "0.0";
}
for (var i = 0; i < paine.length; i++) {
    paine[i].addEventListener('click',scrollFadeIn, false);
}
