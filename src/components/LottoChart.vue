<script setup>
import { ref, onMounted } from "vue";
import { getLottoStats } from "../api/lottoApi.js";

const stats = ref({});

onMounted(async () => {
  try {
    stats.value = await getLottoStats();
  } catch (err) {
    stats.value = null;
  }
});
</script>

<template>
  <div class="body">
    <h2>Lotto Stats</h2>
    <ul v-if="stats">
      <li v-for="(count, number) in stats" :key="number">
        Number {{ number }}: {{ count }} time(s)
      </li>
    </ul>
    <p v-else>Failed to load stats</p>
  </div>
</template>

<style scoped>
.body {
  padding: 0.3rem 1.3rem;
}
</style>
