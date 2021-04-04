const clockEl = document.querySelector(".clock");

setInterval(generateTime, 1000);

console.log(
  "Hi,\nDo You like my page?\nI know you are a developer.\nIf You want to Contact and Follow me than go to my contact section.\n:) Stay Happy :)"
);
function generateTime() {
  const format = clockEl.getAttribute("data-format");
  const date = new Date();
  let hour = date.getHours();
  let timeStatus;
  const min = date.getMinutes();
  const sec = date.getSeconds();
  timeStatus = hour > 12 ? "PM" : "AM";
  if (format === "12") {
    hour = hour > 12 ? hour % 12 : hour;
  }
  clockEl.innerHTML = `<h1>${hour} : ${min} : ${sec}</h1>${timeStatus}`;
}
