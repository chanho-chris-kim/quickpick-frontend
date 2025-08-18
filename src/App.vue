<script setup>
import Navbar from "./components/Navbar.vue";
import LottoSelect from "./components/LottoSelect.vue";
import LottoChart from "./components/LottoChart.vue";
import Footer from "./components/Footer.vue";
import { ref } from "vue";

const selectedNumbers = ref([]);

const handleSelection = (numbers) => {
  selectedNumbers.value = numbers;
};
</script>

<template>
  <div class="main">
    <Navbar />
    <LottoSelect @update:selected="handleSelection" />
    <LottoChart :selectedNumbers="selectedNumbers" />
    <Footer />
  </div>
</template>

<style scoped>
/* Mobile */
.main {
  padding-bottom: 5.5rem;
}
/* Tablet */
@media (min-width: 768px) {
  .main {
    padding-bottom: 0;
  }
}
.main > *:not(:first-child)::before {
  content: "";
  display: block;
  width: 95vw;
  height: 1px;
  background-color: var(--bar-color);
  position: relative;
  left: 50%;
  transform: translateX(-50%); 
}

/* Desktop */
@media (min-width: 1280px) {
  .main {
    width: 80rem;
    margin: 0 auto;
  }
}
</style>
