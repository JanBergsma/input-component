<template>
  <div class="container">
    <label for="x" class="label">Label</label>
    <div class="input">
      <input id="x" type="text" placeholder="PlaceHolder" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
export interface Props {
  error?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  error: false
})

const color = computed(() => `var(${props.error ? '--input-color-error' : '--input-color-label'})`)
const focusColor = computed(
  () => `var(${props.error ? '--input-color-error' : '--input-color-focus'})`
)
</script>

<style scoped>
.container {
  color: v-bind(color);
  font-family: 'Noto Sans', sans-serif;
  display: grid;
  gap: 0.4rem;
}

input {
  color: var(--input-text-color);
  width: 200px;
  border-radius: 8px;
  border: none;
  outline: 1px solid v-bind(color);
  padding: 1rem 1rem;
}

input:hover {
  background: var(--input-background-hover);
}

input:focus,
.container:focus-within {
  color: v-bind(focusColor);
  outline-color: v-bind(focusColor);
}
</style>
