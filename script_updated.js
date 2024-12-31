
document.addEventListener("DOMContentLoaded", () => {
  const countdownElement = {
    days: document.getElementById("days"),
    hours: document.getElementById("hours"),
    minutes: document.getElementById("minutes"),
    seconds: document.getElementById("seconds"),
  };

  const targetDate = new Date("December 25, 2025 00:00:00").getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (timeLeft > 0) {
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      countdownElement.days.textContent = String(days).padStart(2, "0");
      countdownElement.hours.textContent = String(hours).padStart(2, "0");
      countdownElement.minutes.textContent = String(minutes).padStart(2, "0");
      countdownElement.seconds.textContent = String(seconds).padStart(2, "0");
    } else {
      // Khi thời gian đến hạn, hiển thị thông báo
      document.querySelector(".countdown").textContent = "🎄 Chúc Mừng Giáng Sinh! 🎁";
    }
  }

  // Cập nhật mỗi giây
  setInterval(updateCountdown, 1000);

  // Tự động chạy lần đầu khi tải trang
  updateCountdown();
});
