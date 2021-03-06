$(function() {

	function resizeWindow() {
		var viewportHeight = 'innerHeight' in window ? window.innerHeight : document.documentElement.offsetHeight;
		var containerHeight = String(viewportHeight - 100) + 'px';
		$('#container').css({
			minHeight: containerHeight,
			height: containerHeight
		});
	}
	resizeWindow();

	$(window).resize(resizeWindow);

	function toggleNaviPosition() {
		if ($('html, body').scrollTop() > 150) {
			$('#nav').hide();
			$('#altnav').fadeIn('slow');
		} else {
			$('#nav').fadeIn('slow');
			$('#altnav').hide();
		}
	}

	$(window).scroll(toggleNaviPosition);

});
