<script setup lang="ts">
    const { getPagePosition } = useUtils()
    const currentSection = getPagePosition()
</script>

<template>
  <div>
    <div class="stickyContainer">
      <header>
        <nav>
          <IconsNextConcept />
          <div class="links">
            <a href="#home" :class="{ 'selected': (currentSection === 'home') }">HOME</a>
            <a href="#services" :class="{ 'selected': (currentSection === 'services') }">SERVICES</a>
            <a href="#aboutme" :class="{ 'selected': (currentSection === 'aboutme') }">ABOUT ME</a>
            <a href="#contact" :class="{ 'selected': (currentSection === 'contact') }">CONTACT</a>
          </div>
          <CommonButton title="Let's talk" />
        </nav>
      </header>

      <PagerComponent />

      <div class="FloatingIconComponentsContainer">
        <FloatingIconComponent
          link="https://www.linkedin.com/in/asolanor/"
          anchorTitle="Go to LinkedIn"
        >
          <IconsLinkedIn />
        </FloatingIconComponent>
        <FloatingIconComponent
          link="https://www.youtube.com/channel/UCuunFIb1MJR91Q0PuFVJ5IQ"
          anchorTitle="Go to YouTube"
        >
          <IconsYoutube />
        </FloatingIconComponent>
      </div>
    </div>
    <slot />
  </div>
</template>

<style scoped>
.stickyContainer {
  width: calc(100% - 120px);
  max-width: 1440px;
  padding: 0px 15px 0px 15px;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0%);
  z-index: 1;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: auto;
  height: 55px;
  padding: 5px 0;
  background-color: var(--backgroundColor);
}

nav .links a {
  font-size: 14px;
  color: var(--textColor);
  text-decoration: none;
  padding: 0 30px;
  cursor: pointer;
}

nav .links a:hover {
  background: var(--blueGradient);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

nav .links .selected {
  font-weight: bold;
  background: var(--blueGradient);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.FloatingIconComponentsContainer {
  position: absolute;
  top: -30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100vh;
  margin: 0 30px;
}
</style>
