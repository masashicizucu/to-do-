// ToDoリストの型定義
interface ToDo {
    id: number;
    task: string;
    completed: boolean;
}

// ToDoリストを保持する配列
let todos: ToDo[] = [];

// DOM要素を取得
const todoInput = document.getElementById('todo-input') as HTMLInputElement;
const addButton = document.getElementById('add-button') as HTMLButtonElement;
const todoList = document.getElementById('todo-list') as HTMLUListElement;

// タスクを追加する関数
function addTodo(task: string) {
    const newTodo: ToDo = {
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