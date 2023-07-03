<template>
    <div class="category">
        <h3>{{ listData.title }}分类</h3>
<!--        定义插槽-->
        <slot name="top"></slot>
        <slot name="footer"></slot>
    </div>
</template>

<script>
export default {
    name: "Category",
    props: ['listData']
}
</script>

<style scoped>
.category {
    background-color: skyblue;
    width: 200px;
}

h3 {
    text-align: center;
    background-color: orange;
}


</style>