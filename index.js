function submitData(username, email) {
    return fetch("http://localhost:3000/users", {
        method: 'POST',
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: username,
            email: email
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.id)
        document.body.innerHTML = data.id
    })
    .catch(err => document.body.innerHTML = err.message)
};