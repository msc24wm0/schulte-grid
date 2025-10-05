function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

function genTable() {
    let curr_arr = [...arr];
    let length = 25;
    let cur_cell = 1;
    while (length > 0) {
        let index = getRandomIntInclusive(0, length - 1);
        length--;
        const cell = document.getElementById(`g${cur_cell}`);
        cell.textContent = curr_arr[index];
        curr_arr.splice(index, 1);
        cur_cell++;
    }
}

let curr = 1;
let start = null;

function resetTable() {
    for (let i = 1; i <= 25; i++) {
        document.getElementById(`g${i}`).classList.remove('done');
        curr = 1;
    }
}

function startGame() {
    genTable();
    resetTable();
    document.getElementById('timeshow').textContent = `Time: `;
    document.getElementById('showcurrent').textContent = "Current: 1";
    start = performance.now();
    console.log("game started");
    for (let i = 1; i <= 25; i++) {
        const cell = document.getElementById(`g${i}`);
        cell.onmousedown = () => detectIfGrid(cell);
    }
}

function detectIfGrid(grid) {
    if (parseInt(grid.textContent) === curr) {
        curr++;
        grid.classList.add('done');
        console.log(grid, "ok");
        if (curr < 26) {
            document.getElementById('showcurrent').textContent = `Current: ${curr}`;
        }

        if (curr === 26) {
            const end = performance.now();
            console.log("Game finished");
            document.getElementById('timeshow').textContent = `Time: ${Math.floor(((end - start) / 1000))}.${((end - start) % 1000).toString().padStart(3, '0')}s`;
        }
    }
}

// 61 lines