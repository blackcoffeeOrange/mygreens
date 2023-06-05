<script setup>
import { ref, reactive } from 'vue'

const name = ref('')
const state = reactive({ count: 0 })
function increment() {
  state.count++
}

const number = ref(0)
const add = () =>{
  number.value++
}
</script>

<template>
    <div class="detail">
            <h1>This is {{ name }} detail page</h1>
            <button @click="increment">
                {{ state.count }}
            </button>
            <dl>
              <div>
                <dt>
                  name
                </dt>
                <dd>
                  <input type="text" v-model="name">
                </dd>
              </div>
              <div>
                <dt>
                  number
                </dt>
                <dd>
                  <input type="text" v-model="number">
                  <button @click="add()">+1</button>
                </dd>
              </div>
            </dl>
        </div>
</template>