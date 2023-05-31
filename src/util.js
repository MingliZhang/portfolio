const mailformat =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function invalidateEmail(mail) {
    if (mail.match(mailformat)) {
        return false;
    } else {
        return true;
    }
}

export { invalidateEmail };
