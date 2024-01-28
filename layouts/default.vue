<template>
    <div>
<app-header/>
  <app-aside/>
  <!-- 如果不是用app.vue要用slot插槽 就會默認找layout-->
  <slot />
  <app-footer/>
    </div>
</template>