<template>
    <li>
        <label>
            <input type="checkbox" :checked="todo.done" @change="handleChecked(todo.id)"/>
            <span>{{ todo.title }}</span>
        </label>
        <button class="btn btn-danger" @click="deleteItem(todo.id)">删除</button>
    </li>
</template>

<script>
import pubsub from "pubsub-js";

export default {
    name: "TodoItem",
    props: ['todo'],
    methods: {
        handleChecked(id) {
            this.$bus.$emit('handleCheckedTodo', id)
        },
        deleteItem(id) {
            if (confirm("确认删除嘛")) {
                // this.$bus.$emit('deleteTodo', id)
                pubsub.publish('deleteTodo',id)
            }
        }
    }
}
</script>

<style scoped>
/*item*/
li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
}

li label {
    float: left;
    cursor: pointer;
}

li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
}

li button {
    float: right;
    display: none;
    margin-top: 3px;
}

li:before {
    content: initial;
}

li:hover {
    background: #dddddd;
}

li:hover button {
    display: block;
}

li:last-child {
    border-bottom: none;
}
</style>