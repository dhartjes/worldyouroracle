define(['jquery'], function ($) {
	return function () {
		// Load the navbar and footer
		$('.navigation').load('layout/nav.html', function () {
			// Select the nav items that match the localpath in the url.
			var pathName = $(location).attr('pathname');
			var title = pathName.substring(pathName.lastIndexOf("/") + 1);

			$("div#nav a[href='" + title + "']").parent().addClass("selected");
		});
		$('#footer').load('layout/footer.html', function () {
			// Select the nav items that match the localpath in the url.
			var pathName = $(location).attr('pathname');
			var title = pathName.substring(pathName.lastIndexOf("/") + 1);

			$("div#footer a[href='" + title + "']").removeAttr('href');
		});
	};
});