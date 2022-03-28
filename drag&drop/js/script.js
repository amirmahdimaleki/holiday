// !    PART ONE ============================================================================================

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



 //  !     PART TWO ===========================================================================================
 

 const draggableList = document.getElementById('draggable-list')
 const check = document.getElementById('check')

 const companies = [
    'apple',
    'samsung',
    'xiaomi',
    'asus',
    'lenovo',
    'hp',
    'dell',
    'microsoft',
    'huawei',
    'google'
 ]

//  * Store list items
 const finalList = []

let dragStartIndex;

createList()

// * append list items to dom
function createList(){
    [...companies]
    .forEach((co,ind)=>{
        const li = document.createElement('li')
        li.setAttribute('data-index', ind)

        li.innerHTML = `
        <span class="number">${ind+1}</span>
        <div class="draggable" draggable="true">
        <p class="company-name"> ${co} </p>
        <i class="fas fa-grip-line"></i>
        </div>
        `
        companies.push(li)
        draggableList.appendChild(li) 
    })
}