function exportarSensi(device, sensi) {
  const texto = `
📱 ${device}

🎯 Geral: ${sensi.geral}
🔴 Vermelho: ${sensi.vermelho}
🔍 2X: ${sensi.x2}
🔭 4X: ${sensi.x4}
🧠 DPI 1: ${sensi.dpi1}
🚀 DPI Alta: ${sensi.dpialta}
🔥 Botão: ${sensi.botao}%
`;

  navigator.clipboard.writeText(texto);
  alert("Sensibilidade copiada!");
}
