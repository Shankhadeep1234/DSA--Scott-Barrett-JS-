console.log("Demo for set interval");

let count = 0;

function intervalCallBack() {
  if (count === 5) {
    console.log(`Clearing interval after ${count}  seconds`);
    clearInterval(intervalId);
  } else {
    count++;
    console.log(`Interval callback called after ${count} second`);
  }
}

// setTimeoutCallback will be called after 0 seconds and intervalCallback will be called after every 1 second
// setTimeout(setTimeoutCallBack, 0);
function setTimeoutCallBack() {
  console.log("Set timeout callback called after 0 seconds");
}

const intervalId = setInterval(intervalCallBack, 1000);
