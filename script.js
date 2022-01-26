const accordion = document.querySelectorAll(".accordion-button");

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function() {

        if (document.querySelector(".active") && document.querySelector(".active") != this.nextElementSibling) {
            document.querySelector(".active").classList.remove("active");
            document.querySelector(".icon-ro").classList.remove("icon-ro")
        }

        this.nextElementSibling.classList.toggle("active");
        this.lastElementChild.classList.toggle("icon-ro");
    });
}