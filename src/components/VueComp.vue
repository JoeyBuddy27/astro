<script setup lang="ts">
import { ref, defineProps } from 'vue';
import { incrementSharedStateNumber } from '../store/sharedStore';

const counter = ref(0);

const {type} = defineProps<{
  type?: string;
}>();

</script>

<template>
  <div class='bg-emerald-600 border-r-8 p-4 flex-column'>
    <h1 class='text-white font-bold'>{{type}}</h1>
   

    <button class='outline-2 p-4 my-2 rounded bg-slate-50 text-black' @click="counter++">Increment Vue Number</button>
      <h2>{{ counter }}</h2>
     <div class="div">

     <button
                class='p-4 mt-4 bg-slate-900 rounded'
                @click="incrementSharedStateNumber"
            >
                Increment Shared State Number
            </button>
     </div>
  

  </div>
</template>

<style lang="scss" scoped>
/* Your styles go here */
</style>
