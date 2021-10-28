let DiceRoller = (() => {
	let lowestRoll = 1;
	let sidesPerDie;
	let numberOfRolls;
	let rollHistory;

	return class DiceRoller{
		constructor(rolls, sides) {
			sidesPerDie = Number(sides);
			numberOfRolls = Number(rolls);
		}

		rollOneDie() {
			let margin = sidesPerDie - lowestRoll;
			return Math.floor(Math.random() * (margin + 1) + lowestRoll);
		}

		rollDice() {
			rollHistory = [];
			for (let i = 0; i < numberOfRolls; i++) {
				rollHistory.push(this.rollOneDie());
			}
		}

		getRollHistory() {
			return [...rollHistory];
		}
	}
})()

module.exports = DiceRoller;