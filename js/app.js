// let num = 0;
// const myApp = setInterval(() => {
//   console.log(num++);
// }, 100);
let myApp;
let times = 0;
let time = document.getElementById("time");
document.getElementById("start").addEventListener("click", () => {
  myApp = setInterval(() => {
    time.innerText = times++;
  }, 1000);
});

document.getElementById("stop").addEventListener("click", () => {
  clearInterval(myApp);
});

document.getElementById("reset").addEventListener("click", () => {
  location.reload();
});
