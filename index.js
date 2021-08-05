const timer = {
  start() {
    const startTime = Data.now();

    setInterval(() => {
      const currentTime = Data.now();
      const deltaTime = currentTime - startTime;
      const { days, hours, mins, secs } = getTimeComponents(deltaTime);
      console.log(timeComponents);
    }, 1000);
  },
};

timer.start();

function pad(value) {
  return String(value).padStart(2, "0");
}

function getTimeComponents(time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  return { days, hours, mins, secs };
}
