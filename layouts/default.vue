<script setup lang="ts">
useSeoMeta({
  title: 'Next Concept: Elevating Digital Experiences with Innovative Software Solutions',
  ogTitle: 'Next Concept: Elevating Digital Experiences with Innovative Software Solutions',
  description: 'Welcome to Next Concept, where our team bring your digital visions to life! Explore our portfolio of cutting-edge software development, seamless UI/UX design, and transformative mobile app development services. Let us craft the perfect digital solution for your needs.',
  ogDescription: 'Welcome to Next Concept, where our team bring your digital visions to life! Explore our portfolio of cutting-edge software development, seamless UI/UX design, and transformative mobile app development services. Let us craft the perfect digital solution for your needs.',
})

const { getPagePosition } = useUtils();
const currentSection = getPagePosition();
</script>

<template>
  <div>
    <div class="stickyContainer">
      <header>
        <nav>
          <IconsNextConcept />
          <div class="links">
            <a href="#home" :class="{ selected: currentSection === 'home' }"
              >HOME</a
            >
            <a
              href="#services"
              :class="{ selected: currentSection === 'services' }"
              >SERVICES</a
            >
            <a
              href="#aboutme"
              :class="{ selected: currentSection === 'aboutme' }"
              >ABOUT ME</a
            >
            <a
              href="#contact"
              :class="{ selected: currentSection === 'contact' }"
              >CONTACT</a
            >
          </div>
          <CommonButton title="Let's talk" />
        </nav>
      </header>

      <PagerComponent />

      <div class="floatingIconComponentsContainer">
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

.floatingIconComponentsContainer {
  position: absolute;
  top: -30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100vh;
  margin: 0 30px;
}

@media screen and (max-width: 768px) {
  nav .links {
    display: none;
  }

  .floatingIconComponentsContainer {
    top: -10px;
    left: 10px;
    margin: 0;
}
}

@media (max-width: 480px) {
  .stickyContainer {
    width: calc(100% - 20px);
  }

  .floatingIconComponentsContainer {
    top: 0px;
    left: 15px;
    margin: 0;
  }

  nav {
    height: 35px;
  }
}
</style>
