export function post(req, res) {
	delete req.session.user;
	res.end(JSON.stringify({ status: true, redirect: "/login" }));
}