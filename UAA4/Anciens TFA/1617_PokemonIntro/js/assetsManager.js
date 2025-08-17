
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