<script setup lang="ts">
const waiting = ref(false);
const errors = ref(false);
const success = ref(false);

const form = ref({
  fullName: "",
  company: "",
  email: "",
  phone: "",
  message: "",
});

async function submit(formData: any) {
  waiting.value = true;
  await $fetch("/api/mail", {
    method: "POST",
    body: formData,
  }).then(() => {
    errors.value = false;
    success.value = true;
    waiting.value = false;
    form.value = {
      fullName: "",
      company: "",
      email: "",
      phone: "",
      message: "",
    };
  });
}
</script>

<template>
  <!-- Home Section -->
  <section id="home">
    <div class="homeContainer">
      <h1>Hi! I’m <strong>Alejandro Solano</strong></h1>
      <p>
        A passionate and creative developer specialized in user-friendly
        software solutions.
      </p>
      <CommonButton :isCTA="true" title="Get in touch" />
    </div>
  </section>

  <!-- Services Section -->
  <section id="services">
    <h1>I can <strong>help</strong> you with</h1>
    <div class="servicesContainer">
      <div class="service">
        <span>
          <IconsWebServices />
        </span>
        <div class="info">
          <h2>Web Development</h2>
          <p>
            Need a standout website or web app? I've got you covered. Let's chat
            about bringing your digital vision to life.
          </p>
        </div>
      </div>

      <div class="service">
        <span>
          <IconsMobileServices />
        </span>
        <div class="info">
          <h2>Mobile Development</h2>
          <p>
            Ready to elevate your mobile presence? I craft engaging mobile apps
            tailored to your vision.
          </p>
        </div>
      </div>

      <div class="service">
        <span>
          <IconsDesign />
        </span>
        <div class="info">
          <h2>UI/UX Design</h2>
          <p>
            Crafting captivating designs for seamless user experiences. Let’s
            elevate your product together.
          </p>
        </div>
      </div>

      <div class="service">
        <span>
          <IconsAIDev />
        </span>
        <div class="info">
          <h2>Wait, wanted more?</h2>
          <p>
            I’m currently learning and researching about AI and how it can help
            to make our life easier.
          </p>
        </div>
      </div>
    </div>
    <CommonButton :isCTA="true" title="Interested? Hire me!" />
  </section>

  <!-- About Me Section -->
  <section id="aboutme">
    <div class="aboutMeContainer">
      <div class="aboutMe">
        <h1>little bit about me...</h1>
        <p>
          Hi! I'm Alejandro Solano CEO & Founder of my new company Next Concept.
          I'm a passionate and creative developer specializing in user-friendly
          software solutions. With a strong background in web development, I
          thrive on turning complex problems into elegant and intuitive designs.
          I believe that great software should not only be functional but also
          delightful to use, and I strive to create experiences that users love.
        </p>
        <p>
          My journey in software development began back when I was 13 years old,
          when I was learning how to use a computer I immediately fell in love
          with this world and started to be more curious about how everything
          works, so I started to research and learn by myself. Since then, I've
          honed my skills in web development and a little bit of UI/UX design,
          allowing me to grow my career in software development in a short time.
        </p>
        <p>
          I'm constantly seeking new challenges and opportunities to learn and
          grow, and I'm excited about the possibility of bringing my unique
          blend of creativity and technical expertise to your team. When I'm not
          coding, you can find me playing some video games, on social activities
          (I'm an extroverted type of person, ENFP-A personality) or even coding
          just for fun! Another interesting thing about me is that right now I'm
          developing an amazing passion for music!
        </p>
        <p>
          As you may noticed I'm also passionate about great-designed apps, and
          I try to make a positive impact through my work to achieve this goal.
          I'm always open to new collaborations and projects, so if you're
          looking for a developer who is not only skilled but also passionate
          about creating exceptional user experiences, what are we waiting for?
          let's make beautiful and outstanding apps together!
        </p>
      </div>

      <div class="me">
        <img
          src="https://res.cloudinary.com/xluwi/image/upload/v1712428512/IMG_0511_mvzfo3.jpg"
          alt="Alejandro Solano"
        />
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section id="contact">
    <div class="contactContainer">
      <div class="left">
        <h1>Contact Me</h1>
        <p class="hideOnMobile">
          Whether you have a project in mind, want to collaborate, or just want
          to say hello, I'm always open to hearing about new opportunities and
          doing some networking.
        </p>
        <p>
          Let's start a conversation and explore how we can work together to
          bring your ideas to life!
        </p>
        <a href="mailto: asolanor@yournextconcept.com"
          ><strong>Email:</strong> asolanor@yournextconcept.com</a
        >
      </div>

      <div class="right">
        <h1>I’d love to hear about your ideas.</h1>
        <h1>Let’s get in touch</h1>
        <form @submit.prevent="submit(form)">
          <div class="row">
            <div class="inputGroup">
              <label for="fullNameInput">Full Name</label>
              <input
                required
                v-model="form.fullName"
                id="fullNameInput"
                type="text"
              />
            </div>

            <div class="inputGroup">
              <label for="fullNameInput">Company</label>
              <input v-model="form.company" id="fullNameInput" type="text" />
            </div>
          </div>

          <div class="row">
            <div class="inputGroup">
              <label for="emailInput">Email</label>
              <div class="inputBox">
                <input
                  required
                  v-model="form.email"
                  id="emailInput"
                  type="email"
                  placeholder="example@email.com"
                />
                <IconsEmail />
              </div>
            </div>

            <div class="inputGroup">
              <label for="phoneInput">Phone Number</label>
              <input
                v-model="form.phone"
                id="phoneInput"
                type="tel"
                placeholder="+1 (555) 000-0000"
              />
            </div>
          </div>
          <label for="messageInput">Your Message</label>
          <textarea
            required
            v-model="form.message"
            id="messageInput"
            placeholder="Type your message here"
          ></textarea>
          <button type="submit" class="formButton">Send Message</button>
          <p v-if="errors">
            Hmmm... Something went wrong, please try again or send me an email
            directly to my address above.
          </p>
          <p v-if="success">
            Message received! Will be back with you shortly. :)
          </p>
        </form>
      </div>
      <span class="littleFooter"
        >Built with love by <strong>Next Concept</strong> &#60;3</span
      >
    </div>
  </section>
