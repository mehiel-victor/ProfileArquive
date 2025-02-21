import { defineStore } from "pinia";

export const useEmployeeStore = defineStore("employee", {
  state: () => ({
    employees: [] as any[],
    isLoading: false,
  }),

  actions: {
    async fetchEmployees() {
      this.isLoading = true;
      try {
        const response = await fetch(
          "https://randomuser.me/api/?results=10&nat=us,br,fr,ca"
        );
        const data = await response.json();
        this.employees = data.results;
      } catch (error) {
        console.error("Erro ao buscar funcionários:", error);
      } finally {
        this.isLoading = false;
      }
    },
  },
});
