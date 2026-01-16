function calcularStats(device) {
  const data = JSON.parse(localStorage.getItem("sensiData")) || {};
  const hist = data[device];
  if (!hist || hist.length === 0) return null;

  const keys = Object.keys(hist[0]);
  const stats = {};

  keys.forEach(k => {
    const vals = hist.map(h => h[k]);
    stats[k] = {
      min: Math.min(...vals),
      max: Math.max(...vals),
      media: Math.round(vals.reduce((a,b)=>a+b,0)/vals.length)
    };
  });

  return stats;
}
