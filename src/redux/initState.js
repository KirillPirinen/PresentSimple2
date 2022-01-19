const initState = {
  user: getUserState(),
  loader: false,
  informer: {status:false},
  search:{},
  createForm:{},
  sentForm: {},
  presents:[],
  modal:{status:false},
  wishlist:{},
  profile:{},
  groupPage:null
};

export default initState;

function getUserState () {
  const stateFromLS = JSON.parse(window.localStorage.getItem("user"));
  return stateFromLS || null
}
