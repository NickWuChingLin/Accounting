<template>
    <button :class="`basic_btn bg-${btnBg}`" @click="onClick">{{ label }}</button>
</template>
<script lang="ts" setup>
import {ref} from 'vue'
const title = defineProps(['label','btnBg'])
const edit = ref('取消')
const emit = defineEmits(['click'])
const onClick = ()=>{
    emit('click',edit.value)
}
</script>

<style>
.basic_btn{
    @apply rd-20px ;
    padding: 4px 44px;
    /* background-color: theme('colors.disableBtn'); */
    color:theme('colors.textColor')
}
</style>