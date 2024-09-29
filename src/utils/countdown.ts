export const countdown = (
  seconds: number,
  onTick: (timeLeft: number) => void,
  onComplete: () => void
) => {
  let timeLeft = seconds;

  // Uptade time left
  onTick(timeLeft);
  
  // Start countdown timer
  const interval = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      onTick(timeLeft);
    } else {
      clearInterval(interval);
      onComplete();
    }
  }, 1000);
};
