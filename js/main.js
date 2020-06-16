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
	getName = () => { name };
	getSymbol = () => { symbol };
	return { name, symbol };
};


//	Create Module for Game Board
const gameBoard = (function () {
	let board = [];
	let turn = 1;
	const allCells = document.getElementsByClassName('cells');


	const init = () => {
		board = [null, null, null, null, null, null, null, null, null];
		renderBoard();
	}

	const renderBoard = () => {
		for (let i = 0; i < allCells.length; i++) {
			allCells[i].addEventListener('click', click);
		}
	}

	const click = (e) => {
		let id = parseInt(e.target.id);
		let cell = document.getElementById(`${id}`);
		if (board[id] == null) {
			console.log(`Valid Cell`);
			if (turn === 1) {
				console.log(`It is 'X' turn.`);
				turn = -1;
				cell.innerHTML = 'X';
				board[id] = 'X';
				console.log(board);
			} else if (turn === -1) {
				console.log(`It is 'O' turn.`);
				turn = 1;
				cell.innerHTML = 'O';
				board[id] = 'O';
				console.log(board);
			}
		} else {
			console.log(`Click on a Valid Cell`);
		}
		gameLogic.checkWinner(board);
	}

	return {
		init,
		board,
	};
})();


//	Create Module for Game Logic
const gameLogic = (function () {

	let start;
	let reset;
	let winner;

	const checkWinner = (board) => {
		if (board[0] != null && board[0] === board[1] && board[0] === board[2]) {
			alert(`Game Over: The winner is ${board[0]}`);
		} else if (board[3] != null && board[3] === board[4] && board[3] === board[5]) {
			alert(`Game Over: The winner is ${board[3]}`);
		} else if (board[6] != null && board[6] === board[7] && board[6] === board[8]) {
			alert(`Game Over: The winner is ${board[6]}`);
		} else if (board[0] != null && board[0] === board[3] && board[0] === board[6]) {
			alert(`Game Over: The winner is ${board[0]}`);
		} else if (board[1] != null && board[1] === board[4] && board[1] === board[7]) {
			alert(`Game Over: The winner is ${board[1]}`);
		} else if (board[2] != null && board[2] === board[5] && board[2] === board[8]) {
			alert(`Game Over: The winner is ${board[2]}`);
		} else if (board[0] != null && board[0] === board[4] && board[0] === board[8]) {
			alert(`Game Over: The winner is ${board[0]}`);
		} else if (board[6] != null && board[6] === board[4] && board[6] === board[2]) {
			alert(`Game Over: The winner is ${board[6]}`);
		} else {
			checkTie(board);
		}
	};

	const checkTie = (board) => {
		if (board.includes(null) === false) {
			alert(`Tie Game:  Nobody Wins! Play Again!!`)
		}
	}

	return {
		checkWinner,
	};
})();

gameBoard.init();
