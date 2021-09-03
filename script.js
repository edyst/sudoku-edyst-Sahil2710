
/* This the function to set Easy Board */

function setEasyBoard() {
  // This is to remove the classes given during validation and setting up of board

  for (let i = 1; i < 82; i++) {
    document
      .querySelector(`#cell-${i} input`)
      .classList.remove("disabled");
    document
      .querySelector(`#cell-${i} input`)
      .classList.remove("duplicate");
    document
      .querySelector(`#cell-${i} input`)
      .classList.remove("highlight");
  }

  /*This is for remove the classes and css being given in validation() function*/

  document.getElementById("result").style.display = "none";
  document.getElementById("sudoku-grid").classList.remove("lightUp");

  let board = [
    ["5", "2", "0", "8", "3", "1", "0", "6", "4"],
    ["8", "0", "4", "0", "0", "0", "0", "5", "3"],
    ["1", "0", "3", "0", "4", "0", "0", "0", "0"],
    ["6", "5", "0", "0", "0", "8", "0", "0", "0"],
    ["0", "4", "9", "7", "0", "3", "5", "1", "0"],
    ["0", "0", "8", "4", "1", "5", "2", "9", "0"],
    ["0", "0", "0", "1", "0", "7", "6", "0", "0"],
    ["4", "0", "0", "0", "0", "6", "8", "0", "0"],
    ["9", "1", "0", "0", "0", "0", "0", "7", "0"],
  ];

  let j = 1;

  board.forEach((element, index) => {
    element.forEach((ele, idx) => {
      if (ele != 0) {
        document.querySelector(`#cell-${j} input`).value = ele;
        document
          .querySelector(`#cell-${j} input`)
          .classList.add("disabled");

        j++;
      } else {
        document.querySelector(`#cell-${j} input`).value = "";
        j++;
      }
    });
  });
}

/* This the function to set Medium Board */

function setMediumBoard() {
  // This is to remove the classes given during validation and setting up of board

  for (let i = 1; i < 82; i++) {
    document
      .querySelector(`#cell-${i} input`)
      .classList.remove("disabled");
    document
      .querySelector(`#cell-${i} input`)
      .classList.remove("duplicate");
      document
      .querySelector(`#cell-${i} input`)
      .classList.remove("highlight");
  }
  /*This is for remove the classes and css being given in validation() function*/

  document.getElementById("result").style.display = "none";
  document.getElementById("sudoku-grid").classList.remove("lightUp");

  let board = [
    ["0", "0", "0", "0", "1", "0", "5", "0", "0"],
    ["0", "0", "9", "0", "0", "7", "0", "0", "0"],
    ["5", "3", "0", "0", "0", "0", "0", "0", "2"],
    ["0", "0", "6", "0", "3", "0", "0", "0", "7"],
    ["0", "0", "8", "7", "4", "0", "3", "0", "0"],
    ["0", "5", "3", "0", "0", "6", "0", "8", "0"],
    ["0", "6", "2", "3", "0", "0", "0", "0", "0"],
    ["3", "0", "0", "0", "6", "1", "8", "0", "0"],
    ["0", "8", "0", "4", "0", "9", "7", "6", "0"],
  ];

  let j = 1;
  board.forEach((element, index) => {
    element.forEach((ele, idx) => {
      if (ele != 0) {
        document.querySelector(`#cell-${j} input`).value = ele;
        document
          .querySelector(`#cell-${j} input`)
          .classList.add("disabled");
        j++;
      } else {
        document.querySelector(`#cell-${j} input`).value = "";
        j++;
      }
    });
  });
}

/* This the function to set Hard Board */

function setHardBoard() {
  // This is to remove the classes given during validation and setting up of board

  for (let i = 1; i < 82; i++) {
    document
      .querySelector(`#cell-${i} input`)
      .classList.remove("disabled");
    document
      .querySelector(`#cell-${i} input`)
      .classList.remove("duplicate");
    document
      .querySelector(`#cell-${i} input`)
      .classList.remove("highlight");
  }

  /*This is for remove the classes and css being given in validation() function*/

  document.getElementById("result").style.display = "none";
  document.getElementById("sudoku-grid").classList.remove("lightUp");

  let board = [
    ["0", "0", "6", "0", "0", "0", "0", "0", "1"],
    ["0", "3", "0", "0", "0", "0", "8", "0", "0"],
    ["0", "0", "0", "5", "0", "8", "4", "0", "0"],
    ["0", "6", "0", "0", "1", "0", "0", "2", "0"],
    ["0", "0", "3", "0", "0", "7", "0", "0", "0"],
    ["0", "9", "1", "0", "0", "0", "3", "0", "0"],
    ["0", "0", "0", "0", "0", "5", "1", "7", "0"],
    ["1", "5", "0", "0", "2", "6", "0", "0", "0"],
    ["0", "0", "0", "0", "9", "0", "6", "5", "0"],
  ];

  let j = 1;
  board.forEach((element, index) => {
    element.forEach((ele, idx) => {
      if (ele != 0) {
        document.querySelector(`#cell-${j} input`).value = ele;
        document
          .querySelector(`#cell-${j} input`)
          .classList.add("disabled");
        j++;
      } else {
        document.querySelector(`#cell-${j} input`).value = "";
        j++;
      }
    });
  });
}

/*This is the function to validate each row called by rowsValidtion() function*/

