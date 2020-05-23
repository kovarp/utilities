/**
 * Properties utilities (https://github.com/kovarp/utilities)
 * Version 1.0.4
 *
 * Copyright 2020 Pavel Kovář - Frontend developer [www.pavelkovar.cz]
 * @license: MIT (https://github.com/kovarp/utilities/blob/master/LICENSE)
 */

if (typeof jQuery === 'undefined') {
	throw new Error('Properties utilities requires jQuery')
}

var Hellofront = Hellofront || {};

/**
 * This function adds :Contains() pseudo selector
 * @param bool includeMargin Optional parameter includeMargin is used when calculating outer dimensions
 * @return object with element's dimensions
 */
(function ($) {
	$.fn.getHiddenDimensions = function (includeMargin) {
		var $item = this,
			props = { position: 'absolute', visibility: 'hidden', display: 'block' },
			dim = { width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 },
			$hiddenParents = $item.parents().andSelf().not(':visible'),
			includeMargin = (includeMargin == null) ? false : includeMargin;

		var oldProps = [];
		$hiddenParents.each(function () {
			var old = {};

			for (var name in props) {
				old[name] = this.style[name];
				this.style[name] = props[name];
			}

			oldProps.push(old);
		});

		dim.width = $item.width();
		dim.outerWidth = $item.outerWidth(includeMargin);
		dim.innerWidth = $item.innerWidth();
		dim.height = $item.height();
		dim.innerHeight = $item.innerHeight();
		dim.outerHeight = $item.outerHeight(includeMargin);

		$hiddenParents.each(function (i) {
			var old = oldProps[i];
			for (var name in props) {
				this.style[name] = old[name];
			}
		});

		return dim;
	}
}(jQuery));