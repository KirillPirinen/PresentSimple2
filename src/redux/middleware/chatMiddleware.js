const chatMiddleware = () => {
  let socket = null;

  return store => next => action => {
    switch (action.type) {

      case 'WS_CONNECT':
        if (socket !== null) {
          socket.close();
        }
        
        socket = new WebSocket(action.host);

        socket.onopen = () => console.log('socket is open')
        socket.onclose = () => console.log('socket is closed')

        socket.onmessage = (e) => store.dispatch(JSON.parse(e.data))

        break;

      case 'WS_DISCONNECT':
        if (socket !== null) {
          socket.close();
        }
        socket = null;
        break;

      case 'WS_SEND':
        socket.send(JSON.stringify({ type:'NEW_MESSAGE', payload: action.payload }));
        break;

      default:
        return next(action);
    }
  };
};

export default chatMiddleware();
