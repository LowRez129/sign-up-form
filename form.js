const password = document.querySelector("#password");
const first_name = document.querySelector("#first-name");
const submit_button = document.querySelector("#submit-button");

submit_button.addEventListener("click", () => {
    console.log(first_name.value);
});
