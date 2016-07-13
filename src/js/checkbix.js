(function(root, factory) {
	if (typeof define === 'function' && define.amd) {
		define([], factory(root));
	} else if (typeof exports === 'object') {
		module.exports = factory(root);
	} else {
		root.checkBix = factory(root);
	}
})(typeof global !== 'undefined' ? global : this.window || this.global, function (root) {

	'use strict';

	var checkBix = {};
	var supports = !!document.querySelector && !!root.addEventListener;
	var settings;


	// Default settings
	var defaults = {
		initClass: 'checkbix',
	};

	/**
	* A simple forEach() implementation for Arrays, Objects and NodeLists
	* @private
	* @param {Array|Object|NodeList} collection Collection of items to iterate
	* @param {Function} callback Callback function for each iteration
	* @param {Array|Object|NodeList} scope Object/NodeList/Array that forEach is iterating over
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
	* @param {Object} defaults Default settings
	* @param {Object} options User options
	* @returns {Object} Merged values of defaults and options
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
			checkboxes[i].insertAdjacentHTML('afterend', '<label aria-label="Checkbox" role="checkbox" for="'+checkboxes[i].id+'" class="'+settings.initClass+'"><span></span>'+checkboxes[i].getAttribute('data-text')+'</label>');
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
	* @param {Object} options User settings
	*/
	checkBix.init = function ( options ) {

		// feature test
		if ( !supports ) return;

		// Destroy any existing initializations
		checkBix.destroy();

		// Merge user options with defaults
		settings = extend( defaults, options || {} );

		// Events
		document.addEventListener('DOMContentLoaded', buildMarkup, false);

	};

	return checkBix;

});
