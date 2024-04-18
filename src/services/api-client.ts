import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f1dbd22e68db47d58ca496d062723efe",
  },
});
