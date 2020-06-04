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

	console.log('test1');

	const renderBoard = () => {
		for (let i = 0; i < allCells.length; i++) {
			allCells[i].addEventListener('click', click);
		}
	}
	console.log('test2');
	const click = (e) => {
		let id = e.target.id;
		console.log(id);
		console.log(typeof (id));
	}
	console.log('test3');

	return {
		board,
		renderBoard,
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


