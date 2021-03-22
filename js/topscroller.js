document.addEventListener("DOMContentLoaded", e => {
  if(window.innerWidth > 1024) {
    setTimeout(() => {
      if(window.scrollY < 1) {
        window.scroll(0, 0)
        window.scroll({
          top: 200,
          behavior: "smooth"
        })
      }
    }, 6000);
  }

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