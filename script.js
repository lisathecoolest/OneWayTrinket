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
});