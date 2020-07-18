function submitData(username, useremail) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
            "Accept" : "application/json"
        },
        body: JSON.stringify({
            name: username,
            email: useremail
        })
    })
        .then(function(resp){
            return resp.json();
        })
        .then(function(data){
            document.body.innerHTML = data.id;
        })
        .catch(function(error){
            document.body.innerHTML = error.message;
        })
}