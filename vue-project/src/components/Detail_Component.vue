<script setup>
import { computed, watch, reactive, ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute, } from 'vue-router';
const Router = useRouter()
const Route = useRoute()

// propsからid取得
const props = defineProps({
  id: {
    default: "1"
  }
})
let id = props.id
const store = useStore()
// propsの変更を監視
watch(props, async (newProps, oldProps) => {
  id = newProps.id
  store.dispatch('getGreenById', { id: id })
})
store.dispatch('getGreenById', { id: id })
const green = computed(() => store.getters.getGreen)



// form

// 	• 名前
// 	• 植え替え季節
// 	• ハーディネスゾーンナンバー
// 	• 別名
// 	• 値段
// 	• 品名
// 	• 自生地
// 	• 花色
// 	• 学名
// 	• 属名
// 	• 科名
// 	• 交配系統
// 	• 開花期
// 	• 生産地
// 	• 生産者
// 	• カテゴリ

// 	• 枯れた
// 購入日
const name = ref(green.value.name)
const age = ref(green.value.age)
const date_of_purchase = ref('')
// const age = ref(green.value.age)
// const age = ref(green.value.age)
// const age = ref(green.value.age)
// const age = ref(green.value.age)
// const age = ref(green.value.age)

</script>
<template>
  <div class="wrap">
    <p>{{ green.id }}</p>
    <dl>
      <div class="form_group">
        <dt>
          <label for="green_name">name</label>
        </dt>
        <dd>
          <input type="text" id="green_name" v-model="green.name">
        </dd>
      </div>
      <div class="form_group">
        <dt>
          <label for="green_kinds">kinds</label>
        </dt>
        <dd>
          <select id="green_kinds">
            <option value="">種類１</option>
            <option value="">種類２</option>
          </select>
        </dd>
      </div>
      <div class="form_group">
        <dt>
          <label for="green_age">age</label>
        </dt>
        <dd>
          <input type="text" id="green_age" v-model="green.age">
        </dd>
      </div>
      <div class="form_group">
        <dt>
          <label for="date_of_purchase">buy day</label>
        </dt>
        <dd>
          <input type="text" id="date_of_purchase" v-model="date_of_purchase">
        </dd>
      </div>
    </dl>

    <button>save</button>
    <!-- <h1>{{ green.name }}</h1> -->
    <!-- <h1>{{ green.age }}</h1> -->
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
  width: 100%;
  height: 100vh;
  background-color: var(--bg);
  color: var(--color);
  border-left: 1px solid #04b146;
  font-size: .8rem;
  padding: 1rem;
}

.nav_item {
  color: var(--color);
  display: block;
}

.form_group {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #505452;
  /* grid-column: 20% 80%; */
}

dt {
  width: 10%;
  display: inline-block;
  padding: .5em;
}

dd {
  width: 90%;
  height: 100%;
  display: inline-block;
  margin-bottom: 0;
}

input {
  padding: .5em;
  height: 100%;
  display: block;
  background-color: var(--bg);
  color: var(--color);
  width: 100%;
  border-radius: 0;
  border: none;
  padding-top: 1rem;
}
</style>