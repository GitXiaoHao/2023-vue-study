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
export default {
    name: "TodoItem",
    props: ['todo','handleCheckedTodo','deleteTodo'],
    methods: {
        handleChecked(id){
            this.handleCheckedTodo(id)
        },
        deleteItem(id){
            if(confirm("确认删除嘛")){
                this.deleteTodo(id)
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
li:hover{
    background: #dddddd;
}
li:hover button{
    display: block;
}
li:last-child {
    border-bottom: none;
}
</style>