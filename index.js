//Defining Variables
const addBtn = document.querySelector('#todo-btn');
const input = document.querySelector('#input-line');
const table = document.getElementById("todo-list");

// Array mit den Noizen
let notes = [];

//Add EventListener to Bestätigungs-Button
addBtn.addEventListener('mouseup', addTodo)

//Function for adding a Todo
function addTodo(){
    //check if User wrote an input
    if(input.value === ''){
        alert('Please provide your next Todo');
    } else {
        //Create Table-Row with 4 Cells
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

        // Create check Button
        const checkBtn = document.createElement('button')
        checkBtn.innerHTML = '<i class="fa-solid fa-circle-dot"></i>';

        checkBtn.addEventListener('click', () => {
            if(checkBtn.innerHTML === '<i class="fa-solid fa-circle-check"></i>'){
                checkBtn.innerHTML = '<i class="fa-solid fa-circle-dot"></i>'
                cell2.style.color = 'initial'
            } else {
                checkBtn.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
                cell2.style.color = 'lightgrey'
            }
        })

        //Create Edit-button
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
              cell2.innerHTML = `<input value="${cell2Text}" />`
              editBtn.textContent = `Bestatigen`
            }
        })

        const deleteBtn = document.createElement('button')
        deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';

        deleteBtn.addEventListener('click', () => {
            row.remove()
        })

        notes.unshift(input.value);
  
        //Insert Input Value
        cell2.innerHTML = input.value;
        //Clear Input Value
        input.value = '';
        
        //Append Buttons 
        cell1.appendChild(checkBtn)
        cell3.appendChild(editBtn)
        cell4.appendChild(deleteBtn)
    }
}

