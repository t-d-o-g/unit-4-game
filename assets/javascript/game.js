window.onload = function () {
    var player;
    var enemy;
    var battlesLost = 0;
    var battlesWon = 0;
    var droidea = {
        name: 'Droidea',
        health: 100,
        attack: 6,
        counterAttack: 16 
    };
    var k2so = {
        name: 'K2SO',
        health: 120,
        attack: 6,
        counterAttack: 14 
    };
    var ig88 = {
        name: 'IG-88',
        health: 150,
        attack: 6,
        counterAttack: 10 
    };
    var battleDroid = {
        name: 'Battle Droid',
        health: 180,
        attack: 6,
        counterAttack: 8 
    };

    function battleWon (opponent) {
        battlesWon++;
        $('#battles-won').text(battlesWon);
        $('#enemy-container').hide();
        $('#attack-btn').hide();
        $('#instruction').html('<h2>Choose New Opponent</h2>');
        $('#opponent-thumbnails').show();
        enemy = undefined;
    };

    function gameWon () {
        battlesWon++;
        $('#battles-won').text(battlesWon);
        $('#opponent-container').html('<h1>YOU WIN!</h1>');
        $('#play-btn-wrapper').show();
    };

    function gameLost () {
        battlesLost++;
        $('#battles-lost').text(battlesLost);
        $('#opponent-container').html('<h1>YOU LOSE!</h1>');
        $('#play-btn-wrapper').show();
    };

    // Choose Player/Opponent
    $("#opponent-thumbnails").children().on('click', function (evt) {
        var $this = $(this);
        var name = $this.attr('id');
        var imgSrc = evt.target.outerHTML;

        if (player === undefined) {
            $('#player-container').css({'display': 'flex'});
            $('#instruction').html('<h2>Choose Opponent</h2>');
            $('#player-thumbnail').html(imgSrc);
            $this.hide();
            if (name === 'droidea') {
                player = droidea; 
            } else if (name === 'k2so') {
                player = k2so; 
            } else if (name === 'ig-88') {
                player = ig88; 
            } else {
                player = battleDroid; 
            }
            $('#player-name').text(player.name);
            $('#player-health').text(player.health);
            return player;
        } else if (enemy === undefined) {
            $('#enemy-container').css({'display': 'flex'});
            $('#enemy-thumbnail').html(imgSrc);
            $('#attack-btn').css({'display': 'inline-block'});
            $('#instruction').html('<h2></h2>');
            $('#opponent-thumbnails').hide();
            $this.hide();
            if (name === 'droidea') {
                enemy = droidea; 
            } else if (name === 'k2so') {
                enemy = k2so; 
            } else if (name === 'ig-88') {
                enemy = ig88; 
            } else {
                enemy = battleDroid; 
            }
            $('#enemy-name').text(enemy.name);
            $('#enemy-health').text(player.health);
            return enemy;
        }
    });

    $('#attack-btn').on('click', function (evt) {
        player.health -= Math.floor(enemy.counterAttack);
        console.log('player health', player.health);
        enemy.health -= Math.floor(player.attack);
        console.log('enemy health', enemy.health);
        $('#player-health').text(player.health);
        $('#enemy-health').text(enemy.health);

        if (enemy.health <= 0) {
            battleWon(enemy);
        }

        if (player.health <= 0) {
            gameLost();
        } else if (battlesWon === 3) {
            gameWon();
        }
        player.attack += 6;
        console.log('attack power', player.attack)
    });

    $('#play-btn').on('click', function () {
        window.location.reload();
    })
}