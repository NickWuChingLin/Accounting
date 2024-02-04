<template>
    <!-- 編輯一筆 -->
    <div class="addAccounting">
        <label for="" class="addAccounting__title">日期</label>
        <input type="date" class="addAccounting__date">

        <label for="" class="addAccounting__title">名稱</label>
        <input type="text" class="addAccounting__text">
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.addAccounting {
    display: grid;
    grid-template-columns: auto auto;
    gap: 10px;

    &__title {
        font-weight: 600;
        text-align: center;
    }

    &__date {
        width: 163px;
        border-radius: 4px;
        border: 1px solid black;
    }

    &__text {
        width: 160px;
        border-radius: 4px;
        border: 1px solid black;

    }

    &__select {
        width: 166px;
        background-color: #F5D0D0;
        border-radius: 4px;
        border: 1px solid black;

    }
}
</style>