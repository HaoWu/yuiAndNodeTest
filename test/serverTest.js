var YUI = require('yui'),
    Y = YUI.use('io-base');

var cfg = {
    method: 'POST',
    data: JSON.stringify({
	title: 'YUI and Node',
	category: 'yui-node',
	content: 'Use config to load custom YUI module'
    }),
    headers: {
	'Content-Type': 'application/json'
    },
    on: {
	complete: function(id, res) {
	    console.log(res);
	}
    }
};

Y.io('http://localhost:3000/note', cfg);