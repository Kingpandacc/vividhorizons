/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function toggleMobileNav() {
  var nav = document.getElementById("nav-bar");
  var navcontent = document.getElementById("nav-content");
  var content = document.getElementById("page-content");

  if (navcontent.style.display === "flex") {
    navcontent.style.display = "none";
    nav.style.height = "auto";
    content.style.display = "flex";
  } else {
    navcontent.style.display = "flex";
    nav.style.height = "100vh";
    content.style.display = "none";
  } 
}

