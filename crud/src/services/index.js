import axios from "axios";

export const Api = axios.create({
    baseURL: "https://reactnative.herokuapp.com/reactnative",
    auth: {
        username: "reactnative",
        password: "2022"
    }
});