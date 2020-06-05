/*	Browser Based Tic Tac Toe Game

	  Focus:
		1). Use minimal global code as possible.
		2). Utilize Factory and/or Module Functions
		3). Separation of Concerns

		Rule of Thumb:
		1). If you need one of something - use a module.
		2). If you need multiple - use a factory.
*/


//	Create Factory Function for Player
const Player = (name, symbol) => {
	return { name, symbol };
};


//	Create Module for Game Board
const gameBoard = (function () {
	let board = [null, null, null, null, null, null, null, null, null];
	const allCells = document.getElementsByClassName('cells');


	const renderBoard = () => {
		for (let i = 0; i < allCells.length; i++) {
			allCells[i].addEventListener('click', click);
		}
	}


	const click = (e) => {
		let id = parseInt(e.target.id);
		console.log(id);
		console.log(typeof (id));
	}


	return {
		board,
		renderBoard,
		click,
	};
})();

gameBoard.renderBoard();


//	Create Module for Game Logic
const gameLogic = (function () {
	let winner;
	let turn;
	//winner, turn, tie
	return {
		winner,
		turn,
	};
})();


