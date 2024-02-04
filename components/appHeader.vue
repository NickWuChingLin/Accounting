<template>
    <div class="accHeader">
        <h1 class="accHeader__title">智障情侶偷記帳</h1>
    </div>
</template>
<script lang="ts" setup>
</script>
<style lang="scss" scoped>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
.accHeader{
    background-color: theme('colors.main');
    padding: 10px 0;
    &__title{
        @apply flex flex-items-center flex-justify-center;
       color:theme('colors.btnBackground')
    }
}
</style>