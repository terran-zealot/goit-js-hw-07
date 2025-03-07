const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const elements = event.target.elements;
    const userEmail = elements.email.value.trim();
    const userPassword = elements.password.value.trim();

    if ((userEmail === "" || userPassword === "")) {
        return alert("All form fields must be filled in");
    };
         const info = {
        email: userEmail,
        password: userPassword
    }
    console.log(info);
    event.target.reset();
    
}
