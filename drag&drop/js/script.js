const fill = document.querySelector('.fill')
const empty = document.querySelectorAll('.empty')

// * fill event listener

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

// * drag func

