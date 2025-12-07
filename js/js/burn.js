document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("startBurn");
  const canvas = document.createElement("canvas");
  canvas.id = "burnCanvas";
  canvas.width = window.innerWidth;
  canvas.height = 150;
  document.body.appendChild(canvas);

  const ctx = canvas.getContext("2d");
  let countdown = 10;
  let running = false;

  startBtn.addEventListener("click", () => {
    if (running) return;
    running = true;
    startBtn.innerText = "🔥 焚毁中...";
    startCountdown();
  });

  function startCountdown() {
    const timer = setInterval(() => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#FFD700";
      ctx.font = "36px Courier New";
      ctx.fillText(`倒计时：${countdown}s`, canvas.width / 2 - 100, 80);
      countdown--;
      if (countdown < 0) {
        clearInterval(timer);
        burnEffect();
      }
    }, 1000);
  }

  function burnEffect() {
    let opacity = 1;
    const fade = setInterval(() => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = `rgba(255, 215, 0, ${opacity})`;
      ctx.font = "28px Courier New";
      ctx.fillText("🔥 内容已焚毁", canvas.width / 2 - 120, 80);
      opacity -= 0.05;
      if (opacity <= 0) {
        clearInterval(fade);
        document.body.innerHTML = `
          <h1 style="color:#FFD700;text-shadow:0 0 25px #ffbf00;margin-top:40vh;text-align:center;">
          夜已照亮，今日清空，明天更好。
          </h1>`;
      }
    }, 100);
  }
});
