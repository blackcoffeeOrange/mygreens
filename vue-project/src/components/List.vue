<template>
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
</template>
<script setup>


// import axios from 'axios'
// import { reactive,ref,computed } from 'vue'
// import { onMounted } from 'vue'
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
// axios.get('http://localhost:8000/green')
//     .then(function (response) {
        
//         console.log("成功");
//         // handle success(axiosの処理が成功した場合に処理させたいことを記述)
//         plantList = response.data
//         for (let i = 0; i < plantList.length; i++) {

//             console.log(plantList[i]);
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
