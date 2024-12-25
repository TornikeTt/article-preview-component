const body = document.querySelector("body");

const social_media_container_relative_to_main = document.querySelector(
    ".social-media-container_for_mobile"
);
const shareButton_for_mobile_layout = document.querySelector(".rigth_side");

const social_media_container_relative_to_button = document.querySelector(
    ".social-media-container"
);
const shareButton_for_desktop_layout = document.querySelector(".share-button");

const svg = document.querySelector("svg path");

let toggle = true;

shareButton_for_mobile_layout.addEventListener("click", () => {
    social_media_container_relative_to_main.style.display = "none";
    toggle = true;
});

shareButton_for_desktop_layout.addEventListener("click", () => {
    if (window.innerWidth < 376 || window.innerWidth < 841) {
        if (toggle) {
            social_media_container_relative_to_main.style.display = "flex";
            toggle = false;
        }
    } else {
        if (toggle) {
            social_media_container_relative_to_button.style.display = "flex";
            shareButton_for_desktop_layout.style.backgroundColor =
                "hsl(214, 17%, 51%)";
            svg.style.fill = "hsl(210, 46%, 95%)";

            toggle = false;
        } else {
            social_media_container_relative_to_button.style.display = "none";
            shareButton_for_desktop_layout.style.backgroundColor =
                "hsl(210, 46%, 95%)";
            svg.style.fill = "#6E8098";

            toggle = true;
        }
    }
});

window.addEventListener("resize", () => {
    social_media_container_relative_to_main.style.display = "none";
    social_media_container_relative_to_button.style.display = "none";

    shareButton_for_desktop_layout.style.backgroundColor = "hsl(210, 46%, 95%)";

    svg.style.fill = "#6E8098";
    toggle = true;
});
