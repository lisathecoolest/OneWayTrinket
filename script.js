document.addEventListener("DOMContentLoaded", function () {

    const book = document.getElementById("book");

    if (typeof St === "undefined") {
        console.error("StPageFlip library was not loaded!");
        return;
    }

    const pageFlip = new St.PageFlip(book, {

        width: 500,
        height: 600,
        size: "fixed",
        showCover: true,
        maxShadowOpacity: 0.5,
        flippingTime: 1000,
        usePortrait: false,
        mobileScrollSupport: false

    });

    pageFlip.loadFromHTML(
        document.querySelectorAll(".page")
    );

        // TRINKET INTERACTION

    const trinket = document.getElementById("trinket01");

    const swingAnimations = [
        "swing-one",
        "swing-two",
        "swing-three"
    ];

    let lastSwing = "";

    trinket.addEventListener("click", function () {

        // Choose a random animation
        let randomSwing;

        do {
            randomSwing = swingAnimations[
                Math.floor(Math.random() * swingAnimations.length)
            ];
        } while (randomSwing === lastSwing);

        lastSwing = randomSwing;

        // Remove previous animations
        trinket.classList.remove(
            "swing-one",
            "swing-two",
            "swing-three"
        );

        // Restart animation
        void trinket.offsetWidth;

        // Play new animation
        trinket.classList.add(randomSwing);

    });
});