
(function(){
	'use strict';
	var sprite;
	var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { 
		preload: preload, 
		create: create,
		render: render 
	});

	function preload () {
		game.load.image('spaceship', './space-ship.png');
	}

	function create () {
		game.physics.startSystem(Phaser.Physics.ARCADE);
		sprite = game.add.sprite(game.world.centerX, game.world.centerY, 'spaceship');
		sprite.anchor.set(0.5);
		game.physics.arcade.enable(sprite);
		sprite.body.collideWorldBounds = true;
		sprite.body.velocity.set(157);
		sprite.body.bounce.set(1);

	}
	function render(){
	}

})();