import axios from "axios";
import { baseUrl } from "./constannts/constant";

const instance=axios.create({
    baseURL:baseUrl,
})

export default instance