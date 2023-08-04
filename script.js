const btnClear = document.querySelector('#btn-clear');
btnClear.addEventListener('click', clear);

const SM = document.querySelector('#SM');
const MD = document.querySelector('#MD');
const LG = document.querySelector('#LG');
SM.addEventListener('click', resize);
MD.addEventListener('click', resize);
LG.addEventListener('click', resize);

const CLI = document.querySelector('#CLI');
const SKITTLES = document.querySelector('#SKITTLES');
CLI.addEventListener('click', changeColor);
SKITTLES.addEventListener('click', changeColor);

const setupGrid = () => {
    const grid = document.querySelector('.etch');

    for(let i = 0; i < 16; i++){
        for(let j =0; j < 16; j++){
            let cell = document.createElement('div');
            cell.classList.add('cell', 'SM');
            cell.addEventListener('mouseenter', colorCell);
            grid.append(cell);
        }
    }
};

function colorCell(e){
    const isSkittles = Boolean(document.querySelector('.color-controls #SKITTLES.active'));
    const color = (isSkittles) ? getRandomColor() : '#1E550E';
    e.target.style.backgroundColor = color;
}

function getRandomColor(){
    return `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`
}

function clear(){
    const cells = document.querySelectorAll('.cell');
    for(c of cells){
        c.style.backgroundColor = 'rgb(76, 126, 0)';
    }
}

function displayBtnSelection(e, parentEl){
    const all = document.querySelectorAll(`.${parentEl.classList[0]} button`);
    for(btn of all){
        btn.classList = '';
    }
    e.target.classList.add('active');
}

function changeColor(e){
    displayBtnSelection(e, document.querySelector('.color-controls'));
}

function resize(e){
    displayBtnSelection(e, document.querySelector(".size-controls"));
    
    //removeGrid
    const grid = document.querySelector('.etch');
    grid.replaceChildren();

    //repopulateGrid with new size

    //getsize
    let size = 0;
    switch(e.target.textContent){
        case 'SM': size = 16;
            break;
        case 'MD': size = 32;
            break;
        case 'LG': size = 64;
            break;
    }

    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    for(let i = 0; i < size; i++){
        for(let j =0; j < size; j++){
            let cell = document.createElement('div');
            cell.classList.add("cell", `${e.target.textContent}`);
            cell.addEventListener('mouseenter', colorCell);
            grid.append(cell);
        }
    }
}

setupGrid();