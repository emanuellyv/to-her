const correctPassword = "28042024";

function checkPassword() {
    const passwordInput = document.getElementById('password').value;
    if (passwordInput === correctPassword) {
        document.getElementById('login').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    } else {
        alert("Senha incorreta. Tente novamente.");
    }
}
