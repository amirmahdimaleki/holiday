const fill = document.querySelector('.fill');
const empty = document.querySelectorAll('.empty');

// * fill event listener

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);


// * because they are node lists we should loop throw empties and call drag events
for(emp of empty){
    emp.addEventListener('dragover', dragOver);
    emp.addEventListener('dragenter', dragEnter);
    emp.addEventListener('dragleave', dragLeave);
    emp.addEventListener('drop', dragDrop);
}


// * drag func

function dragStart(){

    //  this is the "fill" element
    this.className+= ' hold';
    setTimeout(()=>(this.className = 'invisible'), 0);
};

function dragEnd(){
   this.className = 'fill';
};

function dragOver(e){
 e.preventDefault();
};

function dragEnter(e){
 e.preventDefault();

//  ? "+=" appends and "=" replaces
 this.className += 'hovered';
};

function dragLeave(e){
    this.className = 'empty';
  };

function dragDrop(){
    this.className = 'empty';
    // * appends the div with fill class inside that div
    this.append(fill);
}