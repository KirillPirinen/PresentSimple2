export const getFormData = (target) => {
  return Object.fromEntries(new FormData(target))
}
