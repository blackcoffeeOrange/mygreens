<script setup>
import { computed, reactive, ref, onMounted} from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute, } from 'vue-router';
import List_Component from '../components/List_Component.vue'
import Detail_Component from '../components/Detail_Component.vue'
const Router = useRouter()
const Route = useRoute()

// 親からid取得
const props = defineProps(['id'])
const store = useStore()
const green = computed(() => store.getters.getGreenById(props.id))
console.log(green)
</script>
<template>
    <div class="wrap">
        
        <!-- <div> -->

                    <p>{{ props.id }}</p>
                    <!-- <h1>{{ green.name }}</h1> -->
                    <!-- <button @click="increment">
                  {{ state.count }}
                </button> -->
                    <!-- <dl>
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
                </div> -->
    </div>

</template>
<style scoped>
.wrap {
    flex:1;
    height: 100vh;
    padding: 15px;
    background-color: var(--bg);
    color: var(--color);
    border-left:1px solid #04b146;
}

.nav_item {
    color: var(--color);
    display: block;
}
</style>