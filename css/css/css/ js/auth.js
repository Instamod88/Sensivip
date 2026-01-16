function login() {
  const user = document.getElementById("user").value;
  const pass = document.getElementById("pass").value;

  if (user === "Oliveira.2ss" && pass === "hs70%") {
    localStorage.setItem("auth", "true");
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("error").innerText = "Usuário ou senha incorretos";
  }
}
