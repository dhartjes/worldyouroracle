define(['jquery'], function ($) {
    $(document).ready(function () {

        require(['js/layout', 'js/rotator'], function (layout, rotator) {
            layout();
        });
    })
});
