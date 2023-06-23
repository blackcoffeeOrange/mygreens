<script setup>
import { useRoute } from 'vue-router';
import List_Component from '../components/List_Component.vue'
import Detail_Component from '../components/Detail_Component.vue'
const Route = useRoute()

// パラメータのidからデータ取得
const id = parseInt(Route.params.id)

</script>

<template>
  <div class="wrap">
    <div class="d-flex">
      詳細
      <!-- <List_Component />
      <Detail_Component /> -->
    </div>
  </div>
</template>