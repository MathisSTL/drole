const correctAnswers = {
  q1: "d",
  q2: "b",
  q3: "a",
  q4: "d",
  q5: "d",
  q6: "c",
  q7: "c",
  q8: "c",
  q9: "b",
  q10: "d",
  q11: "a",
  q12: "b",
  q13: "b",
  q14: "c",
  q15: "c",
  q16: "d"
};

const submitButton = document.getElementById("submit-btn");
const resultMessage = document.getElementById("result");
const chiffreElement = document.getElementById("chiffre");

submitButton.addEventListener("click", () => {
  const form = document.getElementById("quiz-form");
  const formData = new FormData(form);
  let correctCount = 0;

  for (const [question, answer] of formData) {
    if (correctAnswers[question] === answer) {
      correctCount++;
    }
  }

  resultMessage.style.display = "block";
  chiffreElement.textContent = correctCount;

  if (correctCount === Object.keys(correctAnswers).length) {
    resultMessage.textContent = "eh beh oui : 0";
  }
});
