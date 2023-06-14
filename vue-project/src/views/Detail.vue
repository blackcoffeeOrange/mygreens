<script setup>
import { useRouter, useRoute} from 'vue-router';
import { ref, reactive } from 'vue'
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const Router = useRouter()
const Route = useRoute()

// パラメータのidからデータ取得
const id = parseInt(Route.params.id)
const green = computed(() => store.getters.getGreenById(id))



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
      <p>{{ $route.params.id }}</p>
            <h1>This is {{ green.name }} detail page</h1>
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