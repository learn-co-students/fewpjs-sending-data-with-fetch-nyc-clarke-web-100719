// Add your code here
const container = document.getElementById('container');
function submitData(usernameInput,emailInput){
    let bodyInput ={
        name: usernameInput,
        email: emailInput
    }
    let confObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(bodyInput)
    }
    return fetch("http://localhost:3000/users", confObj)
    .then(response => response.json())
    .then(obj =>{
        //container.appendChild(obj.id)
        container.innerHTML += `<div>${obj.id}</div>`
    }).catch(error =>{
        container.innerHTML = `<div>${error.message}</div>`
    })
}