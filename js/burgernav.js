document.addEventListener("DOMContentLoaded", e => {
    const elements = document.querySelectorAll(".wrapper__menu > *")

    for (const element of elements) {
        element.addEventListener("click", e => {
            const menu_checkbox = document.querySelector(".wrapper__checkbox")
            menu_checkbox.checked = false
        })
    }
})