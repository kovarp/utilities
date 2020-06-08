/**
 * Intersection utility (https://github.com/kovarp/utilities)
 * Version 1.0.5
 *
 * Copyright 2020 Pavel Kovář - Frontend developer [www.pavelkovar.cz]
 * @license: MIT (https://github.com/kovarp/utilities/blob/master/LICENSE)
 */

if (typeof jQuery === 'undefined') {
	throw new Error('Intersection utility requires jQuery')
}

(function ($, window, document, undefined) {

	"use strict";

	// Create the defaults once
	var pluginName = "intersection",
		defaults = {
			root:       null,
			rootMargin: '0px 0px',
			threshold:  0,
			inClass:    'check-intersection--in',
			outClass:   'check-intersection--out'
		};

	// The actual plugin constructor
	function Plugin(element, options) {
		this.element = element;

		this.settings = $.extend({}, defaults, options);
		this._defaults = defaults;
		this._name = pluginName;

		this.init();
	}

	// Avoid Plugin.prototype conflicts
	$.extend(Plugin.prototype, {
		init: function () {
			var element = $(this.element);
			var settings = this.settings;
			var firstIntersection = false;

			var observerSettings = {
				root:       settings.root,
				rootMargin: settings.rootMargin,
				threshold:  settings.threshold
			};

			var callback = function (entries) {
				if (entries[0].intersectionRatio > 0) {
					firstIntersection = true;
					element.addClass(settings.inClass).removeClass(settings.outClass);
					element.trigger('intersection.in');
				} else if (firstIntersection) {
					element.addClass(settings.outClass).removeClass(settings.inClass);
					element.trigger('intersection.out');
				}
			};

			var observer = new IntersectionObserver(callback, observerSettings);
			observer.observe(element[0]);
		}
	});

	// A really lightweight plugin wrapper around the constructor,
	// preventing against multiple instantiations
	$.fn[pluginName] = function (options) {
		return this.each(function () {
			if (!$.data(this, "plugin_" + pluginName)) {
				$.data(this, "plugin_" +
					pluginName, new Plugin(this, options));
			}
		});
	};

})(jQuery, window, document);