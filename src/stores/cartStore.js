import { defineStore } from 'pinia';
import { ref } from 'vue';



export const foo = 'bar';

export const useCartStore = defineStore('cart', () => {
  const cart = ref([]);

  return { cart };
});
