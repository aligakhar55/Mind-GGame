let steps = [];
let currentStep = 0;
let finalAnswer = 0;

function generateSteps() {
  // Generate random number between 3 and 9 as final answer
  finalAnswer = Math.floor(Math.random() * 7) + 3;

  steps = [
    "Think of a number in your mind (don't tell me!). Click Next when you're ready.",
    "Now multiply that number by 2.",
    `Add ${2 * finalAnswer} to the result.`,
    "Divide the result by 2.",
    "Now subtract the number you first thought of.",
    `🤯 Your answer is... <strong style='color:#00ffc3;'>${finalAnswer}</strong>!`,
    "Want to try again? Click Restart."
  ];
}

function nextStep() {
  const stepText = document.getElementById("stepText");
  const nextBtn = document.getElementById("nextBtn");

  if (currentStep === 0) {
    generateSteps(); // Generate new trick only at the start
  }

  if (currentStep < steps.length) {
    stepText.innerHTML = steps[currentStep];
    currentStep++;
    if (currentStep === steps.length) {
      nextBtn.innerText = "Restart";
    } else {
      nextBtn.innerText = "Next";
    }
  } else {
    currentStep = 0;
    nextBtn.innerText = "Start";
    stepText.innerHTML = "Ready? Click <b>Start</b> to begin the magic trick!";
  }
}
