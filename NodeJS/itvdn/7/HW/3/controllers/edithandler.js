﻿const queries = require('../database/queries');

module.exports = {
	loadEditPage: function(req, res) {
		queries.loadItemById(req, res); 
	}, 
	changeItem: function(req, res) {
		queries.updateItem(req, res); 
	}, 
	removeItem: function(req, res) {
		queries.deleteItem(req, res); 
	}
}


