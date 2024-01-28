<template>
  <div>
    <basic-dialog titleText="編輯" :isOpen="openDiaData" @close="closeDia">
 <template #footer>
  <basic-button label="儲存" btnBg="main"></basic-button>
 </template>
</basic-dialog>
  <basic-button label="編輯" btnBg="btnBackground"  @click="openDia"/>
  <basic-button label="查看" btnBg="btnBackground" />
  </div>

    <!-- <h2>滑鼠x{{x}}</h2>
    <h2>滑鼠y{{ y }}</h2> -->
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { useLocalStorage, useMouse, usePreferredDark } from '@vueuse/core'
const {x,y} = useMouse()

const btnBackground = ref('btnBackground')
const openDiaData = ref(false)
const name = ref('張三')
const title = ref({
  name:'頭部組件',
  footer:'底部組件'
})
const openDia = ()=>{
  openDiaData.value = !openDiaData.value
console.log(openDiaData.value)
}
const closeDia = ()=>{
  openDiaData.value = false
}

</script>