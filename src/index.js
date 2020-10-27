const form_text = document.getElementById("new-task-description")
const array_o_priorities = ["Whenever","Semi-Urgent","Urgent"]

document.addEventListener("DOMContentLoaded", () => {
  
});

document.getElementById('todo-thing').addEventListener('click', function(e) {
    console.log("Hey, it worked");
    addToDoToList(form_text.value)
    e.preventDefault();
})


function addToDoToList(message) {
  let ul = document.getElementById("tasks");
  let li = document.createElement('li');
  let button = document.createElement('button');
  let select = document.createElement('select');
  select.name = "priority";
  select.class = "drop_down";

  for (const val of array_o_priorities) {
    var option = document.createElement("option");
    option.value = val
    option.text = val
    select.appendChild(option)
  }


  button.addEventListener('click',function(e) {
    console.log("This should only propogate once even with multiple delete buttons"); deleteToDo(li);
  })

  button.class = "delete";
  button.innerText = "🗑️";
  li.innerText = message;
  ul.appendChild(li);
  li.style.color = 'green'
  li.appendChild(button);
  li.appendChild(select);
  addColorsToSelect(select);
}

function deleteToDo(element) {
  element.remove()
}

function addColorsToSelect(select) {
  let parent = select.parentElement
  select.addEventListener("change", function(e){
    let index = select.selectedIndex;
    parent.style.color = ["green","yellow","red"][index];
  })
}
