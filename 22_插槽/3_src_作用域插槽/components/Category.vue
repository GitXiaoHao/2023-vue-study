<template>
    <div class="category">
        <h3>{{ games.title }}分类</h3>
<!--        定义插槽-->
        <slot :games="games"></slot>
    </div>
</template>

<script>
export default {
    name: "Category",
   data(){
        return {
            games: {
                title: '游戏',
                items: ['红色警戒', '穿越火线', '劲舞团', '超级玛丽']
            },
        }
   }
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