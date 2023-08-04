document.addEventListener("DOMContentLoaded", function () {
    const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
        "/"];

    let leftEl = document.getElementById("left");
    let rightEl = document.getElementById("right");
    let inputEl = document.getElementById("input-el");



    function generatePassword() {
        leftEl.textContent = " ";
        rightEl.textContent = " ";
        const len = lengthP();
        for (let i = 0; i < len; i++) {
            let randomLeft = Math.floor(Math.random() * characters.length);
            let randomRight = Math.floor(Math.random() * characters.length);
            leftEl.textContent += characters[randomLeft];
            rightEl.textContent += characters[randomRight];
        }

    }

    function lengthP() {
        return parseInt(inputEl.value, 10)
    }


    let generateBtn = document.getElementById("generate-btn");
    generateBtn.addEventListener("click", generatePassword);

});