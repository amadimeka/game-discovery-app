import axios from "axios";


export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key: 'f5e139182b124c198db52836f21e432c',
    }
});