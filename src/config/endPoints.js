export const host = "http://localhost:3001";

const initPoints = {
  //Аутентификация
  signUp:"/api/v1/auth/signup",
  signIn:"/api/v1/auth/signin",
  signOut:"/api/v1/auth/signout",
  googleIn:"/api/v1/auth/google",
  checkAuth:"/api/v1/auth/check",
  checkEmail:"/api/v1/auth/checkemail",
  resetPassword:"/api/v1/auth/resetpassword/",
  //Юзеры, Анкеты
  createForm: "/api/v1/form/",
  searchPersonOrForm: "/api/v1/form/search",
  deliveryForm: (uuid) => `/api/v1/sentform/delivery/${uuid}`,
  checkAndFillForm: (uuid) => `/api/v1/sentform/${uuid}`,
  //Вишлисты
  getAllPresents: (uuid) => `/api/v1/presents/${uuid}`,
  getPersonWishes: (id) => `/api/v1/group/${id}`,
  createGroup: "/api/v1/group/",
  joinGroup:"api/v1/group/",
  addAlone: "/api/v1/group/alone/",
}

export default initPoints;
