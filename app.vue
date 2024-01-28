<template>
  <div>
    <h1>根組件</h1>
    <basic-button label="btnTitle" btnBg="btnBackground" />
    <h2>滑鼠x{{x}}</h2>
    <h2>滑鼠y{{ y }}</h2>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useLocalStorage, useMouse, usePreferredDark } from '@vueuse/core'
const {x,y} = useMouse()

const btnBackground = ref('btnBackground')

const name = ref('張三')
const title = ref({
  name:'頭部組件',
  footer:'底部組件'
})

</script>

<style>

</style>