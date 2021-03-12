function goToTop(event) {
  event.preventDefault()
  window.scroll({
      top: 0,
      behavior: "smooth"
  })
}

document.getElementById("topscroller").addEventListener("click", e => {
  goToTop(e)
})

window.addEventListener("scroll", () => {
  if(window.scrollY > 1260) {
    document.getElementById("topscroller").style.visibility = "visible"
    document.getElementById("topscroller").style.opacity = 1
  } else if(window.scrollY < 1260) {
    document.getElementById("topscroller").style.visibility = "hidden"
    document.getElementById("topscroller").style.opacity = 0
  }
})