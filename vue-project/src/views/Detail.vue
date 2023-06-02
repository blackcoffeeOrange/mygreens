<script setup>
import { reactive } from 'vue'

const state = reactive({ count: 0 })

function increment() {
  state.count++
}
</script>

<template>
    <div class="detail">
            <h1>This is detail page</h1>
            <button @click="increment">
                {{ state.count }}
            </button>
        </div>
</template>