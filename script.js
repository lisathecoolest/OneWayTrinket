document.addEventListener("DOMContentLoaded", function () {

const book = document.getElementById("book");

if (typeof St === "undefined") {
    console.error("StPageFlip library was not loaded!");
    return;
}

const isMobile = window.matchMedia("(max-width: 600px)").matches;

const pageFlip = new St.PageFlip(book, {

    width: isMobile ? 175 : 500,
    height: isMobile ? 210 : 600,

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