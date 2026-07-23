// START THE WEBSITE

function startJourney() {

    const intro = document.getElementById("intro");
    const mainContent = document.getElementById("mainContent");

    intro.style.opacity = "0";
    intro.style.transition = "opacity 0.8s ease";

    setTimeout(() => {

        intro.style.display = "none";

        mainContent.classList.remove("hidden");

        window.scrollTo({
            top: 0,
            behavior: "instant"
        });

    }, 800);
}


// SMOOTH SCROLL

function scrollToSection(sectionId) {

    const section = document.getElementById(sectionId);

    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });

    }

}


// QUESTION: YES

function chooseYes() {

    document.getElementById("questionCard")
        .classList.add("hidden");

    document.getElementById("yesResponse")
        .classList.remove("hidden");

}


// QUESTION: NO

function chooseNo() {

    document.getElementById("questionCard")
        .classList.add("hidden");

    document.getElementById("noResponse")
        .classList.remove("hidden");

}


// SHOW FINAL MESSAGE

function showFinal() {

    const questionSection = document.getElementById("question");

    const finalSection = document.getElementById("final");

    questionSection.style.minHeight = "60vh";

    finalSection.scrollIntoView({
        behavior: "smooth"
    });

}


// IMAGE LIGHTBOX

const photos = document.querySelectorAll(".photo-card img");

const lightbox = document.getElementById("lightbox");

const lightboxImage = document.getElementById("lightboxImage");


photos.forEach(photo => {

    photo.addEventListener("click", function(event) {

        event.stopPropagation();

        lightbox.style.display = "flex";

        lightboxImage.src = this.src;

    });

});


function closeLightbox() {

    lightbox.style.display = "none";

    lightboxImage.src = "";

}


// CLOSE LIGHTBOX WITH ESCAPE KEY

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeLightbox();

    }

});
