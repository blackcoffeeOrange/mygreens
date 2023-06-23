<script setup>
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router';
import List_Component from '../components/List_Component.vue'
import Detail_Component from '../components/Detail_Component.vue'
const Router = useRouter()
const Route = useRoute()
const id = computed(() => parseInt(Route.params.id))
// const id = parseInt(Route.params.id)
// console.log("aaaaa")
</script>

<template>
    <div class="detail">

        <div class="d-flex">
            <List_Component />
            <div v-if="id != 0">
                <Detail_Component :id="id" />
            </div>
            <div v-else>
                <!-- パラメーターが0 -->
                なし
            </div>
        </div>
    </div>
</template>