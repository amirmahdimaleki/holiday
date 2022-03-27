const fill = document.querySelector('.fill')
const empty = document.querySelectorAll('.empty')

// * fill event listener

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

// * drag func

function dragStart(){

    //  this is the "fill" element
    this.className+= 'hold'
    setTimeout(()=> this.className = 'invisible',0) 
}

function dragEnd(){

}