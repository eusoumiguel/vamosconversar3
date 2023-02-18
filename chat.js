// Configuração do Firebase de seu aplicativo
//ADICIONE OS LINKS DO FIREBASE AQUI
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC6MBk2ubp4eUPEa-ihyqd1eCx32MrBPiU",
    authDomain: "vamos-conversar-67c75.firebaseapp.com",
    projectId: "vamos-conversar-67c75",
    storageBucket: "vamos-conversar-67c75.appspot.com",
    messagingSenderId: "923349974479",
    appId: "1:923349974479:web:fd4e08cc650724682ca6ba"
  };
firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
   localStorage.setItem("user_name");

   window.location = "chat_room.html";
}



