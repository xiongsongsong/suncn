/**
 * Created with JetBrains WebStorm.
 * User: yoom
 * Date: 12-5-1
 * Time: 下午8:20
 * To change this template use File | Settings | File Templates.
 */
$(document).bind('vmousemove', function (ev) {
    ev.preventDefault();
});

$('#main-menu').bind('swipeleft', function (ev) {
    $('#info').html('left');
});

$('#main-menu').bind('swiperight', function (ev) {
    $('#info').html('right');
});


setTimeout(function () {
    window.location.reload(true)
}, 10000);
