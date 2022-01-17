export const getCostByRange = (rangeid) => {
    switch (rangeid) {
      case 1: return `до 1000 ₽`
      case 2: return `от 1000 до 3000 ₽`;
      case 3: return `от 3000 до 5000 ₽`;
      case 4: return `от 5000 до 10000 ₽`;
      case 5: return `более 10 000 ₽`;
      default: return 'неизвестно'
    }
}
