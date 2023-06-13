<script setup>
import { computed } from 'vue'
import {useStore} from 'vuex'
import List from '../components/List.vue'

const store = useStore()
const greens = computed(() => store.getters.GetAll)
// const axios =
// process.env.VUE_APP_REST_SERVER === 'json-mock'
//      ? require('axios').create({ baseURL: 'http://localhost:3000' })
//     : require('axios').create()
</script>
<template>
    <div class="list">
        <h2>{{ $route.params.id}}</h2>
    </div>
    <p>{{ greens }}</p>
      <List />
</template>
