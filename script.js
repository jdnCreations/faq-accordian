(function (doc) {
    const questionToggle = doc.querySelectorAll(".question-text");

    questionToggle.forEach((arrow => {
        arrow.addEventListener("click", toggleQuestion);
    }));

    function toggleQuestion() {
        this.querySelector(".question").classList.toggle("selected");
        this.querySelector("img").classList.toggle("rotate");

        this.parentElement.querySelector(".answer-text").classList.toggle("show");
    }
})(document);