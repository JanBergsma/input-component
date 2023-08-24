<template>
  <div class="container">
    <label for="x" class="label">Label</label>
    <div class="input-container" :class="{ disabled: disabled }">
      <i v-if="startIcon" class="material-icons">{{ startIcon }}</i>
      <textarea
        v-if="multiline"
        id="x"
        type="text"
        class="input-field"
        :disabled="disabled"
        :placeholder="placeholder"
        :rows="rows"
        :value="value"
      ></textarea>
      <input
        v-else
        id="x"
        type="text"
        class="input-field"
        :disabled="disabled"
        :placeholder="placeholder"
        :value="value"
      />
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
  disabled?: boolean
  endIcon?: string
  error?: boolean
  fullwidth?: boolean
  inputsize?: string
  multiline?: boolean
  placeholder?: string
  rows?: number
  startIcon?: string
  text?: string
  value?: string
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  error: false,
  inputsize: 'md',
  fullwidth: false,
  multiline: false,
  rows: 1,
  placeholder: 'PlaceHolder...'
})

const color = computed(() => `var(${props.error ? '--input-color-error' : '--input-color-label'})`)
const focusColor = computed(
  () => `var(${props.error ? '--input-color-error' : '--input-color-focus'})`
)
const inputPaddingLeftRight = computed(() => (!props.startIcon ? '0.6rem' : '0'))
const inputSize = computed(() =>
  props.inputsize === 'md' ? `${props.rows * 56}px` : `${props.rows * 40}px`
)
const fullWidth = computed(() => (props.fullwidth ? '100%' : '200px'))
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
.input-container {
  outline: 1px solid v-bind(color);
  border-radius: 8px;
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: space-between;
  width: v-bind(fullWidth);
  height: v-bind(inputSize);
  overflow: hidden;
}

.input-container:focus-within,
.container:focus-within {
  color: v-bind(focusColor);
  outline-color: v-bind(focusColor);
}

i {
  padding: 0 0.7rem;
}

.input-field {
  color: var(--input-color);
  width: 80%;
  border: none;
  padding: 0 v-bind(inputPaddingLeftRight);
}

textarea.input-field {
  height: 90%;
  resize: none;
}

.input-field:focus {
  outline: none;
}

.input-field:hover,
.input-container:hover {
  background: var(--input-background-hover);
}

.input-field:disabled {
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
