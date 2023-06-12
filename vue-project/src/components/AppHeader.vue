<script setup lang="ts">
// colorというpropsを用意してね
// 親からこのコンポーネントに値を渡せる
    defineProps(['color'])
</script>
<template>
    <header>
        <h1 :style="{'color': color }">
            <slot>No title</slot>
            Todoツール
        </h1>
    </header>
</template>