'use strict';

exports.opencv = function (callback) {
	return new Promise((resolve, reject) => {
		if (global.Module && global.Module.onRuntimeInitialized && global.cv) {
    		return callback(null, global.cv)
  		}

  		global.Module = {
	      onRuntimeInitialized() {
	      	if (!cv) {
	      		reject('can\'t load opencv', null)
	      	}

	      	resolve()
	        return callback(null, cv)
	      }
	    };
	    global.cv = require('./opencv-4.11.0.js')
	})
}