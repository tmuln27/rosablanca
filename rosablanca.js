const loadingText = document.getElementById("loading-text");
const loadingDots = document.getElementById("loading-dots");
const progressBar = document.getElementById("progress-bar");
const percent = document.getElementById("percent");
const downloadLink = document.getElementById("download-link");

downloadLink.style.display = "none";

const startTime = new Date("2023-03-29 10:00:00").getTime();
const estimatedTime = new Date("2023-03-30 00:00:00").getTime();

setInterval(() => {
  loadingDots.textContent += ".";
  if (loadingDots.textContent.length > 3) {
    loadingDots.textContent = "";
  }
}, 1000);

setInterval(() => {
  const currentTime = new Date().getTime();
  const timeDifference = currentTime - startTime;
  const totalTime = estimatedTime - startTime;
  
  if (timeDifference >= totalTime) {
    percent.textContent = "100%";
    progressBar.style.width = "100%";
    downloadLink.style.display = "block";
  } else {
    const progress = (timeDifference / totalTime) * 100;
    percent.textContent = `${Math.floor(progress)}%`;
    progressBar.style.width = `${progress}%`;
  }
}, 1000);
