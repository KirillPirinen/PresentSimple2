export const getStatusColor = (value, max) => {
  const readyInd = Number(value) / Number(max)
  if(readyInd < 0.5) return 'red'
  else if (readyInd < 0.8) return 'yellow'
  else return 'green'
}
