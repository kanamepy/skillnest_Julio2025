  function sumarLike() {
    let likeSpan = document.querySelector('.likes');
    let numeroActual = parseInt(likeSpan.textContent);
    numeroActual++;
    likeSpan.textContent = `${numeroActual} like(s)`;
  }