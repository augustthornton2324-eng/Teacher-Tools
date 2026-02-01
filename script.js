const forms = document.querySelectorAll("form");

forms.forEach(form => {
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // stops page refresh

    const message = form.querySelector(".success-message");
    message.style.display = "block";

    form.reset();
  });
});
