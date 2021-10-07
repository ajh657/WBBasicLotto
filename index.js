let args = process.argv;

let timeTaken = 0;
let Jackpot = false;
let lottoNumbers = [];
let highestScore = 0;

while (!Jackpot) {
  for (let index = 0; index < 7; index++) {
    lottoNumbers[index] = getRandomInt(39);
    timeTaken++;
  }

  let correctNumbers = 0;

  if (lottoNumbers[0] == args[0]) {
    correctNumbers++;
  }
  if (lottoNumbers[1] == args[1]) {
    correctNumbers++;
  }
  if (lottoNumbers[2] == args[2]) {
    correctNumbers++;
  }
  if (lottoNumbers[3] == args[3]) {
    correctNumbers++;
  }
  if (lottoNumbers[4] == args[4]) {
    correctNumbers++;
  }
  if (lottoNumbers[5] == args[5]) {
    correctNumbers++;
  }
  if (lottoNumbers[6] == args[6]) {
    correctNumbers++;
  }

  if (correctNumbers == 7) {
    Jackpot = true;
  }

  if (correctNumbers > highestScore) {
    highestScore = correctNumbers;
    console.log(
      "You got: " +
        correctNumbers +
        " correct! It took: " +
        getTimeInYears(timeTaken) +
        " Years"
    );
    console.log();
  }
}

function getTimeInYears(time) {
  return (time / 52.177457).toFixed(2);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
