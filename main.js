console.log('Hello')

//Create 16x16 grid of square divs, First we make the grid element and give it a class of theGrids


//Grab the container div and store it in a variable
const parentDiv = document.querySelector('.container')

// Append the grid element we made to the container Div in our html file
function CreateGrid(){
    for(let i= 0;i<273;i+=1){
        let grid= document.createElement('div')
        grid.classList.add("theGrids");
        parentDiv.appendChild(grid)
    }
}
//Calling the grid
CreateGrid()


//For each time you hover on one of the square grids, we want to change the color the color of the div, so on hover we add class i think
document.querySelector('.theGrids').onclick = changeColor


//Targeting all the squares
let squares = document.querySelectorAll(".theGrids")


//Function that changes the color of the div
function changeColor(){
    console.log('Click!')
    this.style.backgroundColor = 'black'
}

//for loop for all the squares to change their color
for(const square of squares){
    square.onmouseenter	 = changeColor
}
