
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