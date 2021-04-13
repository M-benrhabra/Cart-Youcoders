import axios from "axios";

const API_URL_LOGIN = "http://localhost:8080/users/logedUser";
const API_URL_REGISTER = "http://localhost:8080/users/addUser";

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL_LOGIN + "signin", {
        username,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }


  register(username, email, password) {
    return axios.post(API_URL_REGISTER + "signup", {
      username,
      email,
      password
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();