const initState = {
  user: getUserState(),
  loader: false,
  informer: {status:false},
  search:{},
  createForm:{
    "id":"6fa6df07-ef7c-4119-8bbb-cd73081635fd","name":"sonya","lname":"sonya","email":"ccc@mail.ru","user_id":1,"updatedAt":"2022-01-14T16:31:40.625Z","createdAt":"2022-01-14T16:31:40.625Z","phone":null,"isActive":false,"status":true
  },
  sentForm: {}
};

export default initState;

function getUserState () {
  const stateFromLS = JSON.parse(window.localStorage.getItem("user"));
  return stateFromLS || null
}
