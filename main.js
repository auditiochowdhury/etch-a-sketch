console.log('Hello')

//Create 16x16 grid of square divs, First we make the grid element and give it a class of theGrids


//Grab the container div and store it in a variable
let parentDiv = document.querySelector('.container')

// Append the grid element we made to the container Div in our html file
function CreateGrid(){
    for(let i= 0;i<256;i++){
        let grid= document.createElement('div')
        grid.classList.add("theGrids");
        parentDiv.appendChild(grid)
    }
}
//273
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

//Create a function event listener when clicking on the top button to prompt user for how many squares they want
let button = document.querySelector('.ask')

button.addEventListener('click', howMany)

function howMany(){
    let question = prompt('How many squares? Has to be less than 100!')
    let final = parseInt(question)
    console.log(question)
    console.log(final)
    question = final
    console.log(typeof question)
    let meep = question * question
    let finalNum = meep + question
    
    console.log(meep)
    console.log(question)
    
    if (prompt && question <= 100) {
        let theSquares = document.querySelector('.container')
        while (theSquares.hasChildNodes()) {
            theSquares.removeChild(theSquares.firstChild);
          }
        parentDiv.setAttribute('style', `grid-template-columns: repeat(${question}, 2fr); grid-template-rows: repeat(${question}, 2fr);`);

          
       
        
        for(let i=0; i<meep;i++){
        let grid= document.createElement('div')
        grid.classList.add("theGrids");
        grid.addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = 'black';
        })
        parentDiv.appendChild(grid)
        }

    }else if (!prompt && !question){
        return
    }


}


