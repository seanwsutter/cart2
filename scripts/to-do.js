// create array to store todos
// when we click add, get text from textbox, add it to array, log the array

// add html to display todos
const toDoList = ['change diaper', 'dump'];
renderToDoList();
function renderToDoList () { // render, display on page
  let toDoListHTML = '';
  for (let i=0; i<toDoList.length; i++) {
    const toDo = toDoList[i];
    const html = `<p>${toDo}</p>`
    toDoListHTML += html;
  }
  console.log(toDoListHTML);
  document.querySelector('.jsToDoList')
    .innerHTML = toDoListHTML;
  }
function addToDo() {
  const inputElement = document.querySelector('.jsNameInput'); // gets input element and puts in js
  const name = inputElement.value // create variable to store input
  toDoList.push(name)
  console.log(toDoList);
  inputElement.value= '';
  renderToDoList();
}