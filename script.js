function ValidateEmail(mail) {
  let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (mail.match(mailformat)) {
    return true;
  } else {
    return false;
  }
}

const handleSendButton = async function (event) {
  event.preventDefault();
  event.stopPropagation();

  const name = $("#name").val();
  const subject = $("#subject").val();
  const email = $("#email").val();
  const message = $("#message").val();
  let $respond = $("#respond");
  if (
    name.length === 0 ||
    subject.length === 0 ||
    email.length === 0 ||
    message.length === 0
  ) {
    $respond.empty().append(`<p>Please enter all of the fields above!</p>`);
  } else {
    if (ValidateEmail(email)) {
      $respond.empty().append(`<p>Processing, please wait.</p>`);
      try {
        const result = await axios({
          method: "post",
          url:
            "https://us-central1-portfolio-a6fab.cloudfunctions.net/messages",
          data: {
            name: name,
            email: email,
            message: message,
            subject: subject,
          },
        });
        $respond.empty().append(`<p>The message has been recieved.</p>`);
        $("#name").val(``);
        $("#subject").val(``);
        $("#email").val(``);
        $("#message").val(``);
      } catch (err) {
        $respond.append(
          `<p>An error has occured on the server. Please try again latter.</p>`
        );
      }
    } else {
      $respond.empty().append(`<p>Please enter an valid email address!</p>`);
    }
  }
};

$(function () {
  $button = $("#submit-btn");
  $button.click(handleSendButton);
});
