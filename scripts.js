
var log = true;
var prefix = '[TS] ';

l('scripts ready.');

function l(message) {
	if (log) console.log(prefix + message);
}
function lo(object) {
	str = JSON.stringify(object, null, 4);
	if (log) console.log(str);
}

history.scrollRestoration = 'manual';

function TS_isInView(el) {
	return el.getBoundingClientRect().top < (window.innerHeight - 30);
}

var $ = jQuery;
l('jQuery ready.');

function TS_Reveal() {
	$('.reveal').each(function(){
		var $el = $(this);
		if (TS_isInView($el[0])) $el.css({'opacity': 0}).removeClass('reveal').stop().animate({'opacity': 1}, (($el.attr('ts_reveal') * 1) || 1000));
	});
}

$(document).ready(function(){
	
	l('document ready.');
	
	$('html, body').scrollTop(0);
	
	/* Decode utf-16 chars */
	
	function TS_DecodeUTF16(s) {
		var v = '';
		//var v = '\\\\u';
		return s.replace(new RegExp(v + "([0-9a-fA-F]{4})", "g"), function(u, s){
			var w = parseInt(s, 16);
			return String.fromCharCode(w);
		});
	}
	
	/**/
	
	/* Navigation */
	
	$('.button').click(function(){
		if ($(this).attr('scrollto')) $('html, body').stop().animate({
			'scrollTop': $('.' + $(this).attr('scrollto')).eq(0).offset().top
		}, 500, 'swing');
	});
	
	/**/
	
	/* Resize Gallery */
	
	function TS_ResizeGallery() {
		
		var w = window.innerWidth;
		l('window width: ' + window.innerWidth + 'px');
		var c = ((w <= 600) ? 1 : ((w <= 960) ? 2 : 3));
		var h = 0;
		var ha = [];
		var hs = '';
		
		for (i = 0; i < c; i++) {
			ha[i] = 0;
			hs = '';
			$('.tile' + ((c > 1) ? (':nth-child(' + c + 'n+' + i + ')') : '')).each(function(){
				var val = $(this).outerHeight(true);
				ha[i] += 0 + val;
				hs += val + ', ';
			});
			ha[i] += 50;
		};
		
		h = Math.max(...ha);
		
		l('gallery columns: ' + c);
		l('gallery height: ' + h + 'px');
		
		$('.tiles').height(h + 'px').css({'overflow': 'visible'});
		
		l('gallery ready.');
		
	}
	
	/* Relocate Elements */
	
	function TS_RelocateElements(){
		
		if (window.innerWidth <= 720) $('.banner .background .excerpt').appendTo($('.banner .text .web'));
		else $('.banner .text .web .excerpt').appendTo($('.banner .background'));
		
	}
	
	/* Load Page */

	function TS_LoadPage() {
		setTimeout(function(){
			$('html, body').stop().animate({'scrollTop': 0}, 50);
			$('.curtain').animate({'opacity': 0}, 200, function(){
				$('.curtain').remove();
				TS_Reveal();
				l('page loaded.');
			});
		}, 500);
	}
	
	/**/
	
	/* Wait For Images Load */
	
	var ia = 0;
	var iat = $('.tile img').length;
	$('.tile img').each(function(){
		var img = new Image();
		img.onload = function() {
			ia++;
			if (ia == iat) {
				l('images ready.');
				TS_ResizeGallery();
				TS_RelocateElements();
				TS_LoadPage();
			}
		}
		img.src = $(this).attr('src');
	});
	
	/**/
	
	/* Events */
	
	$(document).scroll(function(){
		TS_Reveal();
	});
	
	$(window).resize(function(){
		TS_ResizeGallery();
		TS_RelocateElements();
		TS_Reveal();
	});
	
	/**/
	
	l('scripts parsed.');
	
});













/**/