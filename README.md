# 笔记
## 关于不同版本的vue
1. vue.js与vue.runtime.xxx.js的区别：
vue.js 是完整版的vue 包含：核心功能 + 模板解析器
vue.runtime.xxx.js 是运行版的vue 只包含：核心功能  没有模板解析器
2. 因为vue.runtime.xxx.js没有模板解析器 所有不能使用template配置项需要使用
render函数接收到createElement函数去指定具体内容
## vue.config.js配置文件
> 使用vue inspect > output.js 可以查看到vue脚手架的默认配置
> 使用vue.config.js 可以对脚手架进行个性化定制
## ref属性
1. 被用来给元素或子组件注册引用实例（id的替代者）
2. 应用在html标签上获取的是真实Dom元素，应用在组件标签上是组件实例对象（vc）
3. 使用方式：
   打标示 ref="xxx" 获取：this.$refs.xxx
## 配置项props
## mixin(混入)
      功能：可以把多个组件共用的配置提取成一个混入对象
      使用方法：
         第一步定义混合：
            export const mixin = {
             methods: {
                 showName() {
                     alert(this.name)
                 }
             }
            }
         第二步使用混入：
            （1）全局混入：Vue.mixin(xx)
            （2）局部混入：mixins:[xx,xxx,xxxxx]
## 插件
1. 功能：用于增强vue
2. 本质：包含install的方法的一个对象，install的第一个参数是vue，第二个以后的参数是插件使用者传递的数据
3. 定义插件：见plugins.js
4. 使用插件：在main.js里添加Vue.use(xxx)
## scoped样式
   作用：让样式在局部生效，防止冲突
   用法：<style scoped>
## 总结TodoList案例
1. 组件化编码流程
   (1) 拆分静态组件：组件要按照功能点拆分，命名不要与HTML元素冲突
   (2) 实现动态组件：考虑好数据的存放位置，数据是一个组件再用，还是一些组件再用：
      1) 一个组件在用：放在组件自身即可
      2) 一些组件在用：放在他们共同的父组件上（状态提升）
      3) 实现交互：从绑定时间开始
2. props适用于：
   (1) 父组件 => 子组件通信
   (2) 子组件 => 父组件通信（要求父先给子一个函数）
3. 使用v-model要切记：v-model绑定的值不能是props传过来的值，因为props是不可以修改的
4. props传过来的若是对象类型的值，修改对象中的属性时Vue不会报错，但不推荐这样做
## 组件的自定义事件
1. 一种组件间通信的方式，适用于： 子组件 => 父组件
2. 使用场景：A是父组件，B是子组件，B想给A传数据，那么就要在A中给B绑定自定义事件（事件的回调在A中）
3. 绑定自定义事件
   (1) 第一种方式：在父组件中，<School @yuhao="send"/> 或 <School v-on:yuhao="send"/>
   (2) 第二种方式：在父组件中，this.msg = this.$refs.school.$once('yuhao',this.send)
   (3) 若想让自定义事件只能触发一次，可以使用`once`修饰符，或者$once方法
