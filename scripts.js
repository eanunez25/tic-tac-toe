// module
const gameboard = (() => {
  // get gameboard array
  const boardstate = () => {
    let board = [];
    board = gameBoardSpaces.forEach(obj => board.push(obj.innerHTML))
  }

  // reset method
  const reset = () => {
    gameBoardSpaces.forEach(space => {
      space.innerHTML = '';
    })
    console.log('Reset!');
  }

  // check for win
  // make arrary of winning combination of space ids
  // after placement, check if current player created a winning combo
  const checkForWinner = () => {
    let winningCombos = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]

    gameBoardSpaces.forEach(space => {
      space.addEventListener('click', e => {
        winningCombos.forEach(combo => {
          if (gameBoardSpaces[combo[0]].innerHTML == gameBoardSpaces[combo[1]].innerHTML && gameBoardSpaces[combo[0]].innerHTML == gameBoardSpaces[combo[2]].innerHTML && gameBoardSpaces[combo[0]].innerHTML != "") {
            console.log("win")
          }
        })
      })
    })
  }

  // declare winner

  return { reset, boardstate, checkForWinner };
})()

// factories
const player = (marker) => {
  const markerLetter = () => console.log(marker);
  // place marker
  const placeMarker = () => {
    gameBoardSpaces.forEach(space => {
      space.addEventListener('click', e => {
        space.innerHTML = marker;
      })
    })
  }

  return { placeMarker, markerLetter };
}


const gameBoardSpaces = document.querySelectorAll('.game-board');


function gameplay() {
  gameboard.reset();
  const player1 = player('X');
  const player2 = player('O');
  player1.placeMarker();
  if (gameboard.checkForWinner() == true ) {
    console.log('boobs')
  };
}

gameplay();


