'use strict';

const boxes = document.querySelectorAll(".top-box");
const btBoxes = document.querySelectorAll(".bottom-box");
const icons = document.querySelectorAll(".icon img");

boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
        toggleBox(index);
    });
});

function toggleBox(index) {
    btBoxes.forEach((btBox, i) => {
        if (i === index) {
            btBox.style.display = btBox.style.display === "none" ? "flex" : "none";
        } else {
            btBox.style.display = "none";
        }
    });

    boxes.forEach((box, i) => {
        box.style.borderRadius = (i === index && btBoxes[i].style.display === "flex") ? "5px 5px 0 0" : "5px";
    });

    icons.forEach((icon, i) => {
        icon.src = (i === index && btBoxes[i].style.display === "flex") ? "./assets/icons/subtraction-svgrepo-com (1).svg" : "./assets/icons/plus-large-svgrepo-com (1).svg";
    });
}
