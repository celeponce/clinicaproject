// Login
console.log("Se cargo el archivo loginadmin.js");

const evento3 = document.getElementById("botonregistrointranet").addEventListener("submit", function (e) {
  console.log("presione boton registrar!!!");
  window.location ="http://127.0.0.1:5500/registroIntranet.html";
  e.preventDefault();
}
);

// Clase Usuario
class Usuario {
  constructor(username, password) {
    this._username = username;
    this._password = password;
  }

 get username() {
    return this._username;
  } 
 /*
  static validarUsername(username) {
    if (username.length > 3) {
      return true;
    } else {
      return false;
    }
  }

  static validarPassword(password) {
    // password = "1234@"
    // Metodo serach("string") busca un string en otro string
    // Si lo encuentra devuelve la posicion y si no lo encuentra devuelve -1
    if (password.search("@") === -1) {
      return true;
    } else {
      return false;
    }
  } */

 
  existeUsuario() {
    console.log("Entre");
    if (this._username === "admin" && this._password === "1234") {
      console.log("Entre");
      return true;
    } else {
      return false;
    }
  }
}


/* 
function checkUsername() {
  const username = document.getElementById("inputUsername").value;
  // Es equivalente => if(!Usuario.validarUsername(username))
  if (Usuario.validarUsername(username) === false) {
    alert("El nombre de usuario debe tener mas de 3 caracteres!!!");
  }
}

function checkPassword() {
  const password = document.getElementById("inputPassword").value;
  // Es equivalente => if(!Usuario.validarUsername(username))
  if (Usuario.validarPassword(password) === false) {
    alert("El password no debe contener @!!!");
  }
} */

const evento = document.getElementById("formloginintranet").addEventListener("submit", function (e) {
    const username = document.getElementById("inputUsernamemodalintranet").value;
    const password = document.getElementById("inputPasswordmodalintranet").value;

    const usuario = new Usuario(username, password);
console.log("guardo datos en la instancia")
    if (usuario.existeUsuario()) {
      console.log("El usuario es correcto!!!");
      window.location ="http://127.0.0.1:5500/administrador.html";
    } else {
      alert("Usuario no existe!!!");
    }

    e.preventDefault();
  });
