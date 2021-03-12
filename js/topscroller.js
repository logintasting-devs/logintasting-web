document.addEventListener("DOMContentLoaded", e => {
  let topscroller = document.getElementById("topscroller")

  topscroller.addEventListener("click", event => {
    event.preventDefault()
    window.scroll({
      top: 0,
      behavior: "smooth"
    })
  })

  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      topscroller.style.visibility = "visible"
      topscroller.style.opacity = 1
    } else if (window.scrollY < 500) {
      topscroller.style.visibility = "hidden"
      topscroller.style.opacity = 0
    }
  })
})