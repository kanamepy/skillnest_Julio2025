  document.querySelectorAll(".like-button").forEach((boton) => {
        boton.addEventListener("click", () => {
          const contenedor = boton.closest(".posteo");
          const spanLikes = contenedor.querySelector(".likes");
          let n = parseInt(spanLikes.textContent) || 0;
          spanLikes.textContent = `${++n} like(s)`;
        });
      });