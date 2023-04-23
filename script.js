function ask_8ball(){
  event.preventDefault(); // I do not know what this may do
  document.getElementById("question").value = "";
  var messages = ["yes", "no", "maybe", "ask again", "In the near future, all will be revealed"];
  var randomMessage = messages[Math.floor(Math.random()*messages.length)];
  document.getElementById("output").innerHTML = randomMessage;
}
