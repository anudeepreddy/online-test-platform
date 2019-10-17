/*const config = require('config');
const axios = require('axios');
exports.login = async (username,password)=>{
    const res = await axios.post(`${config.api}/user/login`,{
        username: username,
        password: password
    });
    return res.data;
}*/
const api = require('api');
export function post(req, res) {
	const user = req.body;

	api.post('user/login', user).then(response => {
		if (response.user) req.session.user = response.user;
		res.setHeader('Content-Type', 'application/json');

		res.end(JSON.stringify(response));
	});
}