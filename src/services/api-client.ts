import axios from "axios";


export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key: 'febd3fceba5c4e0e93571362fc3af43d',
    }
});