function rowValidation(rowNum) {
  let checkDuplicate = [];
  let duplicateIndex = [];
  let start = 9 * rowNum - 8;
  let end = 9 * rowNum;
  let sum = 0;
  let val;
  for (; start <= end; start++) {
    val = Number(document.querySelector(`#cell-${start} input`).value);
    checkDuplicate.push(val);
    duplicateIndex.push(start);
    sum = sum + val;
  }

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9 && j != i; j++) {
      if (
        checkDuplicate[i] == checkDuplicate[j] &&
        checkDuplicate[i] != ""
      ) {
        document
          .querySelector(`#cell-${duplicateIndex[i]} input`)
          .classList.add("duplicate");
        document
          .querySelector(`#cell-${duplicateIndex[j]} input`)
          .classList.add("duplicate");
      }
    }
  }

  return sum;
}

//This is rowsvalidation() Function

function rowsValidation() {
  let check = 0;

  for (let i = 1; i < 10; i++) {
    if (rowValidation(i) == 45) check++;
  }
  if (check == 9) return 1;
  else return 0;
}

//This is columnvalidation() Function

function columnValidation(colNum) {
  let checkDuplicate = [];
  let duplicateIndex = [];
  let start = colNum;
  let end = 7 * 10 + colNum + 2;
  let sum = 0;
  let val;
  for (; start <= end; start += 9) {
    val = Number(document.querySelector(`#cell-${start} input`).value);
    checkDuplicate.push(val);
    duplicateIndex.push(start);
    sum = sum + val;
  }

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9 && j != i; j++) {
      if (
        checkDuplicate[i] == checkDuplicate[j] &&
        checkDuplicate[i] != ""
      ) {
        document
          .querySelector(`#cell-${duplicateIndex[i]} input`)
          .classList.add("duplicate");
        document
          .querySelector(`#cell-${duplicateIndex[j]} input`)
          .classList.add("duplicate");
      }
    }
  }

  return sum;
}

//This is columnsvalidation() Function

function columnsValidation() {
  let check = 0;

  for (let i = 1; i < 10; i++) {
    if (columnValidation(i) == 45) check++;
  }
  if (check == 9) return 1;
  else return 0;
}

//This is boxvalidation() Function

function boxValidation(boxNum) {
  let sum = 0;
  let checkDuplicate = [];
  let duplicateIndex = [];

  for (let i = 1; i < 4; i++) {
    for (let j = 1; j < 4; j++) {
      val = Number(document.querySelector(`#cell-${boxNum} input`).value);
      sum = sum + val;
      checkDuplicate.push(val);
      duplicateIndex.push(boxNum);
      boxNum++;
    }
    boxNum += 6;
  }

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9 && j != i; j++) {
      if (
        checkDuplicate[i] == checkDuplicate[j] &&
        checkDuplicate[i] != ""
      ) {
        document
          .querySelector(`#cell-${duplicateIndex[i]} input`)
          .classList.add("duplicate");
        document
          .querySelector(`#cell-${duplicateIndex[j]} input`)
          .classList.add("duplicate");
      }
    }
  }

  return sum;
}

//This is boxesvalidation() Function

function boxesValidation() {
  let check = 0;
  let boxNumber = 1;

  for (let i = 1; i < 4; i++) {
    for (let j = 1; j < 4; j++) {
      if (boxValidation(boxNumber) == 45) check++;
      boxNumber += 3;
    }
    boxNumber += 18;
  }

  if (check == 9) return 1;
  else return 0;
}

// This is Validation Function

function validation() {
  for (let i = 1; i < 82; i++) {
    document
      .querySelector(`#cell-${i} input`)
      .classList.remove("duplicate");
  }

  var rowResult = rowsValidation();
  var colResult = columnsValidation();
  var boxResult = boxesValidation();
  if (rowResult && colResult && boxResult) {
    document.getElementById("result").innerText =
      "Congrats! You have done it.";

    //This is for giving extra classes and css

    document.getElementById("result").classList.add("result");
    document.getElementById("sudoku-grid").classList.add("lightUp");
    document.getElementById("result").style.display = "block";
  } else {
    document.getElementById("result").innerText =
      "Sorry , Validation Failed ! Try again.";

    //This is for giving extra classes and css

    document.getElementById("result").classList.add("result");
    document.getElementById("sudoku-grid").classList.add("lightUp");
    document.getElementById("result").style.display = "block";
  }
}


function highlightBox(boxNumber){

    
  for (let i = 1; i < 4; i++) {
    for (let j = 1; j < 4; j++) {
      document.querySelector(`#cell-${boxNumber} input`).classList.add("highlight");
      boxNumber ++;
    }
    boxNumber += 6;
  }


}

function onFocus(rowNumber,colNumber,boxNumber) {
  document.getElementById("result").style.display = "none";
  document.getElementById("sudoku-grid").classList.remove("lightUp");
  
  for (let j = 1; j < 82; j++) {
    document.querySelector(`#cell-${j} input`).classList.remove("highlight");
    document.querySelector(`#cell-${j} input`)
          .classList.remove("duplicate");
  }

 //Highlighting Row 

  for (let j = 9*rowNumber-8; j<=9*rowNumber; j++) {
    document.querySelector(`#cell-${j} input`).classList.add("highlight");
  }

//Highlighting Column

for (let j =colNumber; j<=colNumber+72; j+=9) {
    document.querySelector(`#cell-${j} input`).classList.add("highlight");
  }

  //Highlighting Box    

      highlightBox(boxNumber);

}
