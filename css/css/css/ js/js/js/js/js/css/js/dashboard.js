function gerarTudo() {

  playSound("generate"); // 🔊 SOM AQUI

  const device = document.getElementById("deviceInput").value.trim();
  const status = document.getElementById("deviceStatus");
  const output = document.getElementById("resultados");

  output.innerHTML = "";

  if (!validarDispositivo(device)) {
    status.innerText = "❌ Dispositivo não reconhecido";
    status.style.color = "red";
    return;
  }

  status.innerText = "✅ Dispositivo reconhecido";
  status.style.color = "#0ff";

  const sensi = gerarSensibilidadeInteligente(device);

window.ultimaSensi = sensi;
window.ultimoDevice = device;

salvarHistorico(device, sensi);

  criarCard("Geral", sensi.geral);
  criarCard("Vermelho", sensi.vermelho);
  criarCard("2X", sensi.x2);
  criarCard("4X", sensi.x4);
  criarCard("DPI 1", sensi.dpi1);
  criarCard("DPI Alta", sensi.dpialta);
  criarCard("Botão", sensi.botao + "%");
}

function criarCard(nome, valor) {
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `<h3>${nome}</h3><p>${valor}</p>`;
  document.getElementById("resultados").appendChild(div);
}
