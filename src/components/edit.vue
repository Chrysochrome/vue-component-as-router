<template>
  <div>
    {{ info.a }}
    <br>
    {{ info.b }}
    <br>
    <Button @click="() => {this.$parent.$emit('goto', 'list')}">
      返回
    </Button>
  </div>
</template>

<script>
export default {
  props: [ 'info' ]
}
</script>
