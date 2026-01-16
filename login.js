document.addEventListener("DOMContentLoaded", function () {
  const botao = document.getElementById("btnEntrar");
  const erro = document.getElementById("error");

  if (!botao) return;

  botao.addEventListener("click", function (e) {
    e.preventDefault();

    const usuario = document.getElementById("username").value;
    const senha = document.getElementById("password").value;

    if (usuario === "Oliveira.2ss" && senha === "hs70%") {
      window.location.href = "dashboard.html";
    } else {
      erro.innerText = "Usuário ou senha incorretos";
    }
  });
});
