<template>
  <div>
    <basic-dialog titleText="編輯" :isOpen="openDiaData" @close="closeDia">
 <template #footer>
  <basic-button label="儲存" btnBg="main" class="btnContent"></basic-button>
 </template>
</basic-dialog>
    <basic-dialog titleText="又偷花錢" :isOpen="openDiaData1" @close="coloeDia1">
 <template #footer>
  <basic-button label="儲存" btnBg="main" class="btnContent"></basic-button>
 </template>
</basic-dialog>
  <basic-button label="編輯" btnBg="btnBackground"  @click="openDia"/>
  <basic-button label="誰偷花錢" btnBg="btnBackground"  @click="openDia1"/>
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
const openDiaData1 = ref(false)
const name = ref('張三')
const title = ref({
  name:'頭部組件',
  footer:'底部組件'
})
const openDia = ()=>{
  openDiaData.value = !openDiaData.value
console.log(openDiaData.value)
}
const openDia1=()=>{
  openDiaData1.value = ! openDiaData1.value
}
const closeDia = ()=>{
  openDiaData.value = false
}
const coloeDia1 = ()=>{
  openDiaData1.value = false
}

</script>