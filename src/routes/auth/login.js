const config = require('config');
const axios = require('axios');
exports.login = async (username,password)=>{
    const res = await axios.post(`${config.api}/user/login`,{
        username: username,
        password: password
    });
    return res.data;
}