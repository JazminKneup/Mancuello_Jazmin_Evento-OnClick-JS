function toggleLogin() {
    const loginButton = document.querySelector('.btn-login');
    if (loginButton.textContent === 'Login') {
        loginButton.textContent = 'Logout';
    } else {
        loginButton.textContent = 'Login';
    }
}

function removeButton() {
    const addButton = document.querySelector('.btn-add-definition');
    addButton.remove();
}

function likeNinja() {
    alert('Ninja was liked');
}
