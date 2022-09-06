const container = document.querySelector('.container');


for (let i = 0; i < 16; i++) {
     for(let j = 0; j < 16; j++) {
      let grid = document.createElement('div');
      grid.classList.add('grid');
      container.appendChild(grid);

      grid.addEventListener("mouseover", ()  => {
      grid.style.backgroundColor = "white";
     })
 }
}



