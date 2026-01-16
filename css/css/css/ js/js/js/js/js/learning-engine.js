function salvarHistorico(device, sensi) {
  let data = JSON.parse(localStorage.getItem("sensiData")) || {};
  if (!data[device]) data[device] = [];
  data[device].push(sensi);
  localStorage.setItem("sensiData", JSON.stringify(data));
}
