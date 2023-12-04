let loginButton = document.getElementById("loginButton");

let logintask = function () {
    var enteredUsername = document.getElementById("username").value;
    var enteredPassword = document.getElementById("password").value;
    fetch('../users.txt')
        .then(response => {
            if (!response.ok) {
                alert('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            var lines = data.split('\n');

            for (var i = 0; i < lines.length; i++) {
                var parts = lines[i].split(':');
                var usernameFromFile = parts[0];
                var passwordFromFile = parts[1];

                if (enteredUsername === usernameFromFile && enteredPassword === passwordFromFile) {
                    alert("Login successful");
                    window.location.href = '../templates/index.html';
                    return;
                }
            }

            alert("Login failed. Please check your username and password.");
        })
        .catch(error => {
            console.error('Error reading file or network error:', error);
        });
};

loginButton.addEventListener("click", logintask);