(() => {
	console.log('fired');

	
	// set up the puzzle pieces and boards
	//
	// need a reference to each piec that we want to create
	const thePieces = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'];

	// get a reference to tha drag side

	let piecesBoard = document.querySelector('.puzzle-pieces'); // pay attention to wright clss and id
	let puzzleBoard = document.querySelector('.puzzle-board');
	
	// get a reference to the buttons at the buttom so we can change the puzzle

	let puzzleSelectors = document.querySelectorAll('#buttonHolder img');

	// functions go in the middle
	function createPuzzlePieces(pictureIndex) {
		// generate images here -> need to make 4(top left, top right, buttom left, button right)
		//debugger;
		//
		//loop through the images refs and generate one for each
		thePieces.forEach((piece, index) => {
			let newPuzzlePiece = `<img id="piece${index}" class="puzzle-image"
				src="images/${piece + pictureIndex}.jpg" alt="puzzle piece"> `;	

			piecesBoard.innerHTML += newPuzzlePiece;
		});
	}

	function resetPuzzlePieces(){
		// change the curent puzzle, regenerate the pieces

		//debugger;

		//clean out the puzzle pieces div

		piecesBoard.innerHTML = "";

		// generate new pieces
		createPuzzlePieces(this.dataset.puzzleref);
	}

	// event handling gose here
	puzzleSelectors.forEach(button => button.addEventListener("click", resetPuzzlePieces));

	//call this function to set up / generate the pieces on load
	createPuzzlePieces(0);

})();

