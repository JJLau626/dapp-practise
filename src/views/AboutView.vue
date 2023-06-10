<template>
  <div class="about">
    <div>{{ msg }}</div>

    <CompA></CompA>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import CompA from "./CompA";

export default Vue.extend({
  data() {
    return {
      msg: "This is an about page",
      obj: {}
    };
  },
  components: {
    CompA
  },
  props: {
    value: {
      type: String,
      default: ""
    }
  },
  methods: {
    sayHello(): void {
      console.log(this.msg);
    }
  },
  mounted() {
    this.sayHello();
    this.$set(this.obj, 'a', 1)
  }
});
</script>
