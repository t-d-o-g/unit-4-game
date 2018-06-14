window.onload = function () {
    var opponentsCaptured = []
    var player;
    var enemy;
    var battlesLost = 0;
    var battlesWon = 0;
    var droidea = {
        name: 'Droidea',
        health: 3,
        attack: 0,
        counterAttack: .9 
    };
    var k2so = {
        name: 'K2SO',
        health: 3,
        attack: 0,
        counterAttack: .8 
    };
    var ig88 = {
        name: 'IG-88',
        health: 3,
        attack: 0,
        counterAttack: .7 
    };
    var battleDroid = {
        name: 'Battle Droid',
        health: 3,
        attack: 0,
        counterAttack: .6 
    };

    function resetGame() {
        enemy = undefined;
        player = undefined;
    }

    function battleWon (opponent) {
        console.log('You Win Battle');
        battlesWon++;
        enemy = undefined;
        opponentsCaptured.push(opponent);
        $('#battles-won').text(battlesWon);
        $('#enemy-container').hide();
        $('#attack-btn').hide();
        $('#instruction').html('<h2>Choose New Opponent</h2>');
        $('#opponent-thumbnails').show();
    }

    function gameWon () {
        console.log('You Win Game');
        battlesWon++;
        $('#battles-won').text(battlesWon);
        $('#opponent-container').html('<h1>YOU WIN!</h1><div><button id="play-btn">PLAY AGAIN</button></div>');
        $('#play-btn').css({'display': 'inline-block'});
    }

    function gameLost () {
        console.log('You Lose Game');
        battlesLost++;
        $('#battles-lost').text(battlesLost);
        $('#opponent-container').html('<h1>YOU LOSE!</h1><div><button id="play-btn">PLAY AGAIN</button></div>');
        $('#play-btn').css({'display': 'inline-block'});
    }

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
        if (enemy === droidea) {
            // player.health = Math.floor(player.health * enemy.counterAttack);
            // enemy.health = Math.floor(enemy.health * player.attack);
            player.health--;
            // enemy.health--
            $('#player-health').text(player.health);
            $('#enemy-health').text(enemy.health);
        } else if (enemy === k2so) {
            player.health--;
            // enemy.health--
            // player.health = Math.floor(player.health * enemy.counterAttack);
            // enemy.health = Math.floor(enemy.health * player.attack);
            $('#player-health').text(player.health);
            $('#enemy-health').text(enemy.health);
        } else if (enemy === ig88) {
            player.health--;
            // enemy.health--
            // player.health = Math.floor(player.health * enemy.counterAttack);
            // enemy.health = Math.floor(enemy.health * player.attack);
            $('#player-health').text(player.health);
            $('#enemy-health').text(enemy.health);
        } else {
            player.health--;
            // enemy.health--
            // player.health = Math.floor(player.health * enemy.counterAttack);
            // enemy.health = Math.floor(enemy.health * player.attack);
            $('#player-health').text(player.health);
            $('#enemy-health').text(enemy.health);
        }

        console.log('player health', player.health);
        if (enemy.health === 0) {
            battleWon(enemy);
        }

        console.log('battles lost', battlesLost);
        if (player.health === 0) {
            gameLost();
        } else if (battlesWon === 3) {
            gameWon();
        }
        player.attack += 6;
        console.log('attack power', player.attack)
    });

    $('#play-btn').on('click', resetGame());
}