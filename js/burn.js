// burn.js
document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("startBurn");
  const canvas = document.getElementById("burnCanvas");
  const ctx = canvas.getContext("2d");

  let burning = false;
  let countdown = 10; // 默认倒计时 10 秒

  button.addEventListener("click", () => {
    if (burning) return;
    burning = true;
    button.innerText = "🔥 焚毁中...";
    startCountdown();
  });

  function startCountdown() {
    const timer = setInterval(() => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#ffd700";
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
      ctx.fillStyle = `rgba(255, 215, 0, ${opacity})`;
      ctx.font = "28px Courier New";
      ctx.fillText("🔥 已焚毁", 130, 60);
      opacity -= 0.05;

      if (opacity <= 0) {
        clearInterval(fade);
        document.body.innerHTML = `
          <h1 style="color:#ffbf00;text-shadow:0 0 25px #ffbf00;">
            ✨ 夜已照亮，今日清空，明天更好。
          </h1>`;
      }
    }, 80);
  }
});
// 焚毁逻辑占位
