<template>
    <div id="root">
        <Test/>
        <TestTwo/>
        <TestAnimate/>
    </div>
</template>

<script>



import Test from "@/components/Test.vue";
import TestTwo from "@/components/TestTwo.vue";
import TestAnimate from "@/components/TestAnimate.vue";

export default {
    name: "App",
    components: {
        TestAnimate,
        Test,
        TestTwo
    }
}
</script>

<style>
/*base*/
body {
    background: #fff;
}
</style>