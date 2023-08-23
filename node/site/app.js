const firebaseConfig = {
    apiKey: "AIzaSyBp3ZKDOMXgJR2Qrb1DGPF9l-pnRneco0w",
    authDomain: "projeto2mibtest-83912.firebaseapp.com",
    projectId: "projeto2mibtest-83912",
    storageBucket: "projeto2mibtest-83912.appspot.com",
    messagingSenderId: "730619330007",
    appId: "1:730619330007:web:69b304b1c7c921ef7f1f92"
  };
  
  const app = initializeApp(firebaseConfig);

  const emailField = document.getElementById('email');
const passwordField = document.getElementById('password');
const loginButton = document.getElementById('loginButton');
loginButton.addEventListener('click', () => {
 const email = emailField.value;
 const password = passwordField.value;
 firebase.auth().signInWithEmailAndPassword(email, password)
 .then((userCredential) => {
 // Usuário logado com sucesso
 const user = userCredential.user;
 console.log('Usuário logado:', user);
 })
 .catch((error) => {
 // Tratar erros de autenticação
 const errorMessage = error.message;
 console.error('Erro de autenticação:', errorMessage);
 });
});
