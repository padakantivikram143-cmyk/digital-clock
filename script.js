const timeElement = document.getElementById("time");
const dateElement = document.getElementById("date");
const toggleBtn = document.getElementById("toggle-btn");

let is24Hour = false;

function updateTime() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = String(now.getMinutes()).padStart(2, "0");
  let seconds = String(now.getSeconds()).padStart(2, "0");

  let ampm = "";
  if (!is24Hour) {
    ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
  }

  timeElement.textContent = `${hours}:${minutes}:${seconds} ${!is24Hour ? ampm : ""}`;

  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const year = now.getFullYear();

  dateElement.textContent = `${day}/${month}/${year}`;
}

toggleBtn.addEventListener("click", () => {
  is24Hour = !is24Hour;
  toggleBtn.textContent = is24Hour
    ? "Switch to 12-hour format"
    : "Switch to 24-hour format";
  updateTime();
});

updateTime();
setInterval(updateTime, 1000);
