var paine = document.getElementById('paine');

// Listeners
window.addEventListener('scroll',scrollFadeOut,false);
paine.addEventListener('click', scrollFadeIn,false);





function scrollFadeIn(){
  document.getElementById('bottomNavHolder').style.opacity = "1.0";
}
function scrollFadeOut(){
  document.getElementById('bottomNavHolder').style.opacity = "0.0";
}
