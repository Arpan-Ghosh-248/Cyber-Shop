import axios from "axios";

var baseURL;
// if (
//   process.env.REACT_APP_ENVIRONMENT &&
//   process.env.REACT_APP_ENVIRONMENT === "PRODUCTION"
// ) {
//   baseURL = process.env.REACT_APP_API_BASE_URL;
// } else {
baseURL = "http://127.0.0.1:8000";
// }

const api = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default class API {
  signUp = async (username, email, password) => {
    const formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);
    const savedPost = await api
      .post("/user/signup/", formData)
      .then((response) => {
        console.log("hello world");
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
    return savedPost;
  };
  signIn = async (email, password) => {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    const savedPost = await api
      .post("/user/signin/", formData)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
    return savedPost;
  };
  /////////////////////////
  // Products
  /////////////////////////
  getProducts = async () => {
    let url = "/items/";
    const products = await api
      .get(url)
      .then((response) => {
        console.log('dsdsd', response.data);
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
    return products;
  };
  getProduct = async (id) => {
    const product = await api
      .get("/items/" + id + "/")
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
    return product;
  };
}
