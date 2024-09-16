// Configuração do Firebase, atualizada com seus dados
const firebaseConfig = {
    apiKey: "YOUR_API_KEY", // Mantenha este placeholder
    authDomain: "italosantos-c3ce0.firebaseapp.com", 
    projectId: "italosantos-c3ce0", 
    storageBucket: "italosantos-c3ce0.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID", // Mantenha este placeholder
    appId: "YOUR_APP_ID" // Mantenha este placeholder
};

// Inicialize o Firebase
firebase.initializeApp(firebaseConfig);

// Referências do Auth
const auth = firebase.auth();

// Formulários
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');

// Funções de exibição
function showLoginForm() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('register-form').style.display = 'none';
}

function showRegisterForm() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
}

// Login
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    auth.signInWithEmailAndPassword(email, password)
        .then(userCredential => {
            alert('Login bem-sucedido!');
            // Redirecionar ou manipular a resposta
        })
        .catch(error => {
            console.error('Erro no login:', error);
            alert('Erro no login: ' + error.message);
        });
});

// Cadastro
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerConfirmPassword').value;

    if (password !== confirmPassword) {
        alert('As senhas não coincidem!');
        return;
    }

    auth.createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
            alert('Cadastro bem-sucedido!');
            // Redirecionar ou manipular a resposta
        })
        .catch(error => {
            console.error('Erro no cadastro:', error);
            alert('Erro no cadastro: ' + error.message);
        });
});