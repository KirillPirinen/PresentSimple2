export const host = "http://localhost:3001";
export const wsserver = "ws://localhost:3001";

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
  deleteForm: (uuid) => `/api/v1/form/${uuid}`,
  searchPersonOrForm: "/api/v1/form/search",
  deliveryForm: (uuid) => `/api/v1/sentform/delivery/${uuid}`,
  checkAndFillForm: (uuid) => `/api/v1/sentform/${uuid}`,
  profileData: '/api/v1/profile',
  //Вишлисты
  getAllPresentsBindPresent: (uuid) => `/api/v1/presents/${uuid}`,
  unbindPresent: (id) => `/api/v1/presents/revert/${id}`,
  unbindWish: (id) => `/api/v1/profile/wish/revert/${id}`,
  givePresent:(id) => `/api/v1/presents/given/${id}`,
  getPersonWishes: (id) => `/api/v1/group/${id}`,
  addWish:'/api/v1/profile/wish',
  editWish:'/api/v1/profile/wish',
  deleteWish: (id) => `/api/v1/profile/wish/${id}`,
  toggleStatus: (id) => `/api/v1/profile/wish/own/${id}`,
  giveWish: (id) => `/api/v1/profile/wish/given/${id}`,
  addAlone: "/api/v1/group/alone/",
  //группы
  groupInfo: (id) => `/api/v1/group/info/${id}`,
  createGroup: "/api/v1/group/",
  joinGroup:"api/v1/group/",
}

export default initPoints;
