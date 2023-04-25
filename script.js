function ask_8ball() {
  const mysticalMusic = document.getElementById("magicSound");

  var questionInput = document.getElementById("question");
  var question = questionInput.value;
  if (question.trim() === "") {
    alert("Please enter a question!");
    return;
  }


  //play mystical sound
  mysticalMusic.play();


  // animate 8-ball
  var eightBallImg = document.querySelector("img");
  eightBallImg.classList.add("shake");
  setTimeout(() => {
    eightBallImg.classList.remove("shake");
  }, 300);

  questionInput.value = "";
  var messages = [
    "yes",
    "most likely",
    "not a chance",
    "no",
    "maybe",
    "ask again",
    "In the near future, all will be revealed"
  ];
  var randomMessage = messages[Math.floor(Math.random() * messages.length)];
  document.getElementById("response-8ball").innerHTML = randomMessage;
}
