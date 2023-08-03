console.log("hello world");

const setupGrid = () => {
    const grid = document.querySelector('.etch');

    for(let i = 0; i < 16; i++){
        for(let j =0; j < 16; j++){
            let cell = document.createElement('div');
            cell.classList.add('cell');
            cell.addEventListener('mouseenter', colorCell);
            grid.append(cell);
        }
    }

    console.dir(grid);
};

function colorCell(e){
    console.log(e);
    e.target.style.backgroundColor = '#1E550E';
}

setupGrid();