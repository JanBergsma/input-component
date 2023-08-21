<template>
  <div class="container">
    <label for="x" class="label">Label</label>
    <div class="input">
      <input id="x" type="text" placeholder="PlaceHolder" />
    </div>
  </div>
</template>
<script lang="ts" setup>
export interface Props {}

const props = withDefaults(defineProps<Props>(), {})
</script>

<style scoped>
.container {
  color: #333333;
  font-family: 'Noto Sans', sans-serif;
  display: grid;
  gap: 0.4rem;
}

input {
  color: #828282;
  width: 200px;
  border-radius: 8px;
  border: none;
  outline: 1px solid #828282;
  padding: 1rem 1rem;
}

input:hover {
  background: #f9f9f9;
}

input:focus,
.container:focus-within {
  color: #2962ff;
  outline-color: #2962ff;
}
</style>
