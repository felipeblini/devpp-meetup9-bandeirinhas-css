function addElement() {
  const $qnt = document.getElementById("qnt");

  for (let i = 0; i < $qnt.value; i++) {
    const $bandeirinhas = document.getElementsByClassName("bandeirinhas")[0];
    const $types = document.getElementById("type");
    const $colors = document.getElementById("color");

    const newDiv = document.createElement("div");

    newDiv.classList.add("bandeirinha");
    newDiv.classList.add($types.options[$types.selectedIndex].value);
    newDiv.classList.add($colors.options[$colors.selectedIndex].value);

    $bandeirinhas.appendChild(newDiv);
  }
}
