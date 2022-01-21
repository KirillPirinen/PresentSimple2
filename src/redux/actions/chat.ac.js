export const recieveMessage = (event) => async dispatch => {
  const action = await JSON.parse(event.data)
  dispatch(action)
}

export const openChat = () => {
  
}
