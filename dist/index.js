"use strict";
// ToDoリストを保持する配列
let todos = [];
// DOM要素を取得
const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');
// タスクを追加する関数
function addTodo(task) {
    const newTodo = {
        id: Date.now(),
        task: task,
        completed: false,
    };
    todos.push(newTodo);
    renderTodos();
}
// ToDoリストを描画する関数
function renderTodos() {
    todoList.innerHTML = ''; // 一旦リストを空にする
    todos.forEach(todo => {
        const li = document.createElement('li');
        li.textContent = todo.task;
        todoList.appendChild(li);
    });
}
// ボタンがクリックされた時にタスクを追加するイベント
addButton.addEventListener('click', () => {
    if (todoInput.value.trim() !== '') {
        addTodo(todoInput.value);
        todoInput.value = ''; // 入力フィールドをクリア
    }
});
