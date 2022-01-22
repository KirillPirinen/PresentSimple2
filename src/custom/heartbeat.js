import WebSocket from "ws";

function setupWsHeartbeat(ws) {
  // will close the connection if there's no ping from the server
  function heartbeat() {
    clearTimeout(this.pingTimeout);

    // Use `WebSocket#terminate()` and not `WebSocket#close()`. Delay should be
    // equal to the interval at which server sends out pings plus an assumption of the latency.
    this.pingTimeout = setTimeout(() => {
      this.terminate();
    }, 30000 + 1000);
  }

  ws.on('open', heartbeat);
  ws.on('ping', heartbeat);
  ws.on('close', function clear() {
    clearTimeout(this.pingTimeout);
  });
}

export default function createWebSocketConnection(endpoint) {
  const ws = new WebSocket(endpoint);
  ws.onopen(ev => console.log('Websocket open', ev));
  ws.onmessage(ev => console.log('Websocket message', ev));

  // heartbeat will check connection is alive
  //setupWsHeartbeat(ws);

  return ws;
}