4. 触发自定义事件：this.$emit('yuhao',数据)
5. 解绑自定义事件：this.$off('*_yuhao')
6. 组件上也可以绑定原生DOM事件，_*需要使用native修饰符
7. 注意：通过this.$refs.xxx.$on('yuhao,回调)绑定自定义事件，回调要么配置在methods中，要么用箭头函数，否则this指向会出问题
## 全局事件总线(GlobalEventBus)
1. 一种组件间通信的方式，适用于任意组件间通信
2. 安装全局事件总线
   new Vue({
   render: h => h(App),
   beforeCreate() {
   //安装全局事件总线
   Vue.prototype.$bus = this
   }
   }).$mount('#app')
3. 使用事件总线
   (1) 接收数据：A组件想接收数据，则在A组件中给$bus绑定自定义事件，时间的回调留在A组件自身
   (2) 提供数据：this.$bus.$emit('xxx'，数据)
4. 最好在beforeDestroy钩子中用$off去解绑当前组件所用到的事件

## 消息订阅与发布（pubsub）

1. 一种组件间通信的方式，适用于任意组件间通信

2. 使用步骤

	1. 安装pubsub `npm i pubsub-js@1.6.0

	2. 引入：`import pubsub from 'pubsub-js'`

	3. 接收数据：A组件想接收数据，则在A组件中订阅消息，订阅的回调留在A组件自身

		1. ```
			mounted() {
			        this.pubId = pubsub.subscribe('hello',function (msg,data) {
			            console.log('有人发布了hello消息',data)
			        })
			    },
			```

	4. 提供数据： `pubsub.publish('hello',this.name)`
	5. 最好在`beforeDestroy`钩子中，用`pubsub.unsubscribe(this.pubId)`取消订阅

## nextTick

1. 语法：`this.$nextTick(函数)`
2. 作用：下一次DOM更新结束后执行其指定的回调
3. 用法：当改变数据后，要基于更新后的新DOM进行某些操作时，要在nextTick所指定的回调函数中执行

## Vue封装的过度与动画

1. 作用：在插入、更新或移除DOM元素时，在合适的时候给元素添加样式类名

2. 写法

	1. 准备好样式：
		1. 元素进入的样式
			1. v-enter:进入的起点
			2. v-enter-active: 进入过程中
			3. v-enter-to: 进入的终点
		2. 元素离开的样式
			1. v-leave: 离开的起点
			2. v-leave-active: 离开过程中
			3. v-leave-to: 离开的终点
	2. 使用<transition>包裹要过度的元素，并配置name属性

	```
	<transition name="animate__animated animate__bounce"
	                    enter-active-class="animate__fadeInRightBig"
	                    leave-active-class="animate__fadeOutLeftBig"
	                    appear>
	            <h1 v-show="isShow">你好啊</h1>
	        </transition>
	        <transition-group appear
	                          name="animate__animated animate__bounce"
	                          enter-active-class="animate__fadeInUp"
	                          leave-active-class="animate__fadeOutUp"
	        >
	            <h1 v-show="isShow" key="1">你好啊</h1>
	            <h1 v-show="isShow" key="2">你好啊!!</h1>
	        </transition-group>
	```

	3. 若有多个元素需要过度，则需要<transition-group>,并且每个元素都要指定key值

## Vue脚手架配置代理

### 方法一

在vue.config.js中添加如下配置:

```
devServer: {
        proxy: 'http://localhost:5000'
    }
```

说明：

> 优点：配置简单，请求资源时直接发给前端（8080）即可
>
> 缺点：不能配置多个代理，不能灵活的控制请求是否走代理
>
> 工作方式：若按照上述配置代理，当请求了前端不存在的资源时，那么该请求会转发给服务器（优先匹配前端资源）

### 方法二

编写vue.config.js配置具体代理规则：

```
 devServer: {
        proxy: {
            '/api': {
                target: '<url>',
                //将/api 换成 /
                pathRewrite: {'^/api':''},
                //支持websocket
                ws: true,
                //默认为true 用于控制请求头中的host值
                changeOrigin: true
            },
            '/foo': {
                target: '<other_url>'
            }
        }
    }
    
```

说明：

> 优点：可以配置多个代理，且可以灵活的控制请求是否走代理
>
> 缺点：配置略微繁琐，请求资源时必须加前缀

## 插槽

1. 作用：让父组件可以向子组件指定位置插入html结构，也是一种组件间通信的方式，适用于 父组件 => 子组件

2. 分类：默认插槽、具名插槽、作用域插槽

3. 使用方式

	1. 默认插槽：

		```
		父组件：
			<div class="container">
		        <Category :listData="foods">
		            <img src="https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/9d/wallhaven-9d89zw.jpg?w=2560&h=1440&fmt=webp" alt="">
		        </Category>
		        <Category :listData="games">
		            <ul>
		                <li v-for="(item,index) in games.items" :key="index">{{ item }}</li>
		            </ul>
		        </Category>
		        <Category :listData="films">
		            <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
		        </Category>
		    </div>
		    
		 子组件
		 	<div class="category">
		        <h3>{{ listData.title }}分类</h3>
		<!--        定义插槽-->
		        <slot></slot>
		
		    </div>
		```

		2. 具名插槽

			```
			父组件
			
			
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
			 子组件
			 	<div class="category">
			        <h3>{{ listData.title }}分类</h3>
			<!--        定义插槽-->
			        <slot name="top"></slot>
			        <slot name="footer"></slot>
			    </div>
			```

		3. 作用域插槽

		```
		父组件
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
		 子组件
		 	<div class="category">
		        <h3>{{ games.title }}分类</h3>
		<!--        定义插槽-->
		        <slot :games="games"></slot>
		    </div>
		```

		​	1. 理解：数据在组件的自身，但根据数据生成的结构需要组件的是用来决定（games数据在Category组件中，但使用数据所遍历出来的结构由app组件决定）

## Vuex 

Vuex 是一个专为 Vue.js 应用程序开发的**状态管理模式 + 库**。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。

![image-20230702215200894](G:\mark-down\xiaohao-code-notes\编程\图片\image-20230702215200894.png)

### 搭建vuex环境

1. 创建文件: src/store/index.js

	```
	//
	// 该文件用于创建vuex中最为核心的store
	//
	
	
	import Vue from "vue";
	import VuexEsm from "vuex";
	
	Vue.use(VuexEsm)
	
	//准备actions 用于响应组件的动作
	const actions = {}
	
	//准备mutations 用于操作数据
	const mutations = {}
	
	//准备state 用于存储数据
	const state = {}
	
	//创建store
	const store = new VuexEsm.Store({
	    actions,
	    mutations,
	    state
	})
	
	//导出store
	export default store
	```

2. 在main.js中创建vm时传入store

```
new Vue({
    render: h => h(App),
    store,
    beforeCreate() {
        //安装全局事件总线
        Vue.prototype.$bus = this
    },
}).$mount('#app')
```

### 基本使用

```
methods: {
        increment() {
            this.$store.dispatch('increment',this.num)
        },
        decrement() {
            this.$store.dispatch('decrement',this.num)
        },
        incrementOdd() {
            this.$store.dispatch('incrementOdd',this.num)
        },
        incrementWait() {
            this.$store.dispatch('incrementWait',this.num)
        },
    }
```

```
//
// 该文件用于创建vuex中最为核心的store
//


import Vue from "vue";
import VuexEsm from "vuex";

Vue.use(VuexEsm)

//准备actions 用于响应组件的动作
const actions = {
    increment(context,value){
        context.commit('INCREMENT',value)
    },
    decrement(context,value){
        context.commit('DECREMENT',value)
    },
    incrementOdd(context, value){
        if (context.state.num % 2) {
            context.commit('DECREMENT',value)
        }
    },
    incrementWait(context ,value){
        setTimeout(() => {
            context.commit('DECREMENT',value)
        }, 300)
    }
}

//准备mutations 用于操作数据
const mutations = {
    INCREMENT(state, value) {
        state.sum += value
    },
    DECREMENT(state, value) {
        state.sum -= value
    }
}

//准备state 用于存储数据
const state = {
    //求和
    sum: 0,
}

//创建store
const store = new VuexEsm.Store({
    actions,
    mutations,
    state
})

//导出store
export default store
```

> 组件中读取vuex中的数据：$store.state.sum
>
> 组件中修改vuex中的数据: `$store.dispatch('action方法名',数据)` 或 `$store.commit('mutations方法名',数据)`
>
> 若没有网络请求或其他业务逻辑，组件中也可以越过actions，即不写dispatch 直接编写commit

### getters使用

1. 概念：当state中的数据需要经过加工后再使用时，可以使用getters加工

2. 在`store.js`中追加`getters`配置

	```
	//准备getters 用于讲state中的数据进行加工
	const getters = {
	    bigSum(state){
	        return state.sum * 10
	    }
	}
	```

3. 组件中读取数据：`$store.getters.bigSum`

### 四个map方法的使用

#### mapState

用于帮助映射state中的数据为计算属性

```
computed: {
        //借助mapState生成计算属性，从state中读取数据
        // ...mapState({sum: 'sum'}),
        //简写形式
        ...mapState(['sum']),
}
```

#### mapGetters

用于帮助映射getters中的数据为计算属性

```
//借助mapGetters生成计算属性，从getters中读取数据
        ...mapGetters(['bigSum'])
```

#### mapActions

用于帮助生成与actions对话的方法，即包含`$store.dispatch(xx)`的函数

```
methods: {
        //借助mapMutations生成对应的方法，会调用commit去联系mutations
        ...mapMutations(['INCREMENT','DECREMENT']),
        //借助mapActions生成对应的方法，方法会调用dispatch联系actions
        ...mapActions(['incrementOdd','incrementWait'])
      
    }
```

#### mapMutations

用于帮助生成与mutations对话的方法，即包含`$store.commit(xx)`的函数

```
methods: {
        //借助mapMutations生成对应的方法，会调用commit去联系mutations
        ...mapMutations(['INCREMENT','DECREMENT']),
        //借助mapActions生成对应的方法，方法会调用dispatch联系actions
        ...mapActions(['incrementOdd','incrementWait'])
      
    }
```

### 模块化+命名空间

让代码更好维护，让多种数据分类更加明确

修改`store.js`

```
//
// 该文件用于创建vuex中最为核心的store
//


import Vue from "vue";
import VuexEsm from "vuex";
import countOptions from "@/store/modules/count";
import personOptions from "@/store/modules/person";

Vue.use(VuexEsm)


//创建store
const store = new VuexEsm.Store({
    modules: {
        countOptions,
        personOptions
    }
})

//导出store
export default store
```

开启命名空间后，组件中读取数据

```
methods: {
  add() {
    const personObj = {
      id: nanoid(),
      name: this.name
    }
    // this.ADD_PERSON(personObj)
    this.$store.commit('countOptions/ADD_PERSON', personObj)
    this.name = ''
  },
  ...mapMutations('countOptions', ['ADD_PERSON']),
  ...mapActions('personOptions',['addPersonServer'])
},
computed: {
  ...mapState('personOptions', ['persons','personIntroduce']),
  ...mapState('countOptions', ['sum'])
}
```

## 路由

1. 理解：一个路由（route）就是一组映射关系（key-value），多个路由器（router）进行管理
2. 前端路由：key是路径，value是组件

### 基本使用

1. 安装vue-router `npm i vue-router@3`

2. 编写router配置项

	```
	//
	// 该文件专门用于创建整个应用的路由器
	//
	
	//应用 路由router
	import Vue from "vue";
	import VueRouter from "vue-router";
	
	Vue.use(VueRouter)
	const constantRoutes = [
	    {
	        path: '/about',
	        component: () => import("@/components/About")
	    },
	    {
	        path: '/home',
	        component: () => import("@/components/Home")
	    }
	]
	const router = new VueRouter({
	    routes: constantRoutes
	})
	
	export default router
	```

3. 实现切换（active-class可配置高亮样式）

	```
	<!--          原始使用页面跳转-->
	<!--          <a class="list-group-item active">About</a>-->
	<!--          <a class="list-group-item">Home</a>-->
	          <router-link to="/about" class="list-group-item"  active-class="active">About</router-link>
	          <router-link to="/home" class="list-group-item" active-class="active">Home</router-link>
	        
	```

4. 指定展示位置

	```
	<!--            指定组件的呈现位置-->
	            <router-view></router-view>
	```

### 注意点

> - 路由组件通常存放在pages或者views文件夹，一般组件通常放`components`文件夹
> - 通过切换，”隐藏“了的路由组件，默认是被销毁掉的，需要的时候再去挂载
> - 每个组件都有自己的$route属性，里面存储着自己的路由信息
> - 整个应用只有一个router，可以通过组件$router属性获取到

### 嵌套路由

1. 配置路由规则，使用children配置项

	```
	{
	        path: '/home',
	        component: () => import("@/views/Home"),
	        children: [
	            {
	                path: 'news',
	                component: () => import("@/views/News")
	            },
	            {
	                path: 'message',
	                component: () => import("@/views/Message")
	            }
	        ]
	    },
	```

2. 跳转（要写完整路径）

	```
	<li>
	  <router-link to="/home/news" active-class="active" class="list-group-item">News</router-link>
	</li>
	<li>
	  <router-link to="/home/message" active-class="active" class="list-group-item">Message</router-link>
	</li>
	```

### 路由的query参数

1. 传递参数

	```
	<ul>
	      <li v-for="item in messageList" :key="item.id">
	<!--        跳转路由并携带query参数 字符串写法-->
	<!--        <router-link :to="`/home/message/detail?id=${item.id}&title=${item.title}`">{{item.title}}</router-link>-->
	<!--        to的对象写法-->
	        <router-link :to="{
	          path: '/home/message/detail',
	          query: {
	            id: item.id,
	            title: item.title
	          }
	        }">
	          {{item.title}}
	        </router-link>
	
	      </li>
	    </ul>
	```

2. 接收参数

```
<ul>
  <li>消息编号：{{$route.query.id}}</li>
  <li>消息标题：{{$route.query.title}}</li>
