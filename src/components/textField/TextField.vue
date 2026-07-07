<script setup lang="ts">
interface Props {
  id?: string;
  label?: string;
  type?: 'text' | 'email' | 'password' | 'textarea';
  placeholder?: string;
  min?: number;
  max?: number;
  step?: number;
}

withDefaults(defineProps<Props>(), { type: 'text' });

const model = defineModel<string>({ default: '' });
</script>

<template>
  <div class="textField">
    <label v-if="label" :for="id">{{ label }}</label>

    <div v-if="type === 'textarea'">
      <textarea
        :id="id"
        v-model="model"
        :placeholder="placeholder"
        :maxlength="max"
        class="textField__textarea"
      ></textarea>
      <div v-if="max" class="textField__charCount">
        <span>{{ model.length }}</span> / {{ max }}
      </div>
    </div>

    <input
      v-else
      :id="id"
      v-model="model"
      :type="type"
      :placeholder="placeholder"
      :min="min"
      :max="max"
      :step="step"
      class="textField__input"
    />
  </div>
</template>

<style lang="scss">
@use './_textField.scss';
</style>
