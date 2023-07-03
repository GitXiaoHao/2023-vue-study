<template>
    <div>
        <!--  组件结构-->
        <h2>{{ schoolName }}</h2>
        <h2>{{ address }}</h2>
    </div>
</template>

<script>
//交互相关的代码
// const school = Vue.extend({
//   //组件定义时，一定不要写el配置项，因为最终所有的组件都要被一个vm管理
//   data(){
//     return{
//       schoolName:'大学',
//       address:'湖北'
//     };
//   }
// });
// export default school;
export default {
    name: 'School',
    //组件定义时，一定不要写el配置项，因为最终所有的组件都要被一个vm管理
    data() {
        return {
            schoolName: '大学',
            address: '湖北'
        };
    }
};
</script>

<style>
/*样式*/
h2 {
    justify-content: center;
    text-align: center;
    color: orange;
}
</style>