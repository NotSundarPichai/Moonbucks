function imgSlider(anything) {
  document.querySelector(".starbucks").src = anything;
}
function changeCircleColor(color) {
  const circle = document.querySelector(".circle");
  circle.style.background = color;
}
function darkMode() {
  const body = document.body;
  const section = document.querySelector(".section");
  const circle = document.querySelector(".circle");
  const textBox = document.querySelector(".text");
  const ptext = document.querySelector("#ptext");
  const buttonDm = document.querySelector("#dark-mode-toggle");
  const nav1 = document.querySelector("#nav1");
  const nav2 = document.querySelector("#nav2");
  const nav3 = document.querySelector("#nav3");
  const nav4 = document.querySelector("#nav4");
  

  // Check if dark mode is enabled, and toggle the class accordingly
  if (body.classList.contains("dark-mode")) {
    // Disable dark mode
    
    body.classList.remove("dark-mode");
    section.style.backgroundColor = "#e1e1e1";
    circle.style.backgroundColor = "#017143"; // Light mode background color
    circle.style.clipPath = "circle(600px at right 800px)";
    textBox.style.color = "#333";
    ptext.style.color = "#333";
    buttonDm.style.background="#e1e1e1";
    buttonDm.innerHTML = "Dark";
    nav1.style.color = "#017143";
    nav2.style.color = "#017143";
    nav3.style.color = "#017143";
    nav4.style.color = "#017143";
    buttonDm.style.color="#017143";
  } else {
    // Enable dark mode
    body.classList.add("dark-mode");
    section.style.backgroundColor = "#333333";
    textBox.style.color = "#F2F2F2";
    ptext.style.color = "#F2F2F2";
    buttonDm.style.background="#333333";
    buttonDm.innerHTML = "Light";
    nav1.style.color = "#e1e1e1";
    nav2.style.color = "#e1e1e1";
    nav3.style.color = "#e1e1e1";
    nav4.style.color = "#e1e1e1";
    buttonDm.style.color="#e1e1e1";
  }
}


