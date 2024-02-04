<template>
    <!-- 編輯一筆 -->
    <div class="editAccounting">
        <label for="" class="editAccounting__title">日期</label>
        <input type="date" class="editAccounting__date">

        <label for="" class="editAccounting__title">名稱</label>
        <input type="text" class="editAccounting__text">

        <label for="" class="editAccounting__title">狀態</label>
        <select name="" id="" class="editAccounting__select">
            <option value="1">尚未結清</option>
            <option value="2">已經結清</option>
        </select>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.editAccounting {
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