<script setup lang="ts">
import { onMounted } from "vue";
import { useEmployeeStore } from "@/stores/employee";

const store = useEmployeeStore();

onMounted(() => {
  store.fetchEmployees();
});
</script>

<template>
  <div class="p-6 bg-neutralLight min-h-screen">
    <h1 class="text-2xl font-bold text-primary">Gestão de Pessoas</h1>

    <div v-if="store.isLoading" class="text-gray-500 mt-4">
      Carregando funcionários...
    </div>

    <div
      v-else
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6"
    >
      <EmployeeCard
        v-for="employee in store.employees"
        :key="employee.login.uuid"
        :employee="employee"
      />
    </div>
  </div>
</template>
