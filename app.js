const form = document.querySelector('#task-form');
const taskInput = document.querySelector('#task');
const filter = document.querySelector('#filter');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-task');

//Load All EventListwners
loadEventListeners();
function loadEventListeners(){
    //add form EventListener
    form.addEventListener('submit', addTask);
    //remove item
    taskList.addEventListener('click', removeItem);
    //clear task
    clearBtn.addEventListener('dbclick',clearTask);
    //filter task
    filter.addEventListener('keyup', filterTasks);
}

function addTask(e){
    if (taskInput.value === ''){
        alert('Input value')
    }
    //Create li element
    const li = document.createElement('li');
    //Add class
    li.className = 'collection-item';
    //create text node and append 
    li.appendChild(document.createTextNode(taskInput.value));
    //create link
    const link = document.createElement('a');
    //Add class
    link.className = 'delete-item secondary-content';
    //Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>'
    //Append link to li
    li.appendChild(link);
    //Append li to ul
    taskList.appendChild(li);
    //Clear input
    taskInput.value = '';
    //Prevent default
    e.preventDefault();
}
//Remove task
function removeItem(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are you sure')){
            let li = e.target.parentElement.parentElement;
            taskList.removeChild(li);
        }
    }
}
//Clear task
function clearTask(){
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
}
//Filter task
function filterTasks(e){
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(function(task){
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = 'block';
        }else {
            task.style.display = 'none';
            document.getElementById('task-title').textContent = 'item not found';
        }
    });
}