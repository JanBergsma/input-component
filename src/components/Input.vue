<template>
  <div class="container">
    <label for="x" class="label">Label</label>
    <div class="input" :class="{ disabled: disabled }">
      <i v-if="startIcon" class="material-icons">{{ startIcon }}</i>
      <input id="x" type="text" placeholder="PlaceHolder" :disabled="disabled" :value="value" />
      <i v-if="endIcon" class="material-icons">{{ endIcon }}</i>
    </div>
    <div class="text">
      {{ text }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
export interface Props {
  error?: boolean
  disabled?: boolean
  text?: string
  startIcon?: string
  endIcon?: string
  value?: string
}

const props = withDefaults(defineProps<Props>(), {
  error: false,
  disabled: false
})

const color = computed(() => `var(${props.error ? '--input-color-error' : '--input-color-label'})`)
const focusColor = computed(
  () => `var(${props.error ? '--input-color-error' : '--input-color-focus'})`
)
const textColor = computed(() => `var(${props.error ? '--input-color-error' : '--input-color'})`)
</script>

<style scoped>
.container {
  color: v-bind(color);
  font-family: 'Noto Sans', sans-serif;
  display: grid;
  gap: 0.4rem;
}

.container:focus-within {
  color: --input-color;
}
.input {
  outline: 1px solid v-bind(color);
  border-radius: 8px;
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: space-between;
  width: 200px;
  height: 56px;
}

.input:focus-within,
.container:focus-within {
  color: v-bind(focusColor);
  outline-color: v-bind(focusColor);
}

i {
  padding: 0 1rem;
}

input {
  color: var(--input-color);
  width: 80%;
  border: none;
  padding: 1rem 0.6rem;
}

input:focus {
  outline: none;
}

input:hover {
  background: var(--input-background-hover);
}

input:disabled {
  background: var(--input-background-disabled);
}
.text {
  color: var(textColor);
  font-size: 0.75rem;
}

.disabled {
  background: var(--input-background-disabled);
  color: var(--input-color);
}
</style>
