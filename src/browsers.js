/**
 * Browsers utilities (https://github.com/kovarp/utilities)
 * Version 1.0.4
 *
 * Copyright 2020 Pavel Kovář - Frontend developer [www.pavelkovar.cz]
 * @license: MIT (https://github.com/kovarp/utilities/blob/master/LICENSE)
 */

var Hellofront = Hellofront || {};

/**
 * Determine if browser is Internet Explorer
 */
Hellofront.isIE = function () {
	var ua = window.navigator.userAgent;
	var msie = ua.indexOf("MSIE ");

	return (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./));
};
