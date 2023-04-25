const tabs = document.getElementsByClassName("tab")
const h2 = document.querySelector("h2")

for (let i = 0; i < tabs.length; i++) {
    tabs[i].style.display = "none"
}

function showTab(evt, id) {
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none"
    }

    document.getElementById(id).style.display = "block"
}