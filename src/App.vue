<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const message = ref('Loading...')

onMounted(async () => {
  const res = await axios.get('http://localhost:8080/api/hello')
  message.value = res.data
})
</script>

<template>
  <h1>{{ message }}</h1>
</template>
