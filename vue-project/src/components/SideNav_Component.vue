<template>
    <div class="wrap">
        <ul>
           <!-- <li class="nav_item">
                <router-link :to="{ name: 'home'}">
                    Home
                </router-link>
            </li> -->
           <li class="nav_item">
                <router-link :to="{ name: 'list'}">
                    list
                </router-link>
            </li>
           <li class="nav_item">
                <router-link :to="{ name: 'list'}">
                    new
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script setup>
import { RouterLink } from 'vue-router';


</script>
<style scoped>
    .wrap{
        height: 100vh;
        padding: 15px;
        background-color: var(--bg);
        color: var(--color);
        min-width: 50px;
    }
    .nav_item{
        color: var(--color);
        display: block;
    }
</style>