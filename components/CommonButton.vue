<script setup lang="ts">
const props = defineProps({
  title: { type: String, required: true },
  isCTA: { type: Boolean, default: false },
});
</script>

<template>
  <a v-if="isCTA" class="cta" href="#contact">{{ props.title }}</a>
  <a v-else href="#contact">{{ props.title }}</a>
</template>

<style scoped>
a {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background: var(--blueGradient);
  border-radius: 10px;
  outline: none;
  border: none;
  padding: 12px 28px;
  max-width: 250px;
  text-decoration: none;
  font-size: 14px;
}

a:hover {
  cursor: pointer;
}

.cta {
  padding: 14px 48px;
  margin-top: 48px;
}
</style>
