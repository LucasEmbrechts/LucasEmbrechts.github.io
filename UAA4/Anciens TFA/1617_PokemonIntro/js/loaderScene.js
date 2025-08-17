
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