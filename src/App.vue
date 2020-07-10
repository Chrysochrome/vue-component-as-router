<template>
  <div>
    <component :is="comp" v-bind:info='info'></component>
  </div>
</template>

<script>
import list from './components/list.vue'
import edit from './components/edit.vue'

export default {
  name: 'app',
  components: {
    list,
    edit
  },
  data () {
    return {
      date: '2018R0003',
      comp: 'list',
      info: {}
    }
  },
  mounted () {
    this.$on('goto', (comp, info) => {
      this.comp = comp
      this.info = info
    })
  }
}
</script>

<style scoped>
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  height: 100%;
  position: relative;
}
.footer{
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
</style>
