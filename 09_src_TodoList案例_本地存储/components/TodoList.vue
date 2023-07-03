<template>
    <ul class="todo-main">
        <TodoItem
            v-for="(todoObj) in todos"
              :key="todoObj.id"
              :todo="todoObj"
              :handleCheckedTodo="handleCheckedTodo"
            :deleteTodo="deleteTodo"
        />
    </ul>
</template>

<script>
import TodoItem from "@/components/TodoItem.vue";

export default {
    name: "TodoList",
    components: {
        TodoItem
    },
    props: ['todos','handleCheckedTodo','deleteTodo']
}
</script>

<style scoped>
/*list*/
.todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
}

.todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
}
</style>