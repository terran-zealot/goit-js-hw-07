const userInput = document.querySelector("#name-input");

const userName = document.querySelector("#name-output");




userInput.addEventListener("input", (event) => {
    const trimmedUserName = event.currentTarget.value.trim();
    if (event.currentTarget.value === "") {
       userName.textContent = "Anonymos";
    } else {
        userName.textContent = trimmedUserName;
    }
});