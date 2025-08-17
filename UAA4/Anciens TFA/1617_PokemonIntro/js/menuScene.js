
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