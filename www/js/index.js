let usuarios = {
    "usuario1": {
        "user": "usuario1",
        "password": "contraseña1"
    },
    "usuario2": {
        "user": "usuario2",
        "password": "contraseña2"
    },
    "usuario3": {
        "user": "usuario3",
        "password": "contraseña3"
    }
}
document.addEventListener("DOMContentLoaded", function() {
    let buttonSend = document.getElementById("submitButton");
    console.log(buttonSend)

    buttonSend.addEventListener("click", function() {
        console.log("funcion")
        let userInput = document.getElementById("user").value;
        let passwordInput = document.getElementById("password").value;
        let found = false;

        for (let usuario in usuarios) {
            let datosUsuario = usuarios[usuario];
            if (datosUsuario.user === userInput && datosUsuario.password === passwordInput) {
                found = true;
                alert("Login correcto");
                break;
            }
        }

        if (!found) {
            alert("Usuario o contraseña incorrectos");
        }
    });

    let registerButton = document.getElementById("registerButton");

    registerButton.addEventListener("click", function() {
        let regUser = document.getElementById("regUser").value;
        let regPassword = document.getElementById("regPassword").value;
        let confirmPassword = document.getElementById("confirmPassword").value;

        if (regPassword !== confirmPassword) {
            alert("Las contraseñas no coinciden");
            return;
        }

        // Agregar el nuevo usuario al diccionario
        usuarios[`usuario${Object.keys(usuarios).length + 1}`] = {
            "user": regUser,
            "password": regPassword
        };

        console.log(usuarios); // Muestra el diccionario actualizado en la consola (puedes eliminar esta línea)
        alert("Usuario registrado con éxito");
    });
    
});