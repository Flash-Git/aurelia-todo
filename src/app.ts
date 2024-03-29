import { Todo } from "./todo";

export class App {
  heading = "Todos";
  todos: Todo[] = [];
  todoDescription = "";

  addTodo() {
    if (this.todoDescription) {
      this.todos.push(new Todo(this.todoDescription));
      this.todoDescription = "";
    }
  }

  removeTodo(todo) {
    let index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }
}