</ul>
```

### 命名路由

1. 作用：可以简化路由的跳转

	1. 给路由命名

	```
	 {
	        path: '/home',
	        component: () => import("@/views/Home"),
	        children: [
	            {
	                path: 'news',
	                component: () => import("@/views/News")
	            },
	            {
	                path: 'message',
	                component: () => import("@/views/Message"),
	                children: [
	                    {
	                        name: 'Detail',
	                        path: 'detail',
	                        component: () => import("@/views/Detail")
	                    }
	                ]
	            }
	        ]
	    },
	```

	2. 简化跳转

	```
	<router-link :to="{
	  name: 'Detail',
	  query: {
	    id: item.id,
	    title: item.title
	  }
	}">
	  {{item.title}}
	</router-link>
	```

### 路由的params参数

1. 配置路由，声明接收params参数

	```
	{
	    path: 'message',
	    component: () => import("@/views/Message"),
	    children: [
	        {
	            name: 'Detail',
	            path: 'detail/:id/:title',
	            component: () => import("@/views/Detail")
	        }
	    ]
	}
	```

2. 传递参数

	```
	<!--        跳转路由并携带query参数 字符串写法-->
	<!--        <router-link :to="`/home/message/detail/${item.id}/${item.title}`">{{ item.title }}</router-link>-->
	<!--        对象写法-->
	        <router-link :to="{
	          name:'Detail',
	          params: {
	            id: item.id,
	            title:item.title
	          }
	        }">
	          {{ item.title }}
	        </router-link>
	```

3. 接收参数

	```
	<li>消息编号：{{$route.params.id}}</li>
	<li>消息标题：{{$route.params.title}}</li>
	```

特别注意：路由携带params参数时，若使用to的对象写法，则不能使用path配置项，必须使用name配置

### 路由的props配置

```
children: [
    {
        name: 'Detail',
        path: 'detail/:id/:title',
        component: () => import("@/views/Detail"),
        //props的第二种写法,若为真,就会把该路由组件收到的所有params参数以props的形式传递
        props: true
        //props函数
        // props($route){
        //     return {
        //         id: $route.query.id,
        //         title: $route.query.title
        //     }
        // }
        // props({query: {id, title}}) {
        //     return {
        //         id: id,
        //         title: title
        //     }
        // }
    }
]
```

```
<template>
  <ul>
    <li>消息编号：{{id}}</li>
    <li>消息标题：{{title}}</li>
  </ul>
