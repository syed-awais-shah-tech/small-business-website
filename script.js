const form = document.querySelector("#contact-form");
const message = document.querySelector("#form-message");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    const name = document.querySelector("#name").value.trim();
    message.textContent = `Thank you, ${name}! Your demo form worked.`;
    form.reset();
});
