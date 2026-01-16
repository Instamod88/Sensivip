document.addEventListener("DOMContentLoaded", function () {
  const botao = document.getElementById("btnEntrar");
  const erro = document.getElementById("error");

  botao.addEventListener("click", function () {
    const usuario = document.getElementById("username").value.trim();
    const senha = document.getElementById("password").value.trim();

    if (usuario === "Oliveira.2ss" && senha === "hs70%") {
      localStorage.setItem("auth", "true");
      window.location.href = "dashboard.html";
    } else {
      erro.textContent = "Usuário ou senha incorretos";
    }
  });
});