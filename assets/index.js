// Создаем переменные для input, кнопок "Добавить" и "Очистить список задач"
let newTask = document.querySelector('.new_task');
let newTaskButton = document.querySelector('.new_task_button');
let taskForm = document.querySelector('.task_form');
let clearTaskButton = document.querySelector('.clear_task_button');

// Добавляем обработчик событий для добавления новых задач
newTaskButton.addEventListener('click', () => {
    // В новую переменную получаем данные из input
    let = newTaskText = document.querySelector('.new_task').value; 

    // Создаем контейнер для списка задач
    let taskContainer = document.createElement("div");
    taskContainer.classList.add("task_container");

    // Добавляем задачу пользователя из input
    if (newTask.value.length > 0) {
        taskContainer.innerHTML = `
        <label class="task">   
            <input type="checkbox" id="checkbox_task" >
            <span class="task_add">${newTaskText}</span>
        </label>`;
    taskForm.appendChild(taskContainer);
    } else if (newTask.value == '') {
        alert('Вы не добавили задачу.')
    }

    // Чистим input
    newTask.value = '';

    if(clearTaskButton.disabled == true) {
        clearTaskButton.disabled = false
    }     
});

// Добавляем обработчик событий для очистки списка задач
clearTaskButton.addEventListener('click', () => {
    taskForm.innerHTML = ``;
});

