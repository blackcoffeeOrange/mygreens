<template>
    <div class="wrap">
        
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
    </div>

</template>
<script setup>

</script>
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