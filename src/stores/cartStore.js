import { defineStore } from 'pinia';
import { ref, computed } from 'vue';



export const foo = 'bar';

export const useCartStore = defineStore('cart', () => {
  const cart = ref([]);
  const cartTotal = computed(() => cart.value.reduce((sum, item) => sum + item.cost, 0));

  return { cart, cartTotal };
});
