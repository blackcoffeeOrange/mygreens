<template>
    <div class="new">
        <h1>新しく登録する</h1>

        <dl>

            <div>
                <dt>
                    name
                </dt>
                <dd>
                    <input type="text" v-model="name">
                </dd>
            </div>
        </dl>

        <button type="submit" @click="save">新規作成</button>
    </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
import { useStore } from 'vuex'
const store = useStore()

const name = ref('')
// 保存
const save = () => {
    store.commit('save', name)
}
</script>