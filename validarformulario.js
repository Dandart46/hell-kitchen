function validacion(){
    var nombre, apellido, dni, telefono, email, aceptar, password, password1;
    nombre = document.getElementById("nombre").value;
    apellido = document.getElementById("apellido").value;
    dni = document.getElementById("dni").value;
    telefono = document.getElementById("telefono").value;
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    aceptar = document.getElementById("aceptar").checked;

    
    if (nombre == ""){
        alert ("You have to fill the name field");
         document.getElementById("nombre").focus();
        return false;
    }
    else if (apellido == "") {
        alert ("You have to fill the last name field");
         document.getElementById("apellido").focus();
        return false;
    }
    else if (dni == ""){
        alert ("You have to fill the ID field");
         document.getElementById("dni").focus();
        return false;
    }
     else if (telefono == ""){
        alert ("You have to fill the phone number field");
         document.getElementById("telefono").focus();
        return false;
    }
     else if (email == ""){
        alert ("You have to fill the email field");
         document.getElementById("email").focus();
        return false;
    }
    else if (password == ""){
      alert("You have to fill the password field");
      document.getElementById("password").focus();
      return false;
    }
     else if (aceptar == true){
        alert ("You have registered succesfully!");   
    }
    else {
        alert ("You have to accept the terms and conditions first");
        return false;
    }
    
}
function validacionlog(){
  var email1, password1;
    email1 = document.getElementById("email1").value;
    password1 = document.getElementById("password1").value;

    if (email1 == ""){
      alert ("You have to fill the username (email) field for login");
         document.getElementById("email1").focus();
        return false;
    }
    else if (password1 == ""){
      alert("You have to fill the password field for login");
      document.getElementById("password1").focus();
      return false;
    }
    else{
      alert("You have logged succesfully!");
      return false;
    }
}

function scrollar(posicion){
  window.scrollTo(0, posicion)
}