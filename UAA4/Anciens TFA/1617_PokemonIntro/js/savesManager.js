
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