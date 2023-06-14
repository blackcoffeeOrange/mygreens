<script setup>
import { computed } from 'vue'
import {useStore} from 'vuex'
import List from '../components/List.vue'

const store = useStore()
const greens = computed(() => store.getters.getAll)
const count = computed(() => store.state.count) // typed as number
// const axios =
// process.env.VUE_APP_REST_SERVER === 'json-mock'
//      ? require('axios').create({ baseURL: 'http://localhost:3000' })
//     : require('axios').create()
</script>
<template>
   
    <p>{{ count }}</p>
   <ul>
        <li v-for="green in greens" :key="green.id">
            <router-link :to="{name: 'detail', params:{ id: green.id } }">
                {{ green.id }},
                {{ green.name }}
            </router-link>
        </li>
   </ul>
</template>
