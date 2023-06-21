<script setup>
import { useRouter, useRoute } from 'vue-router';
import List_Component from '../components/List_Component.vue'
import Detail_Component from '../components/Detail_Component.vue'
const Router = useRouter()
const Route = useRoute()

const id = parseInt(Route.params.id)
</script>

<template>
    <div class="detail">

        <div class="d-flex">
            <List_Component />
            <p>

            </p>
            <div v-if="id !=0 ">
                <Detail_Component/>
            </div>
            <div v-else>
                {{ $route.params.id }}
                なし
            </div>
        </div>
    </div>
</template>