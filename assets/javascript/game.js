window.onload = function () {
    var opponents = ['droidea', 'k2so', 'ig88', 'battleDroid']
    var player;
    var enemy;
    var droidea = {
        name: 'droidea',
        healthPts: 10,
        attackPwr: 10,
        ctrAttackPwr: 10
    };
    var k2so = {
        healthPts: 10,
        attackPwr: 10,
        ctrAttackPwr: 10
    };
    var ig88 = {
        healthPts: 10,
        attackPwr: 10,
        ctrAttackPwr: 10
    };
    var battleDroid = {
        healthPts: 10,
        attackPwr: 10,
        ctrAttackPwr: 10
    };

    // Choose Player/Opponent
    $("#opponent-thumbnails").children().on('click', function (evt) {
        var $this = $(this);
        // var name = $this.attr('id').substring(4);
        var name = $this.attr('id');
        var imgSrc = evt.target.outerHTML;
        console.log(name);

        if (player === undefined) {
            $('#player-container').css({'display': 'flex'});
            $('#instruction').html('<h2>Choose Opponent</h2>');
            $('#player-thumbnail').html(imgSrc);
            $this.hide();
            if (name === 'droidea') {
                $('#player-name').text("Droidea");
                player = droidea; 
            } else if (name === 'k2so') {
                $('#player-name').text("K2SO");
                player = k2so; 
            } else if (name === 'ig-88') {
                $('#player-name').text("IG-88");
                player = ig88; 
            } else {
                $('#player-name').text("Battle Droid");
                player = battleDroid; 
            }
        } else if (enemy === undefined) {
            $('#enemy-container').css({'display': 'flex'});
            $('#enemy-thumbnail').html(imgSrc);
            $('#attack-btn').css({'display': 'inline-block'});
            $('#instruction').html('<h2></h2>');
            $('#opponent-thumbnails').css({'display': 'none'});
            $this.hide();
            if (name === 'droidea') {
                $('#enemy-name').text("Droidea");
                enemy = droidea; 
            } else if (name === 'k2so') {
                $('#enemy-name').text("K2SO");
                enemy = k2so; 
            } else if (name === 'ig-88') {
                $('#enemy-name').text("IG-88");
                enemy = ig88; 
            } else {
                $('#enemy-name').text("Battle Droid");
                enemy = battleDroid; 
            }
            enemy = name;
        }
    });
}