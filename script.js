document.addEventListener("DOMContentLoaded", function() {
    const bubble = document.querySelector(".bubble");
    let isActive = false;

    bubble.addEventListener("click", function() {
        isActive = !isActive;
        if (isActive) {
            bubble.style.backgroundImage = "url('images/Background-on.png')";
            bubble.style.boxShadow = "0 0 50px 30px rgba(255, 255, 0, 0.8)";
        } else {
            bubble.style.backgroundImage = "url('images/Background-off.png')";
            bubble.style.boxShadow = "none";
        }
    });
});