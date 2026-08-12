let mIcon = document.querySelector("#mIcon");

let navElement = document.querySelector("nav");
mIcon.addEventListener("click", () => {
    console.log("clicked");
    navElement.classList.toggle("left-0");

});