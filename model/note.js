/* jslint sloppy: true */
YUI.add('note', function(Y) {
    Y.MyNote = Y.Base.create('note', Y.Model, [], {}, {
	ATTRS: {
	    title: {},
	    category: {},
	    content: {}
	}
    }, '0.1', { requires: ['model'] })});

