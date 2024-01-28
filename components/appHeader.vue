<template>
    <div>
        <h1>頭部組件</h1>
        <h2>我從父組件傳直{{ name }}{{ footer }}</h2>
        <button @click="emitInfo" >點我獲取子組件傳遞的信息</button>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const header = defineProps(['name','footer'])
const emits =  defineEmits(['sendNum','sendString']);
const num = ref(100)
const string = ref('jay')
const emitInfo = ()=>{
    emits('sendNum',num.value)
    emits('sendString',string.value)
}

console.log(header)
</script>