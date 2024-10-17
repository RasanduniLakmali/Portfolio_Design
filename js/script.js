let progressBar = document.querySelector("#progress1");
let valueContainer = document.querySelector("#value1");

let progressValue = 0;
let progressEndValue = 85;
let speed = 50;

let progress = setInterval(() => {
    progressValue++;
    valueContainer.textContent = `${progressValue}%`;
    progressBar.style.background = `conic-gradient(
      #4d5bf9 ${progressValue * 3.6}deg,
      #cadcff ${progressValue * 3.6}deg
  )`;
    if (progressValue == progressEndValue) {
        clearInterval(progress);
    }
}, speed);

let progressBar2 = document.querySelector("#progress2");
let valueContainer2 = document.querySelector("#value2");

let progressValue2 = 0;
let progressEndValue2 = 75;
let speed2 = 50;

let progress2 = setInterval(() => {
    progressValue2++;
    valueContainer2.textContent = `${progressValue2}%`;
    progressBar2.style.background = `conic-gradient(
      #4d5bf9 ${progressValue2 * 3.6}deg,
      #cadcff ${progressValue2 * 3.6}deg
  )`;
    if (progressValue2 == progressEndValue2) {
        clearInterval(progress2);
    }
}, speed2);

let progressBar3 = document.querySelector("#progress3");
let valueContainer3 = document.querySelector("#value3");

let progressValue3 = 0;
let progressEndValue3 = 70;
let speed3 = 50;

let progress3 = setInterval(() => {
    progressValue3++;
    valueContainer3.textContent = `${progressValue3}%`;
    progressBar3.style.background = `conic-gradient(
      #4d5bf9 ${progressValue3 * 3.6}deg,
      #cadcff ${progressValue3 * 3.6}deg
  )`;
    if (progressValue3 == progressEndValue3) {
        clearInterval(progress3);
    }
}, speed3);

let progressBar4 = document.querySelector("#progress4");
let valueContainer4 = document.querySelector("#value4");

let progressValue4 = 0;
let progressEndValue4 = 90;
let speed4 = 50;

let progress4 = setInterval(() => {
    progressValue4++;
    valueContainer4.textContent = `${progressValue4}%`;
    progressBar4.style.background = `conic-gradient(
      #4d5bf9 ${progressValue4 * 3.6}deg,
      #cadcff ${progressValue4 * 3.6}deg
  )`;
    if (progressValue4 == progressEndValue4) {
        clearInterval(progress4);
    }
}, speed4);

let progressBar5 = document.querySelector("#progress5");
let valueContainer5 = document.querySelector("#value5");

let progressValue5 = 0;
let progressEndValue5 = 70;
let speed5 = 50;

let progress5 = setInterval(() => {
    progressValue5++;
    valueContainer5.textContent = `${progressValue5}%`;
    progressBar5.style.background = `conic-gradient(
      #4d5bf9 ${progressValue5 * 3.6}deg,
      #cadcff ${progressValue5 * 3.6}deg
  )`;
    if (progressValue5 == progressEndValue5) {
        clearInterval(progress5);
    }
}, speed5);

let progressBar6 = document.querySelector("#progress6");
let valueContainer6 = document.querySelector("#value6");

let progressValue6 = 0;
let progressEndValue6 = 75;
let speed6 = 50;

let progress6 = setInterval(() => {
    progressValue6++;
    valueContainer6.textContent = `${progressValue6}%`;
    progressBar6.style.background = `conic-gradient(
      #4d5bf9 ${progressValue6 * 3.6}deg,
      #cadcff ${progressValue6 * 3.6}deg
  )`;
    if (progressValue6 == progressEndValue6) {
        clearInterval(progress6);
    }
}, speed6);

let menuIcon = document.querySelector('#menu_icon');
let navBar = document.querySelector('#navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navBar.classList.toggle('active');
}