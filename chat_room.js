  function addRoom() {
    const Room_name = document.getElementById("nomeSala").value;
    console.log(Room_name);
    if (Room_name) {
        firebase.database().ref('/').child(Room_name).set({
            purpose: "sala criada"
        });
  
        carregaSala(Room_name);
    }
  }
  function getData (){
    firebase.database().ref("/").on('value', function(snapshot)
    {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot)
    {childKey = childSnapshot.key;
                  Room_names = childKey;
           function redirectToRoomName(name) { 
            console.log(name); 
            localStorage.setItem("room_name", name); 
            window.location = "kwitter_page.html"; }
                getData();
             });
        
    });

}


  
  
  localStorage.setItem("user_name", user_name);

  document.getElementById("user_name").innerHTML = "bem-vindo(a)" + user_name + "!";