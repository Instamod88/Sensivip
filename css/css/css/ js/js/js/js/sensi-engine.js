function gerar(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function gerarSensibilidade() {
  return {
    geral: gerar(170, 190),
    vermelho: gerar(150, 180),
    x2: gerar(170, 190),
    x4: gerar(170, 190),
    dpi1: gerar(400, 500),
    dpialta: gerar(600, 900),
    botao: gerar(27, 60)
  };
}
