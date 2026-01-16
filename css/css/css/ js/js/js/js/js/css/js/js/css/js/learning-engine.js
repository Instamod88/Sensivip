function media(arr, key) {
  return Math.round(arr.reduce((s, o) => s + o[key], 0) / arr.length);
}

function gerarSensibilidadeInteligente(device) {
  const data = JSON.parse(localStorage.getItem("sensiData")) || {};
  const hist = data[device];

  if (!hist || hist.length < 3) {
    return gerarSensibilidade();
  }

  return {
    geral: media(hist, "geral"),
    vermelho: media(hist, "vermelho"),
    x2: media(hist, "x2"),
    x4: media(hist, "x4"),
    dpi1: media(hist, "dpi1"),
    dpialta: media(hist, "dpialta"),
    botao: media(hist, "botao")
  };
}
