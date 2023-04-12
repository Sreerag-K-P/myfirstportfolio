function myFunction() {
    var x = document.getElementById("responsive-nav");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  const bgImageEl = document.getElementById("hero")

  window.addEventListener("scroll",() => {
      updateImage()
  })
  
  function updateImage(){
      bgImageEl.style.opacity = 1 - (window.pageYOffset / 1000)
      bgImageEl.style.backgroundSize = 160 - scrollY / 12 + "%"
  }