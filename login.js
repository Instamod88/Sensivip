document.addEventListener("DOMContentLoaded", function () {
  const botao = document.getElementById("btnEntrar");
  const erro = document.getElementById("error");

  botao.addEventListener("click", function () {
    const usuario = document.getElementById("username").value;
    const senha = document.getElementById("password").value;

    if (usuario === "Oliveira.2ss" && senha === "hs70%") {
      localStorage.setItem("auth", "true");
      window.location.href = "dashboard.html";
    } else {
      erro.innerText = "Usuário ou senha incorretos";
    }
  });
})