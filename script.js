if (localStorage.getItem("theme") == "dark") {
  setDarkMode();
}

function setDarkMode() {
  let isDark = document.body.classList.toggle("darkmode");
  if (isDark) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.removeItem("theme");
  }
  document.getElementById("darkBtn").innerHTML = isDark
    ? "Click me! 🕶️"
    : "Click me! 👓";
}

function play() {
  var audio = document.getElementById("audio");
  audio.play();
}
