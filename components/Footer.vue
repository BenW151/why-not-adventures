<template>
  <footer ref="footer">
    <LayoutGridContainer>
      <div :class="{ 'nav-items': true, open: isMenuOpen }">
        <NuxtLink
          class="nav-item"
          to="/"
          :class="{ active: $route.path === '/' }"
          aria-label="Home Page"
          >About</NuxtLink
        >
        <NuxtLink
          class="nav-item"
          to="/destinations"
          :class="{ active: $route.path === '/destinations' }"
          aria-label="Destinations Page"
          >Destinations</NuxtLink
        >
        <NuxtLink
          class="nav-item"
          to="/contact"
          :class="{ active: $route.path === '/contact' }"
          aria-label="Contact Page"
          >Contact</NuxtLink
        >
      </div>
      <ListsLinkList
        class="socials"
        :links="[
          {
            url: 'https://www.instagram.com/whynotadventures_/',
            label: 'Instagram',
            description: 'Instagram',
          },
          {
            url: 'https://facebook.com/whynotadventures_/',
            label: 'Facebook',
            description: 'Facebook',
          },
        ]" />
      <FormsNewsletter />
      <div class="legal">
        <div class="images">
          <ImageDefault
            imageUrl="/images/abta.png"
            imageAlt="Celestial Relaxation Room"
            class="abta"
            objectFit="contain"
            rellaxPercentage="0"
            rellaxSpeed="0" />
        </div>
        <p>
          Why Not Adventures are a UK registered company – Address, Address,
          123, Address, United Kingdom, GL1 7SQ.
        </p>
      </div>
    </LayoutGridContainer>

    <LayoutGridContainer class="footer-end">
      <p class="item copyright">Copyright ©2024</p>
      <NuxtLink
        class="item privacy-policy"
        :class="{ active: $route.path === '/privacy-policy' }"
        to="/privacy-policy"
        aria-label="Privacy Policy Page"
        >Privacy Policy</NuxtLink
      >
      <NuxtLink
        class="item terms"
        :class="{ active: $route.path === '/terms-and-conditions' }"
        to="/terms-and-conditions"
        aria-label="Terms and Conditions Page"
        >Terms + Conditions</NuxtLink
      >
      <button
        class="item back-to-top"
        @click="scrollToTop"
        aria-label="Back to Top">
        <LucideArrowUp />
      </button>
    </LayoutGridContainer>
  </footer>
</template>

<script setup>
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>

<style scoped>
footer {
  background-color: var(--color-white);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 30vw;
  z-index: 1000;
  transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
}

footer .container {
  padding-bottom: var(--spacing-3);
  padding-top: var(--spacing-3);
  white-space: nowrap;
}

footer .nav-items {
  grid-column: 1 / 4;
  display: flex;
  flex-direction: column;
}

footer .nav-items .nav-item {
  font-size: var(--font-size-M);
  font-family: var(--font-family-primary);
}

footer .socials {
  grid-column: 1 / 4;
  grid-row-start: 2;
  margin-top: auto;
}

.newsletter {
  grid-column: 11 / 15;
  grid-row-start: 2;
  margin-top: auto;
}

.legal {
  grid-column: 6 / 10;
  grid-row-start: 2;
  white-space: normal;
}

.legal p {
  opacity: var(--opacity);
}

.images {
  display: inline-flex;
}

.abta {
  height: 5vw;
  margin: var(--spacing-3);
  margin-left: 0;
  margin-top: 0;
}

.footer-end .item {
  margin-right: auto;
}

.copyright {
  grid-column: 1 / 3;
  grid-row: 1;
}

.terms {
  grid-column: 6 / 8;
  grid-row: 1;
}

.privacy-policy {
  grid-column: 11 / 13;
  grid-row: 1;
}

.back-to-top {
  grid-column: 16 / 17;
  grid-row: 1;
}

.item.active::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

.back-to-top::after {
  display: none;
}

.back-to-top:hover {
  transform: translateY(-4px);
  cursor: pointer;
}

.nav-item.active::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

@media (max-width: 767px) {
  footer {
    height: 30vh;
  }

  .footer {
    align-items: start;
    margin: 0;
    text-align: center;
  }

  .footer .item {
    font-size: var(--font-size-XS);
    margin: 0 var(--spacing-3);
  }

  .newsletter,
  .legal {
    grid-column: 1 / 7;
    grid-row-start: auto;
  }

  .abta {
    height: 10vh;
    margin-top: var(--spacing-3);
  }

  .copyright {
    grid-column: 5 / 7;
    grid-row: 1;
  }

  .terms {
    grid-column: 1 / 3;
    grid-row: 1;
  }

  .privacy-policy {
    grid-column: 1 / 3;
    grid-row: 2;
  }

  .back-to-top {
    grid-column: 5 / 7;
    grid-row: 2;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
}
</style>
