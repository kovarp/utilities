/**
 * Math utilities (https://github.com/kovarp/utilities)
 * Version 1.0.5
 *
 * Copyright 2020 Pavel Kovář - Frontend developer [www.pavelkovar.cz]
 * @license: MIT (https://github.com/kovarp/utilities/blob/master/LICENSE)
 */

var Hellofront = Hellofront || {};

/**
 * Format number
 * @param number
 * @param decimals
 * @param dec_point
 * @param thousands_sep
 */
Hellofront.formatNumber = function (number, decimals, dec_point, thousands_sep) {
	number = (number + '')
		.replace(/[^0-9+\-Ee.]/g, '');
	var n = !isFinite(+number) ? 0 : +number,
		prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
		sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
		dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
		s = '',
		toFixedFix = function (n, prec) {
			var k = Math.pow(10, prec);
			return '' + (Math.round(n * k) / k)
				.toFixed(prec);
		};
	// Fix for IE parseFloat(0.55).toFixed(0) = 0;
	s = (prec ? toFixedFix(n, prec) : '' + Math.round(n))
		.split('.');
	if (s[0].length > 3) {
		s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
	}
	if ((s[1] || '')
		.length < prec) {
		s[1] = s[1] || '';
		s[1] += new Array(prec - s[1].length + 1)
			.join('0');
	}
	return s.join(dec);
};
