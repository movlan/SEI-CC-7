/*----- constants -----*/
const beepAudio = new Audio('http://soundbible.com/mp3/Robot_blip-Marianne_Gagnon-120342607.mp3');
const shootAudio = new Audio('http://soundbible.com/mp3/shooting_star-Mike_Koenig-1132888100.mp3');

/*----- app's state (variables) -----*/
const state = {
	scores: {
		player: 0,
		ties: 0,
		computer:0
	}
}


/*----- cached element references -----*/

const rpsLookup = {
	r: {
		imgUrl: 'imgs/rock.png',
		beats: 's'
	},
	p: {
		imgUrl: 'imgs/paper.png',
		beats: 'r'
	},
	s: {
		imgUrl: 'imgs/scissors.png',
		beats: 'p'
	}
};

// know we know where the divs for images are going to go
const resultsElements = {
	playerImage: document.querySelector('#player-result img'),
	computerImage: document.querySelector('#computer-result img'),
}

// cached our score elements so we can change them later
const scoreElements = {
	playerScore: document.querySelector('#player-score'),
	tieScore: document.querySelector('#tie-score'),
	computerScore: document.querySelector('#computer-score')
}

//



/*----- event listeners -----*/
const button = document.querySelector('button')

button.addEventListener('click', (e) => {
	console.log('button is working')
})

function playRound(){

	// generate a random value for the player 
	// generate a random value for the computer
	// so maybe you write another function to do that 

	// compare the results
	// update your state,
	// update the dom

}

function generateRockPaperScissorResult(){
	// rpsLookup, Object.keys
	// Math.random to get a random index 
}

/*----- functions -----*/

function render(){
	// display both the computer and player image as a rock on
	// the screen

	// loop of the resultsELM object and render rock as the image
	renderRPS();
	renderScores();


}



function renderRPS(){
	for (let elemImage in resultsElements){

		resultsElements[elemImage].src = rpsLookup.r.imgUrl
	}
}

// write a function called renderScores that renders 
// the scores in the state to the dom
function renderScores(){
	// grab the element
	// that set the value with state
	scoreElements.playerScore.innerText = state.scores.player;
	scoreElements.tieScore.innerText = state.scores.ties;
	scoreElements.computerScore.innerText = state.scores.computer;
}

render();

// try to write a render function and invoke
// should apply rock to both of our elements on the page 




alert('ready!')