<template>
  <div>
    <h1>Lotto Number Stats</h1>
    <LottoChart v-if="stats" :data="stats" />
    <p v-else>Loading...</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { fetchLottoStats } from '../api/lottoApi.js'
import LottoChart from '../components/LottoChart.vue'

const stats = ref(null)

onMounted(async () => {
  stats.value = await fetchLottoStats()
})
</script>
