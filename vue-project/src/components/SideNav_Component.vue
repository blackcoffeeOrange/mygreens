<template>
    <div class="wrap">
        <ul>
            <li class="nav_item">
                <router-link :to="{ name: 'green', params: { id: '0' } }">
                    <img src=".\icons\list.svg" alt="一覧" class="icon">
                </router-link>
            </li>
            <li class="nav_item">
                <router-link :to="{ name: 'new' }">
                    <img src=".\icons\button_add.svg" alt="追加" class="icon">
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script setup>
import { RouterLink } from 'vue-router';


</script>
<style scoped>
.wrap {
    height: 100vh;
    background-color: var(--bg_transparent);
    color: var(--color);
    min-width: 50px;
    border-right: 1px solid #04b146;
}

.nav_item {
    display: block;
}

.nav_item a {
    color: var(--color);
    display: block;
    padding: 15px;
}

.icon {
    width: 2rem;
}
</style>