<template>
    <button :class="`basic__btn bg-${btnBg}`" @click="onClick" >{{ label }}</button>
</template>
<script lang="ts" setup>
import {ref} from 'vue'
const title = defineProps(['label','btnBg'])
const edit = ref(false)
const emit = defineEmits(['click'])
const onClick = ()=>{
    emit('click',edit.value)
}
</script>

<style>
.basic__btn{
    @apply rd-20px ;
    padding: 4px 44px;
    /* background-color: theme('colors.btnBackground'); */
    color:theme('colors.textColor');
    cursor: pointer;
}
</style>