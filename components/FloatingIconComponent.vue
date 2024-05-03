<script setup lang="ts">
const props = defineProps({
  link: { type: String, required: true },
  anchorTitle: { type: String }
})
</script>

<template>
  <a :href="props.link" target="_blank" :title="props.anchorTitle" class="circle">
    <slot />
  </a>
</template>

<style scoped>
.circle {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: #ededed;
  margin: 10px 0;
  padding: 0;
  border: none;
  outline: none;
  cursor: pointer;
}

.circle:hover {
  background: #d4d4d4;
}
</style>