</template>

<script>
export default {
  name: "Detail",
  props: ['id','title']
}
</script>
```

### replace属性

1. 作用：控制路由跳转时操作浏览器历史记录的模式
2. 浏览器的历史记录有两种写入方式：分别为`push`和`replace`，push时追加历史记录，replace时替换当前记录，路由跳转的时候默认是push
3. 开启replace模式：在router-link8加上replace

### 编程式路由导航

1. 作用：不借助link实现路由跳转

```
methods: {
  pushShow(item){
    this.$router.push({
      name: 'Detail',
      params: {
        id: item.id,
        title:item.title
      }
    })
  },
  replaceShow(item){
    this.$router.replace({
      name: 'Detail',
      params: {
        id: item.id,
        title:item.title
      }
    })
  }
  
  methods: {
    back(){
      this.$router.back()
    },
    forward(){
      this.$router.forward()
    }
  }
```

### 缓存路由组件

作用：让不展示的路由组件保持挂载，不被销毁

```
<!--      保持活跃-->
      <keep-alive include="News">
        <router-view></router-view>
      </keep-alive>
```

### 两个新的生命周期钩子

作用：路由组件所独有的两个钩子，用于捕获路由组件的激活状态

```
activated() {
  this.timer = setInterval(() => {
    this.opacity -= 0.01
    if(this.opacity <= 0){
      this.opacity = 1
    }
  },100)
},
deactivated() {
  clearInterval(this.timer)
}
```

### 路由守卫

作用：对路由进行权限控制

分类：全局守卫、独享守卫、组件内守卫

- 全局守卫：

```
//全局前置路由守卫 初始化的时候调用 每次路由切换之前被调用
router.beforeEach((to, from, next) => {

    if(to.meta.isAuth){
        if(!(localStorage.getItem('school') === '13')){
            return
        }
    }
    next()
})
router.afterEach((to, from) => {
    document.title = to.meta.title || 'Vue'
})
```

- 独享守卫

```
//独享守卫
beforeEnter: (to,from,next) => {

},
```

- 组件内守卫

```
//通过路由规则进入该组件时被调用
beforeRouteEnter(to, from, next) {
  next()
},
//通过路由规则 离开该组件时被调用
beforeRouteLeave(to, from, next) {
  next()
}
```

### 路由器的两种工作模式

1. 对于一个url来说，什么是hash值？——# 及其后面的内容就是hash值
2. hash值不会包含在http请求中，即：hash值不会带给服务器
3. hash模式：
	1. 地址中永远带着#号，若以后将地址通过第三方app分享，若app校验严格，则地址会被标记为不合法
	2. 兼容性好
4. history模式：
	1. 地址干净
	2. 兼容性和hash模式相比略差
	3. 应用部署上线时需要后端人员支持，解决刷新页面服务端404问题

#### 解决404

看到这里我相信大部分同学都能想到怎么解决问题了，

产生问题的本质是因为我们的路由是通过JS来执行视图切换的，

当我们进入到子路由时刷新页面，web容器没有相对应的页面此时会出现404

所以我们只需要配置将任意页面都重定向到 index.html，把路由交由前端处理

还是以 nginx 为例，更多版本的大家可以前往https://router.vuejs.org/zh/guide/essentials/history-mode.html 查看

```cobol
location / {



  try_files $uri $uri/ /index.html;
      }
```