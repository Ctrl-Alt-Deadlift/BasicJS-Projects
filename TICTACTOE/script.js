// assigning html elements to js variables


const kata = 'X.jpeg';
const gola = 'O.png';
let msg = document.getElementById('info-box');
let s1 = document.getElementById('sq1');
let s2 = document.getElementById('sq2');
let s3 = document.getElementById('sq3');
let s4 = document.getElementById('sq4');
let s5 = document.getElementById('sq5');
let s6 = document.getElementById('sq6');
let s7 = document.getElementById('sq7');
let s8 = document.getElementById('sq8');
let s9 = document.getElementById('sq9');

let grid_arr = [s1, s2, s3, s4, s5, s6, s7, s8, s9];
let moves = 0;
let p1 = prompt("Player 1 enter your name: ", "Player 1");
let p2 = prompt("Player 2 enter your name: ", "Player 2");
let rbtn = document.getElementById('btn');
let gotWinner = false;

if (p1 == null) {
  p1 = "Player 1";
}

if (p2 == null) {
  p2 = "Player 2";
}




function letsGo(p1, p2, callback) {
  msg.innerHTML = `Best of luck ${p1} and ${p2}`;
  callback(p1, p2);
}


function tellTurn(p1, p2, callback) {

  setTimeout(() => {

    msg.innerHTML = `${p1}'s Turn: Use X`;
    callback(p1, p2);

  }, 1000);

}

function startTimer(p1, p2, callback) {

  for (let i = 0; i <= 10; i++) {
    setTimeout(() => {

      if (i <= 3)
        msg.innerHTML = `Match starts in ${3 - i} s`;


      else if (i == 6) {
        msg.innerHTML = ` ${p1}: Use X`;
      }

      else if (i == 8) {
        msg.innerHTML = ` ${p2}: Use O`;
      }

      else if (i > 8)
        callback(p1, p2);

    }, i * 1000);

  }
}

function gotWinr_or_draw(p1, p2) {

  if (moves < 5) {
    return false;
  }


  else if ((grid_arr[0] == 'x' && grid_arr[1] == 'x' && grid_arr[2] == 'x') || (grid_arr[3] == 'x' && grid_arr[4] == 'x' && grid_arr[5] == 'x') || (grid_arr[6] == 'x' && grid_arr[7] == 'x'
    && grid_arr[8] == 'x') || (grid_arr[0] == 'x' && grid_arr[3] == 'x' && grid_arr[6] == 'x') || (grid_arr[1] == 'x' && grid_arr[4] == 'x' && grid_arr[7] == 'x') || (grid_arr[2] == 'x' && grid_arr[5] == 'x' && grid_arr[8] == 'x') ||
    (grid_arr[0] == 'x' && grid_arr[4] == 'x' && grid_arr[8] == 'x') || (grid_arr[2] == 'x' && grid_arr[4] == 'x' && grid_arr[6] == 'x')
  ) {

    gotWinner = true;
    setTimeout(() => {
      msg.innerHTML = `${p1} wins !`;
      return true;
    }, 500);

    setTimeout(() => {
      msg.innerHTML = `Congrats ${p1}`;
      return true;
    }, 2500);

  }


  else if ((grid_arr[0] == 'o' && grid_arr[1] == 'o' && grid_arr[2] == 'o') || (grid_arr[3] == 'o' && grid_arr[4] == 'o' && grid_arr[5] == 'o') || (grid_arr[6] == 'o' && grid_arr[7] == 'o'
    && grid_arr[8] == 'o') || (grid_arr[0] == 'o' && grid_arr[3] == 'o' && grid_arr[6] == 'o') || (grid_arr[1] == 'o' && grid_arr[4] == 'o' && grid_arr[7] == 'o') || (grid_arr[2] == 'o' && grid_arr[5] == 'o' && grid_arr[8] == 'o') ||
    (grid_arr[0] == 'o' && grid_arr[4] == 'o' && grid_arr[8] == 'o') || (grid_arr[2] == 'o' && grid_arr[4] == 'o' && grid_arr[6] == 'o')
  ) {
    gotWinner = true;
    setTimeout(() => {
      msg.innerHTML = `${p2} wins !`;
      return true;
    }, 500);

    setTimeout(() => {
      msg.innerHTML = `Congrats ${p2}`;
      return true;
    }, 2500);
  }

  else if (moves == 9) {

    msg.innerHTML = "Match Draw !  Better luck next time !"
  }

  else {
    return false;
  }





}



