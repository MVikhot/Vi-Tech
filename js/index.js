const modal = document.getElementById("newsModal");
const btn = document.getElementById("readBtn");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function(){
    modal.style.display = "block";
}
span.onclick = function(){
    modal.style.display = "none";
}
window.onclick = function(){
    if(event.target == modal){
        modal.style.display = 'none';
    }
}
//////////////////////////////////////////////////////////////
function openFacebook() {
    window.open("https://www.facebook.com/profile.php?id=100008520012442");
}
function openTwitter() {
    window.open("https://twitter.com");
}
function openInstagram() {
    window.open("https://www.instagram.com");
}
///////////////////////////////////////////////////////////////

