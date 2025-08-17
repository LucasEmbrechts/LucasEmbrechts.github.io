(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

function TiledHelper(map) {
	var self = this;

	self.map = map;
}

TiledHelper.prototype.coordsToTile = function(coords) {
	var self = this;

	return (coords.y * self.map.width) + coords.x - 1;
};

TiledHelper.prototype.tileToCoords = function(num) {
	var self = this;

	return {
		x: Math.ceil(num / self.map.width),
		y: num % self.map.width
	};
};

TiledHelper.prototype.findLayer = function(name) {
	var self = this;
	
	return self.map.layers.find(function(l) {
		return l.name == name;
	});
};

module.exports = TiledHelper;
},{}],2:[function(require,module,exports){

// Load all the images provided
function loadImages(links, done, step) {
	var i = 0,
		assetNames = Object.keys(links),
		total = assetNames.length,
		assets = {};

	function loadNext() {
		if(i < total) {
			var img = new Image();

			function doneOne(err) {
				if(!err) console.info("Done loading #" + assetNames[i]);
				else console.warn("Error loading #" + assetNames[i]);
				assets[assetNames[i]] = img;
				i++;
				if(step) step(i, total);
				loadNext();
			}

			img.onload = function() { doneOne(false); }
			img.onerror = function() { doneOne(true); }

			img.src = links[assetNames[i]];
		}
		else done(assets);
	}
	loadNext();
}

module.exports.loadImages = loadImages;
},{}],3:[function(require,module,exports){

var keys = {
	onIndividualPress: []
};

window.onkeydown = function(key) {
	if(!keys[key.key]) keys.onIndividualPress.forEach(function(e) {e(key.key);});
	keys[key.key] = +new Date;
}

window.onkeyup = function(key) {
	keys[key.key] = false;
}

module.exports = keys;
},{}],4:[function(require,module,exports){

var assetsManager = require("./assetsManager.js"),
	util = require("./util.js");

module.exports = function(assets, ctx, done) {
	var progress = 0,
		total = assets.length,
		progressBarWidth = 600,
		progressBarHeight = 50,
		progressBarInnerMargin = 8;

	assetsManager.loadImages(assets, function(assets) {
		// Done handler
		progress = total;
		done(assets);
	}, function(p, t) {
		// Step handler
		progress = p;
		total = t;
	});

	ctx.fillStyle = "black";
	ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

	requestAnimationFrame(function draw() {
		// We draw a big square and 
		// the progress bar in it

		// Square
		ctx.fillStyle = "#454d60";
		ctx.fillRect(
			(ctx.canvas.width - progressBarWidth) / 2,
			(ctx.canvas.height - progressBarHeight) / 2,
			progressBarWidth,
			progressBarHeight
		);

		// Progress
		var startx = (ctx.canvas.width - progressBarWidth) / 2 + progressBarInnerMargin,
			currentWidth = (progressBarWidth - (progressBarInnerMargin * 2)) * (progress / total);

		ctx.fillStyle = "black";
		ctx.fillRect(
			startx + (progressBarWidth - progressBarInnerMargin * 2) - currentWidth,
			(ctx.canvas.height - progressBarHeight) / 2 + progressBarInnerMargin,
			(progressBarWidth - (progressBarInnerMargin * 2)) - currentWidth,
			progressBarHeight - (progressBarInnerMargin * 2)
		);

		if(progress != total) requestAnimationFrame(draw);
	});
}
},{"./assetsManager.js":2,"./util.js":9}],5:[function(require,module,exports){

var keyboard = require("./keyboard.js"),
	util = require("./util.js"),
	savesManager = require("./savesManager.js");

module.exports = function(ctx, assets, triggers) {
	var ctx_w = ctx.canvas.width,
		ctx_h = ctx.canvas.height,
		menu = true;

	///////////////////////////
	// Element list building //
	///////////////////////////
	var elements = [];

	// Add Saves
	savesManager.getSaves().forEach(function(save, index) {
		var screenFramesPassed = 0,
			screenFramePerPlayerFrame = 15,
			playerFrame = 0,
			playerFrames = [[200, 71 * 2], [123 * 2, 71 * 2], [200, 71 * 2], [76 * 2, 71 * 2]],
			wasActive = false;

		elements.push({
			height: 100,
			width: 500,
			index: index,
			submit: function() {
				menu = false;
				keyboard.onIndividualPress = keyboard.onIndividualPress.filter(function(el) {return el != onKeyPress;});
				triggers.onGameLoad(this.index);
			},
			draw: function(ctx, innerx, innery, isActive) {
				// Player moves only if active. Only animate if active
				if(isActive) {
					screenFramesPassed++;
					if(screenFramesPassed >= playerFrames.length * screenFramePerPlayerFrame) screenFramesPassed = 0;
					playerFrame = Math.floor(screenFramesPassed / screenFramePerPlayerFrame);
				}
				if(!isActive && wasActive) {
					playerFrame = 0;
					screenFramesPassed = 14;
				}
				wasActive = isActive;

				// Draw the little player (incl animation)
				ctx.drawImage(
					assets.characters,

					// Source image
					playerFrames[playerFrame][0], // x
					playerFrames[playerFrame][1], // y
					17 * 2,
					25 * 2,

					// Dest image
					innerx + 10,
					innery + 10,
					17 * 2,
					25 * 2
				);

				// Player's name in the middle
				var textSize = 24,
					text = save.player.name,
					startx = innerx + ((500 - ctx.measureText(text).width) / 2),
					starty = innery + 10;

				ctx.fillStyle = "black";
				ctx.font = "" + textSize + "px pokemon";
				ctx.textBaseline = "top";
				ctx.fillText(text, startx, starty);

				var totalMinutes = Math.floor(save.player.playTime / 60),
					hours = Math.floor(totalMinutes / 60),
					minutes = totalMinutes - hours * 60;

				text = "Play time: " + hours + ":" + minutes + "      Badges: " + save.player.badges;
				ctx.textBaseline = "bottom";
				ctx.fillText(text, innerx + 6, innery + this.height - 5);
			}
		});
	});

	// Add menu items
	elements.push({
		height: 28,
		width: 500,
		submit: function() {
			menu = false;
			keyboard.onIndividualPress = keyboard.onIndividualPress.filter(function(el) {return el !== onKeyPress;});
			triggers.onGameLoad(0);
		},
		draw: function(ctx, innerx, innery, isActive) {
			ctx.fillStyle = "black";
			ctx.font = "24px pokemon";
			ctx.textBaseline = "top";
			ctx.fillText("Nouvelle partie", innerx + 6, innery + 3);
		}
	});

	//elements.push({
	//	height: 28,
	//	width: 500,
	//	draw: function(ctx, innerx, innery, isActive) {
	//		ctx.fillStyle = "black";
	//		ctx.font = "24px pokemon";
	//		ctx.textBaseline = "top";
	//		ctx.fillText("Crédits (non implémenté)", innerx + 6, innery + 3);
	//	}
	//});


	//////////////////////////////
	// Actual drawing on screen //
	//////////////////////////////
	var topoffset = 0,
		topmargin = 40,
		currentElement = 0,
		elementBorderWidth = 2;

	// Moving around in the menu with the arrow keys
	function onKeyPress(key) {
		if(key == "ArrowUp" && currentElement > 0) currentElement--;
		else if(key == "ArrowDown" && currentElement < elements.length - 1) currentElement++;
		else if(key == "Enter" && elements[currentElement].submit) elements[currentElement].submit();
	}
	keyboard.onIndividualPress.push(onKeyPress);

	requestAnimationFrame(function draw() {
		ctx.fillStyle = "#5fa8fc";
		ctx.fillRect(0, 0, ctx_w, ctx_h);

		var nowAtX = 0;

		// Draw each element one after another
		elements.forEach(function(el, index) {
			// So we get start coords which are the top left x & y of the centered rectangle
			// Voodo magick

			ctx.fillStyle = "black";

			var startx = (ctx_w - el.width) / 2 + elementBorderWidth / 2,
				starty = topoffset + topmargin + nowAtX + elementBorderWidth / 2;

			ctx.lineWidth = elementBorderWidth;

			// If the element is active we make the background something lighter
			if(currentElement == index) {
				ctx.fillStyle = "#85bdfc";
				util.ctxFillRoundRect(
					ctx,

					startx,
					starty,
					el.width + elementBorderWidth / 2,
					el.height + elementBorderWidth / 2,

					1, 1, 1, 1
				);
			}

			// It's tricky to get nice curves
			util.ctxRoundRect(
				ctx,

				startx,
				starty,
				el.width + elementBorderWidth / 2,
				el.height + elementBorderWidth / 2,

				1, 1, 1, 1
			);

			el.draw(ctx, startx + elementBorderWidth / 2, starty + elementBorderWidth / 2, currentElement == index);

			nowAtX += el.height + elementBorderWidth + 10;
		});

		if(menu) requestAnimationFrame(draw);
	});
}
},{"./keyboard.js":3,"./savesManager.js":7,"./util.js":9}],6:[function(require,module,exports){
var savesManager = require('./savesManager.js')
var keyboard = require('./keyboard')
var TiledHelper = require('./TiledHelper.js')
var transitions = require('./transitions.js')

var maps = {
	north: require('../maps/north.json'),
	south: require('../maps/south.json')
}

function execSideOnCoords (pc, side) {
	if (side === 'left') pc.x -= 1
	if (side === 'right') pc.x += 1
	if (side === 'up') pc.y -= 1
	if (side === 'down') pc.y += 1
	return pc
}

module.exports = function (ctx, assets, gameId, triggers) {
	// Get the save
	var save = savesManager.getSave(gameId)
	var location = save.location.split(':')
	var map = null
	var helper = null
	var boardOffsetX = null
	var boardOffsetY = null
	var ctx_w = ctx.canvas.width
	var ctx_h = ctx.canvas.height
	var map_name = null
	
	function changeMap (name, startx, starty) {
		if (!maps[name]) return
		map = maps[name]
		helper = new TiledHelper(map)
		map_name = name
		
		console.log('Changing map to ' + name)
		
		// Center the map around center point defined inside the map (if there is any)
		boardOffsetX = 0 - (startx * map.tilewidth) - (map.tilewidth / 2) + (ctx_w / 2)
		boardOffsetY = 0 - (starty * map.tilewidth) - (map.tilewidth / 2) + (ctx_h / 2)
	}
	
	changeMap(location[0], location[1], location[2])
	
	requestAnimationFrame(function draw () {
		// Black background
		ctx.fillStyle = 'black'
		ctx.fillRect(0, 0, ctx_w, ctx_h)
		
		map.layers.forEach(function (layer) {
			if (!layer.visible) return
			
			layer.data.forEach(function (tile, tileIndex) {
				var tx = Math.floor(tileIndex / layer.width)
				var ty = tileIndex % layer.width
				var sx = Math.ceil(tile / map.tilesets[0].columns) - 1
				var sy = tile % map.tilesets[0].columns - 1
				var tw = map.tilewidth
				
				// Draw update
				ctx.drawImage(
					assets.tileset,
					
					// Source image
					sy * map.tilewidth,
					sx * map.tilewidth,
					map.tilewidth,
					map.tilewidth,
					
					// Destination
					ty * tw + boardOffsetX,
					tx * tw + boardOffsetY - 12,
					tw,
					tw
				)
			})
		})
		
		updatePlayer()
		playerInteraction()
		
		requestAnimationFrame(draw)
	})
	
	/////////////////////////////////////////
	// Things having to do with the player //
	/////////////////////////////////////////
	var playerAnimationRunning = false
	var playerAnimationFrameCount = 0
	var playerLastSide = 'down'
	var playerFrame = 0
	var playerAnimations = {
		'left' : [[192, 192], [240, 192], [192, 192], [144, 192]],
		'right': [[192, 64], [240, 64], [192, 64], [144, 64]],
		'up'   : [[192, 0], [240, 0], [192, 0], [144, 0]],
		'down' : [[192, 128], [240, 128], [192, 128], [144, 128]]
	}
	var wasMovingLastFrame = false
	var screenFramePerPlayerFrame = 12
	
	function movePlayer (side, time) {
		if (playerAnimationRunning) return
		playerLastSide = side
		
		playerAnimationRunning = true
		time = time || 0.2 // Seconds
		
		// Number of frames on which to disperse the animation
		// Accounting for fps = 60
		var frames = 60 * time,
			currentFrame = 0,
			targetPosX = boardOffsetX,
			targetPosY = boardOffsetY
		
		if (side === 'left' && playerCanMove(side)) targetPosX += 32
		else if (side === 'right' && playerCanMove(side)) targetPosX -= 32
		else if (side === 'up' && playerCanMove(side)) targetPosY += 32
		else if (side === 'down' && playerCanMove(side)) targetPosY -= 32
		else {
			playerAnimationRunning = false
			return
		}
		
		function nextFrame () {
			
			if (currentFrame === frames
				|| (side === 'left' && Math.abs(targetPosX - boardOffsetX) < 32 / frames)
				|| (side === 'right' && Math.abs(targetPosX - boardOffsetX) < 32 / frames)
				|| (side === 'up' && Math.abs(targetPosY - boardOffsetY) < 32 / frames)
				|| (side === 'down' && Math.abs(targetPosY - boardOffsetY) < 32 / frames)) {
				
				boardOffsetX = targetPosX
				boardOffsetY = targetPosY
				playerAnimationRunning = false
				return
			}
			requestAnimationFrame(nextFrame)
			
			if (side === 'left') boardOffsetX += 32 / frames
			if (side === 'right') boardOffsetX -= 32 / frames
			if (side === 'up') boardOffsetY += 32 / frames
			if (side === 'down') boardOffsetY -= 32 / frames
			
			boardOffsetX = Math.round(boardOffsetX)
			boardOffsetY = Math.round(boardOffsetY)
			
			currentFrame++
		}
		
		nextFrame()
	}
	
	function updatePlayer () {
		// Moving around
		var side
		if (keyboard['ArrowLeft']) side = 'left'
		else if (keyboard['ArrowRight']) side = 'right'
		if (keyboard['ArrowUp']) side = 'up'
		else if (keyboard['ArrowDown']) side = 'down'
		if (side) movePlayer(side)
		
		if (playerAnimationRunning) {
			playerAnimationFrameCount++
			if (playerAnimationFrameCount >= 4 * screenFramePerPlayerFrame) playerAnimationFrameCount = 0
			playerFrame = Math.floor(playerAnimationFrameCount / screenFramePerPlayerFrame)
		}
		if (!playerAnimationRunning && wasMovingLastFrame) {
			playerFrame = 0
		}
		wasMovingLastFrame = playerAnimationRunning
		
		// Draw player in the middle of the screen
		var dx = ctx_w / 2 - 16
		var dy = ctx_h / 2 - 32
		
		ctx.drawImage(
			assets.characters,
			
			// Source image
			playerAnimations[playerLastSide][playerFrame][0],
			playerAnimations[playerLastSide][playerFrame][1],
			48,
			64,
			
			// Destination
			dx - 8,
			dy,
			48,
			64
		)
	}
	
	function playerCanMove (side) {
		var pc = getPlayerXY()
		
		pc = execSideOnCoords(pc, side)
		pc.y++
		pc.x++
		
		var tile = helper.coordsToTile(pc)
		var perms_tile = helper.findLayer('TerrainPermissions').data[tile]
		
		return perms_tile == 0 && pc.x > 0 && pc.x <= map.width && pc.y >= 0 && pc.y <= map.height
	}
	
	function getPlayerXY () {
		return {
			x: Math.floor((ctx_w / 2 - 16) - boardOffsetX) / 32,
			y: Math.floor((ctx_h / 2 - 32) - boardOffsetY) / 32 + 0.5
		}
	}
	
	var playerCountdownInteraction = 0
	var playerInteractionMessage = ''
	
	function playerInteraction () {
		if (playerCountdownInteraction > 0) {
			// Draw message at bottom left of the screen
			ctx.save()
			ctx.textBaseline = 'bottom'
			ctx.fillStyle = 'white'
			ctx.font = '30px pokemon'
			ctx.fillText(playerInteractionMessage, 5, ctx_h - 5)
			ctx.restore()
			
			playerCountdownInteraction -= 1
			return
		}
		playerInteractionMessage = ''
		
		var pc = getPlayerXY()
		pc.y++
		pc.x++
		
		// Teleport north -> south
		if (map_name === 'north' && pc.y === 19) {
			var transitionsCtx = document.getElementById('transitions').getContext('2d')
			transitions.hideTransition(transitionsCtx, function () {
				changeMap('south', pc.x, 0)
				transitions.showTransition(transitionsCtx, function () {
				}, 0.3)
			}, 0.3)
			playerCountdownInteraction = 60
		}
		
		// Teleport south -> north
		if (map_name === 'south' && pc.y === 0) {
			var transitionsCtx = document.getElementById('transitions').getContext('2d')
			transitions.hideTransition(transitionsCtx, function () {
				changeMap('north', pc.x, 17)
				transitions.showTransition(transitionsCtx, function () {
				}, 0.3)
			}, 0.3)
			playerCountdownInteraction = 60
		}
		
		pc = execSideOnCoords(pc, playerLastSide)
		
		// Pick up the pokeball
		if (keyboard.Enter && map_name === 'north' && pc.x === 12 && pc.y === 5) {
			var tile = helper.coordsToTile(pc)
			helper.findLayer('EnvDown').data[tile] = 0
			helper.findLayer('TerrainPermissions').data[tile] = 0
			playerCountdownInteraction = 120
			playerInteractionMessage = 'Vous avez ramassé une pokéball'
			return
		}
		
		// Interact with the door
		if (keyboard.Enter && map_name === 'north' && pc.x === 6 && pc.y === 8) {
			playerCountdownInteraction = 120
			playerInteractionMessage = 'Cette porte est fermée'
			return
		}
		
		//playerCountdownInteraction = 1
		//playerInteractionMessage = "Looking at: " + JSON.stringify(pc)
	}
}
},{"../maps/north.json":11,"../maps/south.json":12,"./TiledHelper.js":1,"./keyboard":3,"./savesManager.js":7,"./transitions.js":8}],7:[function(require,module,exports){

module.exports = {
	getSaves: function() {
		var saves;

		try {
			saves = JSON.parse(localStorage.saves);
		}
		catch(e) {
			saves = [];
		}

		saves = [
			{
				player: {
					name: "KindlyFire",
					badges: 0,
					playTime: 0
				},
				location: "north:5:10"
			},
			{
				player: {
					name: "KindlyFire 2",
					badges: 0,
					playTime: 35463
				},
				location: "south:3:7"
			}
		];

		return saves;
	},

	getSave: function(slot) {
		var s = this.getSaves();
		return s[slot] ? s[slot] : null;
	},

	save: function(data, slot) {
		// TODO
	}
}
},{}],8:[function(require,module,exports){

function switchTransition(ctx, done, time) {
	hideTransition(ctx, function() {
		showTransition(ctx, done, time / 2);
	}, time / 2);
}

function hideTransition(ctx, done, time) {
	var ctx_h = ctx.canvas.height,
		ctx_w = ctx.canvas.width,
		overFrames = Math.round(60 * (time || 1/3)),
		opacityAddPerFrame = 1 / overFrames,
		opacity = 0,
		currentFrame = 0;

	requestAnimationFrame(function draw() {
		ctx.clearRect(0, 0, ctx_w, ctx_h);

		ctx.fillStyle = "rgba(0, 0, 0, " + opacity + ")";
		ctx.fillRect(0, 0, ctx_w, ctx_h);

		opacity += opacityAddPerFrame;
		
		currentFrame++;
		
		if(currentFrame == overFrames) {
			done();
			return;
		}

		requestAnimationFrame(draw);
	});
}

function showTransition(ctx, done, time) {
	var ctx_h = ctx.canvas.height,
		ctx_w = ctx.canvas.width,
		overFrames = Math.round(60 * (time || 1/3)),
		opacityAddPerFrame = 1 / overFrames,
		opacity = 1,
		currentFrame = 0;

	requestAnimationFrame(function draw() {
		ctx.clearRect(0, 0, ctx_w, ctx_h);

		ctx.fillStyle = "rgba(0, 0, 0, " + opacity + ")";
		ctx.fillRect(0, 0, ctx_w, ctx_h);

		opacity -= opacityAddPerFrame;
		
		currentFrame++;
		
		if(currentFrame == overFrames) {
			ctx.clearRect(0, 0, ctx_w, ctx_h);
			done();
			return;
		}

		requestAnimationFrame(draw);
	});
}

module.exports.switchTransition = switchTransition;
module.exports.hideTransition = hideTransition;
module.exports.showTransition = showTransition;
},{}],9:[function(require,module,exports){

function generateRoundRectPath(ctx, x, y, width, height, tl, tr, br, bl) {
	// Le contenu de cette fonction n'est pas fait par moi
	// Mais je ne me souviens pas d'où ça vient
	
	var x1
	var x2
	var x3
	var x4
	var y1
	var y2
	var y3
	var y4
	var radii
	var ratio = 0
	var CURVE2KAPPA = 0.5522847498307934

	ratio = Math.min(Math.min(width / (tl + tr), width / (br + bl)), Math.min(height / (tl + bl), height / (tr + br)))

	if((ratio > 0) && (ratio < 1)) {
		tl *= ratio
		tr *= ratio
		bl *= ratio
		br *= ratio
	}

	xw = x + width
	yh = y + height
	x1 = x + tl
	x2 = xw - tr
	x3 = xw - br
	x4 = x + bl
	y1 = y + tr
	y2 = yh - br
	y3 = yh - bl
	y4 = y + tl

	ctx.beginPath()
	
	ctx.moveTo(x1, y)
	ctx.lineTo(x2, y)
	radii = CURVE2KAPPA * tr
	ctx.bezierCurveTo(x2+radii, y, xw, y1 - radii, xw, y1)
	ctx.lineTo(xw, y2)
	radii = CURVE2KAPPA * br
	ctx.bezierCurveTo(xw, y2 + radii, x3 + radii, yh, x3, yh)
	ctx.lineTo(x4, yh)
	radii = CURVE2KAPPA * bl
	ctx.bezierCurveTo(x4 - radii, yh, x, y3 + radii, x, y3)
	ctx.lineTo(x, y4)
	radii= CURVE2KAPPA * tl
	ctx.bezierCurveTo(x, y4 - radii, x1 - radii, y, x1, y)
}

module.exports.ctxRoundRect = function(ctx, x, y, width, height, tl, tr, br, bl) {
	generateRoundRectPath(ctx, x, y, width, height, tl, tr, br, bl)
	ctx.stroke()
}

module.exports.ctxFillRoundRect = function(ctx, x, y, width, height, tl, tr, br, bl) {
	generateRoundRectPath(ctx, x, y, width, height, tl, tr, br, bl)
	ctx.fill()
}

},{}],10:[function(require,module,exports){

// Modules
var loaderScene = require("./js/loaderScene.js")
var menuScene = require("./js/menuScene.js")
var overworldScene = require("./js/overworldScene.js")
var transitions = require("./js/transitions.js")

// Variables
var assets = {
	tileset: "assets/tileset.png", 
	characters: "assets/characters.png"
}
var canvas = {
	game: document.getElementById("game"),
	transitions: document.getElementById("transitions")
}
var ctx = {
	game: canvas.game.getContext("2d"),
	transitions: canvas.transitions.getContext("2d")
}

// Start loaderScene
loaderScene(assets, ctx.game, function(loadedAssets) {
	assets = loadedAssets
	main()
})

function main() {
	function showMenu() {
		transitions.hideTransition(ctx.transitions, function() {
			menuScene(ctx.game, assets, {
				onGameLoad: showGame
			})
			transitions.showTransition(ctx.transitions, function() {}, 0.2)
		}, 2)
	}

	function showGame(gameId) {
		transitions.hideTransition(ctx.transitions, function() {
			console.log("Loading game: ", gameId)
			overworldScene(ctx.game, assets, gameId, {
				onQuit: showMenu
			})
			transitions.showTransition(ctx.transitions, function() {}, 0.2)
		})
	}

	showMenu()
}
},{"./js/loaderScene.js":4,"./js/menuScene.js":5,"./js/overworldScene.js":6,"./js/transitions.js":8}],11:[function(require,module,exports){
module.exports={ "height":20,
 "layers":[
        {
         "data":[2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802],
         "height":20,
         "name":"Ground",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":14,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4799, 4799, 4799, 4799, 4799, 4799, 4799, 4799, 0, 0, 4799, 4799, 4799, 4799, 4939, 4939, 4939, 4939, 4939, 4939, 4939, 4939, 0, 0, 4939, 4939, 4939, 4939, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":20,
         "name":"GroundUp",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":14,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2805, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7709, 7710, 7711, 7712, 7713, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7849, 7850, 7851, 7852, 7853, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7989, 7990, 7991, 7992, 7993, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":20,
         "name":"EnvDown",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":14,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15837, 15838, 15839, 15840, 15841, 15842, 15843, 15844, 0, 0, 0, 0, 0, 0, 15977, 15978, 15979, 15980, 15981, 15982, 15983, 15984, 0, 0, 0, 0, 0, 0, 16117, 16118, 16119, 16120, 16121, 16122, 16123, 16124, 0, 0, 0, 0, 0, 0, 16257, 16258, 16259, 16260, 16261, 16262, 16263, 16264, 0, 0, 0, 0, 0, 0, 16397, 16398, 16399, 16400, 16401, 16402, 16403, 16404, 0, 0, 0, 0, 0, 0, 16537, 16538, 16539, 16540, 16541, 16542, 16543, 16544, 0, 0, 0, 0, 0, 0, 16677, 16678, 16679, 16680, 16681, 16682, 16683, 16684, 0, 0, 0, 0, 0, 0, 16817, 16818, 16819, 16820, 16821, 16822, 16823, 16824, 0, 0, 0, 0, 0, 0, 16957, 16958, 16959, 16960, 16961, 16962, 16963, 16964, 0, 0, 0, 0, 0, 0, 17097, 17098, 17099, 17100, 17101, 17102, 17103, 17104, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":20,
         "name":"Env",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":14,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":20,
         "name":"TerrainPermissions",
         "opacity":1,
         "type":"tilelayer",
         "visible":false,
         "width":14,
         "x":0,
         "y":0
        }],
 "nextobjectid":1,
 "orientation":"orthogonal",
 "renderorder":"right-down",
 "tileheight":32,
 "tilesets":[
        {
         "columns":140,
         "firstgid":1,
         "image":"..\/assets\/tileset.png",
         "imageheight":4800,
         "imagewidth":4480,
         "margin":0,
         "name":"tileset",
         "spacing":0,
         "tilecount":21000,
         "tileheight":32,
         "tilewidth":32
        }],
 "tilewidth":32,
 "version":1,
 "width":14
}
},{}],12:[function(require,module,exports){
module.exports={ "height":20,
 "layers":[
        {
         "data":[2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 3681, 3681, 3960, 3961, 3681, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 3960, 3961, 4100, 4101, 3681, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 4100, 4101, 3681, 3681, 3681, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802, 2802],
         "height":20,
         "name":"Ground",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":14,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3540, 3541, 3541, 3541, 3541, 3541, 0, 0, 0, 0, 0, 0, 0, 0, 3680, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3680, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3680, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3820, 3821, 3821, 3821, 3821, 3821, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":20,
         "name":"GroundUp",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":14,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":20,
         "name":"TerrainPermissions",
         "opacity":1,
         "type":"tilelayer",
         "visible":false,
         "width":14,
         "x":0,
         "y":0
        }],
 "nextobjectid":1,
 "orientation":"orthogonal",
 "renderorder":"right-down",
 "tileheight":32,
 "tilesets":[
        {
         "columns":140,
         "firstgid":1,
         "image":"..\/assets\/tileset.png",
         "imageheight":4800,
         "imagewidth":4480,
         "margin":0,
         "name":"tileset",
         "spacing":0,
         "tilecount":21000,
         "tileheight":32,
         "tilewidth":32
        }],
 "tilewidth":32,
 "version":1,
 "width":14
}
},{}]},{},[10]);
