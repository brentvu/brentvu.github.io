function showHideLogo() {
    /* Show/Hide Horizontal Nav Logo */
    var x = document.getElementById("hideShowNavLogo");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    /* Hide/Show Horizontal Nav Links */
    var x = document.getElementById("hideShowNavLinks");
    if (x.style.display === "none") {
      x.style.display = "flex";
    } else {
      x.style.display = "none";
    }
}