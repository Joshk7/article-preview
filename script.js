const shareButton = document.getElementById("share-button");
const shareIcon = document.getElementById("share-icon");
const popup = document.getElementById("popup");
const upshift = document.getElementById("upshift");

const mediaQuery = window.matchMedia("(min-width: 57.5rem)");

shareButton.addEventListener("click", () => {
    shareButton.classList.toggle("active__button");
    shareIcon.classList.toggle("active__icon");

    if (mediaQuery.matches) {
        popup.classList.toggle("visibility");
    } else {
        upshift.classList.toggle("visibility");
    }
});

window.addEventListener("resize", () => {
    shareButton.classList.remove("active__button");
    shareIcon.classList.remove("active__icon");
    popup.classList.add("visibility");
    upshift.classList.add("visibility");
});
