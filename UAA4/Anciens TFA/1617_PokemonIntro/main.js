
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