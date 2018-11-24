/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, roundScoreSum, activePlayer, dice;


var diceDOM0 = document.querySelector('#dice-0');
var diceDOM1 = document.querySelector('#dice-1');	
init();

document.querySelector('.btn-roll').addEventListener('click',	function () {
	/* body... */
	dice0 = Math.floor(Math.random()*6)+1;
	dice1 = Math.floor(Math.random()*6)+1;


	diceDOM0.style.display ='block';
	diceDOM0.src = 'dice-'+dice0+'.png';


	diceDOM1.style.display ='block';
	diceDOM1.src = 'dice-'+dice1+'.png';	

	roundScoreSum = dice0+dice1;
	

	if(dice0!=1&&dice1!=1){
		roundScore += roundScoreSum;
		document.querySelector('#current-'+activePlayer).textContent = roundScore;	
		document.querySelector('.btn-hold').style.display = 'block';

	}else {
		dice = 0;
		nextPlayer();
		
		document.querySelector('.btn-hold').style.display = 'none';
	}
	document.querySelector('#current-'+activePlayer).textContent = roundScore;	
});
document.querySelector('.btn-hold').addEventListener('click', function () {
	/* body... */
	var finalScore = 100;
	diceDOM0.style.display = 'none';
	diceDOM1.style.display = 'none';
	scores[activePlayer]+=roundScore;
	document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];
	// getValue(document.querySelector('#final-score').value;);
	var inputt = document.querySelector('#final-score').value;
	if(inputt){
		finalScore = inputt;
	}
	if(scores[activePlayer]>=finalScore){
		document.querySelector('#name-'+activePlayer).textContent = 'Winner :)';
		document.querySelector('.btn-hold').style.display = 'none';
		document.querySelector('.btn-roll').style.display = 'none';

		document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
		document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');

	}
	nextPlayer();
	document.querySelector('.btn-hold').style.display = 'none';

});
document.querySelector('.btn-new').addEventListener('click', function () {
	/* body... */
	init();
	
});
function nextPlayer () {
	// body... 
	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');
	roundScore = 0;
	roundScoreSum = 0;
	document.querySelector('#current-'+activePlayer).textContent = roundScore;	
	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
}

function init(){
	scores = [0,0];
	roundScore = 0;
	activePlayer = 0;
	roundScoreSum = 0;

	document.querySelector('#score-0').textContent = 0;
	document.querySelector('#score-1').textContent = 0;
	document.querySelector('#current-1').textContent = 0;
	document.querySelector('#current-0').textContent = 0;

	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');

	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.add('active');
	document.querySelector('.btn-roll').style.display = 'block';

	document.querySelector('#name-0').textContent = 'Player 1';
	document.querySelector('#name-1').textContent = 'Player 2';


	diceDOM0.style.display = 'none';
	diceDOM1.style.display = 'none';
}