</template>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 100vh;
  position: relative;
  top: 0;
  margin: 0 auto;
  max-width: 1440px;
  padding: 0 30px;
  scroll-snap-align: start;
}

.homeContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 65%;
  height: 100vh;
}

.homeContainer h1 {
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--textColor);
  margin: 0 0 10px 0;
  text-align: center;
}

.homeContainer h1 strong {
  background: var(--blueGradient);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.homeContainer p {
  width: 80%;
  font-size: 1.5rem;
  color: var(--textColor);
  margin: 0;
  text-align: center;
}

/* Services Section */
.servicesContainer {
  display: grid;
  grid-template-columns: 1.5fr 1.5fr;
  grid-template-rows: 0.5fr 0.5fr;
  gap: 20px 20px;
  grid-template-areas:
    ". ."
    ". .";
  margin: 30px 0;
  color: var(--textColor);
}

#services h1 {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--textColor);
  margin: 0;
  text-align: center;
}

#services h1 strong {
  background: var(--blueGradient);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.servicesContainer .service {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 390px;
  padding: 20px;
  border-radius: 10px;
}

.servicesContainer .service span {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 90px;
  background-color: #d7efff;
  border-radius: 20px;
}

.servicesContainer .service .info {
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 100%;
  padding: 0 0 0 20px;
}

.servicesContainer .service .info h2 {
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 10px;
}

.servicesContainer .service .info p {
  color: var(--lightTextColor);
}

/* About Me Section */
.aboutMeContainer {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

.aboutMeContainer .aboutMe {
  width: 55%;
}

.aboutMeContainer .aboutMe h1 {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--textColor);
  margin-bottom: 30px;
}

.aboutMeContainer .aboutMe p {
  font-size: 1rem;
  color: var(--lightTextColor);
  margin-bottom: 20px;
  line-height: 20px;
}

.aboutMeContainer .me {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45%;
}

.aboutMeContainer .me img {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
}

/* Contact Section */
.contactContainer {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

.contactContainer .left {
  width: 25%;
  padding: 30px 30px 30px 0px;
}

.contactContainer h1 {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--textColor);
  margin-bottom: 30px;
}

.contactContainer p {
  font-size: 1rem;
  color: var(--lightTextColor);
  margin-bottom: 20px;
  line-height: 20px;
}

.contactContainer .left a {
  font-size: 1rem;
  color: var(--lightTextColor);
  margin-top: 30px;
  text-align: center;
  text-decoration: none;
}

