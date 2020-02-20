<template>
  <div id="app" class="container">
    <h2>{{ appName }}</h2>
    <form action="">
      <div class="form-group">
        <input type="text" class="form-control" v-model="task">
        <br>
        <input @click.prevent="addTodo" type="submit" value="Add Todo" class="btn btn-primary mt-2">
      </div>
    </form>

    <hr>

    <div class="jumbotron" v-if="task">
      <h4>Preview:</h4>
      <hr>
      <div>{{ task }}</div>
    </div>

    <h3 v-bind:class="{ complated: todo.complated }" v-for="todo in todos" @click="toggleTodo(todo.id)" @dblclick="deleteTodo(todo.id)">
      {{ todo.task }}
    </h3>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        appName: 'Todo App',
        task: '',
        id: 0,
        complated: false,
        todos: [],
      }
    },

    methods: {
      addTodo() {
        var task = {
          id: this.id++,
          task: this.task,
          complated: this.complated,
        };
        this.todos.push(task);
        this.task = "";
      },

      deleteTodo(id) {
        var index = this.todos.findIndex(todo => todo.id === id);
        this.todos.splice(index, 1);
      },

      toggleTodo(id) {
        var item = this.todos.find(function (todo) {
          return todo.id === id;
        });
        item.complated = !item.complated;
      }
    }
  }
</script>

<style>
  @import "assets/css/complated.css";
</style>
