import axios from "axios";

export default {
  //these routes should match authcontroller
  getUser: function() {
    // checks if there is a user saved
    return axios.get("/auth/check");
  },
  //login user
  loginUser: function(loginData) {
    return axios.post("/auth/signin", loginData);
  },
  // Makes a NEW user to the database (I don't think we need this one)// 
  registerUser: function(registerData) {
    return axios.post("/auth/signup", registerData);
  },
  //logins out user
  logoutUser: function() {
    return axios.get("/auth/logout");
  },
  // Makes a NEW user to the database
  saveUser: function(userData) {
    return axios.post("/auth/signup", userData);
  }
};
