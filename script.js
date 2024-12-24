const body = document.querySelector("body");
const shareButton = document.querySelector(".share-button");

// Create and insert media icons at the end of the body.
const socialMedia = () => {
    const image_paths = [
        "./images/icon-facebook.svg",
        "./images/icon-pinterest.svg",
        "./images/icon-twitter.svg",
    ];

    let icons = "";

    for (let i = 0; i < 3; i++) {
        icons += ` 
            <a
                href="https://www.facebook.com/"
                target="_blank"
                class="social-media-link"
            >
                <img
                    src="${image_paths[i]}"
                    alt="social media icon"
                    class="social-media-icon"
                />
            </a>
       `;
    }

    return ` 
    
        <div class="social-media-container">
            <p>SHARE</p>
            ${icons}
        </div>
    `;
};
body.insertAdjacentHTML("beforeend", socialMedia());
// Create and insert media icons at the end of the body.

const social_media_container = document.querySelector(
    ".social-media-container"
);

// Center the social media box relative to the share button
let fix_Correct_Positions_For_Social_Media_Container = () => {
    let button_position = shareButton.getBoundingClientRect();
    let box_full_width = social_media_container.offsetWidth;

    // Calculate the left and top positions
    let X =
        button_position.left + button_position.width / 2 - box_full_width / 2;
    let Y = body.offsetHeight - button_position.bottom + 55;

    // Update only left and top using cssText while keeping other styles intact
    social_media_container.style.cssText += `
            left: ${X}px;
            bottom: ${Y}px;
        `;
};

// Toggle visibility of the social media container
let toggle = true;

shareButton.addEventListener("click", () => {
    if (toggle) {
        social_media_container.style.display = "flex"; // Show the container
        fix_Correct_Positions_For_Social_Media_Container(); // Center the container
        toggle = false;
    } else {
        social_media_container.style.display = "none"; // Hide the container
        toggle = true;
    }
});

// Update the positioning when the window is resized
window.addEventListener("resize", () => {
    if (!toggle) {
        fix_Correct_Positions_For_Social_Media_Container(); // Re-center the container on resize
    }
});
