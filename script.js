const body = document.querySelector("body");
const social_media_container_relative_to_button = document.querySelector(
    ".social-media-container"
);
const shareButton = document.querySelector(".share-button");
const svg = document.querySelector("svg path");

let toggle = true;
shareButton.addEventListener("click", () => {
    if (toggle) {
        social_media_container_relative_to_button.style.visibility = "visible";
        social_media_container_relative_to_button.style.top = " -80px";
        social_media_container_relative_to_button.style.transition = "top 0.5s";

        shareButton.style.backgroundColor = "hsl(214, 17%, 51%)";
        svg.style.fill = "hsl(210, 46%, 95%)";

        toggle = false;
    } else {
        social_media_container_relative_to_button.style.top = " -55px";
        social_media_container_relative_to_button.style.visibility = "hidden";

        shareButton.style.backgroundColor = "hsl(210, 46%, 95%)";

        svg.style.fill = "#6E8098";
        toggle = true;
    }
});

window.addEventListener("resize", () => {
    social_media_container_relative_to_button.style.top = " -55px";
    social_media_container_relative_to_button.style.visibility = "hidden";

    shareButton.style.backgroundColor = "hsl(210, 46%, 95%)";
    shareButton.style.opacity = 1;

    svg.style.fill = "#6E8098";
    toggle = true;
});
