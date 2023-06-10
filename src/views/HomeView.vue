<template>
  <div>
    <div>Home 组件是 vue-class-component</div>

    <HelloWorld></HelloWorld>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue';

// 注册组件
@Component({
  components: {
    HelloWorld,
  },
})
export default class HomeView extends Vue {
  // 该成员变量已经具有响应式。再也不用写一个 data 函数了
  msg = 'hello world';

  // 使用 装饰器 解放双手！
  @Watch('msg')
  onMsgChanged(newVal: any, oldVal: any) {
    console.log(newVal, oldVal);
  }

  // 这是继承 Vue 类的成员声明周期方法。
  mounted() {
    console.log("mounted");
  }
}
</script>

<style>
  
</style>