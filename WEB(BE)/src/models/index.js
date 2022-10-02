const db = require('../db/config');

const user =  {
	get :  async(item, val)=>{
		return new Promise(function(resolve,reject){
			db.query('SELECT * FROM member WHERE ' + item + ' = ?', val, function(err, rows, fields){
				if(err) {console.log(err);}
				resolve(rows);
			});
		});
	},

	
	add : async(values)=>{
		db.query('INSERT INTO member (id,pw,email,salt,name) VALUES (?, ?, ?, ?, ?)', values , function(err,rows, fields){
				if(err) {
					console.log(err);
				}
			});
	}
}

module.exports = {user};