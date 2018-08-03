requirejs.config({
    baseUrl: 'app/lib/kendo-ui-core/js',
    paths: {
        js: '../../../js',
		jquery: '../../jquery',
        // calendar: './jqueryEventCalendar'
    }
});

requirejs(['js/main']);