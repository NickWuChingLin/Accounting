<template>
    <div>
    <h1>我是從子組件來的{{text}}</h1>
     <h1>底部組件</h1>
     <button @click="getTitle">底部按鈕</button>
    </div>
</template>
<script lang="ts" setup>
import {ref} from 'vue';
const title = defineProps(['text'])
const emit =  defineEmits(['title'])
const getTitle = ()=>{
    emit('title','從子組件傳過來的')
}
</script>