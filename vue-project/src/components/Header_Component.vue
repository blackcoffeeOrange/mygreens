<template>
    <div class="wrap">
        <ul>
            <li class="nav_item">
                <router-link :to="{ name: 'about' }">
                    About
                </router-link>
            </li>
        </ul>
        <div>
            <div class="sun icon"></div>
        </div>
    </div>
</template>
<script setup>
</script>
<style scoped>
.wrap {
    display: flex;
    justify-content: space-between;
    height: 40px;
    padding: 0 15px;
    background-color: var(--bg_transparent);
    color: var(--color);
    width: 100%;
    border-bottom: 1px solid #04b146;
}

ul {
    display: flex;
    height: 100%;
}

.nav_item a {
    color: #a5a5a5;
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    margin-left: 2em;
    position: relative;
}

.nav_item a:hover {
    color: var(--color);
}

.nav_item a::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 0;
    background-color: #04b146;
    transition: .4s;
}

.nav_item a:hover::after {
    width: 100%;
}

.nav_item:first-of-type {
    margin-left: 0;
}
</style>