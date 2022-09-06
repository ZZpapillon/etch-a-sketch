const container = document.querySelector('.container');





function makeGrid(rows, columns) {

   
      
    container.style.setProperty('- -grid-rows', rows);
    container.style.setProperty('- -grid-columns', columns);
    for (let i = 0; i < (rows * columns); i++) {
        let grid = document.createElement('div');
        grid.classList.add('grid');
        container.appendChild(grid);

        grid.addEventListener("mouseover", () => {
            grid.style.backgroundColor = "white";
        })
    }
}

 const buttonDiv = document.querySelector('#buttonDiv');
 const resetButton = document.createElement('button');
 resetButton.classList.add('resetButton')
 resetButton.textContent = 'Reset grid!';
 buttonDiv.appendChild(resetButton);

 resetButton.addEventListener('click', () => {
    document.querySelectorAll('.grid').forEach(e => e.remove());
 let userGridInput = prompt("Enter number of grid squares per side:");
 if (userGridInput > 100) {
    alert('Error! You must enter number bellow 100!');
    return; 
 }
 rows = userGridInput;
 columns = userGridInput;
 makeGrid(rows, columns);
})
//}

makeGrid(16, 16);




