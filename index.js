const refs = {
  days: document.querySelector('[data-value="days"]'),
  hours: document.querySelector('[data-value="hours"]'),
  mins: document.querySelector('[data-value="mins"]'),
  secs: document.querySelector('[data-value="secs]'),
};

const timer = {
  start() {
    const startTime = Date.now();

    setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - startTime;
      const time = getTimeComponents(deltaTime);
      updateClockface(time);
      //   console.log(`${days}:${hours}:${mins}:${secs}`);
    }, 1000);
  },
};

timer.start();

function updateClockface({ days, hours, mins, secs }) {
  refs.clockface.textContant = `${days}:${hours}:${mins}:${secs}`;
}

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
