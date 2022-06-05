// /* eslint-disable no-unused-vars */
// // 局部禁用当前这个类型的错误（只禁用当前文件的这个类型的报错）


// 默认引入的是 vue.runtime.common.js 不带解析器；vue.esm.js带解析器
import Vue from 'vue'
// import Vue from 'vue/dist/vue.esm.js'

import App from '@/App'

// new Vue({
//     el:'#app',
//     components:{
//         App,
//     },
//     template:'<App />'
// })

// vue.runtime.esm.js?2b0e:619 [Vue warn]: You are using the runtime-only build of Vue where the template compiler is not available. 
// Either pre-compile the templates into render functions, or use the compiler-included build.

// 我们现在默认导入的Vue是一个 runtime-only版本的Vue，这个版本的Vue不带解析器


// 这个使用render函数的 为什么就可以使用runtime-only版本的Vue
new Vue({
    el:'#app',
    render: h => h(App) // 这个函数和上面我们自己写的 功能差不多
                        // 1、定义并注册了App
                        // 2、使用了App组件
                        // 3、比上面的写法多干了一件事，就是寻找解析器的loader
})

// 以后我们要使用的是下面这种
// 下面的打包出来的项目体积小