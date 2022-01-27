export const sendEmail = () => {
  emailjs.init("user_xyoljbjW8lHqSSPSpHoJG");

  //get button to generate loading inside it
  const submit = document.querySelector(".submit-button");

  //get inputs
  const input = document.querySelectorAll("[data-input]");

  // loading button html content
  let loading = `<div class="spinner-border text-light" role="status">
  <span class="visually-hidden">Loading...</span>
</div>`;

  //success message
  let successMessage = "Message successfully sent!";

  //generic error message
  let genericErrorMessage = "Something's gone wrong. Try again!";

  //empty input value error
  let emptyInputErrorMessage = "All fields must be filled in!";

  //wrong email error
  let wrongEmailError = "Your email address is incorrect";

  //get message container
  const messageContainer = document.querySelector(".message");

  //regex function for email validation
  const validateEmail = (email) => {
    let re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  //cancel error and success message when inputs change
  document
    .getElementById("contact-form")
    .addEventListener("input", function (event) {
      messageContainer.classList.remove("success-message");
      messageContainer.classList.remove("error-message");
      messageContainer.innerHTML = "";
    });

  //send email
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      //check if the form is filled in correctly

      const incompleteForm = Array.from(input).find((e) => e.value == "");
      const emailInput = Array.from(input).find((e) => e.type == "email");

      if (incompleteForm) {
        messageContainer.classList.remove("success-message");
        messageContainer.classList.add("error-message");
        messageContainer.innerHTML = emptyInputErrorMessage;
      } else if (validateEmail(emailInput.value) === false) {
        messageContainer.classList.remove("success-message");
        messageContainer.classList.add("error-message");
        messageContainer.innerHTML = wrongEmailError;
      } else {
        // generate a five digit number for the contact_number variable
        this.contact_number.value = (Math.random() * 100000) | 0;

        submit.innerHTML = loading;
        // these IDs from the previous steps
        emailjs.sendForm("contact_service", "contact_form", this).then(
          function () {
            submit.innerHTML = "Send";
            messageContainer.classList.remove("error-message");
            messageContainer.classList.add("success-message");
            messageContainer.innerHTML = successMessage;
            input.forEach((el) => (el.value = ""));
          },
          function (error) {
            submit.innerHTML = "Send";
            messageContainer.classList.remove("success-message");
            messageContainer.classList.add("error-message");
            messageContainer.innerHTML = genericErrorMessage;
          }
        );
      }
    });
};
