
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
