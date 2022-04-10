function changeText() {
  let x = document.getElementById("container");

  if (x.innerHTML === "JavaScript") {
    x.innerHTML = "Hyper Text Markup Language";
  } else {
    x.innerHTML = "JavaScript";
  }
}
