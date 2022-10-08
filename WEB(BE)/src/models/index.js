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
		db.query('INSERT INTO member (id,pw,email,name,salt) VALUES (?, ?, ?, ?, ?)', values , function(err,rows, fields){
				if(err) {
					console.log(err);
				}
			});
	}
}

const routine =  {
	get :  async(item, val)=>{
		return new Promise(function(resolve,reject){
			db.query('SELECT * FROM routine WHERE ' + item + ' = ?', val, function(err, rows, fields){
				if(err) {console.log(err);}
				resolve(rows);
			});
		});
	},

	
	add : async(values)=>{
		db.query('INSERT INTO routine (user_id,name,category,thumbnail,auth_cycle,auth_description_list,start_date,duration,participants,point_info_list) VALUES (?, ?, ?, ?, ?)', values , function(err,rows, fields){
				if(err) {
					console.log(err);
				}
			});
	}
}

module.exports = {user};