// creating global constants that direct to a specific html datatype

const form_text = document.getElementById("new-task-description") //create a pointer to task
const user = document.getElementById("user") //create a pointer to user
const due_date = document.getElementById("due_date")  //create a pointer to due_date
const duration = document.getElementById("duration") //create a pointer to duration

// create an array of 'priorities' that will later link to style color changes by index
const array_o_priorities = ["Whenever","Semi-Urgent","Urgent"] 

// setup a function that is triggered when a visitor 'click's the submit button & prevents the defualt 
document.getElementById('todo-thing').addEventListener('click', function(e) {
    // test if it's being displayed 
    console.log("Hey, it worked");
    
    // grab the values input by user 
    addToDoToList(form_text.value, user.value, due_date.value, duration.value)

    // stop the trigger to travel to and lose info 
    e.preventDefault();
})

// add variable to the list to be submitted & update the DOM to render to do list
function addToDoToList(message, user, due_date, duration) {
  
  // format the list in task 
  let ul = document.getElementById("tasks");
  
  // create a list 
  let li = document.createElement('li');

  // create button 
  let button = document.createElement('button');
  
  // create dropdown
  let select = document.createElement('select');
  
  // previously mentioned array of priorities added to dropdown 
  select.name = "priority";

  // make the dropdown
  select.class = "drop_down";

  // iterate through each value of the priorities 
  for (const val of array_o_priorities) {

    // create the option tool from dropdown
    var option = document.createElement("option");
    
    // grab the value the user chose. It will equal the priority chosen
    option.value = val

    // the text showed will equal val 
    option.text = val

    // append the option values to the select dropdown
    select.appendChild(option)
  }

  // delete button that listens for a click of self
  button.addEventListener('click',function(e) {                                    //calls a function to remove the added list
    console.log("This should only propogate once even with multiple delete buttons"); deleteToDo(li);
  })

  // create the delete button with a like class 
  button.class = "delete";
  
  // the button to delete a list will be displayed as a trashcan
  button.innerText = "🗑️";

  // Display all of the input fields to the page 
  li.innerText = `Task: "${message}",  Due_date: "${due_date}",  User: "${user}",  Duration: "${duration}"`;
  
  //this is needed as the li is nested in the ul.
  ul.appendChild(li);

  // defaults the list color to be green 
  li.style.color = 'green'

  // append the delete button to each item on the list 
  li.append(button);

  // append the dropdown selector of priorities to each listed task 
  li.append(select);

  // call the function of that holds an array of colors
  addColorsToSelect(select);
}

// function to remove a listed task 
function deleteToDo(element) {
  element.remove()
}

// function to color code a task based by index, which relates to a priority
function addColorsToSelect(select) {
  
  // designate the parent  
  let parent = select.parentElement

  // colors are chosen to rep the parent by index 
  select.addEventListener("change", function(e){
    let index = select.selectedIndex;
    parent.style.color = ["green","yellow","red"][index];
  })
}
