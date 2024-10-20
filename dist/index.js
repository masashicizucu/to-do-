"use strict";

let todos = [];

const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');

function addTodo(task) {
    const newTodo = {
        id: Date.now(),
        task: task,
        completed: false,
    };
    todos.push(newTodo);
    renderTodos();
}

function renderTodos() {
    todoList.innerHTML = ''; 
    todos.forEach(todo => {
        const li = document.createElement('li');
        li.textContent = todo.task;
        todoList.appendChild(li);
    });
}

addButton.addEventListener('click', () => {
    if (todoInput.value.trim() !== '') {
        addTodo(todoInput.value);
        todoInput.value = ''; 
    }
});
