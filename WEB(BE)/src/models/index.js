const db = require('../db/config');

const sql = {
	select : (table, item) => {
		return 'SELECT * FROM ' + table + ' WHERE ' + item + ' =?';
	},
	
	insert : (table, inputs) => {
		return 'INSERT INTO ' + table + ' ' + inputs + ' VALUES ?';
	}
}

const user =  {
	get :  async (item, val)=>{
		return new Promise(function(resolve,reject){
			db.query('SELECT * FROM user WHERE ' + item + ' = ?', val, function(err, rows, fields){
				if(err) {console.log(err);}
				resolve(rows);
			});
		});
	},

	
	add : async(values)=>{
		db.query('INSERT INTO user (id,pw,email,nickname,salt) VALUES ?', [values] , function(err,rows, fields){
				if(err) {
					console.log(err);
				}
			});
	},
	
	update : async(field, value, id)=>{
		db.query('UPDATE user SET ' + field + ' = ? WHERE id = ' + id + '', value , function(err,rows, fields){
				if(err) {
					console.log(err);
				}
			});
	}
}

const user_category = {
	get :  async(item, val)=>{
		return new Promise(function(resolve,reject){
			db.query('SELECT * FROM user_category WHERE ' + item + ' = ?', val, function(err, rows, fields){
				if(err) {console.log(err);}
				resolve(rows);
			});
		});
	},

	
	add : async(values)=>{
		db.query('INSERT INTO user_category (user_no, category) VALUES ?', [values] , function(err,rows, fields){
				if(err) {
					console.log(err);
				}
			});
	},
	
	update : async(field, value, key)=>{
		db.query('UPDATE user_category SET ' + field + ' = ? WHERE user_no = ' + key, value , function(err,rows, fields){
				if(err) {
					console.log(err);
				}
			});
	}
}

const level_exp = {
	get :  async(item, val)=>{
		return new Promise(function(resolve,reject){
			db.query('SELECT * FROM level_exp WHERE ' + item + ' = ?', val, function(err, rows, fields){
				if(err) {console.log(err);}
				resolve(rows);
			});
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
		db.query('INSERT INTO routine (host,name,category,thumbnail_img,auth_cycle,auth_description_list,start_date,duration,point_info_list) VALUES ?', [values] , function(err,rows, fields){
				if(err) {
					console.log(err);
				}
			});
	}
}

const user_routine =  {
	get :  async(item, val)=>{
		return new Promise(function(resolve,reject){
			db.query('SELECT * FROM user_routine WHERE ' + item + ' = ?', val, function(err, rows, fields){
				if(err) {console.log(err);}
				resolve(rows);
			});
		});
	},

	
	add : async(values)=>{
		db.query('INSERT INTO user_routine (user_no, routine_id, type) VALUES ?', [values] , function(err,rows, fields){
				if(err) {
					console.log(err);
				}
			});
	}
}

const auth = {
	get :  async(item, val)=>{
		return new Promise(function(resolve,reject){
			db.query('SELECT * FROM auth WHERE ' + item + ' = ?', val, function(err, rows, fields){
				if(err) {console.log(err);}
				resolve(rows);
			});
		});
	},

	
	add : async(values)=>{
		db.query('INSERT INTO auth (user_no, routine_id, week, day, date, img, text) VALUES ?', [values] , function(err,rows, fields){
				if(err) {
					console.log(err);
				}
			});
	}
}

const goods = {
	get :  async(item, val)=>{
		return new Promise(function(resolve,reject){
			db.query('SELECT * FROM goods WHERE ' + item + ' = ?', val, function(err, rows, fields){
				if(err) {console.log(err);}
				resolve(rows);
			});
		});
	},

	
	add : async(values)=>{
		db.query('INSERT INTO goods (name, description, thumbnail_img, price) VALUES ?', [values] , function(err,rows, fields){
				if(err) {
					console.log(err);
				}
			});
	}
}

const user_goods = {
	get :  async(item, val)=>{
		return new Promise(function(resolve,reject){
			db.query('SELECT * FROM user_goods WHERE ' + item + ' = ?', val, function(err, rows, fields){
				if(err) {console.log(err);}
				resolve(rows);
			});
		});
	},

	
	add : async(values)=>{
		db.query('INSERT INTO user_goods (user_no, goods_id, datetime) VALUES ?', [values] , function(err,rows, fields){
				if(err) {
					console.log(err);
				}
			});
	}
}

module.exports = {
	user,
	user_category,
	routine
};