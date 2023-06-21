<script setup>
import { useRouter, useRoute } from 'vue-router';
import { ref, reactive } from 'vue'
import { computed } from 'vue'
import { useStore } from 'vuex'
    import List_Component from '../components/List_Component.vue'
    import Detail_Component from '../components/Detail_Component.vue'
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
const add = () => {
  number.value++
}
</script>

<template>
  <div class="detail">

        <div class="d-flex">
            <List_Component/>
            <div>

                <p>{{ $route.params.id }}</p>
                <h1>{{ green.name }}</h1>
                <!-- <button @click="increment">
                  {{ state.count }}
                </button> -->
                <dl>
                  <div>
                    <dt>
                      id
                    </dt>
                    <dd>
                      {{ green.id }}
                    </dd>
                  </div>
                  <div>
                    <dt>
                      name
                    </dt>
                    <dd>
                      <input type="text" v-model="green.name">
                    </dd>
                  </div>
                  <!-- <div>
                    <dt>
                      number
                    </dt>
                    <dd>
                      <input type="text" v-model="number">
                      <button @click="add()">+1</button>
                    </dd>
                  </div> -->
                </dl>
            </div>
            <!-- <Detail_Component/> -->
        </div>
  </div>
</template>