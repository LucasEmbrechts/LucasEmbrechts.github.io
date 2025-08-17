
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