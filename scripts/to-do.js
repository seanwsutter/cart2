// create array to store todos
// when we click add, get text from textbox, add it to array, log the array

// add html to display todos
const toDoList = [
  {name: 'task', dueDate: '2023-1-1'},
  {name: 'task', dueDate: '2023-1-1'}
]; 
renderToDoList();
function renderToDoList () { // render, display on page
  let toDoListHTML = '';
  for (let i=0; i<toDoList.length; i++) {
    const toDoObject = toDoList[i];
    const {name, dueDate} = toDoObject;
    const html = `<div>${name}</div> <div>${dueDate}</div>
      <button onclick="toDoList.splice(${i}, 1); renderToDoList();" class="deleteToDoButton">Delete</button>`;
    toDoListHTML += html;
  }
  
  document.querySelector('.jsToDoList')
    .innerHTML = toDoListHTML;
  }
function addToDo() {
  const inputElement = document.querySelector('.jsNameInput'); // gets input element and puts in js
  const name = inputElement.value // create variable to store input
  const dateInputElement = document.querySelector('.jsDueDateInput')
  const dueDate = dateInputElement.value;
  // toDoList.push({name: name, dueDate: dueDate});
  toDoList.push({name, dueDate});
  console.log(toDoList);
  inputElement.value= '';
  renderToDoList();
}