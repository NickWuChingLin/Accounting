<template>
    <div class="aside">
        <h1 class="__inner">側邊欄組件</h1>
        <div>子組件拿到了父組件的資料{{ foo }}</div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const props = defineProps(['foo']);

</script>

<style>
.aside{
   @apply border-solid b-rd-50% 
   h1{
    @apply text-center
   }
}
</style>