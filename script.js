const accordion = document.querySelectorAll(".accordion-button");
const activeEl = document.querySelector(".active");

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function() {

        if (activeEl && activeEl != this.nextElementSibling) {
            activeEl.classList.remove("active");
            document.querySelector(".icon-ro").classList.remove("icon-ro")
        }

        this.nextElementSibling.classList.toggle("active");
        this.lastElementChild.classList.toggle("icon-ro");
    });
}
