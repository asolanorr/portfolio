<template>
  <NuxtLink class="logoAnchor" to="/">next<strong>concept_</strong></NuxtLink>
</template>

<style scoped>
.logoAnchor {
  font-family: var(--logoFontFamily) !important;
  font-weight: lighter;
  letter-spacing: -2px;
  font-size: 20px;
  background: var(--blueGradient);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-decoration: none;
  cursor: pointer;
}

a strong {
  font-family: var(--logoFontFamily) !important;
  font-weight: bold;
}
</style>
