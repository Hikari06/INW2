var currentUser;

function createLogin(){
    var email =document.getElementById('email').value;
    var password =document.getElementById('password').value;

    firebaseConfig.auth().createUseerWithemailandPassword(email, password).then(user=>{
        console.log('Usuário', user);
        alert('Usuário criado e feito login');
    }).catch(err =>{
        console.log('erro', err);
    })

}

function loginEmail(){
    var email =document.getElementById('email').value;
    var password =document.getElementById('password').value;

    firebase.auth().signInwithEmailAndPassword(email, password).then(()=>{
        alert('Usuário logado !!!');
    }).catch(err =>{
        console.log('Erro', err);
    })
}

currentUser =firebase.auth().currentUser;

function deletaUsuario(){
    if(currentUser){
        currentUser.delete().then(()=>{
            alert('Usuário excluído');
        })
    }
}