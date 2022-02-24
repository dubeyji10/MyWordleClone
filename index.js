console.log("exported")
let gameGirdVar = document.getElementById("gameGrid");
buildGrid()

function buildGrid(){
    for(let i=0;i<6;i++){
        console.log("row->>>"+i);
        let row = document.createElement('div');
        for(let j=0;j<5;j++){
            let cell = document.createElement('div');
            // cell.textContent = `r${i+1},c${j+1}`;
            cell.textContent = "";
            cell.className = 'cell';
            row.appendChild(cell);
            
        }
        // row.textContent = `row = ${i+1}`;
        gameGirdVar.appendChild(row);

    }
}
