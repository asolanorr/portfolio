<script setup lang="ts">
const { getPagePosition } = useUtils();
const currentSection = getPagePosition();
</script>

<template>
  <div class="pagerContainer" ref="el">
    <a
      class="dot"
      href="#home"
      :class="{ selected: currentSection === 'home' }"
    ></a>
    <a
      class="dot"
      href="#services"
      :class="{ selected: currentSection === 'services' }"
    ></a>
    <a
      class="dot"
      href="#aboutme"
      :class="{ selected: currentSection === 'aboutme' }"
    ></a>
    <a
      class="dot"
      href="#contact"
      :class="{ selected: currentSection === 'contact' }"
    ></a>
  </div>
</template>

<style scoped>
.pagerContainer {
  position: absolute;
  top: 0;
  right: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.dot {
  display: flex;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--textColor);
  margin: 10px 0;
  padding: 0;
  border: none;
  outline: none;
  cursor: pointer;
}

.selected {
  width: 15px;
  height: 15px;
  background: var(--blueGradient);
}

@media screen and (max-width: 768px) {
  .pagerContainer {
    display: none;
  }
}
</style>
