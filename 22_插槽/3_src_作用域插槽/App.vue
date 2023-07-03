<template>

    <div class="container">
        <Category :listData="foods">
            <template v-slot:default="{games}">
                <ul>
                    <li v-for="(item, index) in games.items" :key="index">
                        {{item}}
                    </li>
                </ul>
            </template>
        </Category>
    </div>

</template>

<script>


import Category from "@/components/Category.vue";

export default {
    name: "App",
    components: {Category},
    data() {
        return {
            foods: {
                title: '美食',
                items: ['火锅', '烧烤', '小龙虾', '牛排']
            },

            films: {
                title: '电影',
                items: ['《教父》', '《拆弹专家》', '《你好，李焕英》', '《流浪地球2》']
            }
        }
    }
}
</script>

<style>
.container, a {
    display: flex;
    justify-content: space-around;
}

img, video {
    width: 100%;
}

</style>