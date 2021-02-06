function makeChoice() {
  let c = Math.random();

  document.getElementById("decisor").style.visibility = "hidden";

  if (c >= 0.5) {
    document.getElementById("decision").innerHTML = "B";
  } else {
    document.getElementById("decision").innerHTML = "A";
  }

  document.getElementById("try-again").style.visibility = "visible";

  document.getElementById("try-again").style.position = "relative";
  document.getElementById("decisor").style.position = "absolute";
}

function tryAgain() {
  document.getElementById("decision").innerHTML = "";
  document.getElementById("decisor").style.visibility = "visible";
  document.getElementById("try-again").style.visibility = "hidden";

  document.getElementById("try-again").style.position = "absolute";
  document.getElementById("decisor").style.position = "relative";
}
