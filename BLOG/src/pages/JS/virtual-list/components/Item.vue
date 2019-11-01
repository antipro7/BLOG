<template>
  <div>
    <p>
      <span style="color: red">{{ item.id }}</span>
      {{ item.value }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    // 所有列表数据
    item: {
      type: Object,
      default: () => {}
    }
  },
  mounted () {
    console.log(this.item)
  }
}
</script>
