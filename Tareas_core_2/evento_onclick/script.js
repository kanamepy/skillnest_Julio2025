document.getElementById("button-azul").onclick = function () {
        alert("¡Iniciaste sesión!");
        toggleSesion();
      };

      function toggleSesion() {
        const boton = document.getElementById("button-azul");
        if (boton.textContent === "Iniciar sesión") {
          boton.textContent = "Cerrar sesión";
        } else {
          boton.textContent = "Iniciar sesión";
        }
      }