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

const intervalId = setInterval(intervalCallBack, 1000);
