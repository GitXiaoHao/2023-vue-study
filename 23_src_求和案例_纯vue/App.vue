<template>

    <div class="container">
        <Count/>
    </div>

</template>

<script>


import Count from "@/components/Count.vue";

export default {
    name: "App",
    components: {Count},

    data() {
        return {

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