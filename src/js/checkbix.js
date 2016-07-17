/* global define, exports: true, module*/
(function(root, factory) {
	'use strict';

	if(typeof define === 'function' && define.amd) {
		define('Checkbix', factory);
	}
	else if(typeof exports === 'object') {
		exports = module.exports = factory();
	}
	else {
		root.Checkbix = factory();
	}
})(this, function() {

	'use strict';

	var checkBix = {};
	var settings;

	// Default settings
	var defaults = {
		initClass: 'checkbix',
	};

	/**
	* A simple forEach() implementation for Arrays, Objects and NodeLists
	* @private
	*/
	var forEach = function (collection, callback, scope) {
		if (Object.prototype.toString.call(collection) === '[object Object]') {
			for (var prop in collection) {
				if (Object.prototype.hasOwnProperty.call(collection, prop)) {
					callback.call(scope, collection[prop], prop, collection);
				}
			}
		} else {
			for (var i = 0, len = collection.length; i < len; i++) {
				callback.call(scope, collection[i], i, collection);
			}
		}
	};

	/**
	* Merge defaults with user options
	* @private
	*/
	var extend = function ( defaults, options ) {
		var extended = {};
		forEach(defaults, function (value, prop) {
			extended[prop] = defaults[prop];
		});
		forEach(options, function (value, prop) {
			extended[prop] = options[prop];
		});
		return extended;
	};

	/**
	* Handle events
	* @private
	*/
	var buildMarkup = function () {

		var checkboxes = document.querySelectorAll('.'+settings.initClass);
		for (var i = 0; i < checkboxes.length; i++) {

			var size = checkboxes[i].getAttribute('data-size') ? checkboxes[i].getAttribute('data-size') : '';
			var arialabel = checkboxes[i].getAttribute('data-arialabel') ? checkboxes[i].getAttribute('data-arialabel') : '';

			checkboxes[i].insertAdjacentHTML('afterend', '<label aria-label="'+arialabel+'" role="checkbox" for="'+checkboxes[i].id+'" class="'+settings.initClass+'"><span class="'+size+'"></span>'+checkboxes[i].getAttribute('data-text')+'</label>');
		}

	};

	/**
	* Destroy the current initialization.
	* @public
	*/
	checkBix.destroy = function () {

		// If plugin isn't already initialized, stop
		if ( !settings ) return;

		// Remove event listeners
		document.removeEventListener('click', buildMarkup, false);

		// Reset variables
		settings = null;

	};


	/**
	* Initialize
	* @public
	*/
	checkBix.init = function ( options ) {

		// Destroy any existing initializations
		checkBix.destroy();

		// Merge user options with defaults
		settings = extend( defaults, options || {} );

		// Add events, currently only the checkbox markup build
		document.addEventListener('DOMContentLoaded', buildMarkup, false);

	};

	return checkBix;

});
