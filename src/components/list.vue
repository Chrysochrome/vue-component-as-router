<template>
  <div>
    <div v-for="item in info" :key="item.a" @click="handleClick(item)" style="">
      <a href="#">{{item.a}} | {{item.b}}</a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      info: [
        {
          a: 123,
          b: 456
        },
        {
          a: 223,
          b: 556
        },
        {
          a: 323,
          b: 656
        },
        {
          a: 423,
          b: 756
        }
      ]
    }
  },
  methods: {
    handleClick (item) {
      this.$parent.$emit('goto', 'edit', item)
    }
  }
}
</script>
