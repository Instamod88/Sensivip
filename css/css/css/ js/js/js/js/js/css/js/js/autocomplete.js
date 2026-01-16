function initAutocomplete(inputId) {
  const input = document.getElementById(inputId);
  const list = document.createElement("div");
  list.className = "autocomplete-list neon-glass";
  input.parentNode.appendChild(list);

  input.addEventListener("input", () => {
    const val = input.value.toLowerCase();
    list.innerHTML = "";
    if (!val) return;

    dispositivos
      .filter(d => d.toLowerCase().includes(val))
      .slice(0, 6)
      .forEach(d => {
        const item = document.createElement("div");
        item.className = "autocomplete-item";
        item.innerText = d;
        item.onclick = () => {
          input.value = d;
          list.innerHTML = "";
        };
        list.appendChild(item);
      });
  });

  document.addEventListener("click", e => {
    if (e.target !== input) list.innerHTML = "";
  });
}
