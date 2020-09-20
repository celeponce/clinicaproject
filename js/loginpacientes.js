// Mock conexion a base de datos
console.log("Se cargo el archivo loginpacientes.js");
//creo clase

class Paciente {
  constructor(username, password) {
    this._username = username;
    this._password = password;
  }

  get username() {
    return this._username;
  }

  
  //funcion para validar si el usuario existe
  existePaciente() {
    if (this._username === "paciente" && this._password === "123") {
      console.log("Entre");
      return true;
    } else {
      return false;
    }
  }

}
console.log("metodo existe paciente");
//aqui la magia
const evento2 = document.getElementById("formLoginpacientes").addEventListener("submit", function (e) {
    //guardo los valores de los campos user y pass en constantes
    const username = document.getElementById("inputUsernamemodalpacientes").value;
    const password = document.getElementById("inputPasswordmodalpacientes").value;
console.log("guardo valor de campos");
    //instancio un usuario de la clase user
    const paciente = new Paciente (username, password);
console.log("instancio usuario con valores del form")
    //si el resultado de la funcion existeUsuario es true entonces redirige a otro html
    //aqui uso la funcion de la clase
    if (paciente.existePaciente()) {

      console.log("El usuario es correcto!!!");
      // alert("Bienvenido!");

      window.location = "http://127.0.0.1:5500/pacientes.html";
    } else {
      alert("Usuario no existe!!!");
    }

    e.preventDefault();
  });