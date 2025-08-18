<template>
  <div class="lotto-select">
    <h2>Select Your Numbers</h2>
    <div class="numbers-grid">
      <button
        v-for="n in maxNumber"
        :key="n"
        :class="{ selected: selectedNumbers.includes(n) }"
        @click="toggleNumber(n)"
      >
        {{ n }}
      </button>
    </div>
    <div class="selected">
      <p>Selected Numbers: {{ sortedSelectedNumbers.join(", ") }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";

const props = defineProps({
  maxNumber: { type: Number, default: 49 },
  maxSelect: { type: Number, default: 6 },
});

const emit = defineEmits(["update:selected"]);

const selectedNumbers = ref([]);

const toggleNumber = (n) => {
  if (selectedNumbers.value.includes(n)) {
    selectedNumbers.value = selectedNumbers.value.filter((num) => num !== n);
  } else if (selectedNumbers.value.length < props.maxSelect) {
    selectedNumbers.value.push(n);
  }
};

const sortedSelectedNumbers = computed(() =>
  [...selectedNumbers.value].sort((a, b) => a - b)
);

watch(sortedSelectedNumbers, (newVal) => emit("update:selected", newVal), {
  deep: true,
});
</script>

<style scoped>
.lotto-select {
  text-align: center;
}

.numbers-grid {
  display: grid;
  grid-template-columns: repeat(7, 2rem);
  gap: 0.5rem;
  justify-content: center;
  margin: 1rem 0;
}

.numbers-grid button {
  width: 2rem;
  height: 2rem;
  border: 1px solid var(--text-color);
  border-radius: 50%;
  background-color: white;
  cursor: pointer;
  transition: 0.2s;
}

.numbers-grid button.selected {
  background-color: var(--green-color);
  color: white;
  font-weight: bold;
}

.selected {
  font-weight: bold;
}
</style>
