import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:4000/books"
});

const fetchAddBook = async data => {
   return instance.post("/", data);
}

export default {
    fetchAddBook
}