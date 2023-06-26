<script setup>
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router';
import List_Component from '../components/List_Component.vue'
import Detail_Component from '../components/Detail_Component.vue'
const Router = useRouter()
const Route = useRoute()
const id = computed(() => Route.params.id)
// const id = parseInt(Route.params.id)

</script>

<template>
    <div class="detail">

        <div class="d-flex">

            <List_Component />
            <Detail_Component v-if="id" :id="id" />
            <div v-else>
                <!-- パラメーターがない場合 -->
            </div>
        </div>
    </div>
</template>