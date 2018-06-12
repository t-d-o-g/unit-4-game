window.onload = function () {
    var droidea = {};
    var ktso = {};
    var ig88 = {};
    var battleDroid = {};
    var players = ['droidea', 'k2so', 'ig88', 'battleDroid']

    $("[id^='img-']").on('click', function (evt) {
        $('#player-thumbnail').html(evt.target.outerHTML);
        $('#opponents').html('<h2>Choose Opponent</h2>');
    });
























}