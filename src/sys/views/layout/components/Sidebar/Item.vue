<template>
  <span>
    <i class="fa icon" :class="icon" v-if="icon"></i>
    <span v-if="title" slot="title"> {{ title }} </span>
  </span>
</template>
<script>
export default {
  name: 'MenuItem',
  props: {
    icon: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped>
.icon {
  font-size: 18px;
  margin-right: 10px;
}
</style>
