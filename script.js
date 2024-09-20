// Funzione per mostrare la pagina di login
function showLogin() {
    document.getElementById('admin').style.display = 'block';
    document.querySelector('.feed').style.display = 'none';
    document.querySelector('.login-link').style.display = 'none';
}

// Inizializza Netlify Identity
netlifyIdentity.init();

// Gestisci la registrazione
document.getElementById('signup-link').addEventListener('click', function(e) {
    e.preventDefault();
    netlifyIdentity.open('signup');
});

// Gestisci il form di login
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Login tramite Netlify Identity
    netlifyIdentity.gotrue.login(email, password, true)
        .then(user => {
            alert('Login effettuato con successo');
            console.log(user);
        })
        .catch(error => {
            alert('Errore durante il login: ' + error.message);
        });
});
