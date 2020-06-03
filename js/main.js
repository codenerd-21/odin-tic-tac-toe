/*	Browser Based Tic Tac Toe Game

	  Focus:
		1). Use minimal global code as possible.
		2). Utilize Factory and/or Module Functions
		3). Separation of Concerns

		Rule of Thumb:
		1). If you need one of something - use a module.
		2). If you need multiple - use a factory.
*/

//	Declare Variables


//	Declare Constants


//	Declare DOM Cached Elements


//	Event Listeners


//	Functions


//	Create Factory Function for Player
const player = (name, symbol) => {
	return { name, symbol };
};


//	Create Module for Game Board
const gameBoard = (function () {
	//board, reset, sounds
	let board = [];
	return {
		board,
	};
})();


//	Create Module for Game Logic
const gameLogic = (function () {
	//winner, turn, tie
	return {

	};
})();


