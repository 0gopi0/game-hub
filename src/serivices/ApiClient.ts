import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "bbea0856c38b41e7b5fdd2aba3eb97a3",
  },
});
