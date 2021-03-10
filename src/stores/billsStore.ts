import { writable } from 'svelte/store';

// export const remainingBalance = writable(0);
export const bills = writable({
  remainingBalance: 0,
  billsList: [{name: 'Visa', amount: 345}]
})