function gamePlay(p1, p2) {

  let turn = 1;


  s1.addEventListener("click", () => {

    if ((grid_arr[0] != "x" && grid_arr[0] != "o") && turn == 1 && gotWinner == false) {

      grid_arr[0].innerHTML =
        `
         <div class="sq_div">
         <img  src='${kata}'>
         </div>
  
         `
      grid_arr[0] = "x";

      msg.innerHTML = `${p1} placed X at postion 1, ${p2}'s turn`;
      moves++;


      if (gotWinr_or_draw(p1, p2)) {
        return;
      }

      turn = 0;

    }

    else if ((grid_arr[0] != "x" && grid_arr[0] != "o") && turn == 0 && gotWinner == false) {

      grid_arr[0].innerHTML =
        `
         <div class="sq_div">
         <img  src='${gola}'>
         </div>
  
         `

      msg.innerHTML = `${p2} placed O at postion 1,${p1}'s turn`;
      grid_arr[0] = "o";
      moves++;


      if (gotWinr_or_draw(p1, p2)) {
        return;
      }

      turn = 1;

    }



  }


  );


  s2.addEventListener("click", () => {
    if ((grid_arr[1] != "x" && grid_arr[1] != "o") && turn == 1 && gotWinner == false) {
      grid_arr[1].innerHTML = `
        <div class="sq_div">
          <img src='${kata}'>
        </div>
      `;
      grid_arr[1] = "x";
      msg.innerHTML = `${p1} placed X at position 2, ${p2}'s turn`;
      moves++;
      if (gotWinr_or_draw(p1, p2)) {
        return;
      }
      turn = 0;
    } else if ((grid_arr[1] != "x" && grid_arr[1] != "o") && turn == 0 && gotWinner == false) {
      grid_arr[1].innerHTML = `
        <div class="sq_div">
          <img src='${gola}'>
        </div>
      `;
      msg.innerHTML = `${p2} placed O at position 2, ${p1}'s turn`;
      grid_arr[1] = "o";
      moves++;
      if (gotWinr_or_draw(p1, p2)) {
        return;
      }
      turn = 1;
    }
  });

  s3.addEventListener("click", () => {
    if ((grid_arr[2] != "x" && grid_arr[2] != "o") && turn == 1 && gotWinner == false) {
      grid_arr[2].innerHTML = `
        <div class="sq_div">
          <img src='${kata}'>
        </div>
      `;
      grid_arr[2] = "x";
      msg.innerHTML = `${p1} placed X at position 3, ${p2}'s turn`;
      moves++;
      if (gotWinr_or_draw(p1, p2)) {
        return;
      }
      turn = 0;
    } else if ((grid_arr[2] != "x" && grid_arr[2] != "o") && turn == 0 && gotWinner == false) {
      grid_arr[2].innerHTML = `
        <div class="sq_div">
          <img src='${gola}'>
        </div>
      `;
      msg.innerHTML = `${p2} placed O at position 3, ${p1}'s turn`;
      grid_arr[2] = "o";
      moves++;
      if (gotWinr_or_draw(p1, p2)) {
        return;
      }
      turn = 1;
    }
  });

  s4.addEventListener("click", () => {
    if ((grid_arr[3] != "x" && grid_arr[3] != "o") && turn == 1 && gotWinner == false) {
      grid_arr[3].innerHTML = `
        <div class="sq_div">
          <img src='${kata}'>
        </div>
      `;
      grid_arr[3] = "x";
      msg.innerHTML = `${p1} placed X at position 4, ${p2}'s turn`;
      moves++;
      if (gotWinr_or_draw(p1, p2)) {
        return;
      }
      turn = 0;
    } else if ((grid_arr[3] != "x" && grid_arr[3] != "o") && turn == 0 && gotWinner == false) {
      grid_arr[3].innerHTML = `
        <div class="sq_div">
          <img src='${gola}'>
        </div>
      `;
      msg.innerHTML = `${p2} placed O at position 4, ${p1}'s turn`;
      grid_arr[3] = "o";
      moves++;
      if (gotWinr_or_draw(p1, p2)) {
        return;
      }
      turn = 1;
    }
  });

  s5.addEventListener("click", () => {
    if ((grid_arr[4] != "x" && grid_arr[4] != "o") && turn == 1 && gotWinner == false) {
      grid_arr[4].innerHTML = `
        <div class="sq_div">
          <img src='${kata}'>
        </div>
      `;
      grid_arr[4] = "x";
      msg.innerHTML = `${p1} placed X at position 5, ${p2}'s turn`;
      moves++;
      if (gotWinr_or_draw(p1, p2)) {
        return;
      }
      turn = 0;
    } else if ((grid_arr[4] != "x" && grid_arr[4] != "o") && turn == 0 && gotWinner == false) {
      grid_arr[4].innerHTML = `
        <div class="sq_div">
          <img src='${gola}'>
        </div>
      `;
      msg.innerHTML = `${p2} placed O at position 5, ${p1}'s turn`;
      grid_arr[4] = "o";
      moves++;
      if (gotWinr_or_draw(p1, p2)) {
        return;
      }
      turn = 1;
    }
  });

  s6.addEventListener("click", () => {
    if ((grid_arr[5] != "x" && grid_arr[5] != "o") && turn == 1 && gotWinner == false) {
      grid_arr[5].innerHTML = `
        <div class="sq_div">
          <img src='${kata}'>
        </div>
      `;
      grid_arr[5] = "x";
      msg.innerHTML = `${p1} placed X at position 6, ${p2}'s turn`;
      moves++;
      if (gotWinr_or_draw(p1, p2)) {
        return;
      }
      turn = 0;
    } else if ((grid_arr[5] != "x" && grid_arr[5] != "o") && turn == 0 && gotWinner == false) {
      grid_arr[5].innerHTML = `
        <div class="sq_div">
          <img src='${gola}'>
        </div>
      `;
      msg.innerHTML = `${p2} placed O at position 6, ${p1}'s turn`;
      grid_arr[5] = "o";
      moves++;
      if (gotWinr_or_draw(p1, p2)) {
        return;
      }
      turn = 1;
    }
  });

  s7.addEventListener("click", () => {
    if ((grid_arr[6] != "x" && grid_arr[6] != "o") && turn == 1 && gotWinner == false) {
      grid_arr[6].innerHTML = `
        <div class="sq_div">
          <img src='${kata}'>
        </div>
      `;
      grid_arr[6] = "x";
      msg.innerHTML = `${p1} placed X at position 7, ${p2}'s turn`;
      moves++;
      if (gotWinr_or_draw(p1, p2)) {
        return;
      }
      turn = 0;
    } else if ((grid_arr[6] != "x" && grid_arr[6] != "o") && turn == 0 && gotWinner == false) {
      grid_arr[6].innerHTML = `
        <div class="sq_div">
          <img src='${gola}'>
        </div>
      `;
      msg.innerHTML = `${p2} placed O at position 7, ${p1}'s turn`;
      grid_arr[6] = "o";
      moves++;
      if (gotWinr_or_draw(p1, p2)) {
        return;
      }
      turn = 1;
    }
  });

  s8.addEventListener("click", () => {
    if ((grid_arr[7] != "x" && grid_arr[7] != "o") && turn == 1 && gotWinner == false) {
      grid_arr[7].innerHTML = `
        <div class="sq_div">
          <img src='${kata}'>
        </div>
      `;
      grid_arr[7] = "x";
      msg.innerHTML = `${p1} placed X at position 8, ${p2}'s turn`;
      moves++;
      if (gotWinr_or_draw(p1, p2)) {
        return;
      }
      turn = 0;
    } else if ((grid_arr[7] != "x" && grid_arr[7] != "o") && turn == 0 && gotWinner == false) {
      grid_arr[7].innerHTML = `
        <div class="sq_div">
          <img src='${gola}'>
        </div>
      `;
      msg.innerHTML = `${p2} placed O at position 8, ${p1}'s turn`;
      grid_arr[7] = "o";
      moves++;
      if (gotWinr_or_draw(p1, p2)) {
        return;
      }
      turn = 1;
    }
  });

  s9.addEventListener("click", () => {
    if ((grid_arr[8] != "x" && grid_arr[8] != "o") && turn == 1 && gotWinner == false) {
      grid_arr[8].innerHTML = `
        <div class="sq_div">
          <img src='${kata}'>
        </div>
      `;
      grid_arr[8] = "x";
      msg.innerHTML = `${p1} placed X at position 9, ${p2}'s turn`;
      moves++;
      if (gotWinr_or_draw(p1, p2)) {
        return;
      }
      turn = 0;
    } else if ((grid_arr[8] != "x" && grid_arr[8] != "o") && turn == 0 && gotWinner == false) {
      grid_arr[8].innerHTML = `
        <div class="sq_div">
          <img src='${gola}'>
        </div>
      `;
      msg.innerHTML = `${p2} placed O at position 9, ${p1}'s turn`;
      grid_arr[8] = "o";
      moves++;
      if (gotWinr_or_draw(p1, p2)) {
        return;
      }
      turn = 1;
    }
  });



  rbtn.addEventListener("click", () => {
    location.reload();
  });


}









