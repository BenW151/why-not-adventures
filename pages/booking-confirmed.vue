<template>
  <div>
    <Header
      imageUrl="/images/pakistan/pakistan-cover.png"
      imageAlt="Laptop with code on desk"
      title="Booking Confirmed"
      subtitle="You're in!"
      headerClass="header-small">
    </Header>

    <main>
      <section class="payment-confirmed">
        <LayoutGridContainer>
          <TextSectionLabel labelText="About" />
          <TextParagraphWithTitle subtitleTag="h3">
            <template #title>What's Next?</template>
            <template #body>
              <p>
                Thank you for booking with Why Not Adventures! To complete your
                reservation, please fill out the form provided in the
                confirmation email you should receive shortly. We will also need
                a scanned copy of your passport for verification purposes. Once
                we receive these details, we'll send you an email outlining the
                next steps, which include important information about your
                upcoming adventure, packing tips, and travel itinerary. If you
                have any questions or need assistance, please do not hesitate to
                contact our support team. We look forward to helping you embark
                on an unforgettable journey!
              </p>
            </template>
          </TextParagraphWithTitle>
        </LayoutGridContainer>
      </section>
    </main>
  </div>
</template>

<script setup>
useHead({
  title: "Why Not Adventures - Booking Confirmed",
  meta: [
    {
      name: "description",
      content: "Offering affordable tours to off the beaten track destinations",
    },
    {
      hid: "robots",
      name: "robots",
      content: "noindex",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://whynotadventures.co.uk/booking-confirmed",
    },
  ],
});

const isMobile = ref(window.innerWidth < 768);

//Temp fix for swiper mounting before dom is loaded on dev server. can be removed for prod
/*if (process.env.NODE_ENV === 'development' && !isMobile.value) {
  definePageMeta({
    pageTransition: false,
  });
}*/
</script>

<style scoped>
.payment-confirmed .paragraph-with-title {
  grid-column: 5 / 13;
  grid-row-start: 1;
}

@media (max-width: 767px) {
  section div.container.grid div.item {
    grid-column: 1 / 7;
    grid-row: auto;
  }
}
</style>
