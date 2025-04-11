const coinImage = document.getElementById('coin-image');
const flipButton = document.getElementById('button');

const headsImg = './resources/heads.svg';
const tailsImg = './resources/tails.svg';

function flipCoin() {
  coinImage.classList.remove('flip');

  // Start flip animation
  void coinImage.offsetWidth; // Force reflow
  coinImage.classList.add('flip');

  // Randomize result after animation
  setTimeout(() => {
    const isHeads = Math.random() < 0.5;
    coinImage.src = isHeads ? headsImg : tailsImg;
  }, 500); // Change image halfway through flip
}

// Click events
coinImage.addEventListener('click', flipCoin);
flipButton.addEventListener('click', flipCoin);
