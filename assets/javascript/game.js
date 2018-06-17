window.onload = function () {
    var player;
    var enemy;
    var battlesLost = 0;
    var battlesWon = 0;
    var droidea = {
        name: 'Droidea',
        health: 100,
        attackBase: 10,
        attack: 10,
        counterAttack: 16 
    };
    var k2so = {
        name: 'K2SO',
        health: 120,
        attackBase: 8,
        attack: 8,
        counterAttack: 14 
    };
    var ig88 = {
        name: 'IG-88',
        health: 150,
        attackBase: 6,
        attack: 6,
        counterAttack: 10 
    };
    var battleDroid = {
        name: 'Battle Droid',
        health: 180,
        attackBase: 4,
        attack: 4,
        counterAttack: 8 
    };

    function battleWon () {
        battlesWon++;
        $('#battles-won').text(battlesWon);
        $('#enemy-container').hide();
        $('#attack-btn').hide();
        $('#instruction').show();
        $('#instruction').html('<h2>Choose New Opponent</h2>');
        $('#character-thumbnails').show();
        enemy = undefined;
    };

    function gameWon () {
        battlesWon++;
        $('#battles-won').text(battlesWon);
        $('#instruction').html('<h1>YOU WIN!</h1>');
        $('#character-thumbnails').hide();
        $('attack-btn').hide();
        $('#play-btn-wrapper').show();
        $('#play-btn').show();
    };

    function gameLost () {
        battlesLost++;
        $('#battles-lost').text(battlesLost);
        $('#instruction').html('<h1>YOU LOSE!</h1>');
        $('#character-thumbnails').hide();
        $('attack-btn').hide();
        $('#play-btn-wrapper').show();
        $('#play-btn').show();
    };

    $("#character-thumbnails").children().on('click', function (evt) {
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
            $('#instruction').hide();
            $('#character-thumbnails').hide();
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
            $('#enemy-health').text(enemy.health);
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

        if (player.health <= 0) {
            gameLost();
        } else if (battlesWon === 3) {
            gameWon();
        }

        if (enemy.health <= 0) {
            battleWon();
        }
        player.attack += player.attackBase;
        console.log('attack power', player.attack)
    });

    $('#play-btn').on('click', function () {
        player.attack = player.attackBase;
        battlesLost = 0;
        battlesWon = 0;
        droidea.health = 100; 
        k2so.health = 120;
        ig88.health = 150;
        battleDroid.health = 180; 
        enemy = undefined;
        player = undefined;

        $('#play-btn').hide();
        $('#instruction').html('<h2>Choose Your Player</h2>');
        $('#enemy-container').hide();
        $('#player-container').hide();
        $('#character-thumbnails').show();
        $('#droidea').show();
        $('#k2so').show();
        $('#ig-88').show();
        $('#battle-droid').show();
        $('#battles-won').text(battlesWon);
        $('#battles-lost').text(battlesLost);
    });
}