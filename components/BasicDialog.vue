<template>
    <div v-if="isOpen">
        <!-- 彈窗內容 -->
        <div class="diaLog">
            <div class="diaLog__head">
                <h1 class="diaLog__title">{{ titleText }}</h1>
            </div>
            <div class="diaLog__body">
                <slot name="body">範例一</slot>
            </div>
            <div class="diaLog__footer">
                <slot name="footer">123</slot>
            </div>

        </div>
        <div class="diaWrap" @click="cancelDia"></div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const props = defineProps(['titleText', 'isOpen'])
const emit = defineEmits(["click", 'cancel'])
const isOpenDia = () => {
    emit('click', props.isOpen)
    checkDiaOpen();
}
onMounted(() => {
    isOpenDia()
})
const checkDiaOpen = () => {
    if (props.isOpen) {
        document.body.style.overflow = 'hidden'

    }
    else {
        document.body.style.overflow = 'auto'
    }
}
const cancelDia = () => {
    emit('close')
}

</script>

<style lang="scss" scoped>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

.diaWrap {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000000C2;
    z-index: 0;
}

.diaLog {
    display: flex;
    flex-direction: column;

    background-color: theme('colors.btnBackground');
    border: 1px solid #ccc;
    min-height: 287px;
    border-radius: 20px;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;

    &__head {
        width: 358px;
        height: 73px;
        background-color: theme('colors.main');
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
    }

    &__title {
        @apply title1 flex flex-items-center flex-justify-center w-100% h-100%;
        color: theme('colors.textColor');
    }

    &__body {
        flex: 5;
        margin: 0 auto;
        width: 100%;
    }

    &__footer {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
    }


}
</style>