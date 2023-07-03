<template>

    <div class="container">
        <Category :listData="foods">
            <template v-slot:top>
                <img src="https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/9d/wallhaven-9d89zw.jpg?w=2560&h=1440&fmt=webp"
                     alt="">
            </template>
            <template v-slot:footer>
                <a slot="footer" href="https://baidu.com">更多{{ foods.title }}</a>
            </template>

        </Category>
        <Category :listData="games">
            <template v-slot:top>
                <ul>
                    <li v-for="(item,index) in games.items" :key="index">{{ item }}</li>
                </ul>
            </template>

        </Category>
        <Category :listData="films">
            <template v-slot:top>
                <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
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
            games: {
                title: '游戏',
                items: ['红色警戒', '穿越火线', '劲舞团', '超级玛丽']
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