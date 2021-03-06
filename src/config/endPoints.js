export const host = process.env.NODE_ENV !== 'production' ? "http://localhost:3001" : `https://presentsimple.online`;
export const wsserver = process.env.NODE_ENV !== 'production' ? "ws://localhost:3001" : "wss://presentsimple.online";

const initPoints = {
  //Аутентификация
  signUp:"/api/v1/auth/signup",
  signIn:"/api/v1/auth/signin",
  signOut:"/api/v1/auth/signout",
  googleIn:"/api/v1/auth/google",
  checkAuth:"/api/v1/auth/check",
  checkEmail:"/api/v1/auth/checkemail",
  checkLink: (uuid) => `/api/v1/auth/resetpassword/${uuid}`,
  resetPassword: `/api/v1/auth/resetpassword/`,
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
  deleteGroup: (id) => `api/v1/group/${id}`,
  editGroup: (id) => `api/v1/group/edit/${id}`,
  leaveGroup:(id) => `api/v1/group/leave/${id}`,
  editUserData: '/api/v1/user'
}

export default initPoints;
