//Defining Variables
const addBtn = document.querySelector('#todo-btn');
const input = document.querySelector('#input-line');

// Array mit den Noizen
let notes = [];

// Find a <table> element with id="myTable":
let table = document.getElementById("todo-list");

//Add EventListener, wenn der Bestätigungsbutton gedrückt wird
addBtn.addEventListener('mouseup', addTodo)

//Function for adding a Todo
function addTodo(){
    //check if User wrote an input
    if(input.value === ''){
        alert('Please provide your next Todo');
    } else {
        const row = table.insertRow();
        row.className = 'note-row';
        const cell1 = row.insertCell(0);
        cell1.className = 'check-btn'
        const cell2 = row.insertCell(1);
        cell2.className = 'note'
        const cell3 = row.insertCell(2);
        cell3.className = 'edit-btn'
        const cell4 = row.insertCell(3);
        cell4.className = 'delete-btn'

        const editBtn = document.createElement('button');
        editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';

        editBtn.addEventListener('click', () => {
            if (editBtn.textContent === `Bestatigen`) {
              const editValue = cell2.children[0].value
              cell2.innerHTML = `${editValue}`
              editBtn.innerHTML = `<i class="fa-solid fa-pen"></i>`
            } else {
            const cell2Text = cell2.textContent
              console.log(cell2)
              console.log(cell2Text);
              cell2.innerHTML = `<input value=${cell2Text} />`
              editBtn.textContent = `Bestatigen`
            }
        })

        const deleteBtn = document.createElement('button')
        deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';

        deleteBtn.addEventListener('click', () => {
            row.remove()
        })
        // Insert check Button
        cell1.innerHTML = '<button><i class="fa-solid fa-check"></i></button>';
        notes.unshift(input.value);
        console.log(notes);
        //Insert Input Value
        cell2.innerHTML = input.value;
        //Clear Input Value
        input.value = '';
        //Append Buttons 
        cell3.appendChild(editBtn)
        cell4.appendChild(deleteBtn)
    }
}

