var $ = require('jquery')
var jQuery = require('jquery')

var eventCalendar = require('jquery.eventCalendar')


$(document).ready(function () {

	var layout = require('js/layout');
	// Rotator for the Oracle.html page
	require('js/rotator');

	// Header and footer layout
	layout();

	if (window.location.href.indexOf("calendar.html") !== -1) {
		eventCalendar(jQuery);

		// EventCalendar for the Calendar page
		$("#eventCalendarDefault").eventCalendar({
			eventsjson: 'app/js/myEvents.json',
			eventsLimit: 10,
			startWeekOnMonday: false,
			openLinkInNewWindow: false,
			dateFormat: 'MMM D, YYYY',
			jsonDateFormat: 'human'
		});
	}
});


