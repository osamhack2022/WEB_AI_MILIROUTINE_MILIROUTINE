const user = {
	destroy : (req, res) => {
		res.clearCookie('token');
		
		return res.json({
			msg : "로그아웃 완료"
		})
	}
}

module.exports = {
	user
}