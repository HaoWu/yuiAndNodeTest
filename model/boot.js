var path = require('path'),
    YUI = require('yui').YUI;

var Y = YUI({
    useSync: true,
    modules: {
	'note': {
	    fullpath: path.join(__dirname, './note.js'),
	    requires: ['model']
	}
    }
}).use('note');

module.exports.note = Y.MyNote;




