<script setup>
import { ref, onMounted, defineProps, computed } from "vue";
import { getLottoStats } from "../api/lottoApi.js";

const props = defineProps({
  selectedNumbers: {
    type: Array,
    default: () => [],
  },
});

const stats = ref({});
const error = ref(null);

onMounted(async () => {
  try {
    const data = await getLottoStats();
    stats.value = Object.fromEntries(
      Object.entries(data).map(([num, count]) => [parseInt(num), count])
    );
  } catch (err) {
    error.value = "Failed to load stats";
    console.error(err);
  }
});

const fullStats = computed(() => {
  const result = [];
  for (let i = 1; i <= 49; i++) {
    result.push({ number: i, count: stats.value[i] || 0 });
  }
  return result;
});
</script>

<template>
  <div class="lottoChart">
    <h2>Lotto Stats</h2>
    <div v-if="!error" class="stats-grid">
      <div
        v-for="item in fullStats"
        :key="item.number"
        :class="{ highlighted: props.selectedNumbers.includes(item.number) }"
        class="stat-item"
      >
        Number {{ item.number }}: {{ item.count }} time(s)
      </div>
    </div>
    <p v-else>{{ error }}</p>
  </div>
</template>

<style scoped>
/* Mobile*/
.lottoChart {
  padding: 0.3rem var(--margin-mobile);
}
.highlighted {
  font-weight: bold;
  color: var(--green-color);
}
.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
}
.stat-item {
  padding: 0.3rem;
  border-radius: 0.2rem;
}
/* Tablet*/
@media (min-width: 768px) {
  .stats-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  .lottoChart {
    padding: 0.4rem var(--margin-tablet);
  }
}
/* Desktop*/
@media (min-width: 1280px) {
  .stats-grid {
    grid-template-columns: repeat(4, 1fr);
  }
  .lottoChart {
    padding: 0.5rem var(--margin-desktop);
  }
}
</style>
