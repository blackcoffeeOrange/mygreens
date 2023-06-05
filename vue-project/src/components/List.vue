<script setup>
import axios from 'axios'
import { reactive,ref,computed } from 'vue'
const state = reactive({ count: 0 })

const title = ref('一覧');

const plantList = ref([])
const newPlant = ref('');
const addPlant = () =>{
    plantList.value.push(newPlant.value)
}
// let plantlist: any = ref();
// let listdata: any = []
// const number = computed(() => {
//     return plantlist.length
// })
// axios.get('http://localhost:8000/green')
//     .then(function (response) {
//         // handle success(axiosの処理が成功した場合に処理させたいことを記述)
//         plantlist = response.data
//         for (let i = 0; i < plantlist.length; i++) {

//             console.log(plantlist[i]);
//         }
//         // console.log(listdata);
//     })
//     .catch(function (error) {
//         // handle error(axiosの処理にエラーが発生した場合に処理させたいことを記述)
//         console.log(error);
//     })
//     .finally(function () {
//         // always executed(axiosの処理結果によらずいつも実行させたい処理を記述)
//         console.log("終了");
//     });

</script>

<template>
    <h3>{{ title }}({{ number }})</h3>
    <!-- API経由でデータを取得 -->
    <div class="list_component">
        <input type="text" v-model="newPlant">
        <button @click="addPlant()">
                追加
        </button>
        <ul>
            <li v-for="plant in plantlist">
                <router-link to="/detail">
                    {{ plant.id }}
                    <span class="icon chevron_right"></span>
                </router-link>
            </li>
            <li>
           
            </li>
        </ul>
        
    </div>
</template>