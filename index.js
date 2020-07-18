
// Add your code here

function submitData(strUserName, strUserEmail) {
    let formData = {
        name: strUserName,
        email: strUserEmail
    };

    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };

    return fetch('http://localhost:3000/users', configObj)
        .then(response => response.json())
        .then((data) => {
            document.body.innerHTML = data.id;
        })
        .catch((error) => {
            // alert("Bad things! Ragnarők!");
            // console.error(error.message);
            document.body.innerHTML = error.message;
        });
}

document.addEventListener("DOMContentLoaded", () => {
    // submitData("New", "User");
});
