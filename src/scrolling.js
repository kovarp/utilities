/**
 * Scrolling utilities (https://github.com/kovarp/utilities)
 * Version 1.0.0
 *
 * Copyright 2018 Pavel Kovář - Frontend developer [www.pavelkovar.cz]
 * @license: MIT (https://github.com/kovarp/utilities/blob/master/LICENSE)
 */

if (typeof jQuery === 'undefined') {
	throw new Error('Scrolling utilities requires jQuery')
}

var Hellofront = Hellofront || {};

/**
 * Scroll to target element
 * @param target jQuery object or string selector of target element
 * @param offset pixel added to target scroll position
 * @param speed time in ms used for smooth scroll speed
 */
Hellofront.scrollTo = function (target, offset, speed) {
	if (!(target instanceof jQuery)) {
		target = $(target);
	}

	offset = (typeof offset !== 'undefined') ? offset : 0;
	speed = (typeof speed !== 'undefined') ? speed : 500;

	var body = $('body');
	if (body.attr('data-scroll-offset')) {
		offset += body.data('scrollOffset');
	}

	$('html, body').stop().animate({
		scrollTop: target.offset().top + offset
	}, speed);
};

/**
 * Scroll to target on click
 */
$(document).on('click', '[data-scroll-to]', function (e) {
	e.preventDefault();

	var element = $(this);
	var target = element.data('scrollTo');
	var offset = (element.attr('data-scroll-offset')) ? element.data('scrollOffset') : undefined;
	var speed = (element.attr('data-scroll-speed')) ? element.data('scrollSpeed') : undefined;

	Hellofront.scrollTo(target, offset, speed);
});

/**
 * Resolve window scroll position after page load
 */
$(function () {
	if (window.location.hash) {
		var target = $(window.location.hash);

		if (target.length) {
			setTimeout(function () {
				Hellofront.scrollTo(target, 0, 1);
			}, 1);
		}
	}
});