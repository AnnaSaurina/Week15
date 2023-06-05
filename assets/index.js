// Создаем переменные для input, кнопок "Добавить" и "Очистить список задач"
let newTask = document.querySelector('.new_task');
let newTaskButton = document.querySelector('.new_task_button');
let taskForm = document.querySelector('.task_form');
let clearTask = document.querySelector('.clear_task');

// Добавляем обработчик событий для добавления новых задач
newTaskButton.addEventListener('click', () => {
    // В новую переменную получаем данные из input
    let = newTask = document.querySelector('.new_task').value; 

    // Создаем контейнер для списка задач
    let taskContainer = document.createElement("div");
    taskContainer.createElement.add("task_container");

    // Добавляем задачу пользователя из input
    if (newTask.value.length < 0) {
        taskContainer.innerHTML = `
        <input type="checkbox" id="checkbox_task" disabled>
            <span class="task_add">${newTask}</span>`;
    taskForm.appendChild(taskContainer);
    } else if (newTask.value == '') {
        alert('Вы не добавили задачу.')
    }

    // Чистим input
    newTask.value = '';

    if(clearTask.disabled == true) {
        clearTask.disabled = false
    }     
});

// Добавляем обработчик событий для очистки списка задач
clearTask.addEventListener('click', () => {
    taskForm.innerHTML = ``;
});