startTimer(p1, p2, (p1, p2) => {
  letsGo(p1, p2, (p1, p2) => {
    tellTurn(p1, p2, (p1, p2) => {
      gamePlay(p1, p2);
    });
  });
});

console.log(grid_arr)
console.log(moves);





// TEST CODE: GENERATING PUTTING X/O AND RANDOMLY PLACING SYMBOLS USING RANDOM
// document.getElementById('sq1').innerHTML =
//   `
//   <div id="sq1_div">
// <img id="X" src='${kata}'>
//   </div>
// `

// document.getElementById('sq2').innerHTML =
//   `
//   <div id="sq2_div">
// <img id="X" src='${gola}'>
//   </div>
// `

// s1.innerHTML = `
//    <div class="sq_div">
// <img  src='${kata}'>
//   </div>
//  `

// s2.innerHTML = `
//  <div class="sq_div">
// <img  src='${gola}'>
// </div>
// `

// s3.innerHTML = `
//    <div class="sq_div">
// <img  src='${kata}'>
//   </div>
//  `


// for (let i = 0; i < 9; i++) {

//   let r = Math.floor(Math.random() * 2);

//   if (r == 0) {

//     grid_arr[i].innerHTML = `
//               <div class="sq_div">
//               <img  src='${gola}'>
//               </div>
//             `
//   }


//   else {

//     grid_arr[i].innerHTML = `
//     <div class="sq_div">
//     <img  src='${kata}'>
//     </div>
//   `

//   }

// }

