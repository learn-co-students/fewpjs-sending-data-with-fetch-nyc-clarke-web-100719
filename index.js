// Add your code here
const userData = {
    name: "Steve",
    email: "steve@steve.com"
};

let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(userData)
};

function submitData() {
    const userUrl = "http://localhost:3000/users";
    return fetch(userUrl, configObj)
            .then(function(response) {
                return response.json();
            })
            .then(function(object) {
                document.body.append(object.id);
            })
            .catch(function(error) {
                document.body.append("Unauthorized Access");
                console.log(error.message);
            });
};