const COMBO = [
  ["0", "1", "2"],
  ["3", "4", "5"],
  ["6", "7", "8"],
  ["0", "3", "6"],
  ["1", "4", "7"],
  ["2", "5", "8"],
  ["0", "4", "8"],
  ["6", "4", "2"],
];

let a = true;
function newGame() {
  for (i = 0; i < 9; i++) {
    document.getElementById(i).innerHTML = "";
  }
  document.getElementById("win").innerHTML = "";
  a = true;
}

function activate(id) {
  if (document.getElementById(id).innerHTML == "" && a == true) {
    document.getElementById(id).innerHTML = "X";
    a = false;
    if (winCheck()) {
      document.getElementById("win").innerHTML = "X won!";
    } else {
      setTimeout(secondPlayer, 500);
    }
  }
}

function secondPlayer() {
  let pos = [[], [], [], []];
  for (i = 0; i < COMBO.length; i++) {
    let x = 0;
    let o = 0;
    for (j = 0; j < 3; j++) {
      if (document.getElementById(COMBO[i][j]).innerHTML == "X") {
        x++;
      } else if (document.getElementById(COMBO[i][j]).innerHTML == "O") {
        o++;
      }
    }
    if (o == 2 && x == 0) {
      pos[0].push(COMBO[i]);
    } else if (x == 2 && o == 0) {
      pos[1].push(COMBO[i]);
    } else if (o == 1 && x == 0) {
      pos[2].push(COMBO[i]);
    } else {
      pos[3].push(COMBO[i]);
    }
  }
  for (i = 0; i < 4; i++) {
    if (pos[i].length > 0) {
      for (j = 0; j < 3; j++) {
        if (document.getElementById(pos[i][0][j]).innerHTML == "") {
          document.getElementById(pos[i][0][j]).innerHTML = "O";
          if (winCheck()) {
            return (document.getElementById("win").innerHTML = "O won!");
          } else {
            return (a = true);
          }
        }
      }
    }
  }
}

function winCheck() {
  for (i = 0; i < COMBO.length; i++) {
    if (
      document.getElementById(COMBO[i][0]).innerHTML != "" &&
      document.getElementById(COMBO[i][0]).innerHTML ==
        document.getElementById(COMBO[i][1]).innerHTML &&
      document.getElementById(COMBO[i][1]).innerHTML ==
        document.getElementById(COMBO[i][2]).innerHTML
    ) {
      return true;
    }
  }
}
