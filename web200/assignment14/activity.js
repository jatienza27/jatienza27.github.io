function validateForm() {
    let form = document.getElementById('infoInput');
    let valid = form.checkValidity();

    if (valid) {
        alert('Form submitted successfully!');
    }

    return valid;
}

document.getElementById('infoInput').addEventListener('input', function () {
    let valid = this.checkValidity();
    document.getElementById('submit').disabled = !valid;
});
