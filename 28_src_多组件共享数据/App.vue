<template>

    <div class="container">
        <Count/>
        <Person/>
    </div>

</template>

<script>


import Count from "@/components/Count.vue";
import Person from "@/components/Person.vue";

export default {
    name: "App",
    components: {Person, Count},

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