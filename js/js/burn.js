document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("startBurn");
  const canvas = document.getElementById("burnCanvas");
  const ctx = canvas.getContext("2d");
  let countdown = 5;
  let burning = false;

  startBtn.addEventListener("click", () => {
    if (burning) return;
    burning = true;
    startBtn.innerText = "🔥 焚毁中...";
    startCountdown();
  });

  function startCountdown() {
    const timer = setInterval(() => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#FFD700";
      ctx.font = "30px Courier New";
      ctx.fillText(`倒计时：${countdown}s`, 100, 60);
      countdown--;
      if (countdown < 0) {
        clearInterval(timer);
        burnEffect();
      }
    }, 1000);
  }

  function burnEffect() {
    let opacity = 1.0;
    const fade = setInterval(() => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = `rgba(255,215,0,${opacity})`;
      ctx.font = "26px Courier New";
      ctx.fillText("🔥 内容已焚毁", 100, 60);
      opacity -= 0.05;
      if (opacity <= 0) {
        clearInterval(fade);
        document.body.innerHTML = `
          <h1 style='color:#FFD700;text-shadow:0 0 25px #ffbf00;margin-top:40vh;text-align:center;'>
          夜已照亮，今日清空，明天更好。
          </h1>
          <footer style='color:#c9a400;margin-top:40px;font-size:0.9em;text-shadow:0 0 8px #a68800;'>
          鱼人・夜色终端
          </footer>`;
      }
    }, 100);
  }
});