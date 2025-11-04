document.addEventListener("DOMContentLoaded", () => {
  //Select form and save to variable
  const form = document.getElementById("create-task-form");
  
  //Add event listener to form
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    //Select the correct target and save to a variable
    const taskDescription = event.target.elements["new-task-description"].value;

    //Define task as an object
    const task = { description: taskDescription };

    //Call buildToDo() function
    buildToDo(task);

    //Clear input
    event.target.reset();
  });

//Function to add item to new list 
  function buildToDo(task) {

    //Create new list
    const li = document.createElement("li");

    //Add task as text content to the list
    li.textContent = task.description;

    //Select the tasks id for the new li and save to variable
    const taskList = document.getElementById("tasks");
    
    //Append the task list
    taskList.append(li);
  };
});
