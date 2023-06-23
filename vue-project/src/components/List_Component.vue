<template>
    <div class="wrap">

        <!-- 名前だけで新規登録 -->
        <div>
            <label for="">name</label>
            <input type="text" v-model="newName">
        </div>
        <div>
            <button @click="save">追加</button>
        </div>

        <p>{{ count }}</p>
        <ul>
            <li v-for="green in greens" :key="green.id">
                <router-link :to="{ name: 'green', params: { id: green.id } }">
                    {{ green.id }},
                    {{ green.name }}
                </router-link>
            </li>
        </ul>

        <!-- <h3>{{ title }}({{ number }})</h3> -->

        <!-- API経由でデータを取得 -->
        <!-- <input type="text" v-model="newPlant">
        <button @click="addPlant()">
            追加
        </button>
        
        <ul v-if="plants.length > 0">
            <li v-for="(plant, i) in plants" v-bind:key="i">
                <router-link to="/detail">
                    {{ plant }}
            <span @click="remocePlant(i)" style="cursor: pointer;">X</span>
            <span class="icon chevron_right"></span>
        </router-link>  
    </li>
</ul>
    <p v-else>
        追加してください
    </p> -->
    </div>
</template>
<script setup>
import { computed, reactive, ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router';


const Router = useRouter()
const Route = useRoute()
const store = useStore()
const greens = computed(() => store.getters.getAll)
const count = computed(() => store.state.count) // typed as number

store.dispatch('getAll')

// console.log("greens",greens)
/**名前のみで作成 */
const newName = ref('')
// const newGreen = computed(() => {
//     name: name
// })
const newGreen = {
    // dataの中のtitleとcontent
    name: newName.value
}
// 保存
const save = () => {
    // console.log("newName", newName.value)
    // store.commit('save', newGreen.data )
    store.commit('save', {
        name: newName.value
    })
    // Router.push('/')
    newName.value = ''

    // store.commit('save', newGreen.value)
}
// const axios =
// process.env.VUE_APP_REST_SERVER === 'json-mock'
//      ? require('axios').create({ baseURL: 'http://localhost:3000' })
//     : require('axios').create()


// const state = reactive({ count: 0 })

// const title = ref('一覧');

// let plantList = ref([])
// const newPlant = ref('');
// const addPlant = () =>{
//     plantList.value.push(newPlant.value)
//     newPlant.value=''
// }

// const remocePlant = (index) => {
//     plantList.value.splice(index, 1)
// }

// // const updataTableData: async function () {
// //     const response = await axios.get('/api/spam')
// //     this.tableData = response.data
// // }
// // let plantlist: any = ref();
// // let listdata: any = []
// const number = computed(() => {
//     return plantList.length
// })
// const question = ref('')
// const answer = ref('Questions usually contain a question mark. ;-)')

// // watch 関数は ref を直接扱えます
// watch(question, async (newQuestion, oldQuestion) => {
//     if (newQuestion.indexOf('?') > -1) {
//         answer.value = 'Thinking...'
//         try {
//             const res = await fetch('https://yesno.wtf/api')
//             answer.value = (await res.json()).answer
//         } catch (error) {
//             answer.value = 'Error! Could not reach the API. ' + error
//         }
//     }
// })
// 
</script>
<style scoped>
.wrap {
    height: 100vh;
    padding: 15px;
    background-color: var(--bg);
    color: var(--color);
    min-width: 15vw;
    border-right: 1px solid #04b146;
}
</style>