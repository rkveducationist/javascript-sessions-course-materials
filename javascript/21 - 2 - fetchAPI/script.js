function getUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
            let output = "";

            data.forEach(user => {
                output += `<li>${user.name} - ${user.email}</li>`;
            });

            document.getElementById("userList").innerHTML = output;
        })
        .catch(error => console.log("Error: " + error));
}