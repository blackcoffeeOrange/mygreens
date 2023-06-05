<script setup lang="ts">
import axios from 'axios'
import { computed } from 'vue'
import { ref } from 'vue';
import { reactive } from 'vue'
const state = reactive({ count: 0 })

// const text = ref('');
let listdata: any = ref();
// let listdata: any = []

axios.get('http://localhost:8000/green')
    .then(function (response) {
        // handle success(axiosの処理が成功した場合に処理させたいことを記述)
        listdata = response.data
        for (let i = 0; i < listdata.length; i++) {

            console.log(listdata[i]);
        }
        // console.log(listdata);
    })
    .catch(function (error) {
        // handle error(axiosの処理にエラーが発生した場合に処理させたいことを記述)
        console.log(error);
    })
    .finally(function () {
        // always executed(axiosの処理結果によらずいつも実行させたい処理を記述)
        console.log("終了");
    });

</script>

<template>
    <!-- API経由でデータを取得 -->
    <div class="list_component">
        <ul>
            <li v-for="item in listdata">
                <router-link to="/detail">
                    {{ item.name }}
                    <span class="icon chevron_right"></span>
                </router-link>
            </li>
            <li>
                <router-link to="/detail">新規作成</router-link>
            </li>
        </ul>
    </div>
</template>