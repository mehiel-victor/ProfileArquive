<script setup lang="ts">
defineProps<{
  employee: any;
}>();
</script>

<template>
  <div class="p-4 border rounded-lg bg-white shadow-md">
    <img :src="employee.picture.large" class="w-24 h-24 rounded-full mx-auto" />
    <h2 class="text-lg font-semibold text-center mt-2">
      {{ employee.name.first }} {{ employee.name.last }}
    </h2>
    <p class="text-sm text-gray-500 text-center">{{ employee.email }}</p>
    <p class="text-sm text-gray-500 text-center">
      {{ employee.location.country }}
    </p>
  </div>
</template>
