document.addEventListener("DOMContentLoaded", e => {
    const elements = document.querySelectorAll(".wrapper__menu > *")

    for (const element of elements) {
        element.addEventListener("click", e => {
            const menu_checkbox = document.querySelector(".wrapper__checkbox")
            menu_checkbox.checked = false
        })
    }

    document.querySelector(".Ausverkauft").onclick=function(){
        document.querySelector(".notification").style.opacity = "1";
        document.querySelector(".notification").style.display = "block";
        document.querySelector(".Ausverkauft").style.background = "#9FA7AF";
      };

    document.querySelector(".delete").onclick=function(){
        document.querySelector(".notification").style.opacity = "0";
        document.querySelector(".notification").style.display = "none";
      };
})