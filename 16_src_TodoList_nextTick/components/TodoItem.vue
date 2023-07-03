<template>
    <li>
        <label>
            <input type="checkbox" :checked="todo.done" @change="handleChecked(todo.id)"/>
            <span v-show="!todo.isEdit">{{ todo.title }}</span>
            <input type="text" :value="todo.title"
                   v-show="todo.isEdit" ref="inputTitle"
                   @blur="handleBlur(todo,$event)" @keyup.enter="handleBlur(todo,$event)">
        </label>
        <button class="btn btn-danger" @click="deleteItem(todo.id)">删除</button>
        <button class="btn btn-edit" @click="editItem(todo)" v-show="!todo.isEdit">编辑</button>
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
                pubsub.publish('deleteTodo', id)
            }
        },
        editItem(todo) {
            // todo.isEdit = true
            if (todo.hasOwnProperty('isEdit')) {
                todo.isEdit = true
            } else {
                this.$set(todo, 'isEdit', true)
            }
            this.$nextTick(function (){
                this.$refs.inputTitle.focus()
            })
        },
        handleBlur(todo, event) {
            var value = event.target.value.trim();
            if (!value) {
                alert('输入不能为空')
                return
            }
            this.todo.isEdit = false
            this.$bus.$emit('updateTodo', todo.id, value)
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