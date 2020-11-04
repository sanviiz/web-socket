// Connect WebSocket server with url
var connection = new WebSocket("ws://localhost:8000");

connection.onopen = function () {
  // When connected run this command
  console.log("Connected Websocket");
  // Send data to server
  connection.send("hello world!");
};

connection.onerror = function (error) {
  console.error("WebSocket Error" + error);
};

connection.onmessage = function (e) {
  // Log data is received form server
  console.log("message from server : ", e.data);
  createDivElement(e.data);
};

function createDivElement(e) {
  var newDiv = document.createElement("div");
  newDiv.setAttribute("id", "myDiv");
  newDiv.innerHTML = e;
  document.body.appendChild(newDiv);
}
