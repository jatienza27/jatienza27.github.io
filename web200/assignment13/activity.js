function validateForm() {
    var form = document.getElementById('infoInput');
    var valid = form.checkValidity();

    if (valid) {
        alert('Form submitted successfully!');
    }

    return valid;
}

document.getElementById('infoInput').addEventListener('input', function () {
    var valid = this.checkValidity();
    document.getElementById('submit').disabled = !valid;
});