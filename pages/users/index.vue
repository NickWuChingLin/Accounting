<template>
    <div class="img-div">
        <h1>照片區域</h1>
        <img src="/img/生日優惠.jpg" alt="" style="width: 200px;height: 200px;">
    <img src="~assets/img/生日優惠.jpg" alt="" style="width: 200px;height: 200px;">
    </div>
    <h1 class="text-red border-solid p-10px ">用戶下默認組件</h1>
    <my-component/>
    <xxx/>
    <!-- 如果在public就直接訪問就好了 -->
  
    <!-- 前面加上他在哪個資料夾 -->
    <UserDialog/>
</template>

<script lang="ts" setup>
import myComponent from './my-component.vue';
// 通過useHead可以在某個頁面單獨配置
useHead({
    title:'用戶首頁'
})
</script>

<style>
.img-div{
    @apply border-solid flex flex-justify-center p-50px gap-50px
}
</style>