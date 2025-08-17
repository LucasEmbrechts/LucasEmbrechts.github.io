
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