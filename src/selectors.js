/**
 * Selectors utilities (https://github.com/kovarp/utilities)
 * Version 1.0.4
 *
 * Copyright 2020 Pavel Kovář - Frontend developer [www.pavelkovar.cz]
 * @license: MIT (https://github.com/kovarp/utilities/blob/master/LICENSE)
 */

if (typeof jQuery === 'undefined') {
	throw new Error('Selectors utilities requires jQuery')
}

var Hellofront = Hellofront || {};

/**
 * This function adds :Contains() pseudo selector
 */
jQuery.expr[":"].Contains = jQuery.expr.createPseudo(function(arg) {
	return function( elem ) {
		return jQuery(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
	};
});
