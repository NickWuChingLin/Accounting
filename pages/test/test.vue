<template>
    <basic-dialog></basic-dialog>
    <basic-button label="編輯" btnBg="btnBackground" />
    <basic-button label="查看" btnBg="btnBackground" />
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