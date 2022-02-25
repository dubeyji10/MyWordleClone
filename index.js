console.log("exported")
let history = []
let wordList = [ 'arise','arson','shore','horse','grips','spins','skill',
                  'bulky','water','churn','print','quote','epoch','blink'  ];
let randomIndex = Math.floor(Math.random() * wordList.length)
let secretWord = wordList[randomIndex]
let currentAttempt = ''
let gameGirdVar = document.getElementById("gameGrid");
let counter = 0;

let keyboard = ['qwertyuiop','asdfghjkl','zxcvbnm'];
let keyboardVar = document.getElementById("keyboard");
var focused;


buildGrid()
buildKeyboard()
gridUpdater()

// to get input from keyboard

window.addEventListener('keydown', handleKeyDown)

function handleKeyDown(e) {
  
  if(history.length===6){
    alert("no more chances left");
  }

  let letter = e.key.toLowerCase();
  console.log("pressed : "+letter);
  if (letter === 'enter') {
    console.log("\n\n you pressed enter \n\n");
    if(currentAttempt.length===5){
      console.log(currentAttempt+" ->->->-> pushed in history");
      history.push(currentAttempt)
      console.log("attempts made so far : "+history+" , , , , "+history.length);
      currentAttempt = '';
      gridUpdater();
      return;
    }
    else if (currentAttempt.length < 5) {
      alert("No enough letters");
      currentAttempt = "";
      return
    }
    if (wordList.includes(currentAttempt)===false) {
      // alert('Not in my thesaurus')
      console.log('try a different word')
      currentAttempt = "";
      if(counter>1){
            counter -=1;
            console.log("counter = "+counter);
            return
      }
    }

  } 

  // else if (/[a-z]/.test(letter)) {
    // if (currentAttempt.length < 5) {
      currentAttempt += letter
    // }  
  // gridUpdater(currentAttempt)
  console.log("this last....");
  // }

}


function buildGrid(){
    for(let i=0;i<6;i++){
        console.log("row->>>"+i);
        let row = document.createElement('div');
        focused = document.activeElement;
        console.log("active element is focused var ---->"+focused);
        for(let j=0;j<5;j++){
            let cell = document.createElement('div');
            // cell.textContent = `r${i+1},c${j+1}`;
            cell.textContent = "";
            cell.className = 'cell';
            row.appendChild(cell);
            focused.focus();

        }
        // row.textContent = `row = ${i+1}`;
        gameGirdVar.appendChild(row);

    }
}

let gameGridVar = document.getElementById('gameGrid');

function gridUpdater(){

  if(history.length>6){
    alert("no more chances left");
  }
  else{
    console.log("------------ gridUpdate called for row -------------------"+counter);
    let t = 0;
    console.log("1.history array  :"+history+"at counter "+history[counter-1]);
    if( history[counter-1]!==undefined){
        console.log("2.trying to update grid entering word in row "+(counter));
        console.log("3,enter this in row "+(counter)+" : "+history[counter]);
        console.log("4.history array ---->> "+history)
        let currentRow = gameGridVar.children[counter-1];
        console.log("5.!!!!!!!!!!!!!!!!!!. counter ->"+counter+" and ->"+history[counter-1]);
        doRow(currentRow, history[counter-1]);
      }
      counter+=1;
    
    }

}

/*
sample code to read childs of gameGrid

for(var i=0;i<6;i++){
    let r = g.childNodes[i];
    for(let j=0;j<5;j++){
        r.childNodes[j].textContent = "a";
    }
    console.log("done row  = "+i);
}

*/

function doRow(row,letters){
  console.log("-_-_-_- doRow running -_-_-_- \nfor word : "+letters);
  // let cell = row.children[i];
  for (let i = 0; i < 5; i++) {
    let cell = row.childNodes[i];
  if (letters[i] !== undefined) {
    cell.textContent = letters[i] ?? "";
  } else {
    // lol
    cell.innerHTML = '<div style="opacity: 0">X</div>'
  }
    cell.style.backgroundColor = getBgColor(letters, i)
  }
}

function getBgColor(attempt, i) {
  console.log("current attempt - >"+attempt);
  let correctLetter = secretWord[i]
  let attemptLetter = attempt[i]
  if (
    attemptLetter === undefined || secretWord.indexOf(attemptLetter) === -1
  ) {
    return '#212121'
  }
  if (correctLetter === attemptLetter) {
    return '#538d4e'
  }
  return '#b59f3b'
}


function buildKeyboard(){
  for(let i=0;i<3;i++){
      console.log("row->>>"+keyboard[i]);
      let row = document.createElement('div');
      for(let j=0;j<keyboard[i].length;j++){
          let cell = document.createElement('div');
          // cell.textContent = `r${i+1},c${j+1}`;
          cell.textContent = keyboard[i][j];
          cell.className = 'keys';
          row.appendChild(cell);

      }
      // row.textContent = `row = ${i+1}`;
      keyboardVar.appendChild(row);
  }
}