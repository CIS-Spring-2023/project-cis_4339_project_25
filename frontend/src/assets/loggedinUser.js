import { defineStore } from 'pinia'
import axios from 'axios'
const apiURL = import.meta.env.VITE_ROOT_API

//defining a store
export const useLoggedInUserStore = defineStore({
  // id is only required for devtools with the Pinia store
  id: 'loggedInUser',
  //central part of the store
  state: () => {
    return {
      name: "",
      isLoggedIn: false,
      login :{
        username:'',
        password:''
      }
    }
  },
  // equivalent to methods in components, perfect to define business logic
  actions: {
    async login(username, password) {
      try {
        console.log(apiLogin(username, password))
        const response = await apiLogin(username, password);
        console.log(response)
        this.$patch({
          isLoggedIn: response.isAllowed,
          name: response.name,
        })
        this.$router.push("/");
      } catch(error) {
        console.log(error)
      }
    },
    logout() {
      this.patch({
        name: "",
        isLoggedIn: false
      })
      this.$router.push("/");

      // we could do other stuff like redirecting the user
    }
  }
});

//simulate a login - we will later use our backend to handle authentication
function apiLogin(u, p) {
  if (u === "admin" && p === "password") return Promise.resolve({ isAllowed: true, name: "admin" });
  if (p === "password") return Promise.resolve({ isAllowed: false });
  return Promise.reject(new Error("invalid credentials"));
}

/*function apiLogin(u, p){
  axios.post(`${apiURL}/users/login`, {username:u, password:p})
          .then((res) => {
            console.log(res.data)
            return Promise.resolve(res.data);
          })
          .catch((error) => {
            console.log(error)
            return Promise.reject(new Error("invalid credentials"));
          })
}*/