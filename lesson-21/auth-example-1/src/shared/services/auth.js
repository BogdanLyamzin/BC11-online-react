import axios from "axios";

// axios.defaults.baseURL = "http://localhost:4000/api/auth";

const instance = axios.create({
    baseURL: "http://localhost:4000/api/auth"
});

export const fetchRegister = async (credentials)=> {
    const {data} = await instance.post("/register", credentials);
    // const {data} = await axios.post("/register", credentials);
    return data;
}

export const fetchLogin = async (credentials)=> {
    const {data} = await instance.post("/login", credentials);
    instance.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
    // axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
    // const {data} = await axios.post("/login", credentials);
    return data;
}

export const fetchLogout = async ()=> {
    const {data} = await instance.get("/logout");
    instance.defaults.headers.common["Authorization"] = null;
    // axios.defaults.headers.common["Authorization"] = null;
    // const {data} = await axios.get("/login");
    return data;
}

export const fetchCurrent = async (token)=> {
    instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    // axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    const {data} = await instance.get("/current");
    // const {data} = await axios.get("/current");
    return data;
}