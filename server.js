const WebSocket = require("ws");

// Create WebSocket server in port 8000
const wss = new WebSocket.Server({ port: 8000 });

// Create connection
wss.on("connection", function connection(ws) {
  ws.on("message", function incoming(message) {
    // when received from client Log the message
    console.log("received: %s", message);
  });
  ws.on("close", function close() {
    // When close the connection Log `Disconnected`
    console.log("Disconnected");
  });
  // Send data to client and connect to Websocket server
  ws.send("init message to client");

  setInterval(() => {
    const data = {
      X: Math.floor(Math.random() * 800) + 1,
      Y: Math.floor(Math.random() * 600) + 1,
    };
    console.log("sending data to client: ", data);
    ws.send(JSON.stringify(data));
  }, 1000);
});
