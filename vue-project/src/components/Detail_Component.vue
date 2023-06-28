<script setup>
import { computed, watch, reactive, ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute, } from 'vue-router';
const Router = useRouter()
const Route = useRoute()

// propsからid取得
// const props = defineProps('id')
const props = defineProps({
  id: {
    default: 0
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

/**
 * form
 */

/**
 * 呼び名
 * name
 */
const name = ref(green.value.name)
/**
 * 品種
 * breed
 */
const breed = ref(green.value.breed)
/**
 * 生まれてからの年数
 * age
 */
const age = ref(green.value.age)
/**
 * 花色
 * flower_color
 */
const flower_color = ref(green.value.flower_color)
/**
 * 購入価格
 * price
 */
const price = ref(green.value.price)
/**
 * 購入日
 * date_of_purchase
 */
const date_of_purchase = ref(green.value.date_of_purchase)
/**
 * 開花時期
 * flowering_period
 */
const flowering_period = ref(green.value.flowering_period)
/**
 * 生産者
 * producer
 */
const producer = ref(green.value.producer)
/**
 * 生産地
 * production_area
 */
const production_area = ref(green.value.production_area)
/**
 * 成長期
 * growth_period
 */
const growth_period = ref(green.value.growth_period)
/**
 * 休眠期
 * dormant_period
 */
const dormant_period = ref(green.value.dormant_period)
/**
 * 交配系統
 * crossbreeding
 */
const crossbreeding = ref(green.value.crossbreeding)
/**
 * 枯れた数
 * number_of_withered
 */
let count
let number_of_withered = ref(green.value.number_of_withered)
const withered_count = () => {
  console.log(number_of_withered.value)
  // count = number_of_withered++
  // console.log(count)
  // number_of_withered = count.toString()
}
</script>
<template>
  <div class="wrap">
    <div>

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
            <label for="green_kinds">種類</label>
          </dt>
          <dd>
            <input type="text" id="green_name" v-model="green.name">
            <!-- <select id="green_kinds">
            <option value="">種類１</option>
            <option value="">種類２</option>
          </select> -->
          </dd>
        </div>

        <div class="form_group">
          <dt>
            <label for="green_kinds">breed</label>
          </dt>
          <dd>
            <input type="text" id="breed" v-model="green.breed">
          </dd>
        </div>
        <div class="form_group">
          <dt>
            <label for="age">age</label>
          </dt>
          <dd>
            <input type="text" id="age" v-model="green.age">
          </dd>
        </div>
        <div class="form_group">
          <dt>
            <label for="flower_color">花色</label>
          </dt>
          <dd>
            <input type="text" id="flower_color" v-model="green.flower_color">
          </dd>
        </div>
        <div class="form_group">
          <dt>
            <label for="price">購入価格</label>
          </dt>
          <dd>
            <input type="text" id="price" v-model="green.price">
          </dd>
        </div>
        <div class="form_group">
          <dt>
            <label for="date_of_purchase">購入日</label>
          </dt>
          <dd>
            <input type="text" id="date_of_purchase" v-model="green.date_of_purchase">
          </dd>
        </div>
        <div class="form_group">
          <dt>
            <label for="flowering_period">開花時期</label>
          </dt>
          <dd>
            <input type="text" id="flowering_period" v-model="green.flowering_period">
          </dd>
        </div>
        <div class="form_group">
          <dt>
            <label for="producer">生産者</label>
          </dt>
          <dd>
            <input type="text" id="producer" v-model="green.producer">
          </dd>
        </div>
        <div class="form_group">
          <dt>
            <label for="production_area">生産地</label>
          </dt>
          <dd>
            <input type="text" id="production_area" v-model="green.production_area">
          </dd>
        </div>
        <div class="form_group">
          <dt>
            <label for="growth_period">成長期</label>
          </dt>
          <dd>
            <input type="text" id="growth_period" v-model="green.growth_period">
          </dd>
        </div>
        <div class="form_group">
          <dt>
            <label for="dormant_period">休眠期</label>
          </dt>
          <dd>
            <input type="text" id="dormant_period" v-model="green.dormant_period">
          </dd>
        </div>
        <div class="form_group">
          <dt>
            <label for="crossbreeding">交配系統</label>
          </dt>
          <dd>
            <input type="text" id="crossbreeding" v-model="green.crossbreeding">
          </dd>
        </div>
        <div class="form_group">
          <dt>
            <label for="number_of_withered">枯れた数</label>
          </dt>
          <dd class="d-flex">

            <input type="text" class="w-50" id="number_of_withered" v-model="green.number_of_withered">
            <!-- <input type="text" v-model="number"> -->
            <button @click="withered_count()">+1</button>
          </dd>
        </div>

      </dl>

      <button>update</button>

    </div>

  </div>
</template>
<style scoped>
.wrap {
  width: 100%;
  height: 100vh;
  background-color: var(--bg_transparent);
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
  background-color: var(--bg_transparent);
  color: var(--color);
  width: 100%;
  border-radius: 0;
  border: none;
  padding-top: 1rem;
}
</style>