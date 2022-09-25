const db = require('../db/config');

const user =  {
	get :  async(table, userID)=>{
		return new Promise(function(resolve,reject){
			db.query('SELECT * FROM ' + table + ' WHERE id=?', userID, function(err, rows, fields){
				if(err) {console.log(err);}
				resolve(rows);
			})
		});
	},
	
	add : (table, userID, values)=>{
		db.query('INSERT INTO ' + table + ' (id,pw,name,unit,email,salt) VALUES (?, ?, ?, ?, ?, ?)', values , function(err,rows, fields){
			if(err) {
				console.log(err);
			}
			console.log('a');
		});
		
	}
}

module.exports = {user};