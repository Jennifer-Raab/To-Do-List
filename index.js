//Defining Variables
const addBtn = document.querySelector('#todo-btn');
const input = document.querySelector('#input-line');

// Array mit den Noizen
let notes = [];

// Find a <table> element with id="myTable":
let table = document.getElementById("todo-list");

// Create an empty <tr> element and add it to the 1st position of the table:
// let row = table.insertRow();


// Insert new cells (<td> elements) 
// let cell1 = row.insertCell(0);
// let cell2 = row.insertCell(1);
// let cell3 = row.insertCell(2);
// let cell4 = row.insertCell(3);


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

        cell1.innerHTML = '<button><i class="fa-solid fa-check"></i></button>';
        notes.unshift(input.value);
        console.log(notes);
        cell2.innerHTML = input.value;
        input.value = '';
        // cell3.innerHTML = '<button><i class="fa-solid fa-pen"></i></button>';
        cell3.appendChild(editBtn)
        cell4.appendChild(deleteBtn)
    }
}

//  create  Element
//document.createElement()
// createElement(tagName)
// createElement(tagName, options)
// function addElement () {
//     // create a new div element
//     const newDiv = document.createElement("div");
  
//     // and give it some content
//     const newContent = document.createTextNode("Hi there and greetings!");
  
//     // add the text node to the newly created div
//     newDiv.appendChild(newContent);
  
//     // add the newly created element and its content into the DOM
//     const currentDiv = document.getElementById("div1");
//     document.body.insertBefore(newDiv, currentDiv);
//   }

// You can't use only createElement() function to create table, tr, td to create whole table element.

// Instead you have to use insertRow(), insertCell() function of table Object

// tb = document.createElement("tbody")  
// var tbody  = document.createElement('tbody'); 
// table.appendChild(tbody);
// var table_row  = document.createElement('tr'); 
// tbody.appendChild(table_row)// 

// var ele = document.getElementById('content');
//   var table = document.createElement('table');
//   ele.appendChild(table);
//   var tr = document.createElement('tr');
//   table.appendChild(tr);
//   var td = document.createElement('td');
//   tr.appendChild(td);
//   var txt = document.createTextNode('IE8');
//   td.appendChild(txt);