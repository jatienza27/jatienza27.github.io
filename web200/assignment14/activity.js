function submitForm() {
    if (validateForm()) {
        const formData = {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            dateOfBirth: document.getElementById('dateOfBirth').value,
            email: document.getElementById('email').value,
            phoneNum: document.getElementById('phoneNum').value,
            address: document.getElementById('address').value,
            city: document.getElementById('city').value,
            state: document.getElementById('state').value,
            postalCode: document.getElementById('postalCode').value,
            region: document.getElementById('region').value
        };

        fetch('jsonplaceholder.typicode.com', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch(error => {
                console.error('Error:', error);
            });


        const getUserEndpoint = 'jsonplaceholder.typicode.com';


        fetch(getUserEndpoint, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(response => response.json())
            .then(data => {
                console.log('User Data:', data);

            })
            .catch(error => {
                console.error('Error:', error);
            });


    }
}

//I was confused and I don't think I did this correctly.