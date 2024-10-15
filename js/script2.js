let progressBar = document.querySelector("#circular-progress2");
let valueContainer = document.querySelector("#value-container2");

let progressValue = 0;
let progressEndValue = 90;
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