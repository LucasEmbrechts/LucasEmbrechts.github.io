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