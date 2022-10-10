const user = {
	destroy : (req, res) => {
		res.clearCookie('token');
		
		// 로그아웃 시키기 => jwt 토큰을 파괴 or 만료??
		
		res.json({
			msg : "로그아웃 완료"
		})
	}
}

module.exports = {
	user
}