.contactContainer .left a strong {
  background: var(--blueGradient);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.contactContainer .right {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 75%;
  padding: 30px 60px 30px 30px;
}

.contactContainer .right h1 {
  margin-bottom: 5px;
}

.contactContainer .right form {
  display: flex;
  flex-direction: column;
}

.contactContainer .right form .row {
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  margin-bottom: 30px;
}

.contactContainer .right form .row .inputGroup {
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0 30px 0 0;
}

.contactContainer .right form label {
  font-size: 14px;
  color: var(--lightTextColor);
  margin: 15px 0;
}

.contactContainer .right form .row .inputGroup input {
  max-width: 100%;
  height: 40px;
  border-radius: 10px;
  border: 0.3px solid var(--lightTextColor);
  color: var(--textColor);
  background-color: #fff;
  padding: 0px 12px;
  box-shadow: 0px 4px 84px rgba(0, 0, 0, 0.07);
}

.contactContainer .right form .row .inputGroup input::placeholder,
.contactContainer .right form textarea::placeholder {
  color: #b9b9b9;
}

.contactContainer .right form .row .inputGroup .inputBox {
  display: flex;
  flex-direction: row;
  position: relative;
}

.contactContainer .right form .row .inputGroup .inputBox input {
  width: 100%;
  padding-left: 42px;
}

.contactContainer .right form .row .inputGroup .inputBox svg {
  position: absolute;
  margin: 13px;
}

.contactContainer .right form textarea {
  max-width: 100%;
  height: 40px;
  max-height: 700px;
  border-radius: 10px;
  border: 0.3px solid var(--lightTextColor);
  color: var(--textColor);
  background-color: #fff;
  padding: 12px;
  box-shadow: 0px 4px 84px rgba(0, 0, 0, 0.07);
  margin: 0 30px 0 0;
  resize: vertical;
}

.littleFooter {
  position: absolute;
  left: 0;
  bottom: 30px;
  width: 100%;
  font-size: 0.8rem;
  color: var(--lightTextColor);
  text-align: center;
}

.littleFooter strong {
  background: var(--blueGradient);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.formButton {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background: var(--blueGradient);
  border-radius: 10px;
  outline: none;
  border: none;
  max-width: 345px;
  text-decoration: none;
  font-size: 14px;
  padding: 14px 48px;
  margin: 48px 0 28px 0;
}

.formButton:hover {
  cursor: pointer;
}

@media screen and (max-width: 768px) {
  .homeContainer {
    width: 100%;
  }

  .servicesContainer {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    gap: 20px 20px;
    grid-template-areas:
      "."
      "."
      "."
      ".";
  }

  .aboutMeContainer .me {
    display: none;
  }

  .aboutMeContainer .aboutMe {
    width: 100%;
  }

  .contactContainer {
    flex-direction: column;
    justify-content: center;
  }

  .contactContainer .left {
    width: 100% !important;
    padding: 30px 0px;
  }

  .contactContainer .right {
    width: 100%;
    padding: 0px;
  }

  .contactContainer .right form .row {
    margin-bottom: 0;
  }

  .contactContainer .right form textarea {
    margin: 0;
  }

  .contactContainer .right form .row .inputGroup:first-child {
    width: 50%;
    margin: 0px 30px 0 0;
  }

  .contactContainer .right form .row .inputGroup {
    width: 50%;
    margin: 0px 0px 0 0;
  }

  .formButton {
    width: 100%;
    max-width: 100%;
    text-decoration: none;
    font-size: 14px;
    padding: 14px 48px;
    margin: 48px 0 28px 0;
  }
}

@media (max-width: 480px) {
  section {
    padding: 0 10px;
  }

  .homeContainer h1 {
    font-size: 1.5rem;
  }

  .homeContainer p {
    width: 100%;
    margin-bottom: 30px;
    font-size: 1.3rem;
  }

  .servicesContainer .service {
    padding: 0px;
    justify-content: center;
  }

  .servicesContainer .service span {
    width: 60px;
    height: 60px;
  }

  .servicesContainer .service span svg {
    width: 40px;
    height: 40px;
  }

  .servicesContainer .service .info h2 {
    font-size: 1rem;
  }

  .servicesContainer .service .info p {
    font-size: 0.8rem;
  }

  .aboutMeContainer .aboutMe h1 {
    margin-bottom: 10px;
  }

  .aboutMeContainer .aboutMe p {
    font-size: 0.8rem;
    line-height: normal;
  }

  .contactContainer {
    width: 100%;
  }

  .contactContainer h1 {
    font-size: 1.2rem;
    margin-bottom: 5px;
  }

  .contactContainer p {
    font-size: 0.8rem;
    margin-bottom: 0;
  }

  .contactContainer .left a {
    font-size: 0.8rem;
  }

  .contactContainer .right form label {
    font-size: 0.8rem;
    color: var(--lightTextColor);
    margin: 5px 0;
  }

  .contactContainer .right form .row {
    flex-direction: column;
    margin-top: 0px;
    margin-bottom: 0px;
  }

  .contactContainer .right form .row .inputGroup:first-child {
    width: 100%;
    margin: 0px 30px 0 0;
  }

  .contactContainer .right form .row .inputGroup {
    width: 100%;
    margin: 0px 30px 0 0;
  }

  .formButton {
    width: 100%;
    max-width: 100%;
    text-decoration: none;
    font-size: 14px;
    padding: 14px 48px;
    margin-top: 10px;
  }

  .hideOnMobile {
    display: none;
  }

  .littleFooter[data-v-02281a80] {
    bottom: 15px;
  }
}
</